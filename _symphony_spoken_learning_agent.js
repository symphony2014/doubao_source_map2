(function () {
  "use strict";

  function getBaseApi() {
    var api = globalThis.self && globalThis.self.SymphonyDoubaoSend;
    if (!api) {
      throw new Error("SymphonyDoubaoSend is unavailable. Load _symphony.js first.");
    }
    if (typeof api.sendMessage !== "function") {
      throw new Error("SymphonyDoubaoSend.sendMessage is unavailable.");
    }
    if (typeof api.createPcmAsrSession !== "function") {
      throw new Error("SymphonyDoubaoSend.createPcmAsrSession is unavailable.");
    }
    return api;
  }

  function base64ToUint8Array(base64) {
    var binary = atob(base64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function writeWebRtcPcmChunk(asrSession, data) {
    if (!data) {
      return false;
    }
    if (asrSession && typeof asrSession.isClosed === "function" && asrSession.isClosed()) {
      console.log("[_symphony_spoken_learning][webrtc] drop pcm because ASR is closed");
      return true;
    }
    if (data instanceof ArrayBuffer) {
      console.log("[_symphony_spoken_learning][webrtc] recv raw pcm ArrayBuffer bytes:", data.byteLength);
      try {
        asrSession.write(data);
      } catch (err) {
        console.warn("[_symphony_spoken_learning] dropped WebRTC PCM ArrayBuffer:", err);
      }
      return true;
    }
    if (ArrayBuffer.isView(data)) {
      console.log("[_symphony_spoken_learning][webrtc] recv raw pcm view bytes:", data.byteLength);
      try {
        asrSession.write(data);
      } catch (err) {
        console.warn("[_symphony_spoken_learning] dropped WebRTC PCM view:", err);
      }
      return true;
    }
    if (typeof Blob !== "undefined" && data instanceof Blob) {
      console.log("[_symphony_spoken_learning][webrtc] recv raw pcm Blob bytes:", data.size);
      data.arrayBuffer().then(function (buffer) {
        if (asrSession && typeof asrSession.isClosed === "function" && asrSession.isClosed()) {
          console.log("[_symphony_spoken_learning][webrtc] drop blob pcm because ASR is closed");
          return;
        }
        try {
          asrSession.write(buffer);
        } catch (err) {
          console.warn("[_symphony_spoken_learning] dropped WebRTC PCM Blob:", err);
        }
      }).catch(function (err) {
        console.warn("[_symphony_spoken_learning] failed to read WebRTC PCM Blob:", err);
      });
      return true;
    }
    return false;
  }

  function describeWebRtcMessageData(data) {
    if (data instanceof ArrayBuffer) {
      return {
        kind: "ArrayBuffer",
        bytes: data.byteLength
      };
    }
    if (ArrayBuffer.isView(data)) {
      return {
        kind: "ArrayBufferView",
        bytes: data.byteLength
      };
    }
    if (typeof Blob !== "undefined" && data instanceof Blob) {
      return {
        kind: "Blob",
        bytes: data.size,
        type: data.type
      };
    }
    return {
      kind: typeof data,
      bytes: typeof data === "string" ? data.length : 0
    };
  }

  function tryParseWebRtcControlMessage(data) {
    if (typeof data === "string") {
      try {
        return JSON.parse(data);
      } catch (err) {
        return null;
      }
    }
    if (data instanceof ArrayBuffer) {
      try {
        var text = new TextDecoder().decode(new Uint8Array(data));
        if (/^\s*\{/.test(text)) {
          return JSON.parse(text);
        }
      } catch (err) {}
    }
    if (ArrayBuffer.isView(data)) {
      try {
        var viewText = new TextDecoder().decode(data);
        if (/^\s*\{/.test(viewText)) {
          return JSON.parse(viewText);
        }
      } catch (err) {}
    }
    return null;
  }

  function formatTimestamp(timestampMs) {
    var totalSeconds = Math.max(0, Math.floor(Number(timestampMs || 0) / 1000));
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor(totalSeconds % 3600 / 60);
    var seconds = totalSeconds % 60;
    function pad(value) {
      return value < 10 ? "0" + value : String(value);
    }
    return (hours ? pad(hours) + ":" : "") + pad(minutes) + ":" + pad(seconds);
  }

  function clampText(text, maxLength) {
    text = String(text || "").trim();
    maxLength = maxLength || 12000;
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, 4000) + "\n...[middle omitted]...\n" + text.slice(-(maxLength - 4022));
  }

  function buildVideoQueryPrompt(videoInfo, query, userQuestion) {
    query = query || {};
    userQuestion = String(userQuestion || "").trim();
    var currentSubtitle = String(query.currentSubtitle || "").trim();
    return [
      "You are answering a user's spoken question about the video they are currently watching.",
      "Use the attached video_info file as the source of video metadata, description, transcript, and any other video context.",
      "Use the current playback position below to focus on the relevant moment.",
      "Answer directly and concisely. If the spoken question is incomplete, infer the likely intent from the current subtitle and attached video context. If the context is insufficient, say what is missing.",
      "Current timestamp: " + formatTimestamp(query.timestampMs) + " (" + (query.timestampMs || 0) + " ms)",
      "Current subtitle near timestamp: " + (currentSubtitle || "Unknown"),
      "",
      "User spoken question:",
      userQuestion || "(No clear spoken question was recognized.)",
      "",
      "The full video transcript/subtitle context is attached as a text file. Use it when needed, but prioritize the current timestamp and subtitle for time-sensitive questions."
    ].join("\n");
  }

  function createVideoTranscriptFileContent(videoInfo) {
    videoInfo = videoInfo || {};
    try {
      return JSON.stringify(videoInfo, null, 2);
    } catch (err) {
      return String(videoInfo);
    }
  }

  function parseWebRtcDescription(description, defaultType) {
    if (typeof description !== "string") {
      return description;
    }
    try {
      return JSON.parse(description);
    } catch (parseError) {
      var trimmed = description.trim();
      if (trimmed.indexOf("v=0") === 0) {
        return {
          type: defaultType || "offer",
          sdp: description
        };
      }

      var typeMatch = trimmed.match(/"type"\s*:\s*"([^"]+)"/);
      var sdpKeyIndex = trimmed.indexOf("\"sdp\"");
      if (sdpKeyIndex >= 0) {
        var colonIndex = trimmed.indexOf(":", sdpKeyIndex);
        var firstQuoteIndex = trimmed.indexOf("\"", colonIndex + 1);
        var objectEndIndex = trimmed.lastIndexOf("}");
        var lastQuoteIndex = objectEndIndex >= 0 ? trimmed.lastIndexOf("\"", objectEndIndex - 1) : trimmed.lastIndexOf("\"");
        if (firstQuoteIndex >= 0 && lastQuoteIndex > firstQuoteIndex) {
          return {
            type: typeMatch && typeMatch[1] || defaultType || "offer",
            sdp: trimmed.slice(firstQuoteIndex + 1, lastQuoteIndex).replace(/\\r/g, "\r").replace(/\\n/g, "\n")
          };
        }
      }

      throw parseError;
    }
  }

  class SpokenLearningAgentSession {
    constructor(offer, options) {
      if (!offer) {
        throw new Error("WebRTC offer is required");
      }
      this.offer = offer;
      this.options = options || {};
      this.baseApi = getBaseApi();
      this.peer = new RTCPeerConnection(this.options.rtcConfiguration || {});
      this.asrSession = null;
      this.dataChannel = null;
      this.videoInfo = null;
      this.videoInfoAttachment = null;
      this.videoInfoAttachmentPromise = null;
      this.queryInFlight = false;
      this.iceComplete = this.createIceCompletePromise();
      this.peer.ondatachannel = this.handleDataChannel.bind(this);
    }

    createIceCompletePromise() {
      var self = this;
      return new Promise(function (resolve) {
        self.peer.onicecandidate = function (event) {
          if (!event.candidate) {
            resolve();
          }
        };
      });
    }

    async createAnswer() {
      await this.peer.setRemoteDescription(parseWebRtcDescription(this.offer, "offer"));
      console.log("[_symphony_spoken_learning][webrtc] remote offer applied");
      var answer = await this.peer.createAnswer();
      await this.peer.setLocalDescription(answer);
      if (this.options.waitForIce !== false) {
        await this.iceComplete;
      }
      console.log("[_symphony_spoken_learning][webrtc] local answer ready:", this.peer.localDescription);
      return this.toPublicSession(answer);
    }

    toPublicSession(answer) {
      var self = this;
      return {
        answer: this.peer.localDescription ? this.peer.localDescription.toJSON() : answer,
        peer: this.peer,
        session: this,
        getDataChannel: function () {
          return self.dataChannel;
        },
        getAsrSession: function () {
          return self.asrSession;
        },
        close: function () {
          self.close();
        }
      };
    }

    close() {
      if (this.asrSession) {
        this.asrSession.close();
      }
      this.peer.close();
    }

    sendDataChannelJson(payload) {
      if (!this.dataChannel || this.dataChannel.readyState !== "open") {
        console.log("[_symphony_spoken_learning][webrtc] skip send, datachannel not open:", payload);
        return false;
      }
      try {
        console.log("[_symphony_spoken_learning][webrtc] send:", payload);
        this.dataChannel.send(JSON.stringify(payload));
        return true;
      } catch (err) {
        try {
          this.dataChannel.send(JSON.stringify({
            type: payload && payload.type || "message",
            text: payload && payload.text,
            message: payload && payload.message
          }));
          return true;
        } catch (fallbackErr) {
          return false;
        }
      }
    }

    ensureAsrSession() {
      var self = this;
      if (this.asrSession && typeof this.asrSession.isClosed === "function" && this.asrSession.isClosed()) {
        this.asrSession = null;
      }
      if (!this.asrSession) {
        var session = this.baseApi.createPcmAsrSession(Object.assign({}, this.options.asrOptions || this.options, {
          onText: function (text, rawMessage) {
            self.sendDataChannelJson({
              type: "audio_to_text",
              text: text,
              raw: rawMessage
            });
            if (typeof self.options.onText === "function") {
              self.options.onText(text, rawMessage);
            }
            if (typeof window !== "undefined" && typeof window._symphonyReceiveAsrText === "function") {
              window._symphonyReceiveAsrText(text, rawMessage);
            }
          },
          onMessage: function (message, event) {
            if (typeof self.options.onMessage === "function") {
              self.options.onMessage(message, event);
            }
          },
          onError: function (event) {
            self.sendDataChannelJson({
              type: "error",
              message: "ASR websocket error"
            });
            if (typeof self.options.onError === "function") {
              self.options.onError(event);
            }
          }
        }));
        this.asrSession = session;
        session.done.then(function (text) {
          self.sendDataChannelJson({
            type: "done",
            text: text
          });
        }).catch(function (err) {
          self.sendDataChannelJson({
            type: "error",
            message: err && err.message ? err.message : String(err)
          });
        }).then(function () {
          if (self.asrSession === session) {
            self.asrSession = null;
          }
        });
      }
      return this.asrSession;
    }

    async handleVideoQuery(query) {
      if (this.queryInFlight) {
        this.sendDataChannelJson({
          type: "response_error",
          message: "A query is already in progress"
        });
        return;
      }
      this.queryInFlight = true;
      var prompt = buildVideoQueryPrompt(this.videoInfo, query, query && query.question);
      console.log("[_symphony_spoken_learning][webrtc] query prompt:", prompt);
      try {
        var videoInfoAttachment = await this.ensureVideoInfoAttachment();
        var result = await this.baseApi.sendMessage(prompt, Object.assign({
          abilityType: 16,
          abilityParams: {},
          attachments: videoInfoAttachment && videoInfoAttachment.attachments,
          attachmentStates: videoInfoAttachment && videoInfoAttachment.attachmentStates,
          attachmentKeys: videoInfoAttachment && videoInfoAttachment.attachmentKeys,
          streamMode: "final",
          reportParams: {
            scene: "webrtc_video_query",
            send_source: "webrtc"
          }
        }, this.options.sendMessageOptions || {}));
        this.sendDataChannelJson({
          type: "query_response",
          text: result && result.text || ""
        });
      } catch (err) {
        console.error("[_symphony_spoken_learning][webrtc] query failed:", err);
        this.sendDataChannelJson({
          type: "response_error",
          message: err && err.message ? err.message : String(err)
        });
      } finally {
        this.queryInFlight = false;
      }
    }

    async ensureVideoInfoAttachment() {
      if (this.videoInfoAttachment) {
        return this.videoInfoAttachment;
      }
      if (this.videoInfoAttachmentPromise) {
        return await this.videoInfoAttachmentPromise;
      }
      if (!this.videoInfo) {
        return null;
      }
      var self = this;
      this.videoInfoAttachmentPromise = this.baseApi.uploadStringAsFile({
        fileName: "video_info.json",
        fileType: "application/json",
        fileContent: createVideoTranscriptFileContent(this.videoInfo)
      }).then(function (attachment) {
        self.videoInfoAttachment = attachment;
        return attachment;
      }).finally(function () {
        self.videoInfoAttachmentPromise = null;
      });
      return await this.videoInfoAttachmentPromise;
    }

    handleDataChannel(event) {
      this.dataChannel = event.channel;
      this.dataChannel.binaryType = "arraybuffer";
      console.log("[_symphony_spoken_learning][webrtc] datachannel received:", {
        label: this.dataChannel.label,
        readyState: this.dataChannel.readyState
      });
      this.dataChannel.onopen = this.handleDataChannelOpen.bind(this);
      this.dataChannel.onmessage = this.handleDataChannelMessage.bind(this);
      this.dataChannel.onclose = this.handleDataChannelClose.bind(this);
    }

    handleDataChannelOpen() {
      console.log("[_symphony_spoken_learning][webrtc] datachannel open:", this.dataChannel.label);
      if (typeof this.options.onDataChannelOpen === "function") {
        this.options.onDataChannelOpen(this.dataChannel);
      }
    }

    handleDataChannelMessage(messageEvent) {
      console.log("[_symphony_spoken_learning][webrtc] recv message:", describeWebRtcMessageData(messageEvent.data));
      var payload = tryParseWebRtcControlMessage(messageEvent.data);
      if (!payload && writeWebRtcPcmChunk(this.ensureAsrSession(), messageEvent.data)) {
        return;
      }
      if (!payload) {
        console.warn("[_symphony_spoken_learning] invalid WebRTC message:", messageEvent.data);
        return;
      }
      if (payload && payload.type === "pcm" && payload.data) {
        this.handleBase64Pcm(payload);
        return;
      }
      if (payload && payload.type === "video_info") {
        this.videoInfo = payload;
        this.videoInfoAttachment = null;
        this.videoInfoAttachmentPromise = null;
        console.log("[_symphony_spoken_learning][webrtc] recv video_info:", payload);
        this.ensureVideoInfoAttachment().catch(function (err) {
          console.error("[_symphony_spoken_learning][webrtc] video_info upload failed:", err);
        });
        return;
      }
      if (payload && payload.type === "query") {
        console.log("[_symphony_spoken_learning][webrtc] recv query:", payload);
        this.handleVideoQuery(payload);
        return;
      }
      if (payload && payload.type === "finish") {
        console.log("[_symphony_spoken_learning][webrtc] recv finish control");
        if (this.asrSession && (!this.asrSession.isClosed || !this.asrSession.isClosed())) {
          this.asrSession.finish();
        }
      }
    }

    handleBase64Pcm(payload) {
      var session = this.ensureAsrSession();
      if (!session.isClosed || !session.isClosed()) {
        try {
          console.log("[_symphony_spoken_learning][webrtc] recv base64 pcm chars:", payload.data.length);
          session.write(base64ToUint8Array(payload.data));
        } catch (err) {
          console.warn("[_symphony_spoken_learning] dropped WebRTC base64 PCM:", err);
        }
      }
    }

    handleDataChannelClose() {
      console.log("[_symphony_spoken_learning][webrtc] datachannel close:", this.dataChannel.label);
      if (this.asrSession && (!this.asrSession.isClosed || !this.asrSession.isClosed())) {
        this.asrSession.finish();
      }
      if (typeof this.options.onDataChannelClose === "function") {
        this.options.onDataChannelClose(this.dataChannel);
      }
    }
  }

  async function createPcmAsrWebRtcAnswer(offer, options) {
    var session = new SpokenLearningAgentSession(offer, options || {});
    return await session.createAnswer();
  }

  var api = {
    SpokenLearningAgentSession: SpokenLearningAgentSession,
    createPcmAsrWebRtcAnswer: createPcmAsrWebRtcAnswer,
    buildVideoQueryPrompt: buildVideoQueryPrompt
  };

  globalThis.self.SymphonySpokenLearningAgent = api;
  if (globalThis.self.SymphonyDoubaoSend && !globalThis.self.SymphonyDoubaoSend.createPcmAsrWebRtcAnswer) {
    globalThis.self.SymphonyDoubaoSend.createPcmAsrWebRtcAnswer = createPcmAsrWebRtcAnswer;
  }
})();

// SymphonyDoubaoSend usage notes
//
// This bundle exposes a global singleton in the Doubao web app context:
//   self.SymphonyDoubaoSend
//
// Basic send:
//   const result = await SymphonyDoubaoSend.sendMessage("hello");
//   console.log(result.text);
//
// sendMessage(text, options) returns:
//   {
//     session,  // underlying chatIMService session
//     chatId,   // resolved chat id
//     text,     // final assistant text
//     message   // final assistant stream message
//   }
//
// Current chat id is resolved automatically from app state or /chat/:id.
// To target a specific chat:
//   await SymphonyDoubaoSend.sendMessage("Summarize this chat", { chatId: "chat_id" });
//
// Stream callbacks:
//   await SymphonyDoubaoSend.sendMessage("Write a short poem", {
//     streamMode: "delta",
//     onDelta(delta, snapshot, message) { console.log(delta); },
//     onDone(text, message) { console.log(text); },
//     onError(error) { console.error(error); }
//   });
//
// Attach local paths if the runtime supports input.setFileChooserPaths:
//   await SymphonyDoubaoSend.sendMessage("Analyze this file", {
//     paths: ["C:\\tmp\\notes.txt"]
//   });
//
// Send string content as an uploaded file:
//   await SymphonyDoubaoSend.sendMessage("Use the attached context", {
//     stringAsFile: true,
//     fileContent: "Some long context here",
//     fileName: "context.txt",
//     fileType: "text/plain"
//   });
//
// Other helpers:
//   SymphonyDoubaoSend.getCurrentChatId()
//   await SymphonyDoubaoSend.waitForChatId()
//   await SymphonyDoubaoSend.uploadStringAsFile({ fileContent: "abc", fileName: "a.txt" })
//   SymphonyDoubaoSend.createFilesFromStringContent({ stringAsFile: true, fileContent: "abc" })
//   const pcmResult = await SymphonyDoubaoSend.synthesizePcm("Read this aloud")
//   const tts = SymphonyDoubaoSend.createPcmTtsSession({ onPcmChunk(chunk) {} })
//   tts.write("Text can be streamed in chunks")
//   const pcmResult = await tts.finish()
//
// This only works inside the loaded Doubao web app because it depends on
// bundled require(...) modules and chatIMService.
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([["_symphony"], {
  "__symphony__/doubao-send": function (module, exports, require) {
    "use strict";

    var lazyDeps;

    function getDeps() {
      if (!lazyDeps) {
        lazyDeps = {
          uuidGeneratorUtil: require("uuid-generator-util"),
          conversationMessageUtils: require("conversation-message-utils"),
          conversationMessageUtils1: require("conversation-message-utils_1"),
          chatTextBlockFactory: require("chat-text-block-factory"),
          referenceBlockTransformer: require("reference-block-transformer"),
          attachmentToMessageBlockTransformer: require("attachment-to-message-block-transformer"),
          attachmentUploadStoreHooks: require("attachment-upload-store-hooks"),
          skillConstantsEnum: require("skill-constants-enum"),
          chatConversationSelectors1: require("chat-conversation-selectors_1"),
          chatConversationSelectors2: require("chat-conversation-selectors_2"),
          chatFeedStoreFactory: require("chat-feed-store-factory"),
          chatSkillPinTypeDeterminer: require("chat-skill-pin-type-determiner"),
          chatConversationBotId: require("chat-conversation-bot-id"),
          securityVerifySdkLoader: require("security-verify-sdk-loader"),
          chatIocServiceLoaderHook: require("chat-ioc-service-loader-hook"),
          chatStoreManager: require("chat-store-manager"),
          chatMessageStoreFactory: require("chat-message-store-factory")
        };
      }
      return lazyDeps;
    }

    function clone(value) {
      return value ? Object.assign({}, value) : {};
    }

    function normalizeArray(value) {
      return Array.isArray(value) ? value : [];
    }

    function normalizePathArray(value) {
      if (Array.isArray(value)) {
        return value.filter(function (item) {
          return typeof item === "string" && item.trim();
        });
      }
      if (typeof value === "string" && value.trim()) {
        return [value];
      }
      return [];
    }

    function normalizeGeneratedFileSpecs(options) {
      if (!options || !options.stringAsFile) {
        return [];
      }
      var content = options.fileContent;
      if (content === undefined || content === null) {
        return [];
      }
      var defaultName = options.fileName || "context.txt";
      var defaultType = options.fileType || "text/plain";
      if (Array.isArray(content)) {
        return content.map(function (item, index) {
          if (item && typeof item === "object" && (item.content !== undefined || item.text !== undefined)) {
            return {
              content: String(item.content !== undefined ? item.content : item.text),
              name: item.name || item.fileName || defaultName.replace(/(\.[^.]*)?$/, "_" + (index + 1) + "$1"),
              type: item.type || item.fileType || defaultType
            };
          }
          return {
            content: String(item),
            name: defaultName.replace(/(\.[^.]*)?$/, "_" + (index + 1) + "$1"),
            type: defaultType
          };
        });
      }
      if (typeof content === "object" && (content.content !== undefined || content.text !== undefined)) {
        return [{
          content: String(content.content !== undefined ? content.content : content.text),
          name: content.name || content.fileName || defaultName,
          type: content.type || content.fileType || defaultType
        }];
      }
      return [{
        content: String(content),
        name: defaultName,
        type: defaultType
      }];
    }

    function waitForCondition(check, options) {
      options = options || {};
      var timeoutMs = Number(options.timeoutMs || 120000);
      var intervalMs = Number(options.intervalMs || 100);
      var timeoutMessage = options.timeoutMessage || "Timed out waiting for condition";
      return new Promise(function (resolve, reject) {
        var start = Date.now();
        (function poll() {
          try {
            var result = check();
            if (result) {
              resolve(result);
              return;
            }
          } catch (error) {
            reject(error);
            return;
          }
          if (Date.now() - start >= timeoutMs) {
            reject(new Error(timeoutMessage));
            return;
          }
          setTimeout(poll, intervalMs);
        })();
      });
    }

    function getChatIdFromLocation() {
      try {
        var match = String(window.location.pathname || "").match(/\/chat\/([^/?#]+)/);
        return match && match[1] ? match[1] : "";
      } catch (error) {
        return "";
      }
    }

    function resolveChatId(chatId) {
      var deps = getDeps();
      var state = deps.chatStoreManager.getStoreState("chatViewCoreStore");
      var view = state && state.currentChatViewConfig ? state.currentChatViewConfig : {};
      return chatId || view.chatId || getChatIdFromLocation() || "";
    }

    function getConversationContext(chatId) {
      var deps = getDeps();
      var state = deps.chatStoreManager.getStoreState("chatViewCoreStore");
      var view = state && state.currentChatViewConfig ? state.currentChatViewConfig : {};
      var effectiveChatId = chatId || view.chatId || getChatIdFromLocation() || "";
      return {
        chatId: effectiveChatId,
        chatType: deps.chatSkillPinTypeDeterminer.determineSkillPinType("", effectiveChatId) || "other_default",
        conversationType: deps.chatConversationSelectors1.getConversationType(deps.chatFeedStoreFactory.useFeedStore.getState(), effectiveChatId) || 1,
        botId: deps.chatConversationBotId.getConversationBotId(effectiveChatId) || deps.chatConversationSelectors2.getBotId(deps.chatFeedStoreFactory.useFeedStore.getState()) || ""
      };
    }

    function getScopeAttachmentData(chatId, skillType) {
      var deps = getDeps();
      var context = {
        chatId: chatId,
        skillType: skillType || "default"
      };
      return {
        attachments: deps.attachmentUploadStoreHooks.getAttachments(context),
        attachmentStates: deps.attachmentUploadStoreHooks.processUploadAttachment(context),
        attachmentKeys: deps.attachmentUploadStoreHooks.mapAttachmentKeys(context)
      };
    }

    function filterAttachmentDataByLocalKeys(data, localKeys) {
      var keyMap = normalizeArray(localKeys).reduce(function (acc, key) {
        acc[key] = true;
        return acc;
      }, {});
      var attachments = [];
      var attachmentStates = [];
      var attachmentKeys = [];
      normalizeArray(data.attachments).forEach(function (attachment, index) {
        if (attachment && keyMap[attachment.localKey]) {
          attachments.push(attachment);
          attachmentStates.push(normalizeArray(data.attachmentStates)[index]);
          attachmentKeys.push(normalizeArray(data.attachmentKeys)[index]);
        }
      });
      return {
        attachments: attachments,
        attachmentStates: attachmentStates,
        attachmentKeys: attachmentKeys
      };
    }

    function isAttachmentReady(state, key) {
      if (!state) {
        return false;
      }
      if (state.type === "link" || state.type === "remote") {
        return true;
      }
      return !!(state.fileKey || key);
    }

    function findNewAttachmentByFile(chatId, skillType, file, existingLocalKeys) {
      var knownKeys = normalizeArray(existingLocalKeys).reduce(function (acc, key) {
        acc[key] = true;
        return acc;
      }, {});
      var data = getScopeAttachmentData(chatId, skillType);
      var attachments = normalizeArray(data.attachments);
      for (var i = 0; i < attachments.length; i++) {
        var attachment = attachments[i];
        if (!attachment || !attachment.localKey || knownKeys[attachment.localKey]) {
          continue;
        }
        if (attachment.file === file) {
          return attachment.localKey;
        }
        var attachmentFile = attachment.file;
        if (attachment.type === (file && file.type && file.type.indexOf("image") !== -1 ? "image" : "file") && attachmentFile && attachmentFile.name === (file && file.name) && attachmentFile.size === (file && file.size) && attachmentFile.lastModified === (file && file.lastModified)) {
          return attachment.localKey;
        }
      }
      return "";
    }

    async function chooseFilesWithCustomInput(options) {

      var paths = normalizePathArray(options.paths);
      if (!paths.length) {
        return [];
      }

      var input = document.createElement("input");
      input.type = "file";
      input.multiple = true;
      input.style.position = "fixed";
      input.style.left = "-9999px";
      input.style.top = "-9999px";
      input.style.opacity = "0";
      input.style.pointerEvents = "none";
      if (typeof options.accept === "string" && options.accept.trim()) {
        input.accept = options.accept;
      }
      document.body.appendChild(input);

      try {
        input.setFileChooserPaths(paths);
        var files = await new Promise(function (resolve) {
          setTimeout(function () {
            resolve(Array.prototype.slice.call(input.files || []));
          }, 10);
        });
        return files;
      } finally {
        input.remove();
      }
    }

    async function addFilesToAttachmentService(files, options) {
      var deps = getDeps();
      var skillType = 16;
      var attachmentService = deps.attachmentUploadStoreHooks.useAttachmentService({
        chatId: options.chatId,
        skillType: skillType
      });
      var uploadIdFactory = attachmentService.getPreGeneratedLocalMessageId;
      var context = getConversationContext(options.chatId);
      var localKeys = [];
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var type = file && file.type && file.type.indexOf("image") !== -1 ? "image" : "file";
        var uploadId = uploadIdFactory ? await uploadIdFactory() : "";
        var existingLocalKeys = getScopeAttachmentData(options.chatId, skillType).attachments.map(function (attachment) {
          return attachment && attachment.localKey;
        }).filter(Boolean);
        await attachmentService.addAttachment({
          file: file,
          type: type,
          ctx: {
            conversationId: context.chatId,
            chatType: context.chatType,
            skillType: skillType,
            skillId: String(skillType),
            uploadFrom: deps.skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
            botId: context.botId,
            uploadWay: options.uploadWay || "browse_folder",
            from: "click",
            uploadCollectionWay: files.length > 1 ? "multi" : "single",
            uploadId: uploadId,
            extraParams: Object.assign({
              code_scene: options.codeScene || "chat",
              upload_file_type: type === "image" ? "image" : "code_file"
            }, options.uploadExtraParams || {})
          }
        });
        var localKey = await waitForCondition(function () {
          return findNewAttachmentByFile(options.chatId, skillType, file, existingLocalKeys);
        }, {
          timeoutMs: options.addAttachmentTimeout || 5000,
          intervalMs: 50,
          timeoutMessage: "Timed out waiting for attachment local key"
        });
        localKeys.push(localKey);
      }
      return {
        skillType: skillType,
        localKeys: localKeys
      };
    }

    async function uploadPaths(options) {
      if (!options) {
        throw new Error("options are required for paths upload");
      }
      var resolvedChatId = resolveChatId(options.chatId);
      var files = options.stringAsFile ? normalizeGeneratedFileSpecs(options).map(function (spec) {
        return new File([spec.content], spec.name, {
          type: spec.type,
          lastModified: Date.now()
        });
      }) : await chooseFilesWithCustomInput(options);
      if (!files.length) {
        return null;
      }
      var upload = await addFilesToAttachmentService(files, Object.assign({}, options, {
        chatId: resolvedChatId
      }));

      return await waitForCondition(function () {
        var data = getScopeAttachmentData(resolvedChatId, upload.skillType);
        var filtered = filterAttachmentDataByLocalKeys(data, upload.localKeys);
        if (!filtered.attachments.length) {
          return null;
        }
        if (filtered.attachments.length !== upload.localKeys.length) {
          return null;
        }
        var allReady = filtered.attachmentStates.every(function (state, index) {
          return isAttachmentReady(state, filtered.attachmentKeys[index]);
        });
        if (!allReady) {
          return null;
        }
        return {
          skillType: upload.skillType,
          attachments: filtered.attachments,
          attachmentStates: filtered.attachmentStates,
          attachmentKeys: filtered.attachmentKeys
        };
      }, {
        timeoutMs: options.uploadTimeout || options.waitTimeout || 120000,
        timeoutMessage: "Timed out waiting for uploaded attachment keys"
      });
    }

    function getDeepThinkMode(options) {
      if (options.useDeepThink !== undefined && options.useDeepThink !== null) {
        return String(options.useDeepThink);
      }
      try {
        var state = getDeps().chatStoreManager.getStoreState("deepThinkingControlStore");
        if (state && state.uiHasDeepThinkBtn === false) {
          return undefined;
        }
      } catch (err) {}
      return undefined;
    }

    function createReportParams(options) {
      var reportParams = Object.assign({
        skill_id: null,
        skill_name: null,
        is_from_screen_shot: 0,
        scene: "keyboard",
        new_guidance: "1",
        send_source: "guidance_page"
      }, options.reportParams || {});
      var deepThinkMode = getDeepThinkMode(options);
      if (deepThinkMode !== undefined && reportParams.whether_use_deep_thinking === undefined) {
        reportParams.whether_use_deep_thinking = deepThinkMode === "0" ? "no" : "yes";
      }
      return reportParams;
    }

    async function createExtraExt(options) {
      var deps = getDeps();
      var extra = clone(options.extraExt || options.extra);
      var abilityParams = options.abilityParams;
      extra.chat_ability = deps.conversationMessageUtils.serializeAbilityData(
        options.abilityType,
        typeof abilityParams === "string" ? abilityParams : JSON.stringify(abilityParams || {})
      );
      extra.use_submit_pipeline = "1";
      if (!extra.fp) {
        try {
          extra.fp = await deps.securityVerifySdkLoader.getFingerprint();
        } catch (err) {}
      }
      var deepThinkMode = getDeepThinkMode(options);
      if (deepThinkMode !== undefined && extra.use_deep_think === undefined) {
        extra.use_deep_think = deepThinkMode;
      }
      return extra;
    }

    function createReferenceBlocks(options) {
      return getDeps().referenceBlockTransformer.transformReferences(normalizeArray(options.refContents));
    }

    async function resolveChatIMService(options) {
      if (options.chatIMService && typeof options.chatIMService.sendMessage === "function") {
        return options.chatIMService;
      }
      return getDeps().chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
    }

    class MessageStreamCollector {
      constructor(options) {
        this.options = options || {};
        this.mode = this.options.streamMode || "raw";
        this.lastSnapshot = "";
        this.finalText = "";
        this.lastMessage = null;
      }

      extractText(message) {
        if (!message) {
          return "";
        }
        if (message.content_obj && typeof message.content_obj.text === "string") {
          return message.content_obj.text;
        }
        if (Array.isArray(message.content_blocks_v2)) {
          return message.content_blocks_v2.map(function (block) {
            return block && block.content && block.content.text_block && block.content.text_block.text || "";
          }).join("");
        }
        if (Array.isArray(message.content_blocks)) {
          return message.content_blocks.map(function (block) {
            return block && block.content_obj && block.content_obj.text || "";
          }).join("");
        }
        return "";
      }

      isTerminal(message) {
        if (!message) {
          return false;
        }
        if (typeof message.stage === "number" && message.stage >= 4) {
          return true;
        }
        if (message.final_status && typeof message.final_status === "object") {
          return true;
        }
        if (message.is_finish === true) {
          return true;
        }
        return false;
      }

      isAssistantMessage(message) {
        if (!message) {
          return false;
        }
        if (typeof message.user_type === "number") {
          return message.user_type === 2;
        }
        if (typeof message.role === "string") {
          return message.role === "assistant";
        }
        if (typeof message.sender_type === "string") {
          return message.sender_type === "assistant";
        }
        return true;
      }

      getDelta(snapshot) {
        snapshot = typeof snapshot === "string" ? snapshot : "";
        if (!snapshot || snapshot === this.lastSnapshot) {
          return "";
        }
        if (snapshot.indexOf(this.lastSnapshot) === 0) {
          var delta = snapshot.slice(this.lastSnapshot.length);
          this.lastSnapshot = snapshot;
          return delta;
        }
        this.lastSnapshot = snapshot;
        return snapshot;
      }

      handle(message) {
        this.lastMessage = message;
        if (typeof this.options.onMessage === "function") {
          this.options.onMessage(message);
        }
        if (typeof this.options.onStreamMessage === "function") {
          this.options.onStreamMessage(message);
        }
        if (!this.isAssistantMessage(message)) {
          console.log("[_symphony] ignore non-assistant stream message:", message);
          return;
        }
        var snapshot = this.extractText(message);
        var delta = this.getDelta(snapshot);
        if (snapshot) {
          this.finalText = snapshot;
        }

        if (snapshot && typeof this.options.onText === "function") {
          this.options.onText(snapshot, message);
        }
        if (delta && typeof this.options.onDelta === "function") {
          this.options.onDelta(delta, snapshot, message);
        }

        if (this.mode === "raw" && typeof this.options.onRaw === "function") {
          this.options.onRaw(message);
        } else if (this.mode === "snapshot" && snapshot && typeof this.options.onSnapshot === "function") {
          this.options.onSnapshot(snapshot, message);
        } else if (this.mode === "delta" && delta && typeof this.options.onDeltaMessage === "function") {
          this.options.onDeltaMessage(delta, snapshot, message);
        }
      }

      async collect(session) {
        var subscription = session.subscribe();
        try {
          for await (var message of subscription) {
            try {
              console.log("[_symphony] stream message:", message);
              console.log("[_symphony] stream message json:", JSON.stringify(message, null, 2));
            } catch (logError) {
              console.log("[_symphony] stream message json failed:", logError, message);
            }
            this.handle(message);
            if (this.isAssistantMessage(message) && this.isTerminal(message)) {
              if (typeof this.options.onDone === "function") {
                this.options.onDone(this.finalText, this.lastMessage);
              }
              return {
                text: this.finalText,
                message: this.lastMessage
              };
            }
          }
          if (typeof this.options.onDone === "function") {
            this.options.onDone(this.finalText, this.lastMessage);
          }
          return {
            text: this.finalText,
            message: this.lastMessage
          };
        } catch (err) {
          if (typeof this.options.onError === "function") {
            this.options.onError(err);
          }
          throw err;
        }
      }
    }

    function appendQuery(url, params) {
      var query = Object.keys(params || {}).filter(function (key) {
        return params[key] !== undefined && params[key] !== null && params[key] !== "";
      }).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      }).join("&");
      return query ? url + "?" + query : url;
    }

    function getAsrCommonParams(options) {
      options = options || {};
      if (options.commonParams) {
        return options.commonParams;
      }
      try {
        var flowApiConfigManager = require("flow-api-config-manager");
        var flowOptions = flowApiConfigManager.getFlowApiOptions && flowApiConfigManager.getFlowApiOptions();
        var getCommonParams = flowOptions && flowOptions.getCommonParams;
        return typeof getCommonParams === "function" ? getCommonParams() || {} : {};
      } catch (err) {
        try {
          var commonParamsBuilder = require("common-params-builder");
          return commonParamsBuilder.getCommonParams ? commonParamsBuilder.getCommonParams() || {} : {};
        } catch (fallbackErr) {
          return {};
        }
      }
    }

    function normalizePcmChunk(chunk) {
      if (!chunk) {
        return chunk;
      }
      if (chunk instanceof ArrayBuffer || typeof Blob !== "undefined" && chunk instanceof Blob) {
        return chunk;
      }
      if (ArrayBuffer.isView(chunk)) {
        return chunk.byteOffset === 0 && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : chunk.buffer.slice(chunk.byteOffset, chunk.byteOffset + chunk.byteLength);
      }
      return chunk;
    }

    function concatArrayBuffers(chunks) {
      var normalized = normalizeArray(chunks).filter(function (chunk) {
        return chunk instanceof ArrayBuffer;
      });
      var byteLength = normalized.reduce(function (total, chunk) {
        return total + chunk.byteLength;
      }, 0);
      var output = new Uint8Array(byteLength);
      var offset = 0;
      normalized.forEach(function (chunk) {
        output.set(new Uint8Array(chunk), offset);
        offset += chunk.byteLength;
      });
      return output.buffer;
    }

    function getTtsSpeechRate(options) {
      if (options.speech_rate !== undefined && options.speech_rate !== null) {
        return options.speech_rate;
      }
      var speechRate = Number(options.speechRate);
      if (speechRate >= 0.7 && speechRate <= 2) {
        return Math.round((speechRate - 1) * 100);
      }
      return 0;
    }

    class SymphonyDoubaoSendApi {
      async sendMessage(text, options) {
        var payloadOptions = Object.assign({}, options || {}, {
          text: text
        });
        payloadOptions.chatId = resolveChatId(payloadOptions.chatId);
        if (!payloadOptions.attachmentBlock && !normalizeArray(payloadOptions.attachments).length && (payloadOptions.stringAsFile || payloadOptions.paths)) {
          var uploaded = await uploadPaths(payloadOptions);
          if (uploaded) {
            payloadOptions.attachments = uploaded.attachments;
            payloadOptions.attachmentStates = uploaded.attachmentStates;
            payloadOptions.attachmentKeys = uploaded.attachmentKeys;
          }
        }
        var payload = await this.buildMessageAndSession(payloadOptions);
        var service = await resolveChatIMService(payloadOptions);
        if (!service || typeof service.sendMessage !== "function") {
          throw new Error("chatIMService.sendMessage is unavailable");
        }
        var session = service.sendMessage(payload);
        var streamResult = await new MessageStreamCollector(payloadOptions).collect(session);
        return {
          session: session,
          chatId: payloadOptions.chatId || "",
          text: streamResult.text,
          message: streamResult.message
        };
      }

      createPcmAsrSession(options) {
        options = options || {};
        var socket = null;
        var opened = false;
        var closed = false;
        var debug = options.debug !== false;
        var pendingChunks = [];
        var resultText = "";
        var resolveDone;
        var rejectDone;
        var done = new Promise(function (resolve, reject) {
          resolveDone = resolve;
          rejectDone = reject;
        });
        var url = appendQuery(options.url || "wss://ws-samantha.doubao.com/samantha/audio/asr", Object.assign({}, getAsrCommonParams(options), {
          format: options.format || "pcm",
          codec: options.codec,
          rate: options.rate || options.sampleRate || 16000,
          bits: options.bits || 16,
          channel: options.channel || 1,
          language: options.language,
          scene: options.scene
        }));

        function emitText(text, message) {
          if (typeof text === "string") {
            resultText = text;
            if (debug) {
              console.log("[_symphony][asr] text:", text, message);
            }
            if (typeof options.onText === "function") {
              options.onText(text, message);
            }
            if (typeof window !== "undefined" && typeof window._symphonyReceiveAsrText === "function") {
              window._symphonyReceiveAsrText(text, message);
            }
          }
        }

        function flushPendingChunks() {
          while (pendingChunks.length && socket && socket.readyState === WebSocket.OPEN) {
            socket.send(pendingChunks.shift());
          }
        }

        function write(chunk) {
          if (closed) {
            throw new Error("ASR websocket is already closed");
          }
          var payload = normalizePcmChunk(chunk);
          if (!payload) {
            return;
          }
          if (debug) {
            console.log("[_symphony][asr] write pcm bytes:", payload.byteLength || payload.size || 0, "wsState:", socket && socket.readyState);
          }
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(payload);
          } else {
            pendingChunks.push(payload);
          }
        }

        function finish() {
          if (closed) {
            return done;
          }
          if (debug) {
            console.log("[_symphony][asr] finish requested, wsState:", socket && socket.readyState);
          }
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
              event: "finish"
            }));
          } else {
            pendingChunks.push(JSON.stringify({
              event: "finish"
            }));
          }
          return done;
        }

        function close() {
          if (debug) {
            console.log("[_symphony][asr] close requested, wsState:", socket && socket.readyState);
          }
          closed = true;
          if (socket && socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
            socket.close();
          }
        }

        function connect() {
          if (socket) {
            return session;
          }
          socket = new WebSocket(url);
          socket.binaryType = "arraybuffer";
          socket.onopen = function (event) {
            opened = true;
            if (debug) {
              console.log("[_symphony][asr] websocket open:", url);
            }
            if (typeof options.onOpen === "function") {
              options.onOpen(event);
            }
            flushPendingChunks();
          };
          socket.onmessage = function (event) {
            var message = event.data;
            try {
              message = JSON.parse(event.data);
            } catch (err) {}
            if (typeof options.onMessage === "function") {
              options.onMessage(message, event);
            }
            if (debug) {
              console.log("[_symphony][asr] websocket message:", message);
            }
            if (message && message.event === "result") {
              emitText(message.result && message.result.Text, message);
            }
            if (message && message.event === "finish") {
              if (debug) {
                console.log("[_symphony][asr] websocket finish event:", message);
              }
              closed = true;
              resolveDone(resultText);
            }
          };
          socket.onerror = function (event) {
            if (debug) {
              console.warn("[_symphony][asr] websocket error:", event);
            }
            if (typeof options.onError === "function") {
              options.onError(event);
            }
            rejectDone(new Error("ASR websocket error"));
          };
          socket.onclose = function (event) {
            closed = true;
            if (debug) {
              console.log("[_symphony][asr] websocket close:", {
                code: event && event.code,
                reason: event && event.reason,
                wasClean: event && event.wasClean,
                opened: opened,
                text: resultText
              });
            }
            if (typeof options.onClose === "function") {
              options.onClose(event);
            }
            if (opened) {
              resolveDone(resultText);
            } else {
              rejectDone(new Error("ASR websocket closed before opening"));
            }
          };
          return session;
        }

        var session = {
          url: url,
          write: write,
          finish: finish,
          close: close,
          connect: connect,
          done: done,
          isClosed: function () {
            return closed;
          },
          getText: function () {
            return resultText;
          },
          getSocket: function () {
            return socket;
          }
        };
        return connect();
      }

      async transcribePcm(pcmData, options) {
        var session = this.createPcmAsrSession(options);
        if (pcmData && typeof pcmData[Symbol.asyncIterator] === "function") {
          for await (var chunk of pcmData) {
            session.write(chunk);
          }
        } else if (Array.isArray(pcmData)) {
          pcmData.forEach(function (chunk) {
            session.write(chunk);
          });
        } else {
          session.write(pcmData);
        }
        session.finish();
        return await session.done;
      }

      createPcmTtsSession(options) {
        options = options || {};
        var socket = null;
        var opened = false;
        var closed = false;
        var finishRequested = false;
        var debug = options.debug !== false;
        var pendingMessages = [];
        var chunks = [];
        var messages = [];
        var resolveDone;
        var rejectDone;
        var done = new Promise(function (resolve, reject) {
          resolveDone = resolve;
          rejectDone = reject;
        });
        var format = options.format || "pcm";
        var url = appendQuery(options.url || "wss://ws-samantha.doubao.com/samantha/audio/tts", Object.assign({}, getAsrCommonParams(options), {
          speaker: options.speaker || options.speakerId || "",
          format: format,
          speech_rate: getTtsSpeechRate(options),
          pitch: options.pitch || 0,
          rate: options.rate || options.sampleRate || 24000
        }));

        function getResult() {
          return {
            audio: concatArrayBuffers(chunks),
            chunks: chunks.slice(),
            messages: messages.slice(),
            format: format,
            url: url
          };
        }

        function resolveResult() {
          resolveDone(getResult());
        }

        function sendMessage(message) {
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
          } else {
            pendingMessages.push(message);
          }
        }

        function flushPendingMessages() {
          while (pendingMessages.length && socket && socket.readyState === WebSocket.OPEN) {
            socket.send(pendingMessages.shift());
          }
        }

        async function emitPcmChunk(data, event) {
          var chunk = data;
          if (typeof Blob !== "undefined" && chunk instanceof Blob) {
            chunk = await chunk.arrayBuffer();
          }
          chunk = normalizePcmChunk(chunk);
          if (!(chunk instanceof ArrayBuffer)) {
            return;
          }
          chunks.push(chunk);
          if (debug) {
            console.log("[_symphony][tts] pcm bytes:", chunk.byteLength);
          }
          if (typeof options.onPcmChunk === "function") {
            options.onPcmChunk(chunk, event);
          }
          if (typeof options.onAudioChunk === "function") {
            options.onAudioChunk(chunk, event);
          }
        }

        function write(text) {
          if (closed) {
            throw new Error("TTS websocket is already closed");
          }
          if (typeof text !== "string") {
            throw new Error("TTS text must be a string");
          }
          if (debug) {
            console.log("[_symphony][tts] write text:", text);
          }
          sendMessage(JSON.stringify({
            event: "text",
            text: text
          }));
        }

        function finish() {
          if (!finishRequested) {
            finishRequested = true;
            if (debug) {
              console.log("[_symphony][tts] finish requested, wsState:", socket && socket.readyState);
            }
            sendMessage(JSON.stringify({
              event: "finish"
            }));
          }
          return done;
        }

        function close() {
          if (debug) {
            console.log("[_symphony][tts] close requested, wsState:", socket && socket.readyState);
          }
          closed = true;
          if (socket && socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
            socket.close();
          }
        }

        function connect() {
          if (socket) {
            return session;
          }
          socket = new WebSocket(url);
          socket.binaryType = "arraybuffer";
          socket.onopen = function (event) {
            opened = true;
            if (debug) {
              console.log("[_symphony][tts] websocket open:", url);
            }
            if (typeof options.onOpen === "function") {
              options.onOpen(event);
            }
            flushPendingMessages();
          };
          socket.onmessage = function (event) {
            if (typeof event.data !== "string") {
              emitPcmChunk(event.data, event).catch(function (error) {
                rejectDone(error);
              });
              return;
            }
            var message = event.data;
            try {
              message = JSON.parse(event.data);
            } catch (err) {}
            messages.push(message);
            if (debug) {
              console.log("[_symphony][tts] websocket message:", message);
            }
            if (typeof options.onMessage === "function") {
              options.onMessage(message, event);
            }
            if (message && message.event === "finish") {
              closed = true;
              resolveResult();
            }
            if (message && message.message) {
              rejectDone(new Error("TTS server error " + (message.code || "") + ": " + message.message));
            }
          };
          socket.onerror = function (event) {
            if (debug) {
              console.warn("[_symphony][tts] websocket error:", event);
            }
            if (typeof options.onError === "function") {
              options.onError(event);
            }
            rejectDone(new Error("TTS websocket error"));
          };
          socket.onclose = function (event) {
            closed = true;
            if (debug) {
              console.log("[_symphony][tts] websocket close:", {
                code: event && event.code,
                reason: event && event.reason,
                wasClean: event && event.wasClean,
                opened: opened,
                chunks: chunks.length
              });
            }
            if (typeof options.onClose === "function") {
              options.onClose(event);
            }
            if (opened) {
              resolveResult();
            } else {
              rejectDone(new Error("TTS websocket closed before opening"));
            }
          };
          return session;
        }

        var session = {
          url: url,
          write: write,
          finish: finish,
          close: close,
          connect: connect,
          done: done,
          isClosed: function () {
            return closed;
          },
          getChunks: function () {
            return chunks.slice();
          },
          getAudio: function () {
            return concatArrayBuffers(chunks);
          },
          getMessages: function () {
            return messages.slice();
          },
          getSocket: function () {
            return socket;
          }
        };
        return connect();
      }

      async synthesizePcm(text, options) {
        var session = this.createPcmTtsSession(options);
        session.write(text);
        return await session.finish();
      }

      getCurrentChatId() {
        return resolveChatId("");
      }

      waitForChatId(options) {
        options = options || {};
        return waitForCondition(function () {
          return resolveChatId("");
        }, {
          timeoutMs: options.timeoutMs || 30000,
          intervalMs: options.intervalMs || 100,
          timeoutMessage: options.timeoutMessage || "Timed out waiting for chatId"
        });
      }

      async buildMessageAndSession(options) {
        if (!options) {
          throw new Error("options are required");
        }
        if (typeof options.text !== "string") {
          throw new Error("text must be a string");
        }

        var resolvedChatId = resolveChatId(options.chatId);
        var deps = getDeps();
        var extraExt = await createExtraExt(options);
        var message = deps.conversationMessageUtils.createMessageObject({
          conversation: deps.conversationMessageUtils.parseConversationId(resolvedChatId),
          message: {
            content_blocks_v2: this.createContentBlocks(options),
            unique_id: options.localMessageId || deps.uuidGeneratorUtil.generateUuid(),
            ext: extraExt,
            message_status: options.status
          }
        });

        if (options.botId) {
          message.bot_id = String(options.botId);
        }
        if (options.sectionId) {
          message.section_id = options.sectionId;
        }
        if (options.conversationType !== undefined && options.conversationType !== null) {
          message.conversation_type = options.conversationType;
        }

        return {
          message: message,
          session: {
            reportParams: createReportParams(options)
          }
        };
      }

      createAttachmentBlock(options) {
        if (options && options.attachmentBlock) {
          return options.attachmentBlock;
        }
        return getDeps().attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
          attachments: normalizeArray(options.attachments),
          attachmentKeys: normalizeArray(options.attachmentKeys),
          attachmentStates: normalizeArray(options.attachmentStates)
        });
      }

      createContentBlocks(options) {
        var deps = getDeps();
        var textBlock = deps.chatTextBlockFactory.createTextBlock((options.text || "").trim());
        return deps.conversationMessageUtils.assembleContentBlocks({
          attachmentBlock: this.createAttachmentBlock(options),
          textBlock: textBlock,
          referenceBlocks: createReferenceBlocks(options)
        }, {
          excludeReferenceOnAttachment: false
        });
      }

      createFilesFromStringContent(options) {
        return normalizeGeneratedFileSpecs(options).map(function (spec) {
          return new File([spec.content], spec.name, {
            type: spec.type,
            lastModified: Date.now()
          });
        });
      }

      async uploadStringAsFile(options) {
        options = Object.assign({}, options || {}, {
          stringAsFile: true
        });
        options.chatId = resolveChatId(options.chatId);
        return await uploadPaths(options);
      }

      require(id) {
        return require(id);
      }
    }

    var api = new SymphonyDoubaoSendApi();
    api.SymphonyDoubaoSendApi = SymphonyDoubaoSendApi;

    self.SymphonyDoubaoSend = api;
    module.exports = api;
  }
}, function (require) {
  require("__symphony__/doubao-send");
}]);

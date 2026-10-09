// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'chatStatusConstants'
// - Resolved require(680777) to 'chat-status-constants'
// - Renamed variable 'u' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'promiseDelayUtil'
// - Resolved require(937669) to 'promise-delay-util'
// - Renamed variable 'c' to 'observableSubjectClass'
// - Resolved require(292580) to 'observable-subject-class'
// - Renamed variable 'E' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Updated imported property 'x' to 'Subject' (module 292580)
// - Updated imported property 'Z' to 'ChatStatus' (module 680777)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '_' to 'delayPromise' (module 937669)
// - Updated imported property 'Z' to 'eventEmitter' (module 740547)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input.448035e9.js
         * chunkId: 38227
         * moduleId: 82216
         */
module.exports = function (module, exports, require) {
  var i;
  var s;
  var n;
  var o;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  function d(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  let h = new class {
    getVolumeObservable() {
      return this.volumeSubject.asObservable();
    }
    getAsrStatusObservable() {
      return this.asrStatusSubject.asObservable();
    }
    getAsrResultObservable() {
      return this.asrResultSubject.asObservable();
    }
    setVolume(t) {
      this.volumeSubject.next(t);
    }
    setAsrStatus(t) {
      this.asrStatusSubject.next(t);
      this.asrStatus = t;
    }
    setAsrResult(t) {
      this.asrResultSubject.next(t);
    }
    getCurrentAsrStatus() {
      return this.asrStatus;
    }
    destroy(t) {
      this.volumeSubject.complete();
      this.asrStatusSubject.complete();
      this.asrResultSubject.complete();
      if (t) {
        this.resetSubjects();
      }
    }
    resetSubjects() {
      this.volumeSubject = new observableSubjectClass.Subject();
      this.asrStatusSubject = new observableSubjectClass.Subject();
      this.asrResultSubject = new observableSubjectClass.Subject();
    }
    constructor() {
      d(this, "volumeSubject", new observableSubjectClass.Subject());
      d(this, "asrStatusSubject", new observableSubjectClass.Subject());
      d(this, "asrResultSubject", new observableSubjectClass.Subject());
      d(this, "asrStatus", chatStatusConstants.ChatStatus.INIT);
    }
  }();
  (i = {}).INIT = "init";
  i.START_CONNECT = "start_connect";
  i.CONNECTED = "connected";
  i.STOPPED = "stopped";
  i.ERROR = "error";
  i.Finish = "finish";
  let v = i;
  (s = {}).EN = "en";
  s.ZH = "zh";
  let f = s;
  (n = {}).Result = "result";
  n.Finish = "finish";
  let p = n;
  (o = {})[o.Success = 0] = "Success";
  o[o.Timeout = 710010701] = "Timeout";
  o[o.Invalid = 710010702] = "Invalid";
  let m = o;
  let y = (t, e) => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: t,
      meta: {
        ...e,
        from: typeof window != "undefined" ? window.location.origin : ""
      }
    });
  };
  let b = async () => {
    try {
      let t = new AudioContext();
      await t.audioWorklet.addModule("data:application/javascript;base64,");
      return true;
    } catch (t) {
      return false;
    }
  };
  let g = t => {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      e += t[r] * t[r];
    }
    return S(Math.sqrt(e / t.length));
  };
  let S = t => Math.ceil(t * 100) / 100;
  let w = (t, e) => {
    for (let r = 0; r < t.length; r++) {
      let i = t[r];
      if (i < 0) {
        i *= 32768;
      } else {
        i *= 32767;
      }
      e.setInt16(r * 2, i, true);
    }
  };
  f.ZH;
  var T = {
    ON_OPEN: "onOpen",
    ON_MESSAGE: "onMessage",
    ON_ERROR: "onError",
    ON_CLOSE: "onClose"
  };
  let _ = new Uint8Array(16384);
  function k(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  var P = class {
    addWsProxyListeners() {
      this.wsProxy.on(T.ON_OPEN, this.socketOnOpen);
      this.wsProxy.on(T.ON_MESSAGE, this.socketOnMessage);
      this.wsProxy.on(T.ON_CLOSE, this.socketOnClose);
      this.wsProxy.on(T.ON_ERROR, this.socketOnError);
    }
    removeWsProxyListeners() {
      this.wsProxy.off(T.ON_OPEN);
      this.wsProxy.off(T.ON_MESSAGE);
      this.wsProxy.off(T.ON_ERROR);
      this.wsProxy.off(T.ON_CLOSE);
    }
    addAudioBufferData(t) {
      if (this.wsConfig?.enableCacheAudioData) {
        if (!(this.audioBufferData.length < 100)) {
          this.audioBufferData.shift();
        }
        this.audioBufferData.push(t);
      }
    }
    sendCacheAudioData() {
      var e;
      var r;
      if (this.wsConfig?.enableCacheAudioData && this.audioBufferData.length) {
        while (this.audioBufferData.length) {
          let t = this.audioBufferData.shift();
          if (t) {
            if ((r = this.wsProxy) !== null && r !== undefined && (e = r.sendWsMessage) !== null && e !== undefined) {
              e.call(r, t);
            }
          }
        }
      }
    }
    constructor(t) {
      k(this, "reconnectTimes", 0);
      k(this, "translateStatus", v.INIT);
      k(this, "reconnectTimer", null);
      k(this, "hasSendPacketData", false);
      k(this, "wsProxy", undefined);
      k(this, "wsConfig", undefined);
      k(this, "audioBufferData", []);
      k(this, "createWs", () => {
        this.destroyWsConnection();
        this.connect();
      });
      k(this, "connect", () => {
        var t;
        var e;
        this.removeWsProxyListeners();
        this.addWsProxyListeners();
        if ((e = this.wsProxy) !== null && e !== undefined && (t = e.createWsSession) !== null && t !== undefined) {
          t.call(e);
        }
        this.translateStatus = v.START_CONNECT;
        this.reconnectTimer = setTimeout(() => {
          if (this.translateStatus === v.START_CONNECT) {
            this.reconnect();
            this.reconnectTimes++;
          }
        }, 5000);
      });
      k(this, "reconnect", async () => {
        if (this.reconnectTimes >= 10) {
          this.wsConnectError();
          return;
        }
        if (this.translateStatus !== v.ERROR) {
          var t;
          var e;
          var r;
          var i;
          if (await ((t = (e = this.wsProxy).isSocketOnOpen) === null || t === undefined ? undefined : t.call(e))) {
            if ((i = this.wsProxy) !== null && i !== undefined && (r = i.closeWsSession) !== null && r !== undefined) {
              r.call(i);
            }
          }
          promiseDelayUtil.delayPromise(2000).then(() => {
            this.connect();
          });
        }
      });
      k(this, "socketOnOpen", () => {
        var t;
        var e;
        y("asr_service_ws_open");
        if ((e = this.wsConfig) !== null && e !== undefined && (t = e.onWsConnectSuccess) !== null && t !== undefined) {
          t.call(e);
        }
        this.translateStatus = v.CONNECTED;
        h.setAsrStatus(chatStatusConstants.ChatStatus.RECORDING);
        if (this.reconnectTimer) {
          clearTimeout(this.reconnectTimer);
        }
      });
      k(this, "socketOnMessage", t => {
        try {
          var e;
          var r;
          var s;
          let n = JSON.parse(t.data);
          if ((n == null ? undefined : n.event) === p.Finish) {
            this.stopWsConnection();
            this.translateStatus = v.Finish;
            h.setAsrStatus(chatStatusConstants.ChatStatus.DESTROYED);
            if ((r = this.wsConfig) !== null && r !== undefined && (e = r.onStopAsr) !== null && e !== undefined) {
              e.call(r);
            }
            y("asr_service_ws_close_success");
          }
          if ((n == null ? undefined : n.event) === p.Result) {
            h.setAsrResult(n == null ? undefined : n.result?.Text);
          }
          if ((n == null ? undefined : n.code) !== m.Success) {
            this.handleMessageError(n == null ? undefined : n.code);
            y("asr_service_ws_error_code", {
              code: n == null ? undefined : (s = n.code) === null || s === undefined ? undefined : s.toString()
            });
          }
        } catch (t) {
          this.wsConnectError();
        }
      });
      k(this, "socketOnClose", t => {
        var e;
        var r;
        var i;
        var s;
        var n;
        y("asr_service_ws_close", {
          code: t == null ? undefined : (e = t.code) === null || e === undefined ? undefined : e.toString(),
          reason: t == null ? undefined : t.reason
        });
        this.hasSendPacketData = false;
        this.destroyWsConnection();
        if ((i = this.wsConfig) !== null && i !== undefined && (r = i.onWsConnectClose) !== null && r !== undefined) {
          r.call(i);
        }
        this.translateStatus = v.Finish;
        h.setAsrStatus(chatStatusConstants.ChatStatus.DESTROYED);
        h.destroy(true);
        if ((n = this.wsConfig) !== null && n !== undefined && (s = n.onStopAsr) !== null && s !== undefined) {
          s.call(n);
        }
      });
      k(this, "socketOnError", () => {
        this.wsConnectError();
        this.hasSendPacketData = false;
        y("asr_service_ws_error");
      });
      k(this, "wsConnectError", () => {
        var t;
        var e;
        var r;
        var i;
        this.destroyWsConnection();
        this.translateStatus = v.ERROR;
        if ((e = this.wsConfig) !== null && e !== undefined && (t = e.onWsConnectError) !== null && t !== undefined) {
          t.call(e);
        }
        h.setAsrStatus(chatStatusConstants.ChatStatus.DESTROYED);
        h.destroy(true);
        if ((i = this.wsConfig) !== null && i !== undefined && (r = i.onStopAsr) !== null && r !== undefined) {
          r.call(i);
        }
        throw Error("服务连接失败，请稍后重试");
      });
      k(this, "sendWsMessage", async t => {
        var e;
        var r;
        var i;
        var s;
        if (await ((e = (r = this.wsProxy).isSocketOnOpen) === null || e === undefined ? undefined : e.call(r))) {
          if (!this.hasSendPacketData) {
            y("asr_service_ws_send_first_packet");
            this.hasSendPacketData = true;
          }
          this.sendCacheAudioData();
          if ((s = this.wsProxy) !== null && s !== undefined && (i = s.sendWsMessage) !== null && i !== undefined) {
            i.call(s, t);
          }
        } else {
          this.addAudioBufferData(t);
        }
      });
      k(this, "handleMessageError", t => {
        var e;
        var r;
        var i;
        var s;
        if (t === m.Timeout) {
          if ((r = this.wsConfig) !== null && r !== undefined && (e = r.onWsConnectTimeout) !== null && e !== undefined) {
            e.call(r);
          }
        } else if ((s = this.wsConfig) !== null && s !== undefined && (i = s.onWsConnectInvalidCode) !== null && i !== undefined) {
          i.call(s, t);
        }
      });
      k(this, "destroyWsConnection", () => {
        var t;
        var e;
        this.stopWsConnection();
        if ((e = this.wsProxy) !== null && e !== undefined && (t = e.closeWsSession) !== null && t !== undefined) {
          t.call(e);
        }
        this.removeWsProxyListeners();
      });
      k(this, "stopWsConnection", async () => {
        var t;
        var e;
        var r;
        var i;
        if (this.translateStatus === v.CONNECTED && (await ((t = (e = this.wsProxy).isSocketOnOpen) === null || t === undefined ? undefined : t.call(e)))) {
          y("asr_service_ws_send_finish");
          this.translateStatus = v.STOPPED;
          if ((i = this.wsProxy) !== null && i !== undefined && (r = i.sendWsMessage) !== null && r !== undefined) {
            r.call(i, JSON.stringify({
              event: "finish"
            }));
          }
          return;
        }
        this.translateStatus = v.INIT;
        if (this.reconnectTimer) {
          clearTimeout(this.reconnectTimer);
        }
        this.hasSendPacketData = false;
      });
      this.wsProxy = t.wsProxy;
      this.wsConfig = t.wsConfig;
    }
  };
  function C(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  var x = class {
    constructor(t) {
      C(this, "stream", undefined);
      C(this, "muteMode", undefined);
      C(this, "processor", undefined);
      C(this, "context", undefined);
      C(this, "input", undefined);
      C(this, "audioCtx", undefined);
      C(this, "wsInstance", undefined);
      C(this, "muteTimer", null);
      C(this, "muteDurationTimer", null);
      C(this, "asrServiceInstance", undefined);
      C(this, "stopStream", () => {
        var t;
        if ((t = this.stream) !== null && t !== undefined) {
          t.getTracks().forEach(function (t) {
            return t.stop();
          });
        }
        this.stream = null;
      });
      C(this, "enterMuteMode", () => {
        this.muteMode = true;
        h.setAsrStatus(chatStatusConstants.ChatStatus.PAUSED);
        this.sendMuteData();
      });
      C(this, "exitMuteMode", () => {
        this.muteMode = false;
        h.setAsrStatus(chatStatusConstants.ChatStatus.RECORDING);
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
      });
      C(this, "sendMuteData", () => {
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
        this.muteDurationTimer = setTimeout(() => {
          var t;
          if ((t = this.asrServiceInstance) !== null && t !== undefined) {
            t.stopAsr();
          }
        }, 60000);
        this.muteTimer = setInterval(() => {
          var t;
          var e;
          if ((e = this.wsInstance) !== null && e !== undefined && (t = e.sendWsMessage) !== null && t !== undefined) {
            t.call(e, _);
          }
        }, 200);
      });
      C(this, "stopRecorder", () => {
        var t;
        var e;
        this.muteMode = false;
        this.stopStream();
        if ((t = this.input) !== null && t !== undefined) {
          t.disconnect();
        }
        if ((e = this.processor) !== null && e !== undefined) {
          e.disconnect();
        }
        this.input = null;
        this.processor = undefined;
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
      });
      C(this, "startRecording", () => {
        var t;
        var e;
        if (this.context) {
          this.processor = this.context.createScriptProcessor(8192, 1, 1);
          if ((t = this.input) !== null && t !== undefined) {
            t.connect(this.processor);
          }
          if ((e = this.processor) !== null && e !== undefined) {
            e.connect(this.context.destination);
          }
          if (this.processor) {
            this.processor.onaudioprocess = t => {
              var e;
              var r;
              if (this.muteMode) {
                return;
              }
              let i = t.inputBuffer.getChannelData(0);
              let s = g(i);
              h.setVolume(s);
              let n = new DataView(new ArrayBuffer(i.length * 2));
              w(i, n);
              if ((r = this.wsInstance) !== null && r !== undefined && (e = r.sendWsMessage) !== null && e !== undefined) {
                e.call(r, new Uint8Array(n.buffer));
              }
            };
          }
        }
      });
      this.stream = t.stream;
      this.muteMode = false;
      this.processor = undefined;
      this.context = t.source?.context;
      if (this.context.createScriptProcessor === null) {
        this.context.createScriptProcessor = this.context.createJavaScriptNode;
      }
      this.input = this.context.createGain();
      t.source.connect(this.input);
      this.audioCtx = t.audioCtx;
      this.wsInstance = t.wsInstance;
      this.muteTimer = null;
      this.muteDurationTimer = null;
      this.asrServiceInstance = t.asrServiceInstance;
    }
  };
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function N(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  class D extends eventEmitterWrapper_1.eventEmitter {
    constructor(t) {
      super();
      N(this, "socket", null);
      N(this, "config", undefined);
      N(this, "createWsSession", () => {
        this.socket = new WebSocket(function (t, e = {}) {
          let r = Object.keys(e).reduce((t, r) => t = `${t}&${r}=${e[r]}`, "");
          return `${t}?${r.replace(/^&/, "")}`;
        }("wss://ws-samantha.doubao.com/samantha/audio/asr", {
          ...this.config?.commonParams,
          format: "pcm"
        }));
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = () => {
          if (this.socket?.readyState === 1) {
            this.emit(T.ON_OPEN);
          }
        };
        this.socket.onmessage = t => {
          this.emit(T.ON_MESSAGE, t);
        };
        this.socket.onclose = t => {
          this.emit(T.ON_CLOSE, t);
        };
        this.socket.onerror = () => {
          this.emit(T.ON_ERROR);
        };
      });
      N(this, "sendWsMessage", t => {
        var e;
        if ((e = this.socket) !== null && e !== undefined) {
          e.send(t);
        }
      });
      N(this, "closeWsSession", () => {
        var t;
        if ((t = this.socket) !== null && t !== undefined) {
          t.close();
        }
        this.socket = null;
      });
      N(this, "isSocketOnOpen", () => {
        return Promise.resolve(this.socket?.readyState === 1);
      });
      this.socket = null;
      this.config = t;
    }
  }
  let M = `
class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Initialize audio parameters directly with 16kHz sample rate
    this.sampleRate = 16000; // Sampling rate 16000Hz
    this.numberOfChannels = 1; // Mono

    // Initialize audio buffer
    this.bufferSize = 2048; // Buffer size, roughly 100-200ms per packet
    this.buffer = new Float32Array(this.bufferSize * this.numberOfChannels);
    this.samplesRecorded = 0; // Number of samples recorded
    this.volumeSamplesRecorded = 0; // Number of samples recorded for volume calculation
    this._processing = 'true';

    this.port.onmessage = (event) => {
      this._processing = event.data.type;
    };
  }

  process(inputs) {
    try {
      if (this._processing === 'destroy') {
        return false;
      }
      if (this._processing === 'pause') {
        return true;
      }

      const input = inputs[0]; // Get input audio
      if (!input.length) {
        return true;
      }

      // Process audio data
      for (let i = 0; i < input[0].length; ++i) {
        this.buffer[this.samplesRecorded] = input[0][i];
        this.samplesRecorded++;
        this.volumeSamplesRecorded++;

        // When buffer is full, send the audio data
        if (this.samplesRecorded >= this.bufferSize) {
          this.sendAudioData();
          this.samplesRecorded = 0;
        }

        // Calculate volume based on a portion of the buffer
        if (this.volumeSamplesRecorded >= this.bufferSize / 2) {
          const volume = this.calculateRMS(input[0]);
          this.port.postMessage({
            type: 'volume',
            data: volume,
          });
          this.volumeSamplesRecorded = 0;
        }
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  floatTo16BitPCM(data16k, dataPCM) {
    for (let i = 0; i < data16k.length; i++) {
      const s = Math.max(-1, Math.min(1, data16k[i]));
      dataPCM.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
  }

  calculateRMS(buffer) {
    let sum = 0.0;
    for (let i = 0; i < buffer.length; i++) {
      sum += buffer[i] * buffer[i];
    }
    return Math.sqrt(sum / buffer.length);
  }

  sendAudioData() {
    const bufferPCM = new ArrayBuffer(this.buffer.length * 2);
    const dataPCM = new DataView(bufferPCM);
    this.floatTo16BitPCM(this.buffer, dataPCM);
    const sendWsMessageData = new Uint8Array(dataPCM.buffer);

    this.port.postMessage({
      type: 'audioData',
      data: sendWsMessageData,
    });
  }
}

registerProcessor('audio-processor', AudioProcessor);
`;
  function O(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  let R = 0;
  var I = class {
    constructor(t) {
      O(this, "stream", undefined);
      O(this, "muteMode", undefined);
      O(this, "audioCtx", undefined);
      O(this, "sourceNode", undefined);
      O(this, "workletNode", undefined);
      O(this, "wsInstance", undefined);
      O(this, "muteTimer", null);
      O(this, "muteDurationTimer", null);
      O(this, "asrServiceInstance", undefined);
      O(this, "stopStream", () => {
        var t;
        if ((t = this.stream) !== null && t !== undefined) {
          t.getTracks().forEach(t => t.stop());
        }
        this.stream = null;
      });
      O(this, "enterMuteMode", () => {
        this.muteMode = true;
        h.setAsrStatus(chatStatusConstants.ChatStatus.PAUSED);
        this.sendMuteData();
      });
      O(this, "exitMuteMode", () => {
        this.muteMode = false;
        h.setAsrStatus(chatStatusConstants.ChatStatus.RECORDING);
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
      });
      O(this, "sendMuteData", () => {
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
        this.muteDurationTimer = setTimeout(() => {
          var t;
          if ((t = this.asrServiceInstance) !== null && t !== undefined) {
            t.stopAsr();
          }
        }, 60000);
        this.muteTimer = setInterval(() => {
          var t;
          var e;
          if ((e = this.wsInstance) !== null && e !== undefined && (t = e.sendWsMessage) !== null && t !== undefined) {
            t.call(e, _);
          }
        }, 200);
      });
      O(this, "stopRecorder", () => {
        var t;
        var e;
        var r;
        var i;
        this.muteMode = false;
        if ((t = this.workletNode) !== null && t !== undefined) {
          t.port.postMessage({
            type: "destroy"
          });
        }
        if ((e = this.workletNode) !== null && e !== undefined) {
          e.disconnect();
        }
        if ((r = this.sourceNode) !== null && r !== undefined) {
          r.disconnect();
        }
        if ((i = this.audioCtx) !== null && i !== undefined) {
          i.close();
        }
        this.audioCtx = null;
        this.workletNode = null;
        this.sourceNode = null;
        this.stopStream();
        if (this.muteTimer) {
          clearInterval(this.muteTimer);
        }
        if (this.muteDurationTimer) {
          clearTimeout(this.muteDurationTimer);
        }
      });
      O(this, "startRecording", async () => {
        var t;
        var e;
        if (this.audioCtx && this.stream) {
          try {
            let t = new Blob([M], {
              type: "application/javascript"
            });
            let e = URL.createObjectURL(t);
            await this.audioCtx.audioWorklet.addModule(e);
            this.workletNode = new AudioWorkletNode(this.audioCtx, "audio-processor");
            this.workletNode.port.onmessage = t => {
              var r;
              var i;
              if (!this.muteMode) {
                switch (t.data?.type) {
                  case "audioData":
                    if ((i = this.wsInstance) !== null && i !== undefined && (r = i.sendWsMessage) !== null && r !== undefined) {
                      r.call(i, t.data.data);
                    }
                    break;
                  case "volume":
                    h.setVolume(S(Math.max(0, t.data.data)));
                }
              }
            };
          } catch (t) {}
          if (this.audioCtx && this.stream) {
            this.sourceNode = (e = this.audioCtx) === null || e === undefined ? undefined : (t = e.createMediaStreamSource) === null || t === undefined ? undefined : t.call(e, this.stream);
            R = 0;
            this.connectNode();
          }
        }
      });
      O(this, "connectNode", () => {
        if (!(++R >= 50)) {
          if (this.workletNode && this.audioCtx) {
            var t;
            var e;
            if ((t = this.workletNode) !== null && t !== undefined) {
              t.port.postMessage({
                type: "resume"
              });
            }
            if ((e = this.sourceNode) !== null && e !== undefined) {
              e.connect(this.workletNode);
            }
            this.workletNode.connect(this.audioCtx.destination);
          } else {
            requestAnimationFrame(() => {
              this.connectNode();
            });
          }
        }
      });
      this.stream = t.stream;
      this.muteMode = false;
      this.audioCtx = t.audioCtx;
      this.sourceNode = null;
      this.workletNode = null;
      this.wsInstance = t.wsInstance;
      this.muteTimer = null;
      this.muteDurationTimer = null;
      this.asrServiceInstance = t.asrServiceInstance;
    }
  };
  function A(t, e, r) {
    var i;
    if ((e = typeof (i = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var r = t[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(t, e || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = r;
    }
    return t;
  }
  var j = class {
    async createRecorderInstance(t, e) {
      if (this.config.audioWorklet && (await b())) {
        y("asr_service_recorder_worklet");
        return new I({
          audioCtx: t,
          stream: e,
          wsInstance: this.wsInstance,
          asrServiceInstance: this
        });
      } else {
        y("asr_service_recorder_main");
        return new x({
          source: t.createMediaStreamSource(e),
          audioCtx: t,
          stream: e,
          wsInstance: this.wsInstance,
          asrServiceInstance: this
        });
      }
    }
    constructor(t) {
      A(this, "config", undefined);
      A(this, "recorderInstance", null);
      A(this, "wsProxy", undefined);
      A(this, "wsInstance", null);
      A(this, "deviceInstance", null);
      A(this, "isAsrRecordingOrLoading", t => t === chatStatusConstants.ChatStatus.RECORDING || t === chatStatusConstants.ChatStatus.PAUSED || t === chatStatusConstants.ChatStatus.LOADING);
      A(this, "initWsService", () => {
        this.wsInstance = new P({
          wsConfig: {
            ...this.config.wsConfig,
            onWsConnectError: () => {
              var t;
              var e;
              if ((e = this.config.wsConfig) !== null && e !== undefined && (t = e.onWsConnectError) !== null && t !== undefined) {
                t.call(e);
              }
              this.stopAsrSession();
            },
            onWsConnectClose: () => {
              var t;
              var e;
              if ((e = this.config.wsConfig) !== null && e !== undefined && (t = e.onWsConnectClose) !== null && t !== undefined) {
                t.call(e);
              }
              this.stopAsrSession();
            }
          },
          wsProxy: this.wsProxy
        });
      });
      A(this, "startAsr", t => {
        if (!this.isAsrRecordingOrLoading(h.getCurrentAsrStatus())) {
          h.setAsrStatus(chatStatusConstants.ChatStatus.LOADING);
          this.initWsService();
          this.initRecordService(t);
          y("asr_service_start");
        }
      });
      A(this, "initRecordService", async t => {
        var e;
        var r;
        var i;
        var s;
        var o;
        var a;
        var l;
        var c;
        try {
          let l = await navigator.mediaDevices.getUserMedia({
            audio: !t || {
              deviceId: t
            }
          });
          if ((r = this.config) !== null && r !== undefined && (e = r.onPermissionAllowed) !== null && e !== undefined) {
            e.call(r);
          }
          if ((s = this.wsInstance) !== null && s !== undefined && (i = s.createWs) !== null && i !== undefined) {
            i.call(s);
          }
          let c = new AudioContext({
            sampleRate: 16000
          });
          this.recorderInstance = await this.createRecorderInstance(c, l);
          this.recorderInstance.startRecording();
          if (this.deviceInstance) {
            return;
          }
          let d = (await navigator.mediaDevices.enumerateDevices()).filter(t => t.kind === "audioinput").map(t => ({
            deviceId: t.deviceId.slice(0, 5),
            label: t.label
          }));
          let h = l == null ? undefined : (a = l.getAudioTracks()) === null || a === undefined ? undefined : (o = a[0]) === null || o === undefined ? undefined : o.getSettings()?.deviceId;
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "asr_service_devices",
            meta: {
              audioInputDevices: JSON.stringify(d),
              currentMicDeviceId: h
            }
          });
        } catch (t) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "asr_service_mic_permission_denied",
            meta: {
              error_messsage: t == null ? undefined : t.message,
              error_stack: t == null ? undefined : t.stack
            }
          });
          if ((c = this.config) !== null && c !== undefined && (l = c.onPermissionDenied) !== null && l !== undefined) {
            l.call(c);
          }
          this.stopAsrSession();
        }
      });
      A(this, "stopAsr", () => {
        this.stopAsrSession();
        y("asr_service_stop");
      });
      A(this, "getAsrMessageSubscription", () => h.getAsrResultObservable());
      A(this, "getAsrStatusSubscription", () => h.getAsrStatusObservable());
      A(this, "getAudioVolumeSubscription", () => h.getVolumeObservable());
      A(this, "stopAsrSession", () => {
        var t;
        var e;
        var r;
        h.setAsrStatus(chatStatusConstants.ChatStatus.DESTROYED);
        if ((t = this.recorderInstance) !== null && t !== undefined) {
          t.stopRecorder();
        }
        this.recorderInstance = null;
        if ((e = this.wsInstance) !== null && e !== undefined) {
          e.stopWsConnection();
        }
        this.wsInstance = null;
        if ((r = this.deviceInstance) !== null && r !== undefined) {
          r.unChangeDevice();
        }
        this.deviceInstance = null;
      });
      A(this, "destroyAsr", () => {
        this.stopAsrSession();
        h.destroy(false);
      });
      A(this, "enterMuteMode", () => {
        var t;
        y("asr_service_mute");
        if ((t = this.recorderInstance) !== null && t !== undefined) {
          t.enterMuteMode();
        }
      });
      A(this, "exitMuteMode", () => {
        var t;
        y("asr_service_unmute");
        if ((t = this.recorderInstance) !== null && t !== undefined) {
          t.exitMuteMode();
        }
      });
      this.config = t;
      this.recorderInstance = null;
      if (t.wsProxy) {
        this.wsProxy = t.wsProxy;
      } else {
        let e = new D({
          commonParams: t.wsConfig.commonParams
        });
        this.wsProxy = e;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return j;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'AudioStreamManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 631641
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var arrayValueFinder = require("array-value-finder") /*id: 421495*/;
  var arrayFilterExtractMatched = require("array-filter-extract-matched") /*id: 925046*/;
  var audioStreamManager = require("audio-stream-manager") /*id: 55094*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let c = new (require("event-emitter-wrapper_1") /*id: 740547*/.eventEmitter)();
  let d = e => {
    let t = new URLSearchParams();
    for (let n in e) {
      let i = e[n];
      t.append(n, String(i));
    }
    return t.toString();
  };
  function u(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class h {
    constructor({
      id: e,
      speakerId: t,
      speechRate: n = 1,
      pitch: i = 0,
      createSocket: r,
      getCommonParams: o
    }) {
      u(this, "id", undefined);
      u(this, "speakerId", undefined);
      u(this, "speechRate", 1);
      u(this, "pitch", 0);
      u(this, "joinBySentence", true);
      u(this, "order", 0);
      u(this, "bufferSentCount", 0);
      u(this, "ws", undefined);
      u(this, "createSocket", undefined);
      u(this, "getCommonParams", undefined);
      u(this, "msgSent", false);
      u(this, "timeoutTimer", -1);
      u(this, "currentSentence", {
        text: "",
        sound: []
      });
      u(this, "getRealSpeechRate", () => {
        let e = this.speechRate;
        if (e >= 0.7 && e <= 2) {
          return Math.round((this.speechRate - 1) * 100);
        } else {
          return 0;
        }
      });
      u(this, "sendBufferToContent", () => {
        let e = new Blob(this.currentSentence.sound);
        let t = this.currentSentence.text;
        this.currentSentence.sound = [];
        let n = new FileReader();
        n.readAsDataURL(e);
        let i = this.order;
        this.order += 1;
        n.onloadend = () => {
          let e = n.result;
          c.emit(this.id, {
            type: "update",
            content: {
              order: i,
              url: e,
              text: t
            }
          });
          this.bufferSentCount += 1;
        };
      });
      u(this, "handleCurrentSentenceEnd", () => {
        this.joinBySentence = true;
        if (this.currentSentence.sound.length) {
          this.sendBufferToContent();
        }
      });
      u(this, "handleNewBlob", e => {
        this.resetTimeoutTimer();
        this.currentSentence.sound.push(e);
        if (!this.joinBySentence && this.currentSentence.sound.length > 5) {
          this.sendBufferToContent();
        }
      });
      u(this, "handleTTSMessageEnd", () => {
        var e;
        clearTimeout(this.timeoutTimer);
        if ((e = this.ws) !== null && e !== undefined) {
          e.close();
        }
        if (this.bufferSentCount === this.order) {
          c.emit(this.id, {
            type: "finished",
            content: this.order
          });
        } else {
          setTimeout(this.handleTTSMessageEnd, 300);
        }
      });
      u(this, "handleErrorMsg", (e, t) => {
        c.emit(this.id, {
          type: "error",
          content: `TTS SERVER ERROR - ${e} : ${t}`
        });
      });
      u(this, "handleMessage", e => {
        let {
          data: t
        } = e;
        if (isStringTypeCheck.isString(t)) {
          let e = JSON.parse(t);
          if (e.event === "finish") {
            this.handleTTSMessageEnd();
          }
          if (e.event === "sentence_start") {
            this.currentSentence.text = (e == null ? undefined : e.sentence_start_result?.readable_text) || "";
          }
          if (e.event === "sentence_end") {
            this.handleCurrentSentenceEnd();
          }
          if (e.message) {
            this.handleErrorMsg(e.code, e.message);
          }
        } else {
          this.handleNewBlob(t);
        }
      });
      u(this, "createWS", async () => {
        var e;
        var t;
        let n = emptyExportFunction.emptyFunction;
        let i = d({
          speaker: this.speakerId || "",
          format: "aac",
          speech_rate: this.getRealSpeechRate(),
          pitch: this.pitch,
          ...((e = this.getCommonParams) === null || e === undefined ? undefined : e.call(this))
        });
        let r = `wss://ws-samantha.doubao.com/samantha/audio/tts?${i}`;
        this.ws = ((t = this.createSocket) === null || t === undefined ? undefined : t.call(this, r)) || new WebSocket(r);
        this.ws.addEventListener("error", () => {
          this.handleErrorMsg(1204, "ws error");
        });
        this.ws.addEventListener("message", this.handleMessage);
        this.ws.addEventListener("open", () => {
          n();
        });
        return new Promise(e => {
          n = e;
        });
      });
      u(this, "resetTimeoutTimer", () => {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = setTimeout(() => {
          this.handleTTSMessageEnd();
        }, 120000);
      });
      u(this, "addText", async e => {
        var t;
        if (!this.ws) {
          await this.createWS();
        }
        if ((t = this.ws) !== null && t !== undefined) {
          t.send(JSON.stringify({
            event: "text",
            text: e
          }));
        }
        this.msgSent = true;
      });
      u(this, "sendFinish", () => {
        if (this.msgSent) {
          if (this.ws) {
            this.ws.send(JSON.stringify({
              event: "finish"
            }));
            this.ws.addEventListener("close", () => {
              h.destroyInstance(this.id);
            });
            this.resetTimeoutTimer();
          }
        } else {
          setTimeout(() => {
            this.sendFinish();
          }, 100);
        }
      });
      u(this, "getId", () => this.id);
      u(this, "stop", () => {
        if (this.ws) {
          this.ws.close();
          h.destroyInstance(this.id);
        }
      });
      this.id = e;
      this.speakerId = t;
      this.speechRate = n;
      this.pitch = i;
      this.createSocket = r;
      this.getCommonParams = o;
    }
  }
  function p(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  u(h, "instanceMap", new Map());
  u(h, "createNewInstance", e => {
    let t = new h(e);
    h.instanceMap.set(t.id, t);
    return t;
  });
  u(h, "getInstance", e => h.instanceMap.get(e));
  u(h, "destroyInstance", e => h.instanceMap.delete(e));
  class m {
    setSpeakerId(e) {
      this.speakerId = e;
    }
    finish() {
      if (this.running) {
        this.finished = true;
        let e = h.getInstance(this.id);
        if (e != null) {
          e.sendFinish();
        }
      } else {
        this.handleStartSuccess = this.finish;
      }
    }
    constructor({
      id: e,
      speechRate: t = 1,
      pitch: n = 0,
      createSocket: i,
      getCommonParams: r
    }) {
      p(this, "id", "");
      p(this, "running", false);
      p(this, "finished", false);
      p(this, "speakerId", "");
      p(this, "speechRate", 1);
      p(this, "pitch", 0);
      p(this, "handleStartSuccess", undefined);
      p(this, "createSocket", undefined);
      p(this, "getCommonParams", undefined);
      p(this, "msgCallback", undefined);
      p(this, "stopFetchSound", () => {
        let e = h.getInstance(this.id);
        if (e != null) {
          e.stop();
        }
        this.running = false;
      });
      p(this, "startFetchSound", () => {
        var e;
        if (this.finished) {
          throw Error("REQUEST TTS FINISHED, PLZ USE NEW INSTANCE");
        }
        h.createNewInstance({
          id: this.id,
          speakerId: this.speakerId,
          speechRate: this.speechRate,
          pitch: this.pitch,
          createSocket: this.createSocket,
          getCommonParams: this.getCommonParams
        });
        this.running = true;
        if ((e = this.handleStartSuccess) !== null && e !== undefined) {
          e.call(this);
        }
        c.on(this.id, this.msgCallback);
      });
      p(this, "sendText", e => {
        let t = h.getInstance(this.id);
        if (t != null) {
          t.addText(e);
        }
      });
      p(this, "readText", async (e, t) => {
        if (!this.running) {
          this.msgCallback = t;
          await this.startFetchSound();
        }
        await this.sendText(e);
      });
      p(this, "setSpeechRate", e => {
        this.speechRate = e;
      });
      p(this, "setPitch", e => {
        this.pitch = e;
      });
      p(this, "reset", async () => {
        await this.stopFetchSound();
        this.msgCallback = undefined;
      });
      this.id = e;
      this.speechRate = t;
      this.pitch = n;
      this.createSocket = i;
      this.getCommonParams = r;
    }
  }
  function f(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let g = [];
  class v {
    getCurrentTime() {
      return this.audioPlayer.getCurrentTime();
    }
    createAudioStreamLoader() {
      return new m({
        id: this.id,
        speechRate: this.speechRate,
        pitch: this.pitch,
        createSocket: this.createSocket,
        getCommonParams: this.getCommonParams
      });
    }
    constructor({
      speechRate: e = 1,
      pitch: t = 0,
      createSocket: n,
      getCommonParams: s
    }) {
      var l = this;
      f(this, "id", undefined);
      f(this, "isUpdatingCount", 0);
      f(this, "mustEndCount", 0);
      f(this, "running", false);
      f(this, "audioPlayer", new audioStreamManager.AudioStreamManager());
      f(this, "speakerId", "");
      f(this, "speechRate", 1);
      f(this, "pitch", 0);
      f(this, "finished", false);
      f(this, "audioStreamLoader", undefined);
      f(this, "createSocket", undefined);
      f(this, "getCommonParams", undefined);
      f(this, "handleStreamUpdate", async (e, t) => {
        this.isUpdatingCount += 1;
        this.mustEndCount = 0;
        try {
          let n = await fetch(e);
          let i = await n.arrayBuffer();
          this.audioPlayer.addData(i, t);
        } finally {
          this.isUpdatingCount -= 1;
        }
      });
      f(this, "handleStreamEnd", e => {
        if (this.isUpdatingCount > 0 && this.mustEndCount < 15) {
          this.mustEndCount++;
          setTimeout(() => {
            this.handleStreamEnd(e);
          }, 1000);
          return;
        }
        this.audioPlayer.addData(new ArrayBuffer(0), "", undefined, true);
      });
      f(this, "handleAudioData", e => {
        let {
          type: t,
          content: n
        } = e;
        if (t === "update") {
          let {
            url: e,
            text: t
          } = n;
          this.handleStreamUpdate(e, t || "");
        }
        if (t === "finished") {
          this.handleStreamEnd(n);
        }
        if (t === "error") {
          if (n.toString().includes("1204")) {
            this.stop("limited");
          } else {
            this.stop("error");
          }
        }
      });
      f(this, "stopOtherAudios", () => {
        if (!arrayValueFinder.valueFinder(g, e => e.id === this.id)) {
          g.push({
            id: this.id
          });
        }
        this.stopAllOtherAudios();
      });
      f(this, "readText", async e => {
        if (this.finished) {
          throw Error("[AudioStreamManager] FINISHED, PLZ USE NEW INSTANCE");
        }
        this.running = true;
        this.audioStreamLoader.setSpeakerId(this.speakerId);
        this.audioStreamLoader.setSpeechRate(this.speechRate);
        this.audioStreamLoader.setPitch(this.pitch);
        await this.audioStreamLoader.readText(e, this.handleAudioData);
      });
      f(this, "finishSendingText", () => {
        this.finished = true;
        this.audioStreamLoader.finish();
      });
      f(this, "destroy", () => {
        this.stop();
        this.audioPlayer.destroy();
      });
      f(this, "setSpeaker", e => {
        this.speakerId = e;
      });
      f(this, "setSpeechRate", e => {
        this.speechRate = e;
      });
      f(this, "setPitch", e => {
        this.pitch = e;
      });
      f(this, "play", async () => {
        this.stopOtherAudios();
        await this.audioPlayer.play();
      });
      f(this, "togglePlay", () => {
        this.stopOtherAudios();
        this.audioPlayer.togglePlay();
      });
      f(this, "pause", () => {
        this.audioPlayer.pause();
      });
      f(this, "stop", function (e = "") {
        if (l.running) {
          l.audioPlayer.stop(e);
          l.audioStreamLoader.reset();
          l.id = uuidGeneratorUtil.generateUuid();
          l.audioStreamLoader = l.createAudioStreamLoader();
        }
      });
      f(this, "stopAllOtherAudios", () => {
        g.forEach(e => {
          if (e.id !== this.id) {
            c.emit(e.id, {
              type: "stop"
            });
            arrayFilterExtractMatched.filterAndExtractMatched(g, t => t.id === e.id);
          }
        });
      });
      f(this, "onPlayEnd", this.audioPlayer.onPlayEnd);
      f(this, "onPlayStart", this.audioPlayer.onPlayStart);
      f(this, "onFirstPlayStart", this.audioPlayer.onFirstPlayStart);
      f(this, "onLoadStart", this.audioPlayer.onLoadStart);
      f(this, "onPlayPause", this.audioPlayer.onPlayPause);
      f(this, "onCurrentText", this.audioPlayer.onCurrentText);
      f(this, "onVolumeChange", this.audioPlayer.onVolumeChange);
      f(this, "getSpeakerId", () => this.speakerId);
      this.speechRate = e;
      this.pitch = t;
      this.createSocket = n;
      this.getCommonParams = s;
      this.id = uuidGeneratorUtil.generateUuid();
      c.on(this.id, e => {
        if (e.type === "stop") {
          this.stop("interrupted");
        }
      });
      this.audioStreamLoader = this.createAudioStreamLoader();
    }
  }
  require.d(exports, {
    AudioStreamManager: function () {
      return v;
    }
  });
}
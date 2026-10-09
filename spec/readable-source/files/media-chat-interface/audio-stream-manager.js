// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'AudioStreamManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58948.b1d5109e.js
         * chunkId: 58948
         * moduleId: 55094
         */
module.exports = function (module, exports, require) {
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  function a(e, t, n) {
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
  let s = e => new Promise(t => {
    setTimeout(t, e);
  });
  class l {
    constructor(e) {
      var t = this;
      a(this, "id", undefined);
      a(this, "firstPlayed", true);
      a(this, "looping", false);
      a(this, "stopped", false);
      a(this, "volumeTimer", null);
      a(this, "analyserNodes", []);
      a(this, "currentAnalyserIdx", 0);
      a(this, "startTime", 0);
      a(this, "stopReason", "");
      a(this, "played", false);
      a(this, "paused", true);
      a(this, "destroyed", false);
      a(this, "triggerTextChangeAtPlayStart", false);
      a(this, "audioCtx", undefined);
      a(this, "errorBufferIndex", -1);
      a(this, "handleAudioCtxSuspend", undefined);
      a(this, "handlePlayEnd", undefined);
      a(this, "handlePlayStart", undefined);
      a(this, "handleFirstPlayStart", undefined);
      a(this, "handlePlayPause", undefined);
      a(this, "handleLoadStart", undefined);
      a(this, "handleTextChange", undefined);
      a(this, "handleVolumeChange", undefined);
      a(this, "handleDecodeAudioDataError", undefined);
      a(this, "audioDataList", []);
      a(this, "currentDataIndex", 0);
      a(this, "trySuspend", () => {
        var e;
        if ((e = this.audioCtx) !== null && e !== undefined) {
          e.suspend().catch(() => {});
        }
      });
      a(this, "handleBufferEnd", e => {
        var n;
        var r;
        var o;
        var s;
        var l;
        if (this.stopped) {
          return;
        }
        let c = this.audioDataList[e + 1];
        if (c === undefined) {
          this.triggerTextChangeAtPlayStart = true;
        } else if ((n = this.handleTextChange) !== null && n !== undefined) {
          n.call(this, c.text, c.order);
        }
        if (this.errorBufferIndex >= 0 && e === this.errorBufferIndex - 1) {
          this.paused = true;
          let e = this.audioCtx?.currentTime || 0;
          if ((r = this.audioCtx) !== null && r !== undefined) {
            r.close();
          }
          if ((o = this.handlePlayEnd) !== null && o !== undefined) {
            o.call(this, "decodeError", e);
          }
          return;
        }
        if (this.audioDataList[e]?.isEndMessage || (c == null ? undefined : c.isEndMessage)) {
          this.paused = true;
          let e = this.audioCtx?.currentTime || 0;
          if ((s = this.audioCtx) !== null && s !== undefined) {
            s.close();
          }
          if ((l = this.handlePlayEnd) !== null && l !== undefined) {
            l.call(this, "completePlay", e);
          }
        }
      });
      a(this, "clearVolume", () => {
        if (this.volumeTimer) {
          cancelAnimationFrame(this.volumeTimer);
        }
        this.volumeTimer = null;
        this.currentAnalyserIdx = 0;
        this.analyserNodes = [];
      });
      a(this, "calcVolume", () => {
        var e;
        var t;
        var n;
        this.volumeTimer = requestAnimationFrame(this.calcVolume);
        if (!this.analyserNodes.length || this.paused || this.stopped) {
          if ((t = this.handleVolumeChange) !== null && t !== undefined) {
            t.call(this, 0);
          }
          return;
        }
        let i = this.analyserNodes[this.currentAnalyserIdx];
        if (!i) {
          if ((n = this.handleVolumeChange) !== null && n !== undefined) {
            n.call(this, 0);
          }
          return;
        }
        let r = new Float32Array(i.fftSize);
        i.getFloatTimeDomainData(r);
        let o = 0;
        for (let e of r) {
          o += e * e;
        }
        let a = Math.sqrt(o / r.length);
        if ((e = this.handleVolumeChange) !== null && e !== undefined) {
          e.call(this, a);
        }
      });
      a(this, "playAudioBuffer", (e, t, n) => {
        var r;
        var o;
        var a;
        var s;
        var l;
        if (this.paused || this.stopped) {
          return false;
        }
        let c = e.createBufferSource();
        c.buffer = t;
        c.loop = false;
        c.onended = () => {
          this.currentAnalyserIdx += 1;
          this.handleBufferEnd(n);
        };
        let d = e.createAnalyser();
        this.analyserNodes.push(d);
        c.connect(d);
        c.connect(e.destination);
        try {
          let e = this.audioCtx?.currentTime || 0;
          let t = e - this.startTime > 0;
          if (this.triggerTextChangeAtPlayStart) {
            if ((r = this.handleTextChange) !== null && r !== undefined) {
              r.call(this, this.audioDataList[n].text, this.audioDataList[n].order);
            }
            this.triggerTextChangeAtPlayStart = false;
          }
          if (t) {
            this.startTime = e;
          }
          c.start(this.startTime);
        } catch (e) {}
        if (e.state !== "running") {
          e.suspend();
          if ((o = this.handleAudioCtxSuspend) !== null && o !== undefined) {
            o.call(this);
          }
        } else if (this.firstPlayed) {
          this.firstPlayed = false;
          this.played = true;
          if ((a = this.handlePlayStart) !== null && a !== undefined) {
            a.call(this);
          }
          if ((s = this.handleTextChange) !== null && s !== undefined) {
            s.call(this, this.audioDataList[0].text, this.audioDataList[0].order);
          }
          if ((l = this.handleFirstPlayStart) !== null && l !== undefined) {
            l.call(this);
          }
          this.calcVolume();
        }
        this.startTime += t.duration;
        return true;
      });
      a(this, "loopPlay", async () => {
        if (this.looping || this.stopped || this.destroyed || this.paused) {
          return;
        }
        this.looping = true;
        if (this.audioDataList.length <= this.currentDataIndex) {
          await s(30);
          this.looping = false;
          this.loopPlay();
          return;
        }
        let {
          bufferData: e,
          isEndMessage: t
        } = this.audioDataList[this.currentDataIndex];
        if (t) {
          this.looping = false;
          return;
        }
        this.audioCtx ||= new AudioContext();
        let n = null;
        if (e.audioData) {
          n = e.audioData;
        } else {
          try {
            n = await this.audioCtx.decodeAudioData(e.buffer);
          } catch (e) {
            var i;
            if ((i = this.handleDecodeAudioDataError) !== null && i !== undefined) {
              i.call(this);
            }
            if (this.currentDataIndex === 0) {
              this.stop("error");
            }
            this.errorBufferIndex = this.currentDataIndex;
            this.looping = false;
            return;
          }
        }
        if (!n) {
          this.errorBufferIndex = this.currentDataIndex;
          this.looping = false;
          return;
        }
        e.audioData = n;
        if (!this.playAudioBuffer(this.audioCtx, n, this.currentDataIndex)) {
          await s(300);
          this.looping = false;
          this.loopPlay();
          return;
        }
        this.currentDataIndex += 1;
        this.looping = false;
        this.loopPlay();
      });
      a(this, "addSrc", async (e, t, n, i) => {
        if (!e) {
          this.addData(new ArrayBuffer(0), t, n, i);
          return;
        }
        let r = await fetch(e);
        let o = await r.arrayBuffer();
        this.addData(o, t, n, i);
      });
      a(this, "addData", (e, t, n, i) => {
        if (!this.stopped && !this.destroyed) {
          this.audioDataList.push({
            bufferData: {
              order: this.audioDataList.length,
              buffer: e
            },
            text: t,
            order: isUndefinedCheck.isUndefined(n) ? this.audioDataList.length : n,
            isEndMessage: i
          });
        }
      });
      a(this, "reset", () => {
        var e;
        var t;
        this.audioDataList = [];
        this.handlePlayEnd = undefined;
        this.paused = true;
        this.played = false;
        if ((e = this.audioCtx) !== null && e !== undefined) {
          e.suspend().catch(() => {});
        }
        if ((t = this.audioCtx) !== null && t !== undefined) {
          t.close().catch(() => {});
        }
        this.audioCtx = undefined;
        this.clearVolume();
      });
      a(this, "togglePlay", () => {
        if (this.paused) {
          this.play();
        } else {
          this.pause();
        }
      });
      a(this, "play", async () => {
        var e;
        var t;
        var n;
        if (this.stopped) {
          throw Error("[AudioStreamManager] STOPPED. please use new instance");
        }
        if (this.destroyed) {
          throw Error("[AudioStreamManager] DESTROYED. please use new instance");
        }
        if (this.played) {
          if ((t = this.handlePlayStart) !== null && t !== undefined) {
            t.call(this);
          }
        } else if ((n = this.handleLoadStart) !== null && n !== undefined) {
          n.call(this);
        }
        this.paused = false;
        if ((e = this.audioCtx) !== null && e !== undefined) {
          e.resume();
        }
        await this.loopPlay();
      });
      a(this, "pause", () => {
        var t;
        this.trySuspend();
        if (!this.paused) {
          if ((t = this.handlePlayPause) !== null && t !== undefined) {
            t.call(this, this.audioCtx?.currentTime || 0);
          }
          this.paused = true;
        }
      });
      a(this, "stop", function () {
        var n;
        let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        t.stopReason = i;
        t.stopped = true;
        t.trySuspend();
        if ((n = t.handlePlayEnd) !== null && n !== undefined) {
          n.call(t, i, t.audioCtx?.currentTime || 0);
        }
        t.clearVolume();
      });
      a(this, "onLoadStart", e => {
        this.handleLoadStart = e;
      });
      a(this, "onPlayEnd", e => {
        this.handlePlayEnd = onceFunctionFactory.createOnce(e);
      });
      a(this, "onCurrentText", e => {
        this.handleTextChange = e;
      });
      a(this, "offCurrentText", () => {
        this.handleTextChange = undefined;
      });
      a(this, "onPlayStart", e => {
        this.handlePlayStart = e;
      });
      a(this, "onFirstPlayStart", e => {
        this.handleFirstPlayStart = e;
      });
      a(this, "onPlayPause", e => {
        this.handlePlayPause = e;
      });
      a(this, "onVolumeChange", e => {
        this.handleVolumeChange = e;
      });
      a(this, "onAudioCtxSuspend", e => {
        this.handleAudioCtxSuspend = e;
      });
      a(this, "onDecodeAudioDataError", e => {
        this.handleDecodeAudioDataError = e;
      });
      a(this, "destroy", () => {
        this.reset();
        this.destroyed = true;
      });
      a(this, "getCurrentTime", () => {
        return this.audioCtx?.currentTime || 0;
      });
      a(this, "offListeners", () => {
        this.handleAudioCtxSuspend = undefined;
        this.handlePlayEnd = undefined;
        this.handlePlayStart = undefined;
        this.handleFirstPlayStart = undefined;
        this.handlePlayPause = undefined;
        this.handleLoadStart = undefined;
        this.handleTextChange = undefined;
        this.handleVolumeChange = undefined;
        this.handleDecodeAudioDataError = undefined;
      });
      a(this, "getIfReady", () => true);
      a(this, "getIsPlaying", () => !this.paused && !this.stopped);
      this.id = e || uuidGeneratorUtil.generateUuid();
    }
  }
  require.d(exports, {
    AudioStreamManager: function () {
      return l;
    }
  });
}
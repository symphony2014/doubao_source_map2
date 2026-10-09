// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'PodcastPlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 701810
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var messageWidgetDataUtils = require("message-widget-data-utils") /*id: 233546*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  (n = {})[n.NotPlayed = 0] = "NotPlayed";
  n[n.Playing = 1] = "Playing";
  n[n.Paused = 2] = "Paused";
  n[n.Finished = 3] = "Finished";
  n[n.Failed = 4] = "Failed";
  n[n.Loading = 5] = "Loading";
  let k = n;
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  function j(e) {
    if (!e) {
      return false;
    }
    try {
      let t = queryStringUtils_2_1.queryStringUtils.parseUrl(e).query;
      let r = t["x-orig-expires"];
      let n = t["x-expires"];
      let i = r || n;
      if (!i) {
        return false;
      }
      let a = parseInt(i, 10);
      if (isNaN(a)) {
        return false;
      }
      let o = a < 10000000000 ? a * 1000 : a;
      let s = Date.now();
      if (s >= o || o - s < 43200000) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  let S = e => {
    let {
      podcast_cover_thumbnail: t,
      playback_model: r
    } = (e == null ? undefined : e.meta) || {};
    return !!j(t) || j(r == null ? undefined : r.audio_link);
  };
  function E(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class R {
    start() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.retryCount = 0;
        this.pollCount = 0;
        this.startTime = Date.now();
        this.executePolling();
      }
    }
    cancel() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.isRunning = false;
    }
    get interval() {
      return this.intervalFn(this);
    }
    executePolling() {
      if (this.isRunning && !this.isFetching) {
        if (this.getElapsedTime() >= this.maxPollingTime && this.checkPollingFail()) {
          var e;
          if ((e = this.onRejectCallback) !== null && e !== undefined) {
            e.call(this, Error("Max polling time exceeded"));
          }
          this.cancel();
          return;
        }
        this.pollCount++;
        this.isFetching = true;
        this.fetchFn().then(e => {
          this.retryCount = 0;
          if (this.onResolveCallback) {
            this.onResolveCallback(e);
          }
          this.scheduleNextPoll();
        }).catch(e => {
          this.retryCount++;
          if (this.retryCount >= this.maxRetries) {
            if (this.onRejectCallback) {
              this.onRejectCallback(e);
            }
            this.cancel();
            return;
          }
          this.scheduleNextPoll();
        }).finally(() => {
          this.isFetching = false;
        });
      }
    }
    scheduleNextPoll() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.isRunning) {
        this.timer = setTimeout(() => {
          this.executePolling();
        }, this.interval);
      }
    }
    getRetryCount() {
      return this.retryCount;
    }
    getElapsedTime() {
      return (Date.now() - this.startTime) / 1000;
    }
    getPollCount() {
      return this.pollCount;
    }
    constructor(e) {
      E(this, "fetchFn", undefined);
      E(this, "maxRetries", undefined);
      E(this, "retryCount", 0);
      E(this, "pollCount", 0);
      E(this, "intervalFn", undefined);
      E(this, "timer", null);
      E(this, "isRunning", false);
      E(this, "onResolveCallback", undefined);
      E(this, "onRejectCallback", undefined);
      E(this, "startTime", 0);
      E(this, "maxPollingTime", 30);
      E(this, "isFetching", false);
      E(this, "checkPollingFail", undefined);
      E(this, "forceFetch", async e => this.fetchFn(true, e));
      this.fetchFn = e.fetchFn;
      this.maxRetries = e.maxRetries ?? 2;
      this.intervalFn = e.interval;
      this.onResolveCallback = e.onResolve ?? null;
      this.onRejectCallback = e.onReject ?? null;
      this.checkPollingFail = e.checkPollingFail ?? (() => false);
    }
  }
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  async function P(e, t) {
    try {
      let i;
      try {
        i = chatUserInfoActions.getUserInfo()?.user_id_str;
      } catch (e) {}
      let a = {
        scene: "FPA_Podcast",
        payload: JSON.stringify({
          api_name: e,
          params: JSON.stringify(t)
        })
      };
      let {
        data: o
      } = await serviceRequestHelpers.normalRequest({
        method: "POST",
        url: "/api/doubao/do_action_v2",
        data: a,
        params: {
          uid: i
        }
      }, {
        overrideConfig: {
          ignoreResponseInterceptors: true
        }
      });
      if ((o == null ? undefined : o.code) !== 0 || !o.data?.resp || !o.data.success) {
        throw Error(`ai podcast request failed: 
 ${JSON.stringify(o)}`);
      }
      return JSON.parse(o.data.resp);
    } catch (e) {
      throw Error(e);
    }
  }
  let I = e => P("GetGenPodcastDetail", e);
  let $ = e => P("ReportMsgIDByEpisodeID", e);
  let A = e => P("GetGenPodcastVideoUrl", e);
  let O = e => e.getPollCount() < 10 ? 1000 : 5000;
  let F = e => {
    let t = new R({
      fetchFn: async (r, n) => {
        let {
          getIsGenerated: i,
          updateState: a,
          getPodcast: o,
          handleSwitchPlayer: s
        } = e();
        let {
          podcast: l
        } = e();
        if (!l) {
          return;
        }
        let c = await I({
          id: l.id,
          ...(n && {
            referer: location.href
          })
        });
        if (i() && !r) {
          t.cancel();
          return;
        }
        let d = c.episode;
        let u = o();
        if (messageWidgetDataUtils.shouldUpdateMessage(u, d)) {
          a(e => {
            e.localPodcast = d;
          });
          if (i()) {
            s();
            t.cancel();
          }
        }
      },
      interval: O,
      checkPollingFail: () => {
        let {
          getIsLoading: t
        } = e();
        return t();
      },
      onReject: () => {
        let {
          updateState: t,
          getIsLoading: r
        } = e();
        if (r()) {
          t(e => {
            e.pollingError = true;
          });
        }
      }
    });
    return t;
  };
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var sseClientFactory = require("sse-client-factory") /*id: 474279*/;
  let B = e => {
    let t = new URLSearchParams();
    Object.keys(e).forEach(r => {
      let n = e[r];
      t.append(r, String(n));
    });
    return t.toString();
  };
  function L(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class Z {
    constructor(e) {
      var t = this;
      L(this, "options", undefined);
      L(this, "sseInstance", undefined);
      L(this, "fetchData", async function (e = {}) {
        return new Promise((r, n) => {
          let {
            getCommonParams: i,
            onOpen: a,
            onError: o,
            onMessage: s,
            onClose: l
          } = t.options;
          let c = B({
            ...e,
            gen_type: 1,
            encode_type: "text/event-stream",
            ...(i == null ? undefined : i())
          });
          t.sseInstance = sseClientFactory.createSseClient(`/chat/podcast/chunk?${c}`, {
            method: "POST",
            headers: [["content-type", "application/json"]],
            credentials: "same-origin",
            onError: e => {
              if (o != null) {
                o(e);
              }
              n(e);
            },
            onMessage: e => {
              if (s != null) {
                s(e);
              }
            },
            onOpen: e => {
              if (a != null) {
                a(e);
              }
              r(e);
            },
            onClose: l
          });
        });
      });
      L(this, "cancelFetch", () => {
        var e;
        if ((e = this.sseInstance) !== null && e !== undefined) {
          e.cancel();
        }
      });
      L(this, "getSSEInstance", () => this.sseInstance);
      this.options = e;
    }
  }
  function W(e, t, r) {
    for (let n = 0; n < r.length; n++) {
      e.setUint8(t + n, r.charCodeAt(n));
    }
  }
  let U = e => {
    let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
    let r = 0;
    e.forEach(e => {
      t.set(e, r);
      r += e.length;
    });
    return t;
  };
  function H(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class z {
    constructor(e) {
      this.options = e;
      H(this, "startFetchStreamData", e => {
        throw Error("startFetchStreamData must be implemented");
      });
      H(this, "retryLoadStream", () => {
        throw Error("retryLoadStream must be implemented");
      });
      H(this, "destroy", () => {
        throw Error("destroy must be implemented");
      });
      this.options = Object.assign({}, e, {
        chunkSize: 10
      });
    }
  }
  function V(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class J extends z {
    constructor(e) {
      super(e);
      V(this, "fetchStreamReqParams", undefined);
      V(this, "retryCount", 0);
      V(this, "status", "init");
      V(this, "audioStreamSSEInstance", undefined);
      V(this, "soundBuffer", {
        sound: []
      });
      V(this, "receivedBufferIndex", -1);
      V(this, "sendPlayerBufferCount", 0);
      V(this, "setStatus", e => {
        if (this.status !== e) {
          this.status = e;
        }
      });
      V(this, "initSSE", () => {
        let {
          getCommonParams: e
        } = this.options;
        this.audioStreamSSEInstance = new Z({
          onError: e => {
            var t;
            if (e == null || (t = e.name) === null || t === undefined || !t.includes("AbortError")) {
              this.handleError({
                type: "fetch_error",
                msg: (e == null ? undefined : e.message) || "fetch_error"
              });
            }
          },
          getCommonParams: e,
          onMessage: this.handleMessage
        });
      });
      V(this, "handleError", e => {
        if (this.retryCount < 3) {
          this.retryCount++;
          this.retryLoadStream();
          return;
        }
        let {
          onError: t
        } = this.options;
        this.setStatus("ended");
        if (t != null) {
          t({
            errorInfo: {
              type: (e == null ? undefined : e.type) || "unknown",
              msg: (e == null ? undefined : e.msg) || "unknown"
            },
            errorBufferIndex: this.receivedBufferIndex + 1
          });
        }
      });
      V(this, "handleMessage", e => {
        try {
          if (this.status === "ended") {
            return;
          }
          if (e.event === "json" && e.data) {
            this.handleNewBuffer(e.data, Number(e.id || "0"));
          }
          if (e.event === "done") {
            this.handleBufferStreamEnd();
          }
        } catch (e) {
          this.handleError({
            type: "handle_message_error",
            msg: (e == null ? undefined : e.message) || "handle_message_error"
          });
        }
      });
      V(this, "handleNewBuffer", (e, t) => {
        let r = function (e) {
          while (e.length % 4 != 0) {
            e += "=";
          }
          let t = atob(e);
          let r = new Uint8Array(new ArrayBuffer(t.length));
          for (let e = 0; e < t.length; e++) {
            r[e] = t.charCodeAt(e);
          }
          return r;
        }(e);
        this.soundBuffer.sound.push(r.slice(0));
        this.receivedBufferIndex = t;
        let {
          chunkSize: n = 10
        } = this.options;
        if (this.soundBuffer.sound.length >= n) {
          this.sendWavDataToPlayer();
        }
      });
      V(this, "sendWavDataToPlayer", () => {
        this.sendPlayerBufferCount++;
        let {
          onAudioStreamUpdate: e
        } = this.options;
        let t = function (e, t = 24000, r = 1, n = 16) {
          let i = e.length;
          let a = new ArrayBuffer(44 + i);
          let o = new DataView(a);
          W(o, 0, "RIFF");
          o.setUint32(4, 44 + i - 8, true);
          W(o, 8, "WAVE");
          W(o, 12, "fmt ");
          o.setUint32(16, 16, true);
          o.setUint16(20, 1, true);
          o.setUint16(22, r, true);
          o.setUint32(24, t, true);
          o.setUint32(28, t * r * (n / 8), true);
          o.setUint16(32, n / 8 * r, true);
          o.setUint16(34, n, true);
          W(o, 36, "data");
          o.setUint32(40, i, true);
          let s = new Uint8Array(a);
          s.set(e, 44);
          return s;
        }(U(this.soundBuffer.sound));
        if (e != null) {
          e({
            audioArrayBuffer: t.buffer.slice(0)
          });
        }
        this.soundBuffer.sound = [];
      });
      V(this, "handleBufferStreamEnd", () => {
        if (this.status === "ended") {
          return;
        }
        let {
          onAudioStreamEnd: e
        } = this.options;
        if (this.soundBuffer.sound.length) {
          this.sendWavDataToPlayer();
        }
        if (e != null) {
          e({
            totalBufferCount: this.sendPlayerBufferCount
          });
        }
        this.setStatus("ended");
      });
      V(this, "startFetchStreamData", async e => {
        var t;
        if (this.status !== "fetching") {
          this.setStatus("fetching");
          this.fetchStreamReqParams = e;
          this.receivedBufferIndex = Number((e == null ? undefined : e.seq_no) || 0) - 1;
          await ((t = this.audioStreamSSEInstance) === null || t === undefined ? undefined : t.fetchData(e));
        }
      });
      V(this, "retryLoadStream", async () => {
        var e;
        this.setStatus("fetching");
        await ((e = this.audioStreamSSEInstance) === null || e === undefined ? undefined : e.fetchData({
          ...(this.fetchStreamReqParams || {}),
          seq_no: this.receivedBufferIndex + 1
        }));
      });
      V(this, "destroy", () => {
        if (this.status === "fetching") {
          var e;
          if ((e = this.audioStreamSSEInstance) !== null && e !== undefined) {
            e.cancelFetch();
          }
        }
        this.setStatus("ended");
        this.retryCount = 0;
        this.fetchStreamReqParams = {};
        this.sendPlayerBufferCount = 0;
        this.receivedBufferIndex = -1;
        this.soundBuffer = {
          sound: []
        };
      });
      this.initSSE();
    }
  }
  function X(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class q {
    constructor(e, t) {
      this.player = e;
      this.options = t;
      X(this, "timerID", undefined);
      X(this, "monitorPlayBackFluency", debounceUtilWrapper.createDebounce(async () => {
        let {
          interval: e = 0.5,
          onWaitingEnd: t,
          onWaiting: r
        } = this.options.playBackFluencyOptions || {};
        let n = this.player.getCurrentTime();
        if (n - this.player.getDuration() >= e) {
          await this.player.pauseAudioContext();
          if (r != null) {
            r();
          }
        } else {
          this.player.resumeAudioContext();
          if (t != null) {
            t();
          }
        }
      }, 50, {
        trailing: false
      }));
      X(this, "monitorPlayTime", debounceUtilWrapper.createDebounce(() => {
        if (this.player.getStatus() === "waiting") {
          return;
        }
        let {
          onPlayTimeUpdate: e
        } = this.options.playTimeOptions || {};
        if (e != null) {
          e({
            currentTime: Number(this.player.getCurrentTime().toFixed(3))
          });
        }
      }, 50, {
        trailing: false
      }));
      X(this, "startMonitor", () => {
        var e;
        if (!["paused", "ended", "init"].includes((e = this.player) === null || e === undefined ? undefined : e.getStatus())) {
          this.monitorPlayBackFluency();
          this.monitorPlayTime();
          this.timerID = requestAnimationFrame(this.startMonitor);
        }
      });
      X(this, "endMonitor", () => {
        if (this.timerID) {
          cancelAnimationFrame(this.timerID);
          this.timerID = undefined;
        }
      });
      this.player = e;
      this.options = t;
    }
  }
  let G = e => new Promise(t => {
    setTimeout(t, e);
  });
  function Q(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class K {
    constructor(e) {
      this.options = e;
      Q(this, "firstPlayed", true);
      Q(this, "status", "init");
      Q(this, "error", null);
      Q(this, "alreadyParseComplete", false);
      Q(this, "startTime", 0);
      Q(this, "realDuration", 0);
      Q(this, "audioCtx", undefined);
      Q(this, "errorBufferIndex", -1);
      Q(this, "audioDataList", []);
      Q(this, "totalBufferCount", -1);
      Q(this, "currentBufferIndex", 0);
      Q(this, "playerMonitor", undefined);
      Q(this, "initMonitor", () => {
        let {
          onPlayTimeUpdate: e
        } = this.options;
        this.playerMonitor = new q(this, {
          playTimeOptions: {
            onPlayTimeUpdate: e
          },
          playBackFluencyOptions: {
            onWaiting: this.handleWaiting,
            onWaitingEnd: () => {
              this.setStatus("playing");
            }
          }
        });
      });
      Q(this, "handlePlayEnd", async () => {
        var e;
        this.setStatus("ended");
        if ((e = this.audioCtx) !== null && e !== undefined) {
          e.close();
        }
        let {
          onPlayEnd: n
        } = this.options;
        if (n != null) {
          n({
            currentTime: this.audioCtx?.currentTime || 0,
            totalDuration: this.audioCtx?.currentTime || 0
          });
        }
        await this.destroyAudioCtx();
        this.resetState({
          status: "ended"
        });
      });
      Q(this, "handleEveryBufferEnd", e => {
        if (this.status !== "ended") {
          if (this.errorBufferIndex >= 0 && e === this.errorBufferIndex) {
            this.handlePlayError({
              error: {
                type: this.error?.type || "unknow",
                msg: this.error?.msg || "unknow"
              },
              errorBufferIndex: this.errorBufferIndex
            });
          } else if (e === this.totalBufferCount - 1) {
            this.handlePlayEnd();
          }
        }
      });
      Q(this, "playAudioBuffer", (e, t, r) => {
        if (["paused", "ended", "destroyed"].includes(this.status)) {
          return false;
        }
        let n = e.createBufferSource();
        this.realDuration += t.duration;
        n.buffer = t;
        n.loop = false;
        n.onended = () => {
          this.handleEveryBufferEnd(r);
        };
        let {
          onFirstPlayStart: i,
          onPlayStart: a
        } = this.options;
        e.onstatechange = () => {
          if (e.state === "running") {
            if (a != null) {
              a();
            }
            this.playerMonitor.startMonitor();
          }
        };
        n.connect(e.destination);
        try {
          let e = this.audioCtx?.currentTime || 0;
          if (e - this.startTime > 0) {
            this.startTime = e;
          }
          n.start(this.startTime);
        } catch (e) {}
        if (e.state !== "running") {
          e.suspend();
        } else {
          this.playerMonitor.startMonitor();
          if (this.firstPlayed) {
            this.firstPlayed = false;
            if (i != null) {
              i();
            }
            if (a != null) {
              a();
            }
          }
        }
        this.startTime += t.duration;
        return true;
      });
      Q(this, "handleWaiting", () => {
        this.setStatus("waiting");
        let {
          onWaiting: e
        } = this.options;
        if (e != null) {
          e();
        }
      });
      Q(this, "loopCreateStreamBufferAndPlay", async () => {
        if (this.totalBufferCount !== -1 && this.currentBufferIndex >= this.totalBufferCount) {
          this.alreadyParseComplete = true;
          return;
        }
        if (["paused", "ended", "destroyed"].includes(this.status) || this.alreadyParseComplete) {
          return;
        }
        if (this.audioDataList.length === 0) {
          this.handleWaiting();
          await G(50);
          this.loopCreateStreamBufferAndPlay();
          return;
        }
        if (this.audioDataList.length > 0 && this.currentBufferIndex >= this.audioDataList.length) {
          await G(50);
          this.loopCreateStreamBufferAndPlay();
          return;
        }
        this.setStatus("playing");
        let e = this.audioDataList[this.currentBufferIndex];
        if (!this.audioCtx) {
          this.audioCtx = new AudioContext();
          this.audioCtx.resume();
        }
        let t = null;
        if (e.audioBufferData) {
          t = e.audioBufferData;
        } else {
          try {
            if (!(t = await this.audioCtx.decodeAudioData(e.audioArraybuffer))) {
              throw Error("decode_error, no audio buffer");
            }
          } catch (e) {
            this.errorBufferIndex = this.currentBufferIndex;
            this.handlePlayError({
              error: {
                type: "decode_error",
                msg: (e == null ? undefined : e.message) || "decode error"
              },
              errorBufferIndex: this.currentBufferIndex
            });
            return;
          }
        }
        e.audioBufferData = t;
        if (!this.playAudioBuffer(this.audioCtx, t, this.currentBufferIndex)) {
          await G(300);
          this.loopCreateStreamBufferAndPlay();
          return;
        }
        this.currentBufferIndex += 1;
        this.loopCreateStreamBufferAndPlay();
      });
      Q(this, "setStatus", e => {
        if (this.status === e) {
          return;
        }
        let {
          onStatusChange: t
        } = this.options;
        if (!["init", "start_play"].includes(e) && t != null) {
          t(e);
        }
        this.status = e;
      });
      Q(this, "resetState", e => {
        let {
          status: t
        } = e || {
          status: "init"
        };
        this.alreadyParseComplete = false;
        this.audioCtx = undefined;
        this.audioDataList = [];
        this.errorBufferIndex = -1;
        this.currentBufferIndex = 0;
        this.totalBufferCount = -1;
        this.error = null;
        this.firstPlayed = false;
        this.realDuration = 0;
        this.startTime = 0;
        this.setStatus(t);
        this.playerMonitor.endMonitor();
      });
      Q(this, "handlePlayError", e => {
        var t;
        let {
          error: r,
          errorBufferIndex: n
        } = e;
        let {
          onPlayError: i
        } = this.options;
        this.error = r;
        if (i != null) {
          i({
            error: r,
            errorBufferIndex: n
          });
        }
        this.setStatus("ended");
        this.pauseAudioContext();
        if ((t = this.audioCtx) !== null && t !== undefined) {
          t.close();
        }
        this.playerMonitor.endMonitor();
      });
      Q(this, "addData", e => {
        if (this.status !== "ended") {
          this.audioDataList.push({
            audioArraybuffer: e
          });
        }
      });
      Q(this, "togglePlay", () => {
        if (["init", "paused", "ended", "destroyed"].includes(this.status)) {
          this.play();
        } else if (["start_play", "playing", "waiting"].includes(this.status)) {
          this.pause();
        }
      });
      Q(this, "play", async () => {
        if (["init", "paused", "ended", "destroyed"].includes(this.status)) {
          var e;
          this.setStatus("start_play");
          await ((e = this.audioCtx) === null || e === undefined ? undefined : e.resume());
          await this.loopCreateStreamBufferAndPlay();
        }
      });
      Q(this, "pause", () => {
        if (["start_play", "playing", "waiting"].includes(this.status)) {
          this.playerMonitor.endMonitor();
          let {
            onPause: t
          } = this.options;
          if (t != null) {
            t(this.audioCtx?.currentTime || 0);
          }
          this.setStatus("paused");
          this.pauseAudioContext();
        }
      });
      Q(this, "pauseAudioContext", async () => {
        var t;
        if (this.audioCtx?.state === "running") {
          await ((t = this.audioCtx) === null || t === undefined ? undefined : t.suspend().catch(() => {}));
        }
      });
      Q(this, "resumeAudioContext", async () => {
        var t;
        if (this.audioCtx?.state !== "running") {
          await ((t = this.audioCtx) === null || t === undefined ? undefined : t.resume().catch(() => {}));
        }
      });
      Q(this, "setTotalBufferCount", e => {
        this.totalBufferCount = e;
      });
      Q(this, "destroyAudioCtx", async () => {
        var e;
        var t;
        await ((e = this.audioCtx) === null || e === undefined ? undefined : e.suspend().catch(() => {}));
        await ((t = this.audioCtx) === null || t === undefined ? undefined : t.close().catch(() => {}));
      });
      Q(this, "destroy", async () => {
        await this.destroyAudioCtx();
        this.resetState({
          status: "destroyed"
        });
      });
      Q(this, "getCurrentTime", () => {
        return this.audioCtx?.currentTime || 0;
      });
      Q(this, "getDuration", () => this.startTime || 0);
      Q(this, "getStatus", () => this.status);
      this.options = e;
      this.initMonitor();
    }
  }
  function Y(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class ee {
    createPlayer() {
      let e = this.createStreamPlayerOptions();
      this.player = new K(e);
    }
    createLoader() {
      let e = this.createStreamLoaderOptions();
      this.streamLoader = new z(e);
    }
    play(e) {
      if (["init", "ended", "destroyed"].includes(this.player.getStatus())) {
        this.streamLoader.startFetchStreamData(e);
      }
      this.player.play();
    }
    pause() {
      this.player.pause();
    }
    constructor(e) {
      Y(this, "playerOptions", undefined);
      Y(this, "loaderOptions", undefined);
      Y(this, "player", undefined);
      Y(this, "streamLoader", undefined);
      Y(this, "init", () => {
        this.createPlayer();
        this.createLoader();
      });
      Y(this, "createStreamLoaderOptions", () => {
        let {
          onAudioStreamEnd: e,
          onAudioStreamUpdate: t,
          onError: r,
          ...n
        } = this.loaderOptions;
        return {
          onAudioStreamUpdate: e => {
            var r;
            if (t != null) {
              t(e);
            }
            if ((r = this.player) !== null && r !== undefined) {
              r.addData(e.audioArrayBuffer);
            }
          },
          onAudioStreamEnd: t => {
            var r;
            if (e != null) {
              e(t);
            }
            if ((r = this.player) !== null && r !== undefined) {
              r.setTotalBufferCount(t.totalBufferCount);
            }
          },
          onError: e => {
            let {
              errorBufferIndex: t,
              errorInfo: n
            } = e;
            this.player.pause();
            if (r != null) {
              r({
                errorBufferIndex: t,
                errorInfo: n
              });
            }
          },
          ...n
        };
      });
      Y(this, "createStreamPlayerOptions", () => {
        let {
          onPlayEnd: e,
          ...t
        } = this.playerOptions;
        return {
          onPlayEnd: t => {
            if (e != null) {
              e(t);
            }
            this.streamLoader.destroy();
          },
          ...t
        };
      });
      Y(this, "retryLoadStreamAndPlay", () => {
        this.streamLoader.retryLoadStream();
        this.player.play();
      });
      Y(this, "destroy", () => {
        this.streamLoader.destroy();
        this.player.destroy();
      });
      let {
        streamLoaderOptions: t,
        streamPlayerOptions: r
      } = e;
      this.loaderOptions = t;
      this.playerOptions = r;
      this.init();
    }
  }
  class et extends ee {
    createLoader() {
      let e = this.createStreamLoaderOptions();
      this.streamLoader = new J(e);
    }
  }
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  function en(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class ei {
    init() {
      this.initEventListener();
    }
    initEventListener() {
      this.audio.addEventListener("canplay", this.handleCanPlay.bind(this));
      this.audio.addEventListener("play", this.handlePlay.bind(this));
      this.audio.addEventListener("pause", this.handlePause.bind(this));
      this.audio.addEventListener("ended", this.handleEnded.bind(this));
      this.audio.addEventListener("timeupdate", this.handleTimeUpdate.bind(this));
      this.audio.addEventListener("error", this.handleError.bind(this));
      this.audio.addEventListener("loadedmetadata", this.handleLoadedMetadata.bind(this));
      this.audio.addEventListener("waiting", this.handleWaiting.bind(this));
    }
    getPlaySrc() {
      return this.audio.src;
    }
    play() {
      if (this.audio.paused) {
        this.audio.play().then(() => {
          this.isPlaying = true;
        }).catch(e => this.emitEvent("error", e));
      }
    }
    pause() {
      if (!this.audio.paused) {
        this.audio.pause();
        this.isPlaying = false;
      }
    }
    togglePlayPause() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }
    seekTo(e) {
      this.audio.currentTime = Math.max(0, Math.min(this.getDuration(), e));
    }
    fastForward(e = this.defaultSeekStep) {
      this.seekTo(this.audio.currentTime + e);
    }
    rewind(e = this.defaultSeekStep) {
      this.seekTo(this.audio.currentTime - e);
    }
    setVolume(e) {
      this.audio.volume = Math.max(0, Math.min(1, e));
    }
    increaseVolume(e = 0.1) {
      this.setVolume(this.audio.volume + e);
    }
    decreaseVolume(e = 0.1) {
      this.setVolume(this.audio.volume - e);
    }
    mute() {
      this.audio.muted = true;
    }
    unmute() {
      this.audio.muted = false;
    }
    toggleMute() {
      this.audio.muted = !this.audio.muted;
    }
    setPlaybackRate(e) {
      this.audio.playbackRate = Math.max(0.5, Math.min(4, e));
    }
    getCurrentTime() {
      return this.audio.currentTime;
    }
    getDuration() {
      return this.audio.duration || 0;
    }
    getVolume() {
      return this.audio.volume;
    }
    getPlaybackRate() {
      return this.audio.playbackRate;
    }
    isMuted() {
      return this.audio.muted;
    }
    on(e, t) {
      if (this.eventListeners[e]) {
        this.eventListeners[e].push(t);
      }
      return this;
    }
    off(e, t) {
      this.eventListeners[e] &&= this.eventListeners[e].filter(e => e !== t);
      return this;
    }
    emitEvent(e, t) {
      if (this.eventListeners[e]) {
        this.eventListeners[e].forEach(e => e(t));
      }
    }
    handlePlay() {
      this.isPlaying = true;
      this.emitEvent("play");
    }
    handlePause() {
      this.isPlaying = false;
      this.emitEvent("pause");
    }
    handleEnded() {
      this.isPlaying = false;
      this.emitEvent("ended");
    }
    handleTimeUpdate() {
      this.emitEvent("timeupdate", {
        currentTime: this.audio.currentTime,
        duration: this.audio.duration
      });
    }
    handleError(e) {
      this.emitEvent("error", e);
    }
    handleLoadedMetadata() {
      this.emitEvent("loadedmetadata", {
        duration: this.audio.duration
      });
    }
    handleWaiting(e) {
      this.emitEvent("waiting", e);
    }
    handleCanPlay() {
      this.emitEvent("canplay");
    }
    destroy() {
      this.pause();
      this.audio.src = "";
      Object.keys(this.eventListeners).forEach(e => {
        this.eventListeners[e] = [];
      });
      this.audio.removeEventListener("play", this.handlePlay);
      this.audio.removeEventListener("pause", this.handlePause);
      this.audio.removeEventListener("ended", this.handleEnded);
      this.audio.removeEventListener("timeupdate", this.handleTimeUpdate);
      this.audio.removeEventListener("error", this.handleError);
      this.audio.removeEventListener("loadedmetadata", this.handleLoadedMetadata);
      this.audio.removeEventListener("canplay", this.handleCanPlay);
    }
    constructor() {
      en(this, "audio", undefined);
      en(this, "isPlaying", undefined);
      en(this, "defaultSeekStep", undefined);
      en(this, "eventListeners", undefined);
      en(this, "setPlaySrc", e => {
        this.audio.src = xssContentSanitizer.sanitizeUrl(e, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wWXhXa2RzZ*t4W$FuTlpXR3hzWTJrNW$tTnR%WFpaTWpsMFls-z$k$XhZ%W5OWldHeHNZMms1-0dKdF$te*xRel$3WXpKR2$Wb3pWbm89"
        });
        return this;
      });
      this.audio = new Audio();
      this.isPlaying = false;
      this.defaultSeekStep = 1;
      this.eventListeners = {
        play: [],
        pause: [],
        ended: [],
        timeupdate: [],
        error: [],
        loadedmetadata: [],
        waiting: [],
        canplay: []
      };
      this.init();
    }
  }
  (i = ea || {}).Play = "play";
  var ea = i;
  let eo = new eventEmitterWrapper_1.getEventEmitter();
  let es = e => `podcast_play_${e || ""}'}`;
  let el = e => {
    return {
      playing: k.Playing,
      paused: k.Paused,
      waiting: k.Loading,
      ended: k.Finished,
      destroyed: k.NotPlayed
    }[e] ?? k.NotPlayed;
  };
  let ec = e => {
    let {
      getStore: t
    } = e;
    return new et({
      streamLoaderOptions: {},
      streamPlayerOptions: {
        onStatusChange: e => {
          let r = t();
          let {
            updateState: n,
            getIsGenerated: i,
            currentStreamPlayTime: a,
            trackEvent: o,
            playStatus: s
          } = r;
          let l = e === "ended" && s !== k.Failed;
          n(t => {
            let r = el(e);
            t.playStatus = r;
          });
          let c = i();
          if (l) {
            n(e => {
              e.localTotalPlayTime = a;
            });
            o("podcast_play_finish", {
              end_type: "auto_complete",
              if_complete_play: "true",
              duration: Math.floor(a * 1000)
            });
          }
          if (l && !c) {
            r.refreshChat();
          }
        },
        onPlayTimeUpdate: debounceUtilWrapper.createDebounce(e => {
          let {
            updateState: r
          } = t();
          r(t => {
            t.currentStreamPlayTime = e.currentTime;
          });
        }, 200),
        onPlayError: () => {
          let {
            updateState: e
          } = t();
          e(e => {
            e.playStatus = k.Failed;
          });
        }
      }
    });
  };
  let ed = e => {
    let {
      getStore: t
    } = e;
    let r = new ei();
    r.on("timeupdate", debounceUtilWrapper.createDebounce(e => {
      let {
        updateState: n
      } = t();
      n(t => {
        let {
          currentTime: n,
          duration: i
        } = e;
        let a = Math.min(Math.max(n / i * 100, 0), 100);
        t.currentPlayTime = n;
        t.progress = a;
        t.playStatus = r.audio.paused ? k.Paused : k.Playing;
      });
    }, 200));
    r.on("ended", () => {
      let {
        updateState: e,
        trackEvent: r,
        currentPlayTime: n
      } = t();
      e(e => {
        e.playStatus = k.Finished;
      });
      r("podcast_play_finish", {
        end_type: "auto_complete",
        if_complete_play: "true",
        duration: Math.floor((n || 0) * 1000)
      });
    });
    r.on("error", () => {
      let {
        updateState: e
      } = t();
      e(e => {
        e.playStatus = k.Failed;
      });
    });
    r.on("waiting", () => {
      let {
        updateState: e
      } = t();
      e(e => {
        e.playStatus = k.Loading;
      });
    });
    r.on("play", () => {
      let {
        updateState: e
      } = t();
      e(e => {
        e.playStatus = k.Playing;
      });
    });
    r.on("pause", () => {
      let {
        updateState: e
      } = t();
      e(e => {
        e.playStatus = k.Paused;
      });
    });
    return r;
  };
  let eu = e => {
    let {
      playStatus: t,
      currentPlayTime: r
    } = e();
    return [k.Playing, k.Paused, k.Loading].includes(t) && !!r;
  };
  let eh = e => {
    let t;
    let r;
    let {
      initMsg: n,
      getStore: i
    } = e;
    let a = n == null ? undefined : n.content_obj;
    let o = ec(e);
    let s = ed(e);
    let {
      podcast: l
    } = messageWidgetDataUtils.parseWidgetData(a);
    let c = messageWidgetDataUtils.isNormalMessage(l);
    let d = es((n == null ? undefined : n.message_id) || "");
    let u = () => {
      var t;
      let {
        getPodcast: r
      } = i();
      let n = r();
      let a = n == null ? undefined : (t = n.meta) === null || t === undefined ? undefined : t.playback_model?.audio_link;
      return {
        isStream: !messageWidgetDataUtils.isNormalMessage(n),
        podcastUrl: a
      };
    };
    eo.on(ea.Play, e => {
      if (e !== d) {
        s.pause();
        o.pause();
      }
    });
    let h = !c;
    let p = {
      play: () => {
        var n;
        var l;
        eo.emit(ea.Play, d);
        let {
          playStatus: c,
          currentPlaySpeed: p
        } = i();
        if (!eu(i)) {
          let {
            isStream: e,
            podcastUrl: n
          } = u();
          h = e;
          if (e) {
            t = n;
          } else {
            r = n;
          }
        }
        if (h) {
          if (!t) {
            return;
          }
          let r = (n = queryStringUtils_2_1.queryStringUtils.parseUrl(t)) === null || n === undefined ? undefined : n.query?.resource_id;
          if (!r) {
            return;
          }
          o.play({
            resource_id: r
          });
          s.pause();
        } else {
          let e = r;
          if (!e) {
            let {
              getPodcast: t
            } = i();
            let n = t();
            r = e = n == null ? undefined : (l = n.meta) === null || l === undefined ? undefined : l.playback_model?.audio_link;
          }
          if (!e) {
            return;
          }
          let t = s.getPlaySrc();
          if (c === k.Failed && t === e) {
            s.setPlaySrc("");
            s.setPlaySrc(e);
          }
          if (!s.getPlaySrc()) {
            s.setPlaySrc(e);
          }
          o.pause();
          s.play();
          if (s.getPlaybackRate() !== p) {
            s.setPlaybackRate(p);
          }
        }
      },
      pause: () => {
        let {
          trackEvent: e,
          currentPlayTime: t
        } = i();
        e("podcast_play_finish", {
          end_type: "user_end",
          if_complete_play: "false",
          duration: Math.floor((t || 0) * 1000)
        });
        if (h) {
          o.pause();
        } else {
          s.pause();
        }
      },
      playForward: e => {
        s.fastForward(e);
      },
      playBackword: e => {
        s.rewind(e);
      },
      setPlaySpeed: e => {
        s.setPlaybackRate(e);
      },
      seekTo: e => {
        let {
          updateState: t
        } = i();
        let n = s.getDuration();
        if (s.getPlaySrc()) {
          s.seekTo(e / 100 * n);
          t(t => {
            t.progress = e;
          });
          if (s.audio.paused) {
            p.play();
          }
        } else {
          p.play();
          let n = r;
          let a = () => undefined;
          let o = () => s.off("canplay", a);
          t(t => {
            t.progress = e;
          });
          a = () => {
            o();
            if (s.getPlaySrc() !== n) {
              return;
            }
            let t = i().getDuration() || 0;
            s.seekTo(e / 100 * t);
          };
          s.on("canplay", a);
        }
      },
      changePlayType: () => {
        h = !h;
      },
      destroy: () => {
        o.destroy();
        s.destroy();
      },
      switchPlayer: () => {
        let {
          currentStreamPlayTime: e,
          playStatus: t,
          updateState: n
        } = i();
        if (h && t === k.Playing) {
          p.play();
          let t = r;
          let a = () => undefined;
          let o = () => s.off("canplay", a);
          a = () => {
            o();
            if (s.getPlaySrc() !== t) {
              return;
            }
            s.seekTo(e);
            let r = i().getDuration() || 0;
            n(t => {
              t.progress = e / r * 100;
            });
          };
          s.on("canplay", a);
        }
      }
    };
    return p;
  };
  let ep = e => {
    let {
      initMsg: t,
      trackEvent: r,
      refreshChat: n,
      isShare: i
    } = e;
    let a = reactStoreFactory.createStore((e, a) => {
      let o = F(a);
      let s = eh({
        getStore: a,
        initMsg: t
      });
      return {
        polling: o,
        player: s,
        playStatus: k.NotPlayed,
        progress: 0,
        currentPlaySpeed: 1,
        currentStreamPlayTime: 0,
        currentPlayTime: 0,
        trackEvent: r,
        refreshChat: n,
        updateMessageContent: (t, r) => {
          var s;
          let l = a();
          let {
            msgContent: c,
            getPodcast: d,
            localPodcast: u
          } = l;
          if (deepEqualUtil_1.deepEqual(c, t)) {
            return;
          }
          let h = d();
          let {
            podcast: p
          } = messageWidgetDataUtils.parseWidgetData(t);
          if (!r && !messageWidgetDataUtils.shouldUpdateMessage(h, p)) {
            return;
          }
          let m = jsonSafeUtils_1.jsonUtils.parse(t == null ? undefined : t.widget_data);
          let g = jsonSafeUtils_1.jsonUtils.parse(m == null ? undefined : m.data);
          let _ = g == null ? undefined : (s = g.episodeList) === null || s === undefined ? undefined : s.episodes?.[0];
          let y = {
            msgContent: t,
            podcast: _,
            localPodcast: _ ?? u,
            replyMessage: g == null ? undefined : g.waiting_reply
          };
          if (r) {
            Object.assign(l, y);
            if (messageWidgetDataUtils.isNormalMessage(_)) {
              if (S(_)) {
                o.forceFetch(i);
              }
            } else {
              o.start();
            }
          } else {
            e(y);
          }
        },
        updateState: t => {
          e(immerCoreImplementation.produce(t));
        },
        getPodcast: () => {
          let {
            podcast: e,
            localPodcast: t
          } = a();
          return t ?? e;
        },
        getIsLoading: () => {
          let {
            getPodcast: e
          } = a();
          let t = e();
          return messageWidgetDataUtils.isTitleMissing(t);
        },
        getIsGenerated: () => {
          let {
            getPodcast: e,
            getIsLoading: t
          } = a();
          let r = e();
          let n = messageWidgetDataUtils.isNormalMessage(r);
          return !t() && n;
        },
        handlePlaySpeedChange: e => {
          let {
            updateState: t
          } = a();
          t(t => {
            t.currentPlaySpeed = e;
          });
          s.setPlaySpeed(e);
        },
        handlePlayPause: () => {
          r("podcast_play_click", {
            previous_button_status: "pause",
            current_button_status: "continue"
          });
          s.pause();
        },
        handlePlayFinish: () => {},
        handlePlay: () => {
          r("podcast_play_click", {
            previous_button_status: "continue",
            current_button_status: "pause"
          });
          s.play();
        },
        handlePlayFailed: () => {},
        handlePlayBackward: () => {
          s.playBackword(15);
        },
        handleSeekTo: e => {
          s.seekTo(e);
        },
        handlePlayForward: () => {
          s.playForward(30);
        },
        handleRetry: () => {
          let {
            getIsGenerated: e,
            pollingError: t,
            updateState: r
          } = a();
          if (!e() && t) {
            r(e => {
              e.pollingError = false;
            });
            o.start();
          }
        },
        handleSwitchPlayer: () => {
          let {
            getIsGenerated: e
          } = a();
          if (e()) {
            s.switchPlayer();
          }
        },
        getDuration: () => {
          var t;
          let {
            getPodcast: r,
            localTotalPlayTime: n
          } = a();
          let i = r();
          let o = i == null ? undefined : (t = i.meta) === null || t === undefined ? undefined : t.playback_model?.duration;
          if (o) {
            return Number.parseInt(o);
          } else {
            return n;
          }
        },
        downloadAudio: debounceUtilWrapper.createDebounce(async () => {
          let {
            getPodcast: e
          } = a();
          let t = e();
          let n = t == null ? undefined : t.id;
          if (!n) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "ai_podcast_download_failed",
              error: Error("podcast id is empty")
            });
            return;
          }
          let i = (await A({
            episode_id: n
          })).video_url;
          if (!i) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "ai_podcast_download_failed",
              error: Error("podcast video url is empty")
            });
            return;
          }
          r("download", {
            content_type: "podcast"
          });
          fileDownloadUtilities.openUrlInHiddenIframe(i);
        }, 1000),
        getCurrentPlayTime: () => {
          let {
            getIsGenerated: e,
            currentStreamPlayTime: t,
            currentPlayTime: r
          } = a();
          if (e()) {
            return r;
          } else {
            return t;
          }
        },
        destroy: () => {
          if (o != null) {
            o.cancel();
          }
          if (s != null) {
            s.destroy();
          }
        }
      };
    });
    return {
      usePodcastStore: a,
      usePodcastStoreShallow: function (e) {
        return a(e, deepEqualityUtil_1.isDeepEqual);
      }
    };
  };
  let ef = e => {
    let {
      cardProps: t,
      getStore: r,
      trackEvent: n,
      inView: i
    } = e;
    let {
      isGenerated: o,
      loading: s
    } = t;
    let l = reactCoreLibraryReexport.useRef(!!o);
    let c = reactCoreLibraryReexport.useRef(!!s);
    reactCoreLibraryReexport.useEffect(() => {
      if (!l.current && o) {
        var t;
        let {
          getDuration: i,
          getPodcast: a
        } = r();
        n("complete_generate_podcast", {
          epoise_id: (t = a()) === null || t === undefined ? undefined : t.meta?.podcast_id,
          podcast_duration: i()
        });
      }
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c.current && !s) {
        var t;
        let {
          getPodcast: i
        } = r();
        n("podcast_can_play", {
          epoise_id: (t = i()) === null || t === undefined ? undefined : t.meta?.podcast_id
        });
      }
    }, [s]);
    let d = useLatestCallbackHook_1.useLatestCallback(() => {
      var i;
      let {
        status: a
      } = t;
      let {
        getPodcast: o
      } = r();
      let s = (i = o()) === null || i === undefined ? undefined : i.meta?.podcast_id;
      n("podcast_play_show", {
        button_status: a === k.Playing ? "pause" : "continue",
        epoise_id: s
      });
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        d();
      }
    }, [i]);
  };
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var eg = classnamesUtils;
  let ev = e => {
    let {
      loading: t,
      progress: r,
      onProgressChangeEnd: n
    } = e;
    let [i, o] = reactCoreLibraryReexport.useState(false);
    let [s, l] = reactCoreLibraryReexport.useState(undefined);
    let [c, d] = reactCoreLibraryReexport.useState(false);
    let u = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => () => {
      if (p.current) {
        clearTimeout(p.current);
      }
    }, []);
    let f = useLatestCallbackHook_1.useLatestCallback(e => {
      if (u.current) {
        let t = u.current.getBoundingClientRect();
        return Math.max(0, Math.min(e - t.left, t.width)) / t.width * 100;
      }
      return 0;
    });
    let m = useLatestCallbackHook_1.useLatestCallback(e => {
      if (!t) {
        l(r);
        o(true);
        l(f(e));
        if (p.current) {
          clearTimeout(p.current);
          d(false);
        }
      }
    });
    let g = useLatestCallbackHook_1.useLatestCallback(e => {
      if (i && !t) {
        l(f(e));
      }
    });
    let v = useLatestCallbackHook_1.useLatestCallback(() => {
      if (i && !t) {
        o(false);
        if (s !== undefined) {
          if (n != null) {
            n(s);
          }
        }
        d(true);
        if (p.current) {
          clearTimeout(p.current);
        }
        p.current = setTimeout(() => {
          d(false);
        }, 500);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!i) {
        return;
      }
      let e = e => {
        g(e.clientX);
      };
      let t = () => {
        v();
      };
      let r = e => {
        if (e.touches.length > 0) {
          g(e.touches[0].clientX);
        }
      };
      let n = () => {
        v();
      };
      document.addEventListener("mousemove", e);
      document.addEventListener("mouseup", t);
      document.addEventListener("touchmove", r);
      document.addEventListener("touchend", n);
      return () => {
        document.removeEventListener("mousemove", e);
        document.removeEventListener("mouseup", t);
        document.removeEventListener("touchmove", r);
        document.removeEventListener("touchend", n);
      };
    }, [i, g, v]);
    return {
      isDragging: i,
      localProgress: s,
      isLocked: c,
      progressBarRef: u,
      onMouseDown: e => {
        e.preventDefault();
        e.stopPropagation();
        m(e.clientX);
      },
      onTouchStart: e => {
        e.preventDefault();
        e.stopPropagation();
        if (e.touches.length > 0) {
          m(e.touches[0].clientX);
        }
      },
      onWrapperClick: useLatestCallbackHook_1.useLatestCallback(e => {
        let t = f(e.clientX);
        l(t);
        if (n != null) {
          n(t);
        }
      })
    };
  };
  var e_ = {
    wrapper: "wrapper-zfgEiS",
    dragging: "dragging-SXmWgF",
    "bar-not-playing": "bar-not-playing-m4NC1C",
    "bar-loading": "bar-loading-K8dmiA",
    "bar-playing": "bar-playing-EP_shI",
    progress: "progress-GlK9nh",
    "bar-wrapper": "bar-wrapper-pF_6mm",
    "progress-bar": "progress-bar-r9YUPF"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eb = reactCoreLibraryReexport.memo(e => {
    let {
      className: t,
      loading: r,
      progress: n = 0,
      playing: i,
      onProgressChangeEnd: a,
      ...o
    } = e;
    let {
      localProgress: s,
      isDragging: l,
      isLocked: c,
      progressBarRef: d,
      onMouseDown: u,
      onTouchStart: h,
      onWrapperClick: p
    } = ev({
      loading: r,
      onProgressChangeEnd: a,
      progress: n
    });
    let f = l || c ? s : n;
    let m = Math.min(100, Math.max(0, f ?? (n || 0)));
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...o,
      className: eg(t, e_.wrapper, {
        [e_.dragging]: l
      }),
      onTouchStart: h,
      ref: d,
      children: r ? i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: eg(e_["bar-loading"], {
          [e_["bar-playing"]]: i
        })
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: e_["bar-not-playing"]
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: e_.progress,
        onClick: p,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: e_["bar-wrapper"],
          style: {
            width: `${m}%`
          },
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: e_["progress-bar"],
            onMouseDown: u
          })
        })
      })
    });
  });
  eb.displayName = "PodcastProgressMemo";
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var refreshIconRtlComponent = require("refresh-icon-rtl-component") /*id: 460264*/;
  let ek = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    fill: "none",
    viewBox: "0 0 32 32",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#0057FF",
      fillRule: "evenodd",
      d: "M16 30.667c8.1 0 14.667-6.566 14.667-14.666S24.1 1.334 16 1.334 1.334 7.9 1.334 16.001 7.9 30.667 16 30.667M14.79 10.223c-.881-.646-2.122-.017-2.122 1.076v9.404c0 1.092 1.24 1.72 2.122 1.075l6.412-4.702a1.333 1.333 0 0 0 0-2.15z",
      clipRule: "evenodd"
    })
  });
  let eC = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    fill: "none",
    viewBox: "0 0 32 32",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#0057FF",
      fillRule: "evenodd",
      d: "M30.667 16c0 8.1-6.567 14.667-14.667 14.667S1.333 24.101 1.333 16.001 7.9 1.334 16 1.334 30.667 7.9 30.667 16.001m-19.334-4.333a1.667 1.667 0 1 1 3.334 0v8.667a1.667 1.667 0 1 1-3.334 0zM19 10.001c-.92 0-1.667.746-1.667 1.666v8.667a1.667 1.667 0 1 0 3.334 0v-8.667c0-.92-.747-1.666-1.667-1.666",
      clipRule: "evenodd"
    })
  });
  let ej = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 30,
    fill: "none",
    viewBox: "0 0 30 30",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 29.6,
      height: 29.6,
      fill: "#0057FF",
      rx: 14.8
    }), reactJsxRuntimeCoreReexport.jsxs("g", {
      clipPath: "url(#podcast-loading_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("g", {
        clipPath: "url(#podcast-loading_svg__b)",
        "data-figma-skip-parse": "true",
        children: reactJsxRuntimeCoreReexport.jsx("foreignObject", {
          width: 3334.59,
          height: 3334.59,
          x: -1667.29,
          y: -1667.29,
          transform: "matrix(.00614 0 0 .00615 15.03 15.551)",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: {
              background: "conic-gradient(from 90deg,rgba(255,255,255,.7) 0deg,rgba(255,255,255,0) 108.453deg,rgba(255,255,255,0) 168.031deg,rgba(255,255,255,.7) 360deg)",
              height: "100%",
              width: "100%",
              opacity: 1
            }
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M15.03 10.057a5.494 5.494 0 0 0-3.57 9.67.97.97 0 1 1-1.262 1.473 7.433 7.433 0 1 1 12.265-5.649.97.97 0 0 1-1.939 0 5.494 5.494 0 0 0-5.494-5.494",
        clipRule: "evenodd",
        "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.69999998807907104},\"position\":0.0},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"stopsVar\":[{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.69999998807907104},\"position\":0.0},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":1.0,\"g\":1.0,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"transform\":{\"m00\":12.280944824218750,\"m01\":3.9888575997792941e-07,\"m02\":8.8896598815917969,\"m10\":-3.2526048698855448e-07,\"m11\":12.304538726806641,\"m12\":9.3990945816040039},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
      })]
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "podcast-loading_svg__b",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fillRule: "evenodd",
          d: "M15.03 10.057a5.494 5.494 0 0 0-3.57 9.67.97.97 0 1 1-1.262 1.473 7.433 7.433 0 1 1 12.265-5.649.97.97 0 0 1-1.939 0 5.494 5.494 0 0 0-5.494-5.494",
          clipRule: "evenodd"
        })
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "podcast-loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M4.8 4.8h20v20h-20z"
        })
      })]
    })]
  });
  let eS = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 30,
    fill: "none",
    viewBox: "0 0 30 30",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#loading_svg__a)",
      "data-figma-skip-parse": "true",
      children: reactJsxRuntimeCoreReexport.jsx("foreignObject", {
        width: 3309.21,
        height: 3309.21,
        x: -1654.61,
        y: -1654.61,
        transform: "matrix(.00921 0 0 .00923 15 14.9)",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          xmlns: "http://www.w3.org/1999/xhtml",
          style: {
            background: "conic-gradient(from 90deg,#0057ff 0deg,rgba(0,87,255,0) 108.453deg,rgba(0,87,255,0) 168.031deg,#0057ff 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1
          }
        })
      })
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M15 6.658a8.241 8.241 0 0 0-5.356 14.505 1.454 1.454 0 0 1-1.892 2.21 11.13 11.13 0 0 1-3.902-8.474C3.85 8.741 8.842 3.75 15 3.75S26.15 8.742 26.15 14.9a1.454 1.454 0 1 1-2.909 0A8.24 8.24 0 0 0 15 6.66",
      clipRule: "evenodd",
      "data-figma-gradient-fill": "{\"type\":\"GRADIENT_ANGULAR\",\"stops\":[{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"stopsVar\":[{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":1.0},\"position\":0.0},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.30125698447227478},{\"color\":{\"r\":0.0,\"g\":0.34117648005485535,\"b\":1.0,\"a\":0.0},\"position\":0.46675261855125427}],\"transform\":{\"m00\":18.421421051025391,\"m01\":5.9832876786458655e-07,\"m02\":5.7892022132873535,\"m10\":-4.8789087259137887e-07,\"m11\":18.456811904907227,\"m12\":5.6709084510803223},\"opacity\":1.0,\"blendMode\":\"NORMAL\",\"visible\":true}"
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fillRule: "evenodd",
          d: "M15 6.658a8.241 8.241 0 0 0-5.356 14.505 1.454 1.454 0 0 1-1.892 2.21 11.13 11.13 0 0 1-3.902-8.474C3.85 8.741 8.842 3.75 15 3.75S26.15 8.742 26.15 14.9a1.454 1.454 0 1 1-2.909 0A8.24 8.24 0 0 0 15 6.66",
          clipRule: "evenodd"
        })
      })
    })]
  });
  var eE = {
    wrapper: "wrapper-ZIEPZd",
    loading: "loading-B9iCCU",
    icon: "icon-ZlMeYI",
    playLoading: "playLoading-cH4ggT"
  };
  let eR = (e, t) => {
    if (e) {
      return reactJsxRuntimeCoreReexport.jsx(eS, {
        className: eE.icon
      });
    }
    switch (t) {
      case k.Playing:
        return reactJsxRuntimeCoreReexport.jsx(eC, {});
      case k.Loading:
        return reactJsxRuntimeCoreReexport.jsx(ej, {
          className: eE.playLoading
        });
      default:
        return reactJsxRuntimeCoreReexport.jsx(ek, {});
    }
  };
  let eN = e => {
    let {
      className: t,
      status: r,
      loading: n,
      ...i
    } = e;
    let a = eR(n != null && n, r);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...i,
      className: eg(t, eE.wrapper, {
        [eE.loading]: n
      }),
      children: a
    });
  };
  let eT = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M10 1.25a9.167 9.167 0 0 1 4.832 16.958.834.834 0 0 1-.88-1.416q.282-.175.548-.374a7.5 7.5 0 1 0-8.452.374.834.834 0 0 1-.88 1.416A9.167 9.167 0 0 1 10 1.25m0 3.542a5.625 5.625 0 0 1 2.78 10.516.833.833 0 0 1-.824-1.449q.268-.153.508-.344a3.96 3.96 0 1 0-4.419.345.834.834 0 0 1-.826 1.448 5.616 5.616 0 0 1-2.845-4.89A5.625 5.625 0 0 1 10 4.791m0 3.958a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334"
    })
  });
  var eP = require.p + "static/image/cover_placeholder.ef7ea19a.png";
  var eI = {
    topContainer: "topContainer-GBi8Hm",
    cover: "cover-vt3YMx",
    contentWrapper: "contentWrapper-UGej6k",
    contentLine: "contentLine-nV3h7v",
    contentIcon: "contentIcon-p5OCFT",
    title: "title-w9DvfV",
    author: "author-FsJ0V5",
    playBtn: "playBtn-S6vzdk",
    error: "error-FsviSo",
    errorIcon: "errorIcon-lEDXgA"
  };
  let e$ = reactCoreLibraryReexport.memo(e => {
    let {
      cover: t,
      title: r,
      podcastTitle: n,
      loading: i,
      status: a,
      isError: o,
      onPlay: s,
      onPause: l,
      onPlayBtnClick: c,
      onRetry: d,
      className: u,
      ...p
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let m = o ? f("podcast_status_generationFail") : r || f("podcast_status_generating");
    let g = o ? f("podcast_btn_regenerate") : n;
    let v = useLatestCallbackHook_1.useLatestCallback(e => {
      e.stopPropagation();
      if (!i) {
        if (c != null) {
          c();
        }
        switch (a) {
          case k.Playing:
            if (l != null) {
              l();
            }
            break;
          case k.Loading:
            break;
          default:
            if (s != null) {
              s();
            }
        }
      }
    });
    let _ = useLatestCallbackHook_1.useLatestCallback(e => {
      e.stopPropagation();
      if (!o) {
        v(e);
        return;
      }
      if (d != null) {
        d();
      }
    });
    let y = f("podcast_brandAI", {
      brandName: f("brandName_doubao")
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eg(eI.topContainer, u, {
        [eI.error]: o
      }),
      ...p,
      onClick: _,
      children: [o ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: eg(eI.errorIcon, eI.cover),
        children: reactJsxRuntimeCoreReexport.jsx(refreshIconRtlComponent.RefreshIconRtl, {
          size: "inherit"
        })
      }) : reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(t || eP, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTBjNWExa3lSbnBr%XpsNlkyM%5kb*x0-kRaT$-wNTJZb*hDZ*1KdFZu$mtRemwzWWpK%2FsbFl%akJN$jA1MlltN$NiR0p1$$haWk1qbDBZM*M1ZFZwWE5%Qmpl$*wzWWpK%2FsbFl%akJN$jA1MlltN$NiR0p1$$haaFZ6$nJXb*huZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
        }),
        className: eI.cover
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eI.contentWrapper,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: eI.contentLine,
          children: [reactJsxRuntimeCoreReexport.jsx(eT, {
            className: eI.contentIcon
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eI.title,
            children: [" ", m]
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eI.author,
          children: g || y
        })]
      }), !o && reactJsxRuntimeCoreReexport.jsx(eN, {
        loading: i,
        status: a,
        onClick: v,
        className: eI.playBtn
      })]
    });
  });
  e$.displayName = "PodcastContentMemo";
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var eF = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M12 23.002q-2.1 0-3.93-.792a10.284 10.284 0 0 1-5.401-5.401 9.9 9.9 0 0 1-.782-3.92q0-1.574.463-3.025A10.15 10.15 0 0 1 5.724 5.02q.402-.35.864-.298a.96.96 0 0 1 .72.39.96.96 0 0 1 .196.813 1.32 1.32 0 0 1-.453.73 8 8 0 0 0-2.664 3.817 7.8 7.8 0 0 0-.37 2.418q0 1.656.617 3.107.617 1.44 1.718 2.541a8.1 8.1 0 0 0 2.54 1.708 7.7 7.7 0 0 0 3.108.627q1.656 0 3.096-.627a8.1 8.1 0 0 0 2.552-1.708 8 8 0 0 0 1.718-2.541 7.85 7.85 0 0 0 .617-3.107q0-1.4-.442-2.644a7.836 7.836 0 0 0-3.138-4.002 7.9 7.9 0 0 0-2.346-1.06v1.214q0 .535-.36.67-.36.133-.761-.155L9.767 4.618q-.318-.227-.329-.546 0-.33.33-.565l3.157-2.295q.412-.308.772-.164.36.133.36.69v1.254a9.8 9.8 0 0 1 3.169 1.245q1.47.895 2.562 2.222a10.1 10.1 0 0 1 1.707 2.963 9.7 9.7 0 0 1 .617 3.467 9.8 9.8 0 0 1-.792 3.92 10.1 10.1 0 0 1-2.17 3.22q-1.39 1.4-3.22 2.18a9.8 9.8 0 0 1-3.93.793m-2.593-6.204q-.36 0-.566-.216-.195-.226-.195-.586v-5.185h-.031l-.844.627q-.092.072-.175.114a.6.6 0 0 1-.195.03.53.53 0 0 1-.391-.154.55.55 0 0 1-.144-.39q0-.35.34-.598l.977-.72q.257-.195.514-.319a1.2 1.2 0 0 1 .576-.133q.412 0 .648.226.237.216.237.628v5.874a.82.82 0 0 1-.206.576q-.195.226-.545.226m4.774.072q-.648 0-1.286-.329-.628-.339-.854-.936a1.3 1.3 0 0 1-.124-.257.8.8 0 0 1-.051-.278q0-.288.165-.453.164-.165.452-.164.422 0 .648.442.135.33.391.556a.97.97 0 0 0 .648.216.87.87 0 0 0 .772-.412q.267-.411.267-.977 0-.525-.257-.936-.256-.422-.771-.422a.9.9 0 0 0-.494.134q-.205.133-.37.34a1 1 0 0 1-.289.267.76.76 0 0 1-.38.082q-.36 0-.535-.237a.9.9 0 0 1-.154-.586l.174-2.716q.052-.823.823-.823h2.788q.587 0 .587.607a.59.59 0 0 1-.165.432.55.55 0 0 1-.422.165H13.39l-.155 2.057h.041q.196-.381.566-.586.37-.206.844-.206.946 0 1.45.71.515.71.515 1.666 0 1.153-.659 1.904-.658.74-1.81.74"
    })
  }), {}));
  var eM = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M10.303 1.047q.35-.144.771.164l3.159 2.294q.328.237.319.566 0 .32-.32.546L11.065 6.91q-.411.288-.761.154t-.35-.669V5.182a7.9 7.9 0 0 0-2.366 1.06 7.92 7.92 0 0 0-3.128 4.002 7.8 7.8 0 0 0-.442 2.644q0 1.656.617 3.107.617 1.44 1.718 2.541a8.1 8.1 0 0 0 2.541 1.708A7.7 7.7 0 0 0 12 20.87a7.7 7.7 0 0 0 3.097-.627 8.1 8.1 0 0 0 2.551-1.708 8 8 0 0 0 1.718-2.541 7.9 7.9 0 0 0 .618-3.107 7.6 7.6 0 0 0-.381-2.418 7.7 7.7 0 0 0-1.06-2.119 8 8 0 0 0-1.605-1.697q-.36-.31-.452-.73a1 1 0 0 1 .206-.814.98.98 0 0 1 .72-.39q.452-.052.864.298a10 10 0 0 1 2.037 2.17 9.8 9.8 0 0 1 1.327 2.675q.473 1.451.473 3.025a9.8 9.8 0 0 1-.792 3.92 10.1 10.1 0 0 1-2.17 3.22q-1.39 1.399-3.22 2.18a9.8 9.8 0 0 1-3.93.793q-2.1 0-3.93-.792a10.284 10.284 0 0 1-5.401-5.401 9.9 9.9 0 0 1-.784-3.92q.001-1.831.608-3.467a10.4 10.4 0 0 1 1.708-2.963 10.3 10.3 0 0 1 2.562-2.222A9.9 9.9 0 0 1 9.953 2.99V1.736q0-.555.35-.69"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M15.257 9.26q.957.001 1.523.566.576.555.823 1.44a6.6 6.6 0 0 1 .257 1.852 6.7 6.7 0 0 1-.257 1.852q-.247.885-.823 1.45-.566.567-1.523.567-.956 0-1.532-.566-.567-.566-.823-1.45a6.9 6.9 0 0 1-.247-1.853q0-.966.247-1.841.256-.885.823-1.45.566-.567 1.532-.567m0 1.142q-.39 0-.648.36-.257.351-.39.957a7 7 0 0 0-.124 1.4q0 .78.123 1.399.135.617.391.977.258.35.648.35.391 0 .649-.35.267-.36.39-.977.135-.618.134-1.4 0-.781-.133-1.388-.124-.617-.392-.968-.256-.36-.648-.36",
      clipRule: "evenodd"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M9.023 9.291q.987 0 1.667.515.69.504.689 1.46 0 .629-.37 1.101-.36.474-.998.618v.02q.659.062 1.131.504.484.432.484 1.266 0 1.038-.751 1.625-.75.576-1.831.576-.772 0-1.492-.36t-.906-1.08a1.2 1.2 0 0 1-.061-.37q0-.288.164-.453.175-.165.474-.165a.56.56 0 0 1 .36.124q.165.113.257.319.134.39.432.617t.792.226q.514 0 .823-.308.32-.308.319-.803 0-.627-.37-.895-.37-.277-.957-.277H8.61a.62.62 0 0 1-.4-.124q-.145-.134-.145-.38 0-.237.134-.381.144-.144.411-.144h.268q.514 0 .833-.288.33-.288.33-.813 0-.464-.278-.74-.268-.279-.73-.279-.412 0-.68.206-.267.206-.401.638a.7.7 0 0 1-.237.34.68.68 0 0 1-.411.113q-.298 0-.443-.165a.66.66 0 0 1-.133-.411q0-.195.04-.35.156-.66.793-1.07a2.64 2.64 0 0 1 1.46-.412"
    })]
  }), {}));
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var arxivDomainScaleConfig = require("arxiv-domain-scale-config") /*id: 913827*/;
  var eZ = {
    popoverContent: "popoverContent-LVZf4e",
    item: "item-dxiBvB",
    btn: "btn-KML6kM"
  };
  let eW = e => {
    let {
      className: t,
      currentPlaySpeed: r,
      onPlaySpeedChange: n,
      disabled: i,
      ...a
    } = e;
    let o = reactJsxRuntimeCoreReexport.jsx("div", {
      ...a,
      className: eg(t, eZ.btn),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [r || 1, "x"]
      })
    });
    if (i) {
      return o;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        position: "rightTop",
        clickToHide: true,
        trigger: "click",
        content: reactJsxRuntimeCoreReexport.jsx("div", {
          className: eZ.popoverContent,
          children: arxivDomainScaleConfig.zoomScales.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
            className: eZ.item,
            onClick: () => {
              if (n != null) {
                n(e);
              }
            },
            children: [e, "x"]
          }, t))
        }),
        children: o
      });
    }
  };
  var eU = {
    wrapper: "wrapper-AkVIgZ",
    left: "left-NGbl4X",
    actionBtn: "actionBtn-s0rB0o",
    disabled: "disabled-gFZxqg",
    downloadBtn: "downloadBtn-Iyn2FU",
    right: "right-tFn840",
    timeLine: "timeLine-myh1TP"
  };
  let eH = e => e < 10 ? `0${e}` : `${e}`;
  let ez = e => {
    if (!e) {
      return "00:00";
    }
    let t = Math.floor(e / 60);
    let r = Math.floor(e % 60);
    return `${eH(t)}:${eH(r)}`;
  };
  let eV = reactCoreLibraryReexport.memo(e => {
    let {
      className: t,
      loading: r,
      currentPlayTime: n,
      totalPlayTime: i,
      currentPlaySpeed: a,
      onPlaySpeedChange: o,
      onPlayBackward: s,
      onPlayForward: l,
      loadingTxt: c,
      onDownload: d,
      hideDownload: u,
      ...h
    } = e;
    let p = ez(n ?? 0);
    let f = r ? "--:--" : ez(i ?? 0);
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let g = c ?? m("podcast_toast_opsUnsupported_generating");
    let v = reactJsxRuntimeCoreReexport.jsx(eW, {
      currentPlaySpeed: a,
      onPlaySpeedChange: o,
      disabled: r,
      className: eg(eU.actionBtn, {
        [eU.disabled]: r
      })
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...h,
      className: eg(t, eU.wrapper),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eU.left,
        children: [reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: r ? g : m("podcast_play_btn_backward"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: eg(eU.actionBtn, {
              [eU.disabled]: r
            }),
            onClick: s,
            children: reactJsxRuntimeCoreReexport.jsx(eF, {})
          })
        }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: r ? g : m("podcast_play_btn_forward"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: eg(eU.actionBtn, {
              [eU.disabled]: r
            }),
            onClick: l,
            children: reactJsxRuntimeCoreReexport.jsx(eM, {})
          })
        }), r ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: g,
          children: v
        }) : v, u ? null : reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: r ? g : m("podcast_tooltip_download"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: eg(eU.actionBtn, {
              [eU.disabled]: r
            }),
            onClick: r ? undefined : d,
            children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
              className: eU.downloadBtn
            })
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eU.right,
        children: [p, reactJsxRuntimeCoreReexport.jsx("span", {
          className: eU.timeLine,
          children: "｜"
        }), f]
      })]
    });
  });
  eV.displayName = "PodcastActionMemo";
  var eJ = {
    wrapper: "wrapper-G_XvZA",
    showAction: "showAction-ZESt36",
    progress: "progress-GxICqa",
    replyMessage: "replyMessage-MAZmP0"
  };
  let eX = e => {
    let {
      title: t,
      loading: r,
      isGenerated: n,
      progress: i,
      cover: a,
      podcastTitle: o,
      status: s,
      error: l,
      currentPlayTime: c,
      totalPlayTime: d,
      currentPlaySpeed: u,
      onPlaySpeedChange: h,
      onPlay: p,
      onPause: f,
      onRetry: m,
      onPlayBackward: g,
      onPlayForward: v,
      className: _,
      waitingReply: y,
      onProgressChangeEnd: b,
      onPlayBtnClick: w,
      onDownload: x,
      hideDownload: C,
      loadingTxt: j,
      ...S
    } = e;
    let E = !r && !l;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      children: [y && reactJsxRuntimeCoreReexport.jsx("div", {
        className: eJ.replyMessage,
        children: y
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eg(eJ.wrapper, _, {
          [eJ.showAction]: E
        }),
        ...S,
        children: [reactJsxRuntimeCoreReexport.jsx(e$, {
          cover: a,
          title: t,
          podcastTitle: o,
          loading: r,
          status: s,
          isError: l,
          onPlay: p,
          onPause: f,
          onRetry: m,
          onPlayBtnClick: w
        }), E && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(eb, {
            loading: !n,
            progress: i,
            className: eJ.progress,
            playing: s === k.Playing,
            onProgressChangeEnd: b
          }), reactJsxRuntimeCoreReexport.jsx(eV, {
            loadingTxt: j,
            loading: !n,
            currentPlayTime: c,
            totalPlayTime: d,
            currentPlaySpeed: u,
            onPlaySpeedChange: h,
            className: eJ.action,
            onPlayBackward: g,
            onPlayForward: v,
            onDownload: x,
            hideDownload: C
          })]
        })]
      })]
    });
  };
  function eq(e) {
    let {
      message: n,
      inView: i,
      disableTrack: m,
      trackEventFn: g,
      refreshChat: v,
      isShare: _,
      ...y
    } = e;
    let b = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let w = useLatestCallbackHook_1.useLatestCallback((e, t) => {
      if (m) {
        return;
      }
      let o = chatConversationBotId.getConversationBotId(n == null ? undefined : n.conversation_id);
      let s = messageWidgetDataUtils.parseWidgetData(n == null ? undefined : n.content_obj)?.podcast;
      let l = s == null ? undefined : s.id;
      if (!l) {
        return;
      }
      let u = {
        ...t,
        epoise_id: l,
        message_id: n == null ? undefined : n.message_id,
        conversation_id: n == null ? undefined : n.conversation_id,
        bot_id: o,
        chat_type: b == null ? undefined : b.chatType,
        reply_id: n == null ? undefined : n.reply_id,
        skill_id: n == null ? undefined : n.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(n == null ? undefined : n.skill?.skill_type_no_default)
      };
      if (g != null) {
        g(e, u);
      }
    });
    let [{
      usePodcastStoreShallow: x,
      store: k
    }] = reactCoreLibraryReexport.useState(() => {
      let e = ep({
        initMsg: n,
        trackEvent: w,
        refreshChat: v,
        isShare: _
      });
      e.usePodcastStore.getState().updateMessageContent(n.content_obj, true);
      return {
        usePodcastStoreShallow: e.usePodcastStoreShallow,
        store: e
      };
    });
    let C = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      openLoginModal: j
    } = chatLoginModalManager.loginModalManager();
    let S = x(e => {
      let {
        getPodcast: r,
        getIsLoading: n,
        getIsGenerated: i,
        currentPlaySpeed: a,
        handlePlaySpeedChange: o,
        getCurrentPlayTime: l,
        playStatus: c,
        progress: d,
        pollingError: u,
        handleRetry: h,
        handlePlay: p,
        handlePlayPause: f,
        handlePlayBackward: m,
        handlePlayForward: g,
        handleSeekTo: v,
        replyMessage: y,
        downloadAudio: b
      } = e;
      let {
        title: w,
        podcast_title: x,
        podcast_cover_thumbnail: k,
        playback_model: S
      } = r()?.meta || {};
      let {
        duration: E
      } = S || {};
      let R = n();
      let N = i();
      return {
        title: w,
        podcastTitle: x,
        cover: k,
        loading: R,
        isGenerated: N,
        currentPlaySpeed: a,
        currentPlayTime: l(),
        totalPlayTime: E ? Number.parseInt(E) : 0,
        progress: d,
        onPlaySpeedChange: o,
        onRetry: h,
        error: u,
        onPlay: () => {
          if (!C && !_) {
            j({
              trackInfo: {
                source: trackingEventConstants.trackingEvents.PLAY_AI_PODCAST
              }
            });
            return;
          }
          p();
        },
        onPause: f,
        onPlayBackward: m,
        onPlayForward: g,
        status: c,
        waitingReply: y,
        onProgressChangeEnd: v,
        onDownload: b
      };
    });
    ef({
      cardProps: S,
      message: n,
      trackEvent: w,
      getStore: k.usePodcastStore.getState,
      inView: i
    });
    reactCoreLibraryReexport.useEffect(() => {
      let t = messageWidgetDataUtils.parseWidgetData(n == null ? undefined : n.content_obj)?.podcast;
      $({
        episode_id: t == null ? undefined : t.id,
        msg_id: n.message_id
      });
      return () => {
        k.usePodcastStore.getState().destroy();
      };
    }, []);
    reactUseUpdateEffect.useUpdateEffect(() => {
      k.usePodcastStore.getState().updateMessageContent(n.content_obj);
    }, [n]);
    if (!(n == null ? undefined : n.content_obj?.widget_data)) {
      let e = n == null ? undefined : n.content_obj?.text;
      if (typeof e == "string" && e) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          children: e
        });
      } else {
        return null;
      }
    }
    return reactJsxRuntimeCoreReexport.jsx(eX, {
      ...S,
      ...y
    });
  }
  require.d(exports, {
    PodcastPlayer: function () {
      return eq;
    }
  });
}
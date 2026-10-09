// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'behaviorSubjectClass'
// - Resolved require(263814) to 'behavior-subject-class'
// - Renamed variable 's' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 'n' to 'chatStatusConstants'
// - Resolved require(680777) to 'chat-status-constants'
// - Renamed variable 'o' to 'asyncRetryUtil'
// - Resolved require(464158) to 'async-retry-util'
// - Renamed variable 'a' to 'flowApiConfigManager'
// - Resolved require(691950) to 'flow-api-config-manager'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(38227) to 'async-infra-input'
// - Resolved require.bind(82216) to 'asr-service-core'
// - Updated imported property 'Z' to 'ChatStatus' (module 680777)
// - Updated imported property 'GZ' to 'getFlowApiOptions' (module 691950)
// - Updated imported property 'C' to 'retryWithDelay' (module 464158)
// - Updated imported property 'X' to 'BehaviorSubject' (module 263814)
// - Updated imported property 'v' to 'getEventEmitter' (module 740547)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input.448035e9.js
         * chunkId: 38227
         * moduleId: 189045
         */
module.exports = function (module, exports, require) {
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var chatStatusConstants = require("chat-status-constants") /*id: 680777*/;
  var asyncRetryUtil = require("async-retry-util") /*id: 464158*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  function u(t, e, r) {
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
  class l {
    get isStopped() {
      return [chatStatusConstants.ChatStatus.INIT, chatStatusConstants.ChatStatus.DESTROYED].includes(this._status$.value);
    }
    async init() {
      var n;
      let {
        getCommonParams: u
      } = flowApiConfigManager.getFlowApiOptions() ?? {};
      let l = {
        commonParams: (u == null ? undefined : u()) ?? {},
        onWsConnectSuccess: () => {
          this.eventEmitter.emit("websocket.success");
        },
        onWsConnectError: () => {
          this.eventEmitter.emit("websocket.error");
        },
        onWsConnectClose: () => {
          this.eventEmitter.emit("websocket.close");
        },
        onWsConnectTimeout: () => {
          this.eventEmitter.emit("websocket.timeout");
        }
      };
      let {
        default: c
      } = await asyncRetryUtil.retryWithDelay(() => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("async-infra-input") /*id: 38227*/]).then(require.bind(require, "asr-service-core") /*id: 82216*/));
      this.asrSdk = new c({
        wsConfig: l,
        audioWorklet: (n = this.options?.useAudioWorklet) === null || n === undefined || n,
        wsProxy: this.options?.wsClient,
        onPermissionAllowed: () => {
          this.eventEmitter.emit("permission.allowed");
        },
        onPermissionDenied: () => {
          this.eventEmitter.emit("permission.denied");
        }
      });
    }
    constructor(t) {
      u(this, "ctx", undefined);
      u(this, "asrSdk", null);
      u(this, "options", undefined);
      u(this, "_result$", new behaviorSubjectClass.BehaviorSubject(""));
      u(this, "_status$", new behaviorSubjectClass.BehaviorSubject(chatStatusConstants.ChatStatus.INIT));
      u(this, "_volume$", new behaviorSubjectClass.BehaviorSubject(0));
      u(this, "result$", this._result$.asObservable());
      u(this, "status$", this._status$.asObservable());
      u(this, "volume$", this._volume$.asObservable());
      u(this, "eventEmitter", new eventEmitterWrapper_1.getEventEmitter());
      u(this, "startAsr", async () => {
        var t;
        var e;
        var r;
        var i;
        if (!this.asrSdk) {
          await this.init();
        }
        if ((t = this.asrSdk) !== null && t !== undefined) {
          t.getAsrMessageSubscription().subscribe(t => {
            this._result$.next(t);
          });
        }
        if ((e = this.asrSdk) !== null && e !== undefined) {
          e.getAsrStatusSubscription().subscribe(t => {
            this._status$.next(t);
          });
        }
        if ((r = this.asrSdk) !== null && r !== undefined) {
          r.getAudioVolumeSubscription().subscribe(t => {
            this._volume$.next(t);
          });
        }
        if ((i = this.asrSdk) !== null && i !== undefined) {
          i.startAsr();
        }
      });
      u(this, "stopAsr", () => {
        var t;
        if (!this.isStopped) {
          if ((t = this.asrSdk) !== null && t !== undefined) {
            t.stopAsr();
          }
        }
      });
      u(this, "on", (t, e) => {
        this.eventEmitter.on(t, e);
      });
      u(this, "off", (t, e) => {
        this.eventEmitter.off(t, e);
      });
      u(this, "destroy", () => {
        var t;
        this._result$.complete();
        this._status$.complete();
        this._volume$.complete();
        this.eventEmitter.removeAllListeners();
        if ((t = this.asrSdk) !== null && t !== undefined) {
          t.destroyAsr();
        }
        this.asrSdk = null;
      });
      let {
        useAudioWorklet: e = true,
        ...r
      } = t || {};
      this.options = {
        useAudioWorklet: e,
        ...r
      };
    }
  }
  function c(t) {
    return new l(t);
  }
  require.r(exports);
  require.d(exports, {
    ChatAsrService: function () {
      return l;
    },
    createChatAsrService: function () {
      return c;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'chatErrorCodes'
// - Renamed export 'l' to 'chatEventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 211398
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function r(e, t, n) {
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
  var o = {
    UNAUTHORIZED: "unauthorized",
    NOACCESS: "noAccess",
    SHARK_BLOCK: "sharkBlocked",
    COUNTRY_RESTRICTED: "countryRestricted",
    CONVERSATION_INVALID: "conversationInvalid",
    NEED_TO_WAIT: "needToWait",
    USER_BANNED: "userBanned",
    USER_BANNED_OTHER: "userBannedOther",
    USER_BAN_RELEASE: "userBanRelease",
    NETWORK_ERROR: "networkError",
    DOUBAO_REGION_BAN: "doubaoRegionBan"
  };
  let a = new class {
    emit(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        n[i - 1] = arguments[i];
      }
      if (!this.started) {
        this.buffer.push({
          event: e,
          args: n
        });
        return;
      }
      this.eventEmitter.emit(e, ...n);
    }
    on(e, t) {
      this.eventEmitter.on(e, t);
    }
    off(e, t) {
      this.eventEmitter.off(e, t);
    }
    start() {
      if (!this.started) {
        this.started = true;
        for (let {
          event: e,
          args: t
        } of this.buffer) {
          this.emit(e, ...t);
        }
      }
    }
    stop() {
      this.started = false;
    }
    clear() {
      this.buffer = [];
    }
    constructor() {
      r(this, "eventEmitter", new eventEmitterWrapper_1.eventEmitter());
      r(this, "started", true);
      r(this, "buffer", []);
    }
  }();
  require.d(exports, {
    chatErrorCodes: function () {
      return o;
    },
    chatEventEmitter: function () {
      return a;
    }
  });
}
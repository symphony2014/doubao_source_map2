// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'setRateLimitConfig'
// - Resolved require(730897) to 'set-rate-limit-config'
// - Updated imported property 'y' to 'setRateLimitConfig' (module 730897)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 307240
         */
module.exports = function (module, exports, require) {
  var setRateLimitConfig = require("set-rate-limit-config") /*id: 730897*/;
  class n {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        let {
          limit_time: t,
          limit_tips: r
        } = e.ext || {};
        setRateLimitConfig.setRateLimitConfig({
          isLimited: true,
          limitExpired: Date.now() + Number(t) * 1000 || 0,
          limitTips: r
        });
      };
      if ((e = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageLimitMessageErrorPlugin: function () {
      return n;
    }
  });
}
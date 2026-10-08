// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'setGuestThreadLimit'
// - Resolved require(345143) to 'set-guest-thread-limit'
// - Updated imported property 'l' to 'setGuestThreadLimit' (module 345143)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 374629
         */
module.exports = function (module, exports, require) {
  var setGuestThreadLimit = require("set-guest-thread-limit") /*id: 345143*/;
  class n {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        setGuestThreadLimit.setGuestThreadLimit(true);
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
    GuestReachCreateThreadLimitMessageErrorPlugin: function () {
      return n;
    }
  });
}
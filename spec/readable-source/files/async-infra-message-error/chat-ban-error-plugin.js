// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'w' to 'chatErrorCodes' (module 211398)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 330036
         */
module.exports = function (module, exports, require) {
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  class n {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.USER_BANNED, e == null ? undefined : e.error_details?.error_message);
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
    UserBanMessageErrorPlugin: function () {
      return n;
    }
  });
}
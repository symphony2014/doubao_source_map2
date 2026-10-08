// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'userBannedMessageSymbol'
// - Resolved require(571650) to 'user-banned-message-symbol'
// - Updated imported property 'X' to 'bannedMessageSymbol' (module 571650)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'w' to 'chatErrorCodes' (module 211398)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 917434
         */
module.exports = function (module, exports, require) {
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var userBannedMessageSymbol = require("user-banned-message-symbol") /*id: 571650*/;
  function s(e, t, n) {
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
  class a {
    constructor() {
      s(this, "pluginIdentifier", userBannedMessageSymbol.bannedMessageSymbol);
      s(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          var n;
          let {
            conversation_id: o = ""
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: UserBanned",
            meta: {
              conversation_id: o,
              ...e
            }
          });
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.USER_BANNED, (n = e.data.data) === null || n === undefined ? undefined : n.ext?.err_msg);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    UserBannedMessageCmdLPlugin: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'updateChatLimitMap'
// - Resolved require(822688) to 'update-chat-limit-map'
// - Renamed variable 'r' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'touristChatLimitSymbol'
// - Resolved require(949235) to 'tourist-chat-limit-symbol'
// - Updated imported property 'U' to 'touristChatLimitSym' (module 949235)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'R' to 'updateChatLimitMap' (module 822688)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 865489
         */
module.exports = function (module, exports, require) {
  var updateChatLimitMap = require("update-chat-limit-map") /*id: 822688*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var touristChatLimitSymbol = require("tourist-chat-limit-symbol") /*id: 949235*/;
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
  class l {
    constructor() {
      a(this, "pluginIdentifier", touristChatLimitSymbol.touristChatLimitSym);
      a(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: TouristReachChatLimit",
            meta: {
              conversation_id: t
            }
          });
          if (t) {
            chatEventEmitter.chatEmitter.emit("chat.user.logoutToSignIn", {
              reason: "message-reach-limit"
            });
            updateChatLimitMap.updateChatLimitMap({
              [t]: false
            });
          } else {
            loggerServiceCore.defaultLogger.persist.warning({
              eventName: "conversation_id_is_empty_when_guest_reachLimit"
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    TouristReachChatLimitMessageCmdPlugin: function () {
      return l;
    }
  });
}
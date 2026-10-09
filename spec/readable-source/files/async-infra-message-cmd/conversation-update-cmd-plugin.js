// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConversationUpdateHandler'
// - Resolved require(701589) to 'chat-conversation-update-handler'
// - Renamed variable 'r' to 'chatConversationTransformer'
// - Resolved require(969267) to 'chat-conversation-transformer'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'chatConversationReadCmdSymbol'
// - Resolved require(688809) to 'chat-conversation-read-cmd-symbol'
// - Updated imported property 'O' to 'readMessageCmdSymbol' (module 688809)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'r' to 'updateConversationInfo' (module 701589)
// - Updated imported property 'um' to 'transformConversationBase' (module 969267)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 238955
         */
module.exports = function (module, exports, require) {
  var chatConversationUpdateHandler = require("chat-conversation-update-handler") /*id: 701589*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConversationReadCmdSymbol = require("chat-conversation-read-cmd-symbol") /*id: 688809*/;
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
      a(this, "pluginIdentifier", chatConversationReadCmdSymbol.readMessageCmdSymbol);
      a(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          let {
            conversation_info: t
          } = e.data.data.update_conv_info_notify || {};
          let {
            conversation_id: n = ""
          } = t || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationUpdate",
            meta: {
              conversation_id: n,
              conversation_info: JSON.stringify(t)
            }
          });
          if (t) {
            try {
              chatConversationUpdateHandler.updateConversationInfo({
                conversation: chatConversationTransformer.transformConversationBase(t, undefined),
                bot_info: {}
              });
            } catch (e) {
              if (e instanceof Error) {
                loggerServiceCore.defaultLogger.persist.error({
                  message: "ConversationUpdate failed",
                  error: e
                });
              }
            }
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationUpdateMessageCmdPlugin: function () {
      return l;
    }
  });
}
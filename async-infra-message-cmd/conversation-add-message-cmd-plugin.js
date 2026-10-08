// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'r' to 'chatConversationUpdateHandler'
// - Resolved require(701589) to 'chat-conversation-update-handler'
// - Renamed variable 'o' to 'chatConversationLinkInsert'
// - Resolved require(146291) to 'chat-conversation-link-insert'
// - Renamed variable 's' to 'chatConversationTransformer'
// - Resolved require(969267) to 'chat-conversation-transformer'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'conversationAddMsgPlugin'
// - Resolved require(183017) to 'conversation-add-msg-plugin'
// - Updated imported property 'k' to 'addMessagePluginId' (module 183017)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'XQ' to 'participantOpType' (module 876559)
// - Updated imported property 'r' to 'updateConversationInfo' (module 701589)
// - Updated imported property 'um' to 'transformConversationBase' (module 969267)
// - Updated imported property 'o' to 'insertConversationLink' (module 146291)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 979624
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatConversationUpdateHandler = require("chat-conversation-update-handler") /*id: 701589*/;
  var chatConversationLinkInsert = require("chat-conversation-link-insert") /*id: 146291*/;
  var chatConversationTransformer = require("chat-conversation-transformer") /*id: 969267*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationAddMsgPlugin = require("conversation-add-msg-plugin") /*id: 183017*/;
  function c(e, t, n) {
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
  class u {
    constructor() {
      c(this, "pluginIdentifier", conversationAddMsgPlugin.addMessagePluginId);
      c(this, "handleCmd", e => {
        let {
          version: t,
          data: n
        } = e.data;
        if (t === "2.0") {
          let {
            conversation_id: e = "",
            operate_type: t,
            conversation_info: l
          } = n.update_conv_participant_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationAdd",
            meta: {
              conversation_id: e,
              operate_type: t,
              conversation_info: JSON.stringify(l)
            }
          });
          if (t === chatConstantsEnum.participantOpType.OPERATE_CONVERSATION_PARTICIPANT_CREATE_CONV) {
            try {
              chatConversationUpdateHandler.updateConversationInfo({
                conversation: chatConversationTransformer.transformConversationBase(l, undefined),
                bot_info: {}
              });
              chatConversationLinkInsert.insertConversationLink({
                conversationId: e,
                index: 1
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
    ConversationAddMessageCmdPlugin: function () {
      return u;
    }
  });
}
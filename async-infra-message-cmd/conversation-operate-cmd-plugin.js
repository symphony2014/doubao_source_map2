// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'r' to 'chatConversationLinkInsert'
// - Resolved require(146291) to 'chat-conversation-link-insert'
// - Renamed variable 'o' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 's' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'conversationCmdSymbol'
// - Resolved require(269597) to 'conversation-cmd-symbol'
// - Updated imported property 'a' to 'conversationCmd' (module 269597)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Bq' to 'convOperateType' (module 876559)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'o' to 'insertConversationLink' (module 146291)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 599447
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatConversationLinkInsert = require("chat-conversation-link-insert") /*id: 146291*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationCmdSymbol = require("conversation-cmd-symbol") /*id: 269597*/;
  function l(e, t, n) {
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
  class c {
    constructor() {
      l(this, "pluginIdentifier", conversationCmdSymbol.conversationCmd);
      l(this, "handleCmd", e => {
        if (e.data.version === "2.0") {
          var a;
          let {
            conversation_id: l = "",
            operate_type: c
          } = e.data.data.operate_conv_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationOperate",
            meta: {
              conversation_id: l,
              operate_type: c
            }
          });
          if (c === chatConstantsEnum.convOperateType.TOP) {
            if (chatFeedStoreFactory.useFeedStore.getState().conversationMap[l]?.pinned) {
              return;
            }
            try {
              chatConversationLinkInsert.insertConversationLink({
                conversationId: l,
                index: 1,
                pinOperation: true
              });
            } catch (e) {
              if (e instanceof Error) {
                loggerServiceCore.defaultLogger.persist.error({
                  message: "ConversationOperate failed",
                  error: e
                });
              }
            }
          }
          if (c === chatConstantsEnum.convOperateType.CANCEL_TOP) {
            if (!((a = chatFeedStoreFactory.useFeedStore.getState().conversationMap) === null || a === undefined ? undefined : a[l]?.pinned)) {
              return;
            }
            try {
              chatConversationLinkInsert.insertConversationLink({
                conversationId: l,
                index: 1,
                pinOperation: true
              });
            } catch (e) {
              if (e instanceof Error) {
                loggerServiceCore.defaultLogger.persist.error({
                  message: "ConversationOperate failed",
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
    ConversationOperateMessageCmdPlugin: function () {
      return c;
    }
  });
}
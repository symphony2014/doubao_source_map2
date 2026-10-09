// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deleteMessageMapHandler'
// - Resolved require(278067) to 'delete-message-map-handler'
// - Renamed variable 'r' to 'messageBreakHandler'
// - Resolved require(874388) to 'message-break-handler'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'updateConversationInfo'
// - Resolved require(914918) to 'update-conversation-info'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'l' to 'chatClearHistorySymbol'
// - Resolved require(343458) to 'chat-clear-history-symbol'
// - Updated imported property 'M' to 'clearHistorySymbol' (module 343458)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'D' to 'handleBrokenMessage' (module 874388)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'D' to 'deleteMessageMap' (module 278067)
// - Updated imported property 'p' to 'updateConversation' (module 914918)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 443574
         */
module.exports = function (module, exports, require) {
  var deleteMessageMapHandler = require("delete-message-map-handler") /*id: 278067*/;
  var messageBreakHandler = require("message-break-handler") /*id: 874388*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var updateConversationInfo = require("update-conversation-info") /*id: 914918*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatClearHistorySymbol = require("chat-clear-history-symbol") /*id: 343458*/;
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
      c(this, "pluginIdentifier", chatClearHistorySymbol.clearHistorySymbol);
      c(this, "handleCmd", async e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t = ""
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationClear",
            meta: {
              conversation_id: t
            }
          });
          await messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, t);
          deleteMessageMapHandler.deleteMessageMap(t);
        }
        if (e.data.version === "2.0") {
          var n;
          let {
            conversation_id: l = "",
            clear_message_index: c
          } = (e == null ? undefined : (n = e.data) === null || n === undefined ? undefined : n.data?.clear_msg_history_notify) || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationClear",
            meta: {
              conversation_id: l,
              clear_message_index: c
            }
          });
          await messageBreakHandler.handleBrokenMessage(chatMessageStoreFactory.createMessageStore, l);
          deleteMessageMapHandler.deleteMessageMap(l);
          if (c) {
            let e = Number(c) + 1;
            updateConversationInfo.updateConversation({
              conversation_id: l,
              message_index: String(e),
              message_cursor: String(e)
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationClearHistoryMessageCmdPlugin: function () {
      return u;
    }
  });
}
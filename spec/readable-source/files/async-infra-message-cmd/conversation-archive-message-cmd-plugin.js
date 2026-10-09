// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'r' to 'conversationCleanupUtility'
// - Resolved require(130883) to 'conversation-cleanup-utility'
// - Renamed variable 'o' to 'removeConversationLink'
// - Resolved require(914448) to 'remove-conversation-link'
// - Renamed variable 's' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'c' to 'chatArchiveCmdSymbol'
// - Resolved require(882166) to 'chat-archive-cmd-symbol'
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'Z' to 'archiveCmdSymbol' (module 882166)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'M' to 'deleteConversationData' (module 130883)
// - Updated imported property 'o' to 'removeConvLink' (module 914448)
// - Updated imported property 'yP' to 'deleteMode' (module 876559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 409967
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var conversationCleanupUtility = require("conversation-cleanup-utility") /*id: 130883*/;
  var removeConversationLink = require("remove-conversation-link") /*id: 914448*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e) {
    chatFeedStoreFactory.useFeedStore.setState({
      latestArchivedConversationId: e
    });
  }
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatArchiveCmdSymbol = require("chat-archive-cmd-symbol") /*id: 882166*/;
  function u(e, t, n) {
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
  class d {
    constructor() {
      u(this, "pluginIdentifier", chatArchiveCmdSymbol.archiveCmdSymbol);
      u(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t = ""
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationArchive",
            meta: {
              conversation_id: t
            }
          });
          conversationCleanupUtility.deleteConversationData({
            conversationId: t
          });
          removeConversationLink.removeConvLink({
            conversationId: t
          });
          a(t);
        }
        if (e.data.version === "2.0") {
          let {
            conversation_id: t = "",
            mode: n
          } = e.data.data.delete_user_conversation_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationArchive",
            meta: {
              conversation_id: t,
              mode: n
            }
          });
          if (n === chatConstantsEnum.deleteMode.DeleteMode_RealDelete) {
            conversationCleanupUtility.deleteConversationData({
              conversationId: t
            });
            removeConversationLink.removeConvLink({
              conversationId: t
            });
            a(t);
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationArchiveMessageCmdPlugin: function () {
      return d;
    }
  });
}
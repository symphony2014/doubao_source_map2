// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'r' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'o' to 'draftMessageManager'
// - Resolved require(513014) to 'draft-message-manager'
// - Renamed variable 's' to 'aliceChatTaskManager'
// - Resolved require(268829) to 'alice-chat-task-manager'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'u' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Renamed variable 'd' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'p' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'h' to 'messageNotCompliantPlugin'
// - Resolved require(334377) to 'message-not-compliant-plugin'
// - Updated imported property 'J' to 'messageNotCompliant' (module 334377)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'M' to 'chatStatusTypes' (module 757046)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'FL' to 'getAndRemoveDraft' (module 513014)
// - Updated imported property 'cS' to 'filterReplyLinks' (module 513014)
// - Updated imported property 'NE' to 'removeReplyMessages' (module 513014)
// - Updated imported property 'lf' to 'mockReplyMessageId' (module 375543)
// - Updated imported property 'X1' to 'cancelChatTasks' (module 268829)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 31347
         */
module.exports = function (module, exports, require) {
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var aliceChatTaskManager = require("alice-chat-task-manager") /*id: 268829*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var messageNotCompliantPlugin = require("message-not-compliant-plugin") /*id: 334377*/;
  function f(e, t, n) {
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
  class g {
    constructor() {
      f(this, "pluginIdentifier", messageNotCompliantPlugin.messageNotCompliant);
      f(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          let {
            local_message_id: t,
            conversation_id: n,
            message_id: h
          } = e.data.data;
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MessageNotCompliant",
            meta: {
              conversation_id: n,
              message_id: h,
              local_message_id: t
            }
          });
          if (n) {
            chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
              if (e != null) {
                e.updateSendMessageStatus(n, chatStatusActionTypes.chatStatusTypes.Default);
              }
            });
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: n,
              immerUpdate: e => {
                let {
                  draftLocalMessageMap: i,
                  draftMessageMap: r
                } = e;
                let c = chatMessageTypes.PushMessageStatus.NotCompliant;
                if (t && i[t]) {
                  i[t].status = c;
                  draftMessageManager.getAndRemoveDraft(e, chatMessagingConstants.mockReplyMessageId);
                  aliceChatTaskManager.cancelChatTasks({
                    localMessageId: t
                  });
                }
                if (h) {
                  let t = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), n, {
                    isLocalMessage: false,
                    messageId: h
                  });
                  if (r[h]) {
                    r[h].status = c;
                  }
                  aliceChatTaskManager.cancelChatTasks({
                    replyId: h,
                    localMessageId: t == null ? undefined : t.local_message_id
                  });
                  draftMessageManager.filterReplyLinks(e, h);
                  draftMessageManager.removeReplyMessages(e, h);
                }
              }
            });
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    MessageNotCompliantMessageCmdPlugin: function () {
      return g;
    }
  });
}
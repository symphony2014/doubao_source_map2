// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'updateSuggestMessageMap'
// - Resolved require(338448) to 'update-suggest-message-map'
// - Renamed variable 's' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'l' to 'finishMessageTask'
// - Resolved require(989964) to 'finish-message-task'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'aliceChatTaskManager'
// - Resolved require(268829) to 'alice-chat-task-manager'
// - Renamed variable 'd' to 'draftMessageManager'
// - Resolved require(513014) to 'draft-message-manager'
// - Renamed variable 'p' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Renamed variable 'm' to 'timeoutLifecyclePluginSymbol'
// - Resolved require(534110) to 'timeout-lifecycle-plugin-symbol'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'M' to 'chatStatusTypes' (module 757046)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'X1' to 'cancelChatTasks' (module 268829)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'R' to 'finishMessageTask' (module 989964)
// - Updated imported property 'FL' to 'getAndRemoveDraft' (module 513014)
// - Updated imported property 'lf' to 'mockReplyMessageId' (module 375543)
// - Updated imported property 's' to 'setSuggestMessage' (module 338448)
// - Updated imported property '_' to 'timeoutLifecyclePlugin' (module 534110)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 286422
         */
module.exports = function (module, exports, require) {
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var updateSuggestMessageMap = require("update-suggest-message-map") /*id: 338448*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var finishMessageTask = require("finish-message-task") /*id: 989964*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var aliceChatTaskManager = require("alice-chat-task-manager") /*id: 268829*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var timeoutLifecyclePluginSymbol = require("timeout-lifecycle-plugin-symbol") /*id: 534110*/;
  class h {
    onMessageReceivingEnd(e, t) {
      if (t.final_status?.message === "Timeout") {
        let {
          conversation_id: e = ""
        } = t;
        let n = chatMessageStoreFactory.createMessageStore.getState();
        if (e) {
          chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(t => t == null ? undefined : t.updateSendMessageStatus(e, chatStatusActionTypes.chatStatusTypes.Default));
        }
        if (!messageContentTypeAndStatusChecker.isOnboardingMessage(t)) {
          let i = conversationMessageUtils_1.getMessageFromLink(n, e, {
            isLocalMessage: false,
            messageId: t.reply_id || ""
          });
          aliceChatTaskManager.cancelChatTasks({
            replyId: t.reply_id,
            localMessageId: i == null ? undefined : i.local_message_id
          });
        }
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: e || "",
          immerUpdate: e => {
            if (!t.local_message_id) {
              return;
            }
            let {
              draftLocalMessageMap: n,
              draftMessageLinks: i
            } = e;
            let r = n[t.local_message_id];
            if (r) {
              r.final_status = {
                ...r.final_status,
                message: "Timeout"
              };
            }
            let o = i.find(e => e.messageId === t.message_id);
            if (o) {
              o.messageKey = `${o.messageId}_timeout`;
            }
          }
        });
      }
      return t;
    }
    onMessageSendingEnd(e, t) {
      if (t.final_status?.message === "Timeout") {
        let {
          conversation_id: e = ""
        } = t;
        if (e) {
          chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(t => t == null ? undefined : t.updateSendMessageStatus(e, chatStatusActionTypes.chatStatusTypes.Default));
        }
        if (t == null ? undefined : t.local_message_id) {
          finishMessageTask.finishMessageTask(t.local_message_id);
          aliceChatTaskManager.cancelChatTasks({
            localMessageId: t.local_message_id
          });
        }
        chatMessageStoreUpdater.updateChatMessages({
          conversationId: e || "",
          immerUpdate: e => {
            let n = t.local_message_id;
            if (!n) {
              return;
            }
            draftMessageManager.getAndRemoveDraft(e, chatMessagingConstants.mockReplyMessageId);
            let {
              draftLocalMessageMap: i,
              draftMessageLinks: r
            } = e;
            let o = i[n];
            if (o) {
              o.final_status = {
                ...o.final_status,
                message: "Timeout"
              };
            }
            let s = r.find(e => e.messageId === n);
            if (s) {
              s.messageKey = `${s.messageId}_timeout`;
            }
          }
        });
      }
      return t;
    }
    onSuggestReceivingEnd(e, t) {
      let {
        conversation_id: n = "",
        reply_id: i = ""
      } = t || {};
      updateSuggestMessageMap.setSuggestMessage(n, e => ({
        replyId: i,
        loading: false,
        failed: false,
        expired: undefined,
        suggests: (e == null ? undefined : e.replyId) === i && (e == null ? undefined : e.suggests) || []
      }));
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = timeoutLifecyclePluginSymbol.timeoutLifecyclePlugin;
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
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
    MessageTimeoutMessageLifeCyclePlugin: function () {
      return h;
    }
  });
}
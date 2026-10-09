// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatStatusConstants_1'
// - Resolved require(558074) to 'chat-status-constants_1'
// - Renamed variable 'n' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'draftMessageManager'
// - Resolved require(513014) to 'draft-message-manager'
// - Renamed variable 'l' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 's' to 'updateConversationLocalState'
// - Resolved require(447623) to 'update-conversation-local-state'
// - Renamed variable 'u' to 'updateChatLimitMap'
// - Resolved require(822688) to 'update-chat-limit-map'
// - Renamed variable 'c' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'd' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'P' to 'updateConversationLocalState' (module 447623)
// - Updated imported property 'ns' to 'ChatStatus' (module 558074)
// - Updated imported property 't2' to 'ChatLimit' (module 558074)
// - Updated imported property 'R' to 'updateChatLimitMap' (module 822688)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'MX' to 'setDraftMessageStatus' (module 513014)
// - Updated imported property 'FL' to 'getAndRemoveDraft' (module 513014)
// - Updated imported property 'lf' to 'mockReplyMessageId' (module 375543)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 61919
         */
module.exports = function (module, exports, require) {
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var draftMessageManager = require("draft-message-manager") /*id: 513014*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var updateConversationLocalState = require("update-conversation-local-state") /*id: 447623*/;
  var updateChatLimitMap = require("update-chat-limit-map") /*id: 822688*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  class _ {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        let {
          conversation_id: t,
          local_message_id: r
        } = e;
        if (t && r) {
          if (t === "0") {
            let n = (e == null ? undefined : e.local_conversation_id) ?? Object.entries(chatMessageStoreFactory.createMessageStore.getState().localMessageMap).find(e => {
              let [, t] = e;
              return !!t[r];
            })?.[0] ?? t;
            if (n) {
              updateConversationLocalState.updateConversationLocalState(n, {
                createStatus: chatStatusConstants_1.ChatStatus.Failed,
                failReason: chatStatusConstants_1.ChatLimit.ReachLimit
              });
            }
          } else {
            updateChatLimitMap.updateChatLimitMap({
              [t]: false
            });
            chatEventEmitter.chatEmitter.emit("chat.user.logoutToSignIn", {
              reason: "message-reach-limit"
            });
            chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("message-reach-limit"));
            chatEventEmitter.chatEmitter.emit("chat.guest.login", {
              source: "message-reach-limit"
            });
            chatMessageStoreUpdater.updateChatMessages({
              conversationId: t,
              immerUpdate: e => {
                draftMessageManager.setDraftMessageStatus(e, {
                  isLocalMessage: true,
                  messageId: r
                });
                draftMessageManager.getAndRemoveDraft(e, chatMessagingConstants.mockReplyMessageId);
              }
            });
          }
        }
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
    GuestMessageLimitMessageErrorPlugin: function () {
      return _;
    }
  });
}
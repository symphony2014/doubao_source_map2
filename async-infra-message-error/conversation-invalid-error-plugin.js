// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'conversationCleanupUtility'
// - Resolved require(130883) to 'conversation-cleanup-utility'
// - Renamed variable 'o' to 'removeConversationLink'
// - Resolved require(914448) to 'remove-conversation-link'
// - Renamed variable 'a' to 'chatErrorEventManager'
// - Resolved require(211398) to 'chat-error-event-manager'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'l' to 'chatEventEmitter' (module 211398)
// - Updated imported property 'w' to 'chatErrorCodes' (module 211398)
// - Updated imported property 'o' to 'removeConvLink' (module 914448)
// - Updated imported property 'M' to 'deleteConversationData' (module 130883)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 319658
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationCleanupUtility = require("conversation-cleanup-utility") /*id: 130883*/;
  var removeConversationLink = require("remove-conversation-link") /*id: 914448*/;
  var chatErrorEventManager = require("chat-error-event-manager") /*id: 211398*/;
  class l {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        if (!e.conversation_id) {
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatGuidancePage());
          chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.CONVERSATION_INVALID);
          return;
        }
        removeConversationLink.removeConvLink({
          conversationId: e.conversation_id
        });
        conversationCleanupUtility.deleteConversationData({
          conversationId: e.conversation_id
        });
        chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatGuidancePage());
        chatErrorEventManager.chatEventEmitter.emit(chatErrorEventManager.chatErrorCodes.CONVERSATION_INVALID);
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
    ConversationInvalidMessageErrorPlugin: function () {
      return l;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'conversationInfoLoader'
// - Resolved require(240412) to 'conversation-info-loader'
// - Renamed variable 'o' to 'chatConversationSelectors_1'
// - Resolved require(804460) to 'chat-conversation-selectors_1'
// - Renamed variable 'a' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'l' to 'chatErrorCodes'
// - Resolved require(679391) to 'chat-error-codes'
// - Updated imported property 'S' to 'chatErrorCodes' (module 679391)
// - Updated imported property 'Kn' to 'getConversationBotId' (module 804460)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'O' to 'getConversationInfo' (module 240412)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 782648
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationInfoLoader = require("conversation-info-loader") /*id: 240412*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  class s {
    constructor() {
      var e;
      var t;
      var r;
      e = "handleSendingMessageError";
      t = e => {
        if (e.conversation_id) {
          if (e.error_details?.error_code === chatErrorCodes.chatErrorCodes.BOT_REVIEWING) {
            let t = chatConversationSelectors_1.getConversationBotId(chatFeedStoreFactory.useFeedStore.getState(), e.conversation_id);
            chatIocServiceLoaderHook.loadServiceAsync("chatBotService").then(e => {
              if (e != null) {
                e.updateBot({
                  id: t,
                  disabled: true
                });
              }
            });
          } else {
            conversationInfoLoader.getConversationInfo(e.conversation_id, "botInvalid");
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
    BotInvalidMessageErrorPlugin: function () {
      return s;
    }
  });
}
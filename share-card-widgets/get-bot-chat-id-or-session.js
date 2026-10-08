// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'getBotChatIdOrSession'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 429156
         */
module.exports = function (module, exports, require) {
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  let a = () => {
    let {
      chatId: t,
      chatType: n
    } = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig ?? {
      chatId: undefined,
      chatType: undefined
    };
    if (chatMessagingPredicateUtils.isBotConversation(n)) {
      return t;
    } else {
      return chatConversationBotId.getConversationBotId(t, true);
    }
  };
  require.d(exports, {
    getBotChatIdOrSession: function () {
      return a;
    }
  });
}
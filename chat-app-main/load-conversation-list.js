// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'loadConversationList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47840.01121ae4.js
         * chunkId: 47840
         * moduleId: 739168
         */
module.exports = function (module, exports, require) {
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var conversationListLoader = require("conversation-list-loader") /*id: 707686*/;
  var chatConversationConstants = require("chat-conversation-constants") /*id: 730433*/;
  async function s(e) {
    return await conversationListLoader.loadConversationList({
      size: chatMessagingConstants.maxRetryCount,
      index: 0,
      isReload: e.isReload,
      type: e.isGuest ? [chatConversationConstants.conversationScope.Guest] : e.isOverallList ? [chatConversationConstants.conversationScope.Overall] : [chatConversationConstants.conversationScope.Feed, chatConversationConstants.conversationScope.Bot]
    });
  }
  require.d(exports, {
    loadConversationList: function () {
      return s;
    }
  });
}
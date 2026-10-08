// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'getConversationBotId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 619792
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let o = (e, t) => chatConversationSelectors_1.getConversationBotId(chatFeedStoreFactory.useFeedStore.getState(), e, t);
  require.d(exports, {
    getConversationBotId: function () {
      return o;
    }
  });
}
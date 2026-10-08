// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'getConversationType'
// - Renamed export 'q' to 'getConversationThreadId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 166172
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let o = function (e, t = false) {
    return chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), e, t);
  };
  let a = e => chatConversationSelectors_1.getConversationThreadId(chatFeedStoreFactory.useFeedStore.getState(), e);
  require.d(exports, {
    getConversationType: function () {
      return o;
    },
    getConversationThreadId: function () {
      return a;
    }
  });
}
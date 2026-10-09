// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zU' to 'isLocalConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 891416
         */
module.exports = function (module, exports, require) {
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(e) {
    let {
      localConversationMap: t
    } = chatFeedStoreFactory.useFeedStore.getState();
    return e in t;
  }
  require.d(exports, {
    isLocalConversation: function () {
      return r;
    }
  });
}
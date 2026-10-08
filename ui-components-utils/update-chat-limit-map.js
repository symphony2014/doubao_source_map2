// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'updateChatLimitMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 95610.2fce6626.js
         * chunkId: 95610
         * moduleId: 822688
         */
module.exports = function (module, exports, require) {
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(t) {
    chatFeedStoreFactory.useFeedStore.setState(e => ({
      chatNotReachLimitMap: {
        ...e.chatNotReachLimitMap,
        ...t
      }
    }));
  }
  require.d(exports, {
    updateChatLimitMap: function () {
      return r;
    }
  });
}
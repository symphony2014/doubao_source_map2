// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'setGuestThreadLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 95610.2fce6626.js
         * chunkId: 95610
         * moduleId: 345143
         */
module.exports = function (module, exports, require) {
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(t) {
    chatFeedStoreFactory.useFeedStore.setState({
      guestReachCreateThreadLimit: t
    });
  }
  require.d(exports, {
    setGuestThreadLimit: function () {
      return r;
    }
  });
}
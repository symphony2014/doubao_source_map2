// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'setChatCreateStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.2dd70858.js
         * chunkId: 51606
         * moduleId: 890724
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(e) {
    let {
      conversationId: t = "",
      status: n = false
    } = e;
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(e => {
      e.chatCreateInFirstTime[t] = n;
    }));
  }
  require.d(exports, {
    setChatCreateStatus: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'updateConversationLocalState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 447623
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(e, t) {
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(s => {
      let {
        localConversationMap: {
          [e]: i
        }
      } = s;
      if (i) {
        i.local = i.local ? {
          ...i.local,
          ...t
        } : t;
      }
    }));
  }
  require.d(exports, {
    updateConversationLocalState: function () {
      return r;
    }
  });
}
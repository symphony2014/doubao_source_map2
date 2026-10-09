// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'updateConversationSection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 494219
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function r(e, t) {
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(s => {
      if (t && s.conversationMap[e]) {
        s.conversationMap[e].last_section_id = t;
      }
    }));
  }
  require.d(exports, {
    updateConversationSection: function () {
      return r;
    }
  });
}
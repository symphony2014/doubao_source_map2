// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'deleteConversationData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33961.76b04428.js
         * chunkId: 33961
         * moduleId: 130883
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function i(e) {
    let {
      conversationId: t
    } = e;
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(e => {
      if (e.conversationMap[t]) {
        delete e.conversationMap[t];
      }
      if (e.lastMessageIndexMap[t]) {
        delete e.lastMessageIndexMap[t];
      }
    }));
  }
  require.d(exports, {
    deleteConversationData: function () {
      return i;
    }
  });
}
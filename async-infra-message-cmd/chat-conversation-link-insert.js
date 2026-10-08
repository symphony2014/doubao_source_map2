// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'insertConversationLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33961.76b04428.js
         * chunkId: 33961
         * moduleId: 146291
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e) {
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(t => chatConversationLinkManager.insertConversationLink(t, {
      ...e
    })));
  }
  require.d(exports, {
    insertConversationLink: function () {
      return a;
    }
  });
}
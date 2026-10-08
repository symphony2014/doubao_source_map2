// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'updateConversationLinkPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 726974
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e, t) {
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(s => {
      chatConversationLinkManager.insertConversationLink(s, {
        ...e
      });
      let i = s.conversationLinks.findIndex(e => e.conversationId === t.conversationId);
      if (~i) {
        chatConversationLinkManager.removeConversationLink(s, i);
      }
    }));
  }
  require.d(exports, {
    updateConversationLinkPosition: function () {
      return a;
    }
  });
}
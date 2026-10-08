// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'removeConvLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33961.76b04428.js
         * chunkId: 33961
         * moduleId: 914448
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatConversationLinkManager = require("chat-conversation-link-manager") /*id: 653485*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  function a(e) {
    let {
      conversationId: t
    } = e;
    let n = chatFeedStoreFactory.useFeedStore.getState().conversationLinks.findIndex(e => e.conversationId === t);
    if (~n) {
      chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(e => chatConversationLinkManager.removeConversationLink(e, n)));
    }
  }
  require.d(exports, {
    removeConvLink: function () {
      return a;
    }
  });
}
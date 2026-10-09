// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'createLocalConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 549663
         */
module.exports = function (module, exports, require) {
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStatusConstants_1 = require("chat-status-constants_1") /*id: 558074*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationUtils_1 = require("chat-conversation-utils_1") /*id: 502844*/;
  function l({
    reportEvent: e,
    conversation: t,
    conversationId: n
  } = {}) {
    let l = n || chatConversationUtils_1.generateLocalId();
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(n => {
      n.localConversationMap[l] = {
        local: {
          createStatus: chatStatusConstants_1.ChatStatus.Pending,
          reportEvent: e
        },
        ...t
      };
    }));
    return l;
  }
  require.d(exports, {
    createLocalConversation: function () {
      return l;
    }
  });
}
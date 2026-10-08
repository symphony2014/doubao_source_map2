// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'isLastSection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 320509
         */
module.exports = function (module, exports, require) {
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let r = e => {
    return (chatFeedStoreFactory.useFeedStore.getState().conversationMap[e.conversation_id ?? ""]?.last_section_id ?? "") === e.section_id;
  };
  require.d(exports, {
    isLastSection: function () {
      return r;
    }
  });
}
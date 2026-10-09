// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'ConversationTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 93192
         */
module.exports = function (module, exports, require) {
  var i = {
    Conversation: 0,
    Bot: 1,
    ThreadLocalConversation: 2,
    ProfileBot: 3,
    NewThread: 4,
    CollectionLocalConversation: 6,
    SharedThreadContinueChat: 8,
    NewDoc: 9
  };
  require.d(exports, {
    ConversationTypes: function () {
      return i;
    }
  });
}
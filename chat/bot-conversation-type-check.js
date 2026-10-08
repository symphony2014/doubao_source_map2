// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'isBotConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 492342
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  let r = e => (e == null ? undefined : e.conversation_type) === chatCoreConstants.BotTypes.Bot;
  require.d(exports, {
    isBotConversation: function () {
      return r;
    }
  });
}
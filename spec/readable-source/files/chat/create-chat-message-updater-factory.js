// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'createChatMessageUpdater'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 388719
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  function r(e) {
    return t => chatMessageStoreUpdater.updateChatMessages({
      conversationId: e,
      immerUpdate: t
    });
  }
  require.d(exports, {
    createChatMessageUpdater: function () {
      return r;
    }
  });
}
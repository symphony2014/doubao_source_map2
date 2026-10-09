// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'isLoadingMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 572705
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let r = e => (e == null ? undefined : e.message_type) === chatMessageTypes.MessageType.Loading || (e == null ? undefined : e.content_type) === 2003;
  require.d(exports, {
    isLoadingMessage: function () {
      return r;
    }
  });
}
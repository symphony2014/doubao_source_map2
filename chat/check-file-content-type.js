// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'isFileContentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 934971
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let r = e => (e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.File;
  require.d(exports, {
    isFileContentType: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'isImageContentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 490356
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let r = e => (e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Image;
  require.d(exports, {
    isImageContentType: function () {
      return r;
    }
  });
}
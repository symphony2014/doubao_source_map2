// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'isNestedContentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 316567
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  function r(e) {
    return (e == null ? undefined : e.content_type) === chatMessageTypes.ContentType.Nested;
  }
  require.d(exports, {
    isNestedContentType: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'isDocumentRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 558708
         */
module.exports = function (module, exports, require) {
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let i = e => e.type === chatMessageTypes.MetaType.DocumentRef;
  require.d(exports, {
    isDocumentRef: function () {
      return i;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getBlockToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 128453
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e) {
    switch (e.snapshot.type) {
      case docBlockTypeConstants.blockTypeConstants.IMAGE:
        return e.snapshot.image.token;
      case docBlockTypeConstants.blockTypeConstants.FILE:
        return e.snapshot.file.token;
      default:
        return;
    }
  }
  require.d(exports, {
    getBlockToken: function () {
      return i;
    }
  });
}
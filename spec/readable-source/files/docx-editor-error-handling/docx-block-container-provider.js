// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'blockContainerName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 577766
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-container");
  require.d(exports, {
    blockContainerName: function () {
      return n;
    }
  });
}
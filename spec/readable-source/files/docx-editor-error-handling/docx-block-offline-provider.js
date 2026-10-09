// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'blockOfflineName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 819294
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-offline");
  require.d(exports, {
    blockOfflineName: function () {
      return n;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'providerName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 704132
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-anchor");
  require.d(exports, {
    providerName: function () {
      return n;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'foldProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 207215
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("fold");
  require.d(exports, {
    foldProviderName: function () {
      return n;
    }
  });
}
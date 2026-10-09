// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'getProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 318467
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("text-highlight");
  require.d(exports, {
    getProviderName: function () {
      return n;
    }
  });
}
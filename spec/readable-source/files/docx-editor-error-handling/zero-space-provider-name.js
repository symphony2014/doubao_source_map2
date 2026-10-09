// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'zeroSpaceProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 715309
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("zero-space");
  require.d(exports, {
    zeroSpaceProviderName: function () {
      return n;
    }
  });
}
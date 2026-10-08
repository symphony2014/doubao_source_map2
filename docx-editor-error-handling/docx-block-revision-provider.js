// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'blockRevisionName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 728098
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-revision");
  require.d(exports, {
    blockRevisionName: function () {
      return n;
    }
  });
}
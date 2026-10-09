// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'resourceBlockName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 242875
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("resource-block");
  require.d(exports, {
    resourceBlockName: function () {
      return n;
    }
  });
}
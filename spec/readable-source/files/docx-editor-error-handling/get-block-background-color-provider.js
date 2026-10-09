// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'blockBackgroundColorProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 381597
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-background-color");
  require.d(exports, {
    blockBackgroundColorProviderName: function () {
      return n;
    }
  });
}
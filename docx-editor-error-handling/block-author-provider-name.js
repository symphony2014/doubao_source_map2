// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'getBlockAuthorProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 488151
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("block-author");
  require.d(exports, {
    getBlockAuthorProviderName: function () {
      return n;
    }
  });
}
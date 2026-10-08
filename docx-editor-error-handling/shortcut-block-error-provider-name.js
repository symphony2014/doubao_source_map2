// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'shortcutBlockErrorProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 150652
         */
module.exports = function (module, exports, require) {
  let n = require("docx-editor-core") /*id: 135760*/.getProviderName("short-cut-block-error");
  require.d(exports, {
    shortcutBlockErrorProviderName: function () {
      return n;
    }
  });
}
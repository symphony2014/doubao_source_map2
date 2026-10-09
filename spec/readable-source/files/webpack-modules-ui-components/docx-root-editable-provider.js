// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'getDocxRootProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 728331
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("root-editable-setter");
  require.d(exports, {
    getDocxRootProvider: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 804610
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("revision-tips");
  require.d(exports, {
    getProviderName: function () {
      return o;
    }
  });
}
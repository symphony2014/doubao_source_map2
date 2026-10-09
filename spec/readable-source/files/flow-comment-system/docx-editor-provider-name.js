// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'getProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 326421
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("export-panel");
  require.d(exports, {
    getProviderName: function () {
      return o;
    }
  });
}
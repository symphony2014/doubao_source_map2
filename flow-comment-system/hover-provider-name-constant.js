// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'hoverProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 226959
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("hover");
  require.d(exports, {
    hoverProviderName: function () {
      return o;
    }
  });
}
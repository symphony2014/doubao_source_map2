// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'autoSelectProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 799573
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("auto-select");
  require.d(exports, {
    autoSelectProvider: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'getTextInputTimeProviderName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 113009
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("text-input-time");
  require.d(exports, {
    getTextInputTimeProviderName: function () {
      return o;
    }
  });
}
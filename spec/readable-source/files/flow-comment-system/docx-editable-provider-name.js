// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getEditableProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 5481
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("editable");
  require.d(exports, {
    getEditableProvider: function () {
      return o;
    }
  });
}
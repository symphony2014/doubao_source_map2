// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'editModeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 90864
         */
module.exports = function (module, exports, require) {
  let o = require("docx-editor-core") /*id: 135760*/.getProviderName("edit-mode");
  require.d(exports, {
    editModeName: function () {
      return o;
    }
  });
}
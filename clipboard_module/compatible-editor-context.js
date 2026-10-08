// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'compatibleContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 6849
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("compatible-editor-context");
  require.d(exports, {
    compatibleContext: function () {
      return o;
    }
  });
}
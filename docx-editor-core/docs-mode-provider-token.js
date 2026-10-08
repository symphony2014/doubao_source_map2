// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'docsModeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 431030
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("docs-mode");
  require.d(exports, {
    docsModeProvider: function () {
      return o;
    }
  });
}
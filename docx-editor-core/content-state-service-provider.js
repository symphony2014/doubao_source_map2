// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'contentStateService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 280621
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("content-state-service");
  require.d(exports, {
    contentStateService: function () {
      return o;
    }
  });
}
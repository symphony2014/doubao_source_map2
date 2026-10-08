// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'featStatusProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 663703
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("feat-status-service");
  require.d(exports, {
    featStatusProvider: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'translateProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 138195
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("translate-service");
  require.d(exports, {
    translateProvider: function () {
      return o;
    }
  });
}
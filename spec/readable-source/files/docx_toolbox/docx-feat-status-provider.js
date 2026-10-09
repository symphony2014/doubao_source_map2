// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'featStatusProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 125704
         */
module.exports = function (module, exports, require) {
  var featStatusServiceProvider = require("feat-status-service-provider") /*id: 663703*/;
  require.d(exports, {
    featStatusProvider: function () {
      return featStatusServiceProvider.featStatusProvider;
    }
  });
}
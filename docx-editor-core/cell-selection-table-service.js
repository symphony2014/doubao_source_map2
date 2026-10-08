// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'cellSelectionToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 386469
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("CellSelectionTableUIService");
  require.d(exports, {
    cellSelectionToken: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'headerTableUiService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 777182
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("HeaderSelectionTableUIService");
  require.d(exports, {
    headerTableUiService: function () {
      return r;
    }
  });
}
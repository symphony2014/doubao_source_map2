// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'tableStateTableUiId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 506293
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("TableStateTableUIService");
  require.d(exports, {
    tableStateTableUiId: function () {
      return r;
    }
  });
}
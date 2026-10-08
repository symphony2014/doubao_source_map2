// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'tableWillDelCellId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 473045
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("table-will-delete-cell");
  require.d(exports, {
    tableWillDelCellId: function () {
      return r;
    }
  });
}
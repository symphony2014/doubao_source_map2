// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'tableResizeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 799973
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("table-resize");
  require.d(exports, {
    tableResizeName: function () {
      return r;
    }
  });
}
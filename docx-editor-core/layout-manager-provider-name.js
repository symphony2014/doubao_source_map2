// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'layoutManagerToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 474937
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("layout-manager");
  require.d(exports, {
    layoutManagerToken: function () {
      return r;
    }
  });
}
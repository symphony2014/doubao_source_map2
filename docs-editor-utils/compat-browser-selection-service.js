// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'compatBrowserSvc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 833280
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("compat-browser-selection-service");
  require.d(exports, {
    compatBrowserSvc: function () {
      return o;
    }
  });
}
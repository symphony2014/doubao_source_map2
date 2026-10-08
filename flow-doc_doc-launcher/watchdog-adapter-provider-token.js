// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'watchdogAdapterId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 907374
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("watchdog-adapter");
  require.d(exports, {
    watchdogAdapterId: function () {
      return r;
    }
  });
}
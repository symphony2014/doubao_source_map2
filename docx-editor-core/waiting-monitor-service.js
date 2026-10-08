// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'waitingMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 622032
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("waiting-monitor");
  require.d(exports, {
    waitingMonitor: function () {
      return r;
    }
  });
}
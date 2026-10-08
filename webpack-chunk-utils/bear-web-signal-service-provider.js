// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'bearWebSignalService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 878255
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("bear-web-signal-service");
  require.d(exports, {
    bearWebSignalService: function () {
      return i;
    }
  });
}
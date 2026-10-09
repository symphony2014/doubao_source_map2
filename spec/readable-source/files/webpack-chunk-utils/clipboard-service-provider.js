// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'clipboardServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 417317
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("clipboard-service");
  require.d(exports, {
    clipboardServiceId: function () {
      return i;
    }
  });
}
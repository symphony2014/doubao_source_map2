// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'clipboardServiceId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 555989
         */
module.exports = function (module, exports, require) {
  var clipboardServiceProvider = require("clipboard-service-provider") /*id: 417317*/;
  require.d(exports, {
    clipboardServiceId: function () {
      return clipboardServiceProvider.clipboardServiceId;
    }
  });
}
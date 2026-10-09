// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nk' to 'isInVC'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 390521
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let i = 26;
  browserEnvironmentDetectionUtils.browserDetector.isInVC;
  require.d(exports, {
    isInVC: function () {
      return i;
    }
  });
}
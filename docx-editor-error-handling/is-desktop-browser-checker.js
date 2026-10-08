// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SW' to 'isDesktopBrowser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 493826
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("bool-default-getter-util") /*id: 855627*/;
  let o = () => !browserEnvironmentDetectionUtils.browserDetector.isH5 && !browserEnvironmentDetectionUtils.browserDetector.isOpendoc;
  require.d(exports, {
    isDesktopBrowser: function () {
      return o;
    }
  });
}
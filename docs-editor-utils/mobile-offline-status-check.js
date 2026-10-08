// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'isMobileOrOffline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 381620
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  function l(e = false) {
    return (e ? browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp : browserEnvironmentDetectionUtils.browserDetector.isMobile) || docxOfflineStatusUtils.isDocxOfflineEnabled();
  }
  require.d(exports, {
    isMobileOrOffline: function () {
      return l;
    }
  });
}
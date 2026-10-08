// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isDebugOrOffline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 819067
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  let o = () => window.location.search.includes("debug=1") || browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp || docxOfflineStatusUtils.isGlobalOffline();
  require.d(exports, {
    isDebugOrOffline: function () {
      return o;
    }
  });
}
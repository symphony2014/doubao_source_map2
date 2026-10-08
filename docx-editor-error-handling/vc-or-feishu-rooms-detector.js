// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'isInVcOrFeishuRooms'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 484530
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function o() {
    return browserEnvironmentDetectionUtils.browserDetector.isInVC || browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms;
  }
  require.d(exports, {
    isInVcOrFeishuRooms: function () {
      return o;
    }
  });
}
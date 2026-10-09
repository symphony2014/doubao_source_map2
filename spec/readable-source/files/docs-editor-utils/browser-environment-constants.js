// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P8' to 'iosBrowserSize'
// - Renamed export 'QY' to 'defaultBrowserSize'
// - Renamed export 'SN' to 'ipadBrowserSize'
// - Renamed export 'cR' to 'baseBrowserSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 881964
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let i = browserEnvironmentDetectionUtils.browserDetector.isIOS ? 54 : 92;
  let l = browserEnvironmentDetectionUtils.browserDetector.isIPad ? 10 : 80;
  let c = 30;
  let u = 8;
  require.d(exports, {
    iosBrowserSize: function () {
      return i;
    },
    defaultBrowserSize: function () {
      return u;
    },
    ipadBrowserSize: function () {
      return l;
    },
    baseBrowserSize: function () {
      return c;
    }
  });
}
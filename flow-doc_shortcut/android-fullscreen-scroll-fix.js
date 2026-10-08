// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'trackFullscreenScroll'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 859103
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function l(e) {
    let i;
    if (!browserEnvironmentDetectionUtils.browserDetector.isAndroid || !e) {
      return;
    }
    let n = () => {
      let e = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (e > 50) {
        i = Math.floor(e);
      }
    };
    let l = () => {
      if (i && i > 50) {
        window.scrollTo({
          top: i
        });
      }
    };
    e.addEventListener("touchstart", n, true);
    e.addEventListener("fullscreenchange", l, true);
    return () => {
      e.removeEventListener("touchstart", n, true);
      e.removeEventListener("fullscreenchange", l, true);
    };
  }
  require.d(exports, {
    trackFullscreenScroll: function () {
      return l;
    }
  });
}
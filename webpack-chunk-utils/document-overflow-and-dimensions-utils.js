// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S3' to 'getDocumentDimensions'
// - Renamed export 'og' to 'toggleBodyOverflow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 319019
         */
module.exports = function (module, exports, require) {
  require("doc-logger-symbol") /*id: 192564*/;
  require("di-container-instance") /*id: 167867*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function o(e) {
    if (!browserEnvironmentDetectionUtils.browserDetector.isIOS) {
      if (browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
        if (e) {
          let e = document.body.dataset.preOverflow || "initial";
          document.body.style.overflow = e;
        } else {
          document.body.dataset.preOverflow = document.body.style.overflow;
          document.body.style.cssText += "overflow: hidden !important";
        }
        return;
      }
      document.documentElement.style.overflow = e ? "initial" : "hidden";
      if (e) {
        let e = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.body.style.overflow = e;
      }
    }
  }
  let a = () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  require.d(exports, {
    getDocumentDimensions: function () {
      return a;
    },
    toggleBodyOverflow: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'resolveImageUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 323878
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let s = location.search.includes("docx_module_preload_enable");
  let a = !browserEnvironmentDetectionUtils.browserDetector.isMobile && (s || objectPathGetDefault.getObjectPathDefault(platformDocUtils.H8b(), ["docx_idle_module_preload", "enable"], false));
  require.d(exports, {
    resolveImageUrl: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rJ' to 'isFullscreenMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 71569
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("bool-default-getter-util") /*id: 855627*/;
  var urlLocationUtils = require("url-location-utils") /*id: 979504*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  function c() {
    let {
      blockId: e,
      openbrd: n
    } = platformDocUtils.o0s.parseQuery(urlLocationUtils.getSearch());
    return !!docComponentFeatureFlags.isFullscreenEnabled() && (!!e || !!n) && !browserEnvironmentDetectionUtils.browserDetector.isInVC;
  }
  require.d(exports, {
    isFullscreenMode: function () {
      return c;
    }
  });
}
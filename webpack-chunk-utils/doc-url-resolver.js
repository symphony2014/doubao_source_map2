// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'resolveDocUrl'
// - Renamed export 'h' to 'isDocDomain'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 199176
         */
module.exports = function (module, exports, require) {
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function u(e = docTokenManager.getDocToken()) {
    return browserEnvironmentDetectionUtils.isSuperApp() && platformDocUtils.hDJ(e);
  }
  function c() {
    return false;
  }
  require.d(exports, {
    resolveDocUrl: function () {
      return c;
    },
    isDocDomain: function () {
      return u;
    }
  });
}
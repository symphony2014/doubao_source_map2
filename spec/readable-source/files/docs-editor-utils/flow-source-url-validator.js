// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'validateSourceUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 352044
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let l = async e => {
    if (!e) {
      return null;
    }
    if (e.includes("docsource")) {
      e = e.replace(/^docsource/, "https");
    }
    try {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        let n = await fetch(e, {
          method: "GET",
          credentials: "include"
        });
        if (n.status === 403 || n.status === 404) {
          let e = platformDocUtils.wvG(n);
          if (e === platformDocUtils.SVk.UNKNOWN) {
            return null;
          }
          return e;
        }
      } else {
        await platformDocUtils.WY0({
          url: e,
          ignoreInterceptors: true
        });
      }
      return null;
    } catch (n) {
      let e = platformDocUtils.wvG(n);
      if (e === platformDocUtils.SVk.UNKNOWN) {
        return null;
      }
      return e;
    }
  };
  require.d(exports, {
    validateSourceUrl: function () {
      return l;
    }
  });
}
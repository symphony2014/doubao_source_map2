// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'shouldUseNewSnapshotVersion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 216834
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEnvFeatureService = require("docx-env-feature-service") /*id: 23798*/;
  function s() {
    let {
      enable: e,
      version: i
    } = objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_sheet_new_snapshot_version_limit", {
      enable: false,
      version: "0.0.0"
    });
    let r = docxEnvFeatureService.getAppVersion();
    return browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && r && e && !function (e = "", i = "") {
      let r = e.split(".");
      let n = i.split(".");
      let o = Math.max(r.length, n.length);
      for (let e = 0; e < o; e++) {
        let i = r[e];
        let o = n[e];
        if (!o) {
          break;
        }
        if (!i) {
          return false;
        }
        let l = Number(i);
        let s = Number(o);
        if (isNaN(l) || isNaN(s) || l < s) {
          return false;
        }
        if (l > s) {
          break;
        }
      }
      return true;
    }(r, i);
  }
  require.d(exports, {
    shouldUseNewSnapshotVersion: function () {
      return s;
    }
  });
}
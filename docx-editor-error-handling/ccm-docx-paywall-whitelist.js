// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'isDocxWhitelisted'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 77728
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let s = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_docx_paywall_config.whiteList") : objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_docx_paywall_config.whiteList");
  let a = () => {
    if ((processBrowserShim == null ? undefined : processBrowserShim.env?.NODE_ENV) === "development") {
      return true;
    }
    let i = objectPathGetDefault.getObjectPathDefault(window, "current_space_id") || objectPathGetDefault.getObjectPathDefault(window, "current_space_wiki.space_id");
    let r = objectPathGetDefault.getObjectPathDefault(window, "SERVER_DATA.meta.token");
    let a = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp && objectPathGetDefault.getObjectPathDefault(window, "realLocation.hostname") || objectPathGetDefault.getObjectPathDefault(window, "location.hostname");
    return !!s && s.length !== 0 && [i, r, a].some(e => s.includes(e));
  };
  require.d(exports, {
    isDocxWhitelisted: function () {
      return a;
    }
  });
}
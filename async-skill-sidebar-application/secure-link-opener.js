// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'openSecureLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 357305
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  function i(e) {
    let t = e.startsWith("http://") || e.startsWith("https://");
    let n = document.createElement("a");
    n.href = xssContentSanitizer.sanitizeUrl(t ? e : `${window.location.origin}${e.startsWith("/") ? e : `/${e}`}`, null, {
      logType: "js.href/src",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFWbFl%bXhNTTFZd1lWZDRla3d6$*5sWm$%bDJZM*RXZF$4W*$IQmliWE4xWk$oT2FHTnRaREZqZHowOQ"
    });
    n.target = "_blank";
    n.click();
  }
  require.d(exports, {
    openSecureLink: function () {
      return i;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'openFileUrl'
// - Renamed export 'N' to 'openSafeUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 715479
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let l = e => {
    window.open(xssContentSanitizer.sanitizeUrl(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(e), null, {
      logType: "js.window.location",
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*xZ$WpCWl-wNXZZb*RXZFdSRE9-c*pi$TEyWkZo%2NHSkl%WFppTTBKc1lta3hiR1ZJ$W14amJ%$m9Za014-zJ*WE5-Sk1ibEo2$1ZoS2Jt%ll%$DA9"
    }));
  };
  let a = async function (e) {
    var n;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "file";
    if (!e) {
      return;
    }
    let {
      data: r
    } = await apiServicesCollection.ResourceApiService.GetFileURL({
      uris: [e],
      type: i
    });
    let a = r == null ? undefined : (n = r.file_urls) === null || n === undefined ? undefined : n[0]?.main_url;
    if (a) {
      l(a);
    }
  };
  require.d(exports, {
    openFileUrl: function () {
      return a;
    },
    openSafeUrl: function () {
      return l;
    }
  });
}
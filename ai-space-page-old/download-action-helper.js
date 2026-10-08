// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EO' to 'getClientSource'
// - Renamed export 'In' to 'isSeoUser'
// - Renamed export 'cm' to 'triggerDownload'
// - Renamed export 'ht' to 'trackDownloadItem'
// - Renamed export 'nm' to 'trackWindowShow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 308251
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("query-string-utils_2_1") /*id: 698435*/;
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  let s = () => typeof window != "undefined" && cookieManagementUtils.CookieManager.get("flow_is_seo_user") === "1";
  let c = e => teaAnalyticsEventTracker.trackEvent("click_download_banner_item", {
    app_type: _(e)
  });
  let d = e => {
    let {
      type: t,
      ...i
    } = e;
    return teaAnalyticsEventTracker.trackEvent("click_download_item", {
      app_type: _(t),
      show_from: i.click_from,
      ...i
    });
  };
  let u = e => {
    let {
      type: t,
      ...i
    } = e;
    return teaAnalyticsEventTracker.trackEvent("download_window_show", {
      app_type: _(t),
      ...i
    });
  };
  let p = {
    [chatPlatformConstants.deviceTypes.Mac]: "mac_app_universal",
    [chatPlatformConstants.deviceTypes.Windows]: "windows_app",
    [chatPlatformConstants.deviceTypes.Chrome]: "chrome_extension",
    [chatPlatformConstants.deviceTypes.Edge]: "edge_extension",
    [chatPlatformConstants.deviceTypes.Safari]: "safari_extension"
  };
  let _ = e => {
    return p[e] ?? "";
  };
  let m = () => s() ? chatPlatformConstants.sourceConstants.seo : userAgentDeviceDetector.isLarkUserAgent() ? chatPlatformConstants.sourceConstants.lark : chatPlatformConstants.sourceConstants.web;
  let h = async (e, t, i) => {
    c(t);
    if (i == null ? undefined : i.useNewTab) {
      let t = window.open();
      if (t) {
        t.location.href = xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTTFZd1lWZDRla3d5-khW-$IxWTB%Rz$TZWxsW$NtNWtXRTA5"
        });
        setTimeout(() => {
          t.close();
        }, 300);
      }
    } else {
      window.open(xssContentSanitizer.sanitizeUrl(e || "", null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTTFZd1lWZDRla3d5-khW-$IxWTB%Rz$TZWxsW$NtNWtXRTA5"
      }));
    }
  };
  require.d(exports, {
    getClientSource: function () {
      return m;
    },
    isSeoUser: function () {
      return s;
    },
    triggerDownload: function () {
      return h;
    },
    trackDownloadItem: function () {
      return d;
    },
    trackWindowShow: function () {
      return u;
    }
  });
}
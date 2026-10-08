// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'DownloadTracker'
// - Renamed export 'Z' to 'DownloadAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23478.18df2811.js
         * chunkId: 23478
         * moduleId: 671471
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var downloadActionHelper = require("download-action-helper") /*id: 308251*/;
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var desktopDownloadHook = require("desktop-download-hook") /*id: 284934*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      children: t,
      utmSource: i = chatPlatformConstants.sourceConstants.web,
      trackMeta: c,
      className: u,
      placeholder: p
    } = e;
    let m = reactCoreLibraryReexport.useRef(false);
    let {
      currentAppConfig: g
    } = desktopDownloadHook.useDesktopDownload(i);
    let {
      download_url: f,
      onClick: v,
      keyWord: w
    } = g;
    reactCoreLibraryReexport.useEffect(() => {
      if (f && !m.current && c.showFrom) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "download_window_show",
          meta: {
            type: w,
            scene: c.showFrom,
            ...c
          }
        });
        downloadActionHelper.trackWindowShow({
          type: w,
          show_from: c.showFrom,
          ...c
        });
        m.current = true;
      }
    }, [f, c.showFrom]);
    if (!f) {
      return p || reactJsxRuntimeCoreReexport.jsx("div", {
        className: u
      });
    }
    let b = reactCoreLibraryReexport.isValidElement(t) ? t : t(g);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: u,
      onClick: () => {
        eventReportingService.createEventReporter({
          eventName: "click_download_item",
          meta: {
            type: w,
            scene: c.showFrom,
            ...c
          }
        }).success();
        if (v != null) {
          v();
        }
        downloadActionHelper.isSeoUser();
        window.open(xssContentSanitizer.sanitizeUrl(f || "", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkbHBIT1ROaWJ-aDJX$mRSZEZwdFZta*tTRlo1$2xoTmRtTXpTbXBNTWs1MllsaENkb%p0$m5Wa1NFMTJZ$WRX-%ZwS*$He*pNMDEw$2tjN%0ySnRlSFpa$jF*MFd%SjRjRnB-TlRCT$-wb3dZbWs1-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ"
        }));
        downloadActionHelper.trackDownloadItem({
          type: w,
          click_from: c.showFrom,
          ...c
        });
      },
      children: b
    });
  };
  exports.DownloadAction = c;
  require.d(exports, {
    DownloadTracker: function () {
      return c;
    }
  });
}
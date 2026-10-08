// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'OptimizedImageCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24845.6ed24187.js
         * chunkId: 24845
         * moduleId: 686991
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactOptimizedImageWrapper = require("react-optimized-image-wrapper") /*id: 784484*/;
  var uiConstantsModule = require("ui-constants-module") /*id: 631020*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var d = {
    container: "container-rZmzzb",
    caption: "caption-nEietf",
    "caption-title": "caption-title-LtCQQR"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e) {
    let {
      imgCaption: t,
      onCardShow: i,
      wrapperStyle: h,
      ...u
    } = e;
    let [m, p] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false
    });
    let [$, b] = reactCoreLibraryReexport.useState(false);
    let {
      src: f = null,
      onImageClick: w
    } = u;
    let {
      latestFileUrls: g
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [f || ""],
      enable: p
    });
    let R = (g == null ? undefined : g[0]) || f;
    reactCoreLibraryReexport.useEffect(() => {
      if (p) {
        if (i != null) {
          i();
        }
      }
    }, [p]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: m,
      className: d.container,
      style: h,
      children: [reactJsxRuntimeCoreReexport.jsx(reactOptimizedImageWrapper.Image, {
        ...u,
        src: xssContentSanitizer.sanitizeUrl(R, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haaFZ6Rm9XakpWZEZre$Jub*FRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
        }),
        onImageLoadComplete: () => {
          b(true);
        }
      }), t && $ && reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: e => {
          if (w != null) {
            w(e, {
              src: xssContentSanitizer.sanitizeUrl(R, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haaFZ6Rm9XakpWZEZre$Jub*FRemx3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
              }),
              status: uiConstantsModule.statusType.Success
            });
          }
        },
        className: d.caption,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: d["caption-title"],
          children: t
        })
      })]
    });
  }
  require.d(exports, {
    OptimizedImageCard: function () {
      return h;
    }
  });
}
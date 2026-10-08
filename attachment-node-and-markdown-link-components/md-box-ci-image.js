// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'fileUrlRefreshHook'
// - Resolved require(875965) to 'file-url-refresh-hook'
// - Renamed variable 'a' to 'fileUrlRefreshUtils'
// - Resolved require(66377) to 'file-url-refresh-utils'
// - Renamed variable 'o' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 's' to 'mdBoxLazyComponentsModule'
// - Resolved require(857296) to 'md-box-lazy-components-module'
// - Renamed variable 'c' to 'sandboxFileUrlCheck'
// - Resolved require(675258) to 'sandbox-file-url-check'
// - Renamed variable 'd' to 'reactUrlSchemeResolverHook'
// - Resolved require(373481) to 'react-url-scheme-resolver-hook'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'O' to 'useUrlSchemeResolver' (module 373481)
// - Updated imported property 'I' to 'getUrlExpireTime' (module 66377)
// - Updated imported property 'T' to 'useRefreshedFileUrls' (module 875965)
// - Updated imported property 'k7' to 'lazyImageComponent' (module 857296)
// - Updated imported property 'I' to 'checkSandboxFileUrl' (module 675258)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28526.86ccdfd3.js
         * chunkId: 28526
         * moduleId: 286260
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var fileUrlRefreshUtils = require("file-url-refresh-utils") /*id: 66377*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var mdBoxLazyComponentsModule = require("md-box-lazy-components-module") /*id: 857296*/;
  var sandboxFileUrlCheck = require("sandbox-file-url-check") /*id: 675258*/;
  var reactUrlSchemeResolverHook = require("react-url-scheme-resolver-hook") /*id: 373481*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      src: t,
      uriToUrlMap: n,
      ...v
    } = e;
    let p = reactUrlSchemeResolverHook.useUrlSchemeResolver(t, n);
    let f = reactCoreLibraryReexport.useMemo(() => {
      if (!p) {
        return false;
      }
      let e = fileUrlRefreshUtils.getUrlExpireTime(p);
      return !!e && !(Number(e) > Date.now() / 1000 + 600);
    }, [p]);
    let {
      latestFileUrls: m
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [p],
      enable: f
    });
    let h = m[0];
    return reactJsxRuntimeCoreReexport.jsx(mdBoxLazyComponentsModule.lazyImageComponent, {
      ...v,
      imageOptions: {
        layout: "intrinsic",
        objectFit: "contain"
      },
      onImageClick: (e, r, l, a) => {
        var s;
        let {
          src: d
        } = r;
        sandboxFileUrlCheck.checkSandboxFileUrl({
          src: xssContentSanitizer.sanitizeUrl(t || "", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZHNkRmx-Wkd4T%1rNXd%RmRzZEZsWFpHeE1ibEo2Wl$kR2$Wb3pWbm89"
          }),
          url: d || "",
          uriToUrlStr: safeJsonUtils.safeStringify(n)
        });
        if ((s = v.onImageClick) !== null && s !== undefined) {
          s.call(v, e, r, l, a);
        }
      },
      src: xssContentSanitizer.sanitizeUrl(h, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$-wNXd%RE5PZ$ZsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWs1d1R*ZHNkRmx-Wkd4T%1rNXd%RmRzZEZsWFpHeE1ibEo2Wl$kR2$Wb3pWbm89"
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    MdBoxCIImage: function () {
      return v;
    }
  });
}
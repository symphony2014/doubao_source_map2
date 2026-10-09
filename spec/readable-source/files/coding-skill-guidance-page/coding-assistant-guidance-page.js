// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'codeRouteUtils'
// - Resolved require(983618) to 'code-route-utils'
// - Renamed variable 'a' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'gJ' to 'codeChatPath' (module 983618)
// - Updated imported property 'HS' to 'chatCodingPath' (module 983618)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-guidance-page.ced23410.js
         * chunkId: 5489
         * moduleId: 668947
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      to: t,
      fallback: n = null,
      replace: r = false
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "undefined") {
        if (r) {
          window.location.replace(xssContentSanitizer.sanitizeUrl(t, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFl%bkJr%jFWMllr-z$hb*xZ$W5Ca%1q%jBZMjFX-TJ*W$NteFpNM%-xWk$oT05*bFlTbT$r$0%wOQ"
          }));
        } else {
          window.location.assign(xssContentSanitizer.sanitizeUrl(t, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFl%bkJr%jFWMllr-z$hb*xZ$W5Ca%1q%jBZMjFX-TJ*W$NteFpNM%-xWk$oT05*bFlTbT$r$0%wOQ"
          }));
        }
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: n
    });
  };
  let $ = e => {
    let t = e.isNewSite ? codeRouteUtils.codeChatPath : codeRouteUtils.chatCodingPath;
    return reactJsxRuntimeCoreReexport.jsx(l, {
      to: t,
      replace: true
    });
  };
  let c = () => reactJsxRuntimeCoreReexport.jsx($, {
    isNewSite: true
  });
  require.r(exports);
  require.d(exports, {
    CodingAssistantGuidancePage: function () {
      return c;
    }
  });
}
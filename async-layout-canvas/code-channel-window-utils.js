// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Sy' to 'createWindowOpener'
// - Renamed export 'fr' to 'launchSourceKey'
// - Renamed export 'pX' to 'channelSourceKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 98068
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let o = "code_launch_channel_source";
  let l = "code_channel_source";
  let s = () => {
    let {
      origin: e
    } = window.location;
    let t = window.location.pathname === "/code/challenge";
    return {
      customOpenWindow: function (n, s, c = false) {
        let u = codeRouteUtils.isCodePage();
        let d = codeRouteUtils.isCodeLaunchRoute() ? storageWrapperWithFallback.SessionStorageWrapper.getItem(o) : u ? storageWrapperWithFallback.SessionStorageWrapper.getItem(l) : "";
        let p = t ? `prev_page=code_app_challenge&from=${c ? "from_" : ""}code_app_challenge` : "";
        if (t) {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${n}${s ?? ""}${s ? `&${p}` : `?${p}`}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        }
        if (s) {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${n}${s}${d ? `&${d}` : ""}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        } else {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${n}${d ? `?${d}` : ""}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        }
      },
      customOpenNewUrl: (e, n) => {
        let s = codeRouteUtils.isCodePage();
        let c = codeRouteUtils.isCodeLaunchRoute() ? storageWrapperWithFallback.SessionStorageWrapper.getItem(o) : s ? storageWrapperWithFallback.SessionStorageWrapper.getItem(l) : "";
        let u = t ? "prev_page=code_app_challenge&from=code_app_challenge" : "";
        if (t) {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${n ?? ""}${n ? `&${u}` : `?${u}`}${c ? `&${c}` : ""}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        }
        if (n) {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${n}${c ? `&${c}` : ""}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        } else {
          window.open(xssContentSanitizer.sanitizeUrl(`${e}${c ? `?${c}` : ""}`, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$1RJNWEyRlhO$z$NTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxWWpK%2JFeFlRbWhhTWxWMFd%Sm9hR0pIZ%d4aWJX%nN%REpvZ*1JeWRIcE1NM$o2$2xNe*RWbFlXbkJhTWtZd1dsTXhNMkZZ$W05T$-wNXZX$mMxZFZwW*Qz$mtTRTQw$1ZoS2Jt%ll%$DA9"
          }), "_blank");
        }
      }
    };
  };
  require.d(exports, {
    createWindowOpener: function () {
      return s;
    },
    launchSourceKey: function () {
      return o;
    },
    channelSourceKey: function () {
      return l;
    }
  });
}
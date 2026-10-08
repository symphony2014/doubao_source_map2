// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'secureLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 887200
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      children: n,
      href: r,
      onClick: a
    } = e;
    let l = r.startsWith("http://") || r.startsWith("https://") ? r : `https://${r}`;
    return reactJsxRuntimeCoreReexport.jsx("a", {
      href: xssContentSanitizer.sanitizeUrl(l, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWWxje*JHSn$$WFJh$jFKd1pF-z$l$Xd5$*5aa$dFSjJZbTFXZFdSS$R-WmlSMngxW$hre*FtSXlNW*RpTWpWc1ltN$Jkb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
      }),
      target: "_blank",
      rel: "noopener",
      className: "link-tBegIT",
      onClick: () => {
        if (a != null) {
          a(l);
        }
      },
      children: n
    });
  };
  require.d(exports, {
    secureLink: function () {
      return a;
    }
  });
}
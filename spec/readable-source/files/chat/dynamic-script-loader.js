// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'isScriptLoaded'
// - Renamed export 'v' to 'loadScript'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 658121
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  function r(e, t) {
    return new Promise((n, r) => {
      let o = document.createElement("script");
      o.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$lbHB-$*p*amJXd3da$k01ZW1OdFR-Wlpi$kowWTNrNWMySXlSbXRN$0%1c$kyMXNkMlJETlRCak1rWj$Xak5XZWc9PQ"
      });
      if (t) {
        if (t.async !== undefined) {
          o.async = t.async;
        }
        if (t.type) {
          o.type = t.type;
        }
        if (t.crossOrigin) {
          o.crossOrigin = t.crossOrigin;
        }
      } else {
        o.async = true;
      }
      o.onload = () => {
        o.onload = null;
        o.onerror = null;
        n();
      };
      o.onerror = () => {
        o.onload = null;
        o.onerror = null;
        r(Error(`Failed to load script: ${e}`));
      };
      document.head.appendChild(o);
    });
  }
  function o(e) {
    return !!document.querySelector(`script[src*="${e}"]`);
  }
  require.d(exports, {
    isScriptLoaded: function () {
      return o;
    },
    loadScript: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'iframePreloader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 789625
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var partnerCcmDocxPaths = require("partner-ccm-docx-paths") /*id: 383740*/;
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let o = new class {
    preloadIframe() {
      if (this.isPreloaded) {
        return;
      }
      let e = () => {
        if (this.isPreloaded) {
          return;
        }
        this.iframe = document.createElement("iframe");
        let e = `${partnerCcmDocxPaths.getDocxPath}?isPreload=1`;
        this.iframe.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3elRte*pibHB3$1RK$2$rd3l$blpaTTJkMFlWZ*Fl$mx-T$d4T$dFSj$Xb*Q0Z*xsWF$-%mlWMFox$1Zka2JHTnBO$EJqTWtaN$dqTldlZz09"
        });
        this.iframe.style.display = "none";
        document.body.appendChild(this.iframe);
        this.isPreloaded = true;
      };
      if (typeof window != "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(() => e(), {
          timeout: 3000
        });
      } else {
        setTimeout(e, 3000);
      }
    }
    isIframePreloaded() {
      return this.isPreloaded;
    }
    setIsIframePreloaded(e) {
      this.isPreloaded = e;
    }
    reset() {
      var e;
      this.isPreloaded = false;
      if ((e = this.iframe) !== null && e !== undefined) {
        e.remove();
      }
      this.iframe = null;
    }
    constructor() {
      r(this, "isPreloaded", false);
      r(this, "iframe", null);
    }
  }();
  require.d(exports, {
    iframePreloader: function () {
      return o;
    }
  });
}
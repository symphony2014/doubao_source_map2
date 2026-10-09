// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Al' to 'copyElementToClipboard'
// - Renamed export 'mu' to 'downloadElementAsImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 83906
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  require("html2canvas-core-renderer") /*id: 275377*/;
  var domToCanvasConverter = require("dom-to-canvas-converter") /*id: 594034*/;
  let i = async (e, t) => {
    let a = null;
    try {
      a = await domToCanvasConverter.convertToCanvas(e, {
        fontEmbedCSS: "@font-face { font-family: Inter, -apple-system, \"system-ui\", \"Segoe UI\", \"SF Pro SC\", \"SF Pro Display\", \"SF Pro Icons\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; src: url(\"\"); unicode-range: U+0; }",
        ...t
      });
    } catch (e) {}
    return a;
  };
  let s = async e => {
    let t = await i(e);
    return !!t && (await o(t));
  };
  let o = e => new Promise(t => {
    e.toBlob(function (e) {
      if (!e) {
        t(false);
        return;
      }
      let a = new ClipboardItem({
        "image/png": e
      });
      navigator.clipboard.write([a]).then(() => t(true)).catch(() => t(false));
    }, "image/png");
  });
  let l = (e, t) => {
    i(e).then(e => {
      if (!e) {
        return "";
      }
      d(e, t);
    });
  };
  let d = (e, t) => {
    e.toBlob(function (e) {
      if (e) {
        c(URL.createObjectURL(e), t);
      }
    }, "image/png");
  };
  let c = (e, t) => {
    let a = document.createElement("a");
    a.href = xssContentSanitizer.sanitizeUrl(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x1$m5waFZ6$nNZek5OZEZre%9-%mpSemwx$2xjM%1HTj$PWHBq-l%xMldXN$dlb%Z-Tld4ak0wMTJXb*hvT%$4W$RtO$pXRXBz$EROT2JHTn$XbkJaTWxaNlRETk9iMWxZ%214T$-wNW9ZMjFSZ*1SW$$uQmlTRTExWk$oT2FHTnRaREZqZHowOQ"
    });
    a.download = t;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  require.d(exports, {
    copyElementToClipboard: function () {
      return s;
    },
    downloadElementAsImage: function () {
      return l;
    }
  });
}
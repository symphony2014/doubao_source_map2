// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AX' to 'addSourceLocationAttrs'
// - Renamed export 'Be' to 'removeTrackingAttrs'
// - Renamed export 'Mf' to 'addTrackingKeyAttrs'
// - Renamed export 'Q9' to 'generateShortHash'
// - Renamed export 'WO' to 'updateElementSrcTrack'
// - Renamed export 'ZZ' to 'updateMultipleElementSrc'
// - Renamed export 'w5' to 'updateElementTextContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: html-renderer.e7a0387b.js
         * chunkId: 19906
         * moduleId: 462061
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var htmlParserCore = require("html-parser-core") /*id: 948150*/;
  require("css-tree-core-parser") /*id: 364414*/;
  var cryptoMd5Core = require("crypto-md5-core") /*id: 252278*/;
  var a = cryptoMd5Core;
  let l = "data-doubao-key";
  function s(e) {
    return a(e).toString().substring(0, 8);
  }
  function u(e) {
    let r = htmlParserCore.parse(e, {
      sourceCodeLocationInfo: true
    });
    (function e(r) {
      if (r.childNodes) {
        r.childNodes.forEach(e);
      }
      if (r.sourceCodeLocation && r.nodeName !== "#text") {
        r.attrs ||= [];
        r.attrs.push({
          name: "data-doubao-line",
          value: String(r.sourceCodeLocation.startLine)
        });
        r.attrs.push({
          name: "data-doubao-column",
          value: String(r.sourceCodeLocation.startCol)
        });
      }
    })(r);
    return htmlParserCore.serialize(r);
  }
  function c(e) {
    let r = new DOMParser().parseFromString(e, "text/html");
    let t = 0;
    Array.from(r.body.children).forEach(function e(r) {
      r.setAttribute(l, String(t++));
      Array.from(r.children).forEach(e);
    });
    return r.documentElement.outerHTML;
  }
  function d(e, r, t) {
    let n = new DOMParser().parseFromString(e, "text/html");
    let i = 0;
    Array.from(n.body.children).forEach(function e(n) {
      if (String(i++) === r) {
        n.textContent = t;
      }
      Array.from(n.children).forEach(e);
    });
    return n.documentElement.outerHTML;
  }
  function f(e, r, t) {
    let i = new DOMParser().parseFromString(e, "text/html");
    let o = 0;
    Array.from(i.body.children).forEach(function e(i) {
      if (String(o++) === r) {
        i.src = xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFl%bWhp-lZKcFlqTm5kb$JZ$W5Ca$NFMTJZ$WhTZEdKRE5%QmpNa1o1$2pO$2$nPT0"
        });
      }
      Array.from(i.children).forEach(e);
    });
    return i.documentElement.outerHTML;
  }
  function m(e, r) {
    let t = new DOMParser().parseFromString(e, "text/html");
    let i = 0;
    Array.from(t.body.children).forEach(function e(t) {
      let o = String(i++);
      if (r[o]) {
        t.src = xssContentSanitizer.sanitizeUrl(r[o], null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFl%bWhp-lZKcFlqTm5kb$JZ$W5Ca$NFMTJZ$WhTZEdKRE5%QmpNa1o1$2pO$2$nPT0"
        });
      }
      Array.from(t.children).forEach(e);
    });
    return t.documentElement.outerHTML;
  }
  function h(e) {
    let r = new DOMParser().parseFromString(e, "text/html");
    let t = r.querySelectorAll(`[${l}]`);
    if (t.length === 0) {
      return e;
    } else {
      t.forEach(e => {
        e.removeAttribute(l);
        e.classList.remove("editing-breathing-bg");
        if (e.classList.length === 0) {
          e.removeAttribute("class");
        }
      });
      return r.body.innerHTML;
    }
  }
  require.d(exports, {
    addSourceLocationAttrs: function () {
      return u;
    },
    removeTrackingAttrs: function () {
      return h;
    },
    addTrackingKeyAttrs: function () {
      return c;
    },
    generateShortHash: function () {
      return s;
    },
    updateElementSrcTrack: function () {
      return f;
    },
    updateMultipleElementSrc: function () {
      return m;
    },
    updateElementTextContent: function () {
      return d;
    }
  });
}
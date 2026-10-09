// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CY' to 'getBookmarkTitle'
// - Renamed export 'R5' to 'processBookmarkMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-paste-panel.dec4e4b1.js
         * chunkId: 42590
         * moduleId: 249075
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function a(e, r = 5000) {
    if (!e) {
      return [null, ""];
    }
    let o = new Image();
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWFXSXlPWEpp$jBaN$l-az$N$1JI-khOam$%$XdZekpHZ$ZvelZubz0"
    });
    let i = o.decode().then(() => [e, ""]).catch(e => [null, "catch error"]);
    let a = 0;
    return Promise.race([i, new Promise(e => {
      a = window.setTimeout(() => {
        e([null, "decoded timeout"]);
        a = 0;
      }, r);
    })]).then(e => {
      if (a) {
        window.clearTimeout(a);
        a = 0;
      }
      return e;
    });
  }
  function l(e) {
    return function (e) {
      let r = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let o = function (e) {
        let r = document.createElement("a");
        r.href = xssContentSanitizer.sanitizeUrl(e, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWFXSXlPWEpp$jBaN$l-az$N$1JI-khOam$%$XdZekpHZ$ZvelZubz0"
        });
        try {
          return {
            protocol: r.protocol,
            hostname: r.hostname
          };
        } catch (e) {
          return null;
        }
      }(e);
      if (!o) {
        return "";
      }
      let {
        protocol: i,
        hostname: a
      } = o;
      if (r) {
        return [i, a].join("//");
      } else {
        return a;
      }
    }(e, false);
  }
  async function c(e, r) {
    let {
      cover_url: o,
      icon_url: n
    } = e;
    let [l, c] = await a(o);
    e.cover_url = l || "";
    let [s, u] = await a(n);
    e.icon_url = s || "";
    if (c || u) {
      let e = c ? `coverError: ${c}` : "";
      let o = u ? `iconError: ${u}` : "";
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docs_blocks_abnormal_behaviour_trace_dev", {
        action: "bookmark_cover_error",
        info: `decodeImageError: ${e}, ${o}`
      });
    }
    return e;
  }
  function s(e, r, o) {
    return (r == null ? undefined : r.title) || o || l(e);
  }
  async function u(e, r, o, n) {
    let i = n || l(e);
    if (!r) {
      return {
        title: i,
        url: e
      };
    }
    let {
      title: a,
      icon_url: s,
      cover_url: u,
      cover_height: d,
      cover_width: m,
      summary: _
    } = await c(r, o);
    return {
      url: e,
      title: a || i,
      icon: s,
      cover_url: u,
      cover_height: d,
      cover_width: m,
      summary: _
    };
  }
  require.d(exports, {
    getBookmarkTitle: function () {
      return s;
    },
    processBookmarkMetadata: function () {
      return u;
    }
  });
}
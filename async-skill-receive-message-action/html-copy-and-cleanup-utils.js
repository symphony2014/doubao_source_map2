// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vt' to 'HtmlCacheManager'
// - Renamed export '_8' to 'copyHtmlToClipboard'
// - Renamed export 'g' to 'cleanAndCopyText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 433842
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var o = clipboardCopyHelper;
  var staticPreviewConfig = require("static-preview-config") /*id: 88616*/;
  var appConstantsMap = require("app-constants-map") /*id: 696878*/;
  function c(e, t, n) {
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
  let d = new class {
    getShortKey(e) {
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        t = (t << 5) - t + e.charCodeAt(n);
        t &= t;
      }
      return Math.abs(t).toString(16);
    }
    getHTMLFromStore(e) {
      let t = this.getShortKey(e.trim());
      return this.store.get(t);
    }
    clearHTMLStore() {
      this.store.clear();
    }
    setHTMLStore(e, t) {
      let n = this.getShortKey(e.trim());
      if (this.store.size >= this.capacity) {
        let e = this.store.keys().next().value;
        if (e) {
          this.store.delete(e);
        }
      }
      this.store.set(n, t);
    }
    constructor() {
      c(this, "store", new Map());
      c(this, "capacity", 20);
    }
  }();
  async function u(e) {
    try {
      o(e || "");
      let t = function (e) {
        let t;
        let n = [];
        let i = /<escapeShell[\s\S]*?>([\s\S]*?)<\/escapeShell>/g;
        let l = 0;
        while ((t = i.exec(e)) !== null) {
          let i = t.index;
          let r = t.index + t[0].length;
          if (i > l) {
            let t = e.slice(l, i).trim();
            if (t) {
              n.push({
                type: "text",
                content: t
              });
            }
          }
          let o = /```html([\s\S]*?)```/.exec(t[1]);
          if (o) {
            n.push({
              type: "html",
              content: o[1].trim()
            });
          }
          l = r;
        }
        if (l < e.length) {
          let t = e.slice(l).trim();
          if (t) {
            n.push({
              type: "text",
              content: t
            });
          }
        }
        return n;
      }(e);
      let n = document.createElement("div");
      n.contentEditable = "true";
      Object.assign(n.style, {
        position: "absolute",
        width: "800px",
        left: "-9999px",
        top: "-9999px"
      });
      document.body.appendChild(n);
      for (let e of t) {
        if (e.type === "text") {
          let t = document.createElement("pre");
          t.textContent = e.content;
          n.appendChild(t);
        } else if (e.type === "html") {
          let t = d.getHTMLFromStore(e.content);
          t ||= await function (e) {
            return new Promise((t, n) => {
              let r = uuidGeneratorUtil.generateUuid();
              let o = document.createElement("iframe");
              Object.assign(o.style, {
                width: "800px",
                height: "600px",
                position: "absolute",
                right: "0",
                top: "0",
                zIndex: "-1",
                opacity: "0"
              });
              o.src = xssContentSanitizer.sanitizeUrl(`${staticPreviewConfig.previewBaseUrl}?need_resize_observer=1&retry=${Date.now()}&channelId=${r}`, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFlTbXhp-lZKc1kyM$dl$Xd5$*5aalNHdDFaRWhP-%dOdFpERmpkejA5"
              });
              o.setAttribute("sandbox", "allow-scripts allow-same-origin allow-downloads allow-popups allow-forms allow-top-navigation-by-user-activation allow-top-navigation-to-custom-protocols");
              let c = n => {
                var u;
                var p;
                if (n.data?.channelId === r && (n.data?.action === appConstantsMap.systemEvents.DAEMON_LOADED && ((u = o.contentWindow) === null || u === undefined || u.postMessage({
                  action: appConstantsMap.editorConstants.HTML,
                  payload: {
                    html: e,
                    isStreaming: false,
                    context: {
                      sourceCodeType: "html"
                    }
                  },
                  channelId: r
                }, "*")), n.data?.action === appConstantsMap.systemEvents.RENDERER_PAGE_LOAD && ((p = o.contentWindow) === null || p === undefined || p.postMessage({
                  action: appConstantsMap.editorConstants.REQUEST_EXPORT_IMG,
                  payload: {},
                  channelId: r
                }, "*")), n.data?.action === appConstantsMap.systemEvents.RESPONSE_EXPORT_IMG)) {
                  let {
                    base64: e
                  } = n.data?.payload || {};
                  if (e) {
                    t(e);
                    o.remove();
                    window.removeEventListener("message", c);
                  }
                }
              };
              window.addEventListener("message", c);
              document.body.appendChild(o);
              setTimeout(() => {
                n(Error("timeout"));
                o.remove();
                window.removeEventListener("message", c);
              }, 4000);
            });
          }(e.content);
          let r = document.createElement("img");
          r.src = xssContentSanitizer.sanitizeUrl(t, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2Wk$je*MweFlTbXhp-lZKc1kyM$dl$Xd5$*5aalNHdDFaRWhP-%dOdFpERmpkejA5"
          });
          n.appendChild(r);
        }
      }
      let r = document.createRange();
      r.selectNodeContents(n);
      let c = window.getSelection();
      if (c) {
        c.removeAllRanges();
        c.addRange(r);
      }
      document.execCommand("copy");
      document.body.removeChild(n);
    } catch (e) {}
  }
  function p(e) {
    let t = ((e == null ? undefined : e.replace(/<escapeShell[\s\S]*?<\/escapeShell>/gi, "")) || "").replace(/<\|FunctionCallBegin\|>[\s\S]*?<\|FunctionCallEnd\|>/g, "").replace(/```STDOUT[\s\S]*?```/g, "").split("\n").map(e => e.replace(/\s+$/, "")).join("\n").replace(/\n{3,}/g, "\n\n").trim();
    o(t);
  }
  require.d(exports, {
    HtmlCacheManager: function () {
      return d;
    },
    copyHtmlToClipboard: function () {
      return u;
    },
    cleanAndCopyText: function () {
      return p;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AO' to 'findBlockByCoords'
// - Renamed export 'XD' to 'handleContentCopy'
// - Renamed export 'eq' to 'getToolbarConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 904499
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var l = clipboardCopyHelper;
  var fileClipboardUtils = require("file-clipboard-utils") /*id: 256419*/;
  let o = e => {
    let t = document.createElement("canvas");
    let n = t.getContext("2d");
    return new Promise(a => {
      let l = new Image();
      l.crossOrigin = "anonymous";
      l.onload = function () {
        t.width = l.naturalWidth;
        t.height = l.naturalHeight;
        n.drawImage(l, 0, 0);
        t.toBlob(e => {
          a(e);
        }, "image/png");
      };
      l.src = xssContentSanitizer.sanitizeUrl(e, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjZX$E5LZ*1KS*Qz%mti$3hzWkhrNWFtSXlNW*RpTWpWc1ltN$Nla3d6%W10-WF%RjNX$mRr-k$3elZqQmhWM2g2$ERKS2Rt%lhO$3Ra$0$vM$RHN$Nlb*xZ%201a1dFMDk"
      });
    });
  };
  let s = async e => {
    let {
      label: t,
      text: n = "",
      url: r
    } = e;
    if (t === "image" && r) {
      try {
        let {
          pathname: e
        } = new URL(r);
        if (/(?:jpg|jpeg)$/i.test(e)) {
          let e = await o(r);
          if (e) {
            await fileClipboardUtils.copyToClipboard(e, e.type);
          }
        } else {
          await fileClipboardUtils.copyImageUrl(r);
        }
      } catch (e) {
        l(n);
      }
    } else {
      l(n);
    }
  };
  let c = e => {
    let {
      blocks: t,
      event: {
        x: n,
        y: r,
        width: a,
        height: i,
        page: o,
        eventType: c
      },
      enableAskAIWithImage: u,
      actions: d = {}
    } = e;
    let {
      onExplain: h,
      onSearch: p,
      onTranslate: f,
      onAskAIWithText: g,
      onAskAIWithImage: m
    } = d;
    let v = n / a;
    let x = r / i;
    for (let e of t.filter(e => e.page === o)) {
      let {
        label: t,
        text: n = "",
        norm_box: {
          x0: r = 0,
          y0: a = 0,
          x1: i = 0,
          y1: o = 0
        } = {},
        page: d,
        url: b
      } = e;
      if (v > r && v < i && x > a && x < o) {
        let v = [r, a, i, o];
        let x = {
          highlightConfig: {
            area: v
          }
        };
        if (c === "click" || c === "hover") {
          if (t === "image") {
            x.toolbarConfig = {
              onExtract: () => n,
              onViewImage: () => b,
              onCopyExtractedText: () => {
                l(n);
              },
              onCopyImage: () => s(e),
              onAskAI: u ? m && (() => {
                m({
                  url: b
                });
              }) : undefined
            };
          } else {
            x.toolbarConfig = {};
            x.toolbarConfig.onAskAI = g && (() => {
              g({
                text: n,
                area: v,
                page: d
              });
            });
            x.toolbarConfig.onCopy = () => {
              s(e);
            };
            x.toolbarConfig.onExplain = h && (() => {
              h({
                text: n,
                area: v,
                page: d
              });
            });
            x.toolbarConfig.onSearch = p && (() => {
              p({
                text: n,
                area: v,
                page: d
              });
            });
            x.toolbarConfig.onTranslate = f && ((e, t) => {
              f({
                text: n,
                area: v,
                page: d,
                sourceLanguage: e,
                targetLanguage: t
              });
            });
          }
          return x;
        }
      }
    }
    return null;
  };
  let u = e => {
    let {
      blocks: t,
      event: {
        x: n,
        y: r,
        width: a,
        height: l,
        page: i
      }
    } = e;
    let o = n / a;
    let s = r / l;
    for (let e of t.filter(e => e.page === i)) {
      let {
        norm_box: {
          x0: t = 0,
          y0: n = 0,
          x1: r = 0,
          y1: a = 0
        } = {}
      } = e;
      if (o > t && o < r && s > n && s < a) {
        return {
          area: [t, n, r, a],
          block: e
        };
      }
    }
    return null;
  };
  require.d(exports, {
    findBlockByCoords: function () {
      return u;
    },
    handleContentCopy: function () {
      return s;
    },
    getToolbarConfig: function () {
      return c;
    }
  });
}
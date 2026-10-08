// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$S' to 'logRenderDuration'
// - Renamed export 'Bf' to 'collectBlockInfoDev'
// - Renamed export 'Lp' to 'waitImageLoaded'
// - Renamed export 'YS' to 'logBlockRenderTimeout'
// - Renamed export 'fg' to 'logStageDuration'
// - Renamed export 'ni' to 'getAnchorRecordData'
// - Renamed export 'qJ' to 'logError'
// - Renamed export 'ux' to 'reportDowngrade'
// - Renamed export 'xV' to 'getRenderDuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 48587
         */
module.exports = function (module, exports, require) {
  let r;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var docxAnchorApi = require("docx-anchor-api") /*id: 814805*/;
  var docxShortcutConstants = require("docx-shortcut-constants") /*id: 853990*/;
  function u(e) {
    requestAnimationFrame(() => {
      new Image().src = xssContentSanitizer.sanitizeUrl(`//localhost/downgrade/?reason=${e}`, null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZW1*SE9-b*tSMDR4Wk$NN%1X%khiSE5qZ$R$d1l6Skdl$m96$m5vPQ"
      });
    });
  }
  function p(e, i) {
    return new Promise((n, r) => {
      var l;
      let o = e instanceof Document ? "document" : (l = e.classList) === null || l === undefined ? undefined : l.toString();
      let s = e.querySelectorAll("img:not(.docx-image)");
      let c = s.length;
      let d = 0;
      let h = 0;
      function u() {
        if (h) {
          clearTimeout(h);
        }
        if (d === c) {
          (function () {
            let e = docxShortcutFeatureDetection.isAdminWithComment() && docxShortcutFeatureDetection.isPDFMode();
            let r = `getTimeOut: ${i()}, loadedNum: ${d}, allImageNum: ${c}, needWaitCommentLoaded: ${e}`;
            setTimeout(() => {
              docxShortcutFeatureDetection.debugLogger(`waitImageLoaded(host:${o}) is all loaded, ${r}`);
              n({});
            }, !!e * 1500);
          })();
          return;
        }
        if (i()) {
          docxShortcutFeatureDetection.debugLogger(`waitImageLoaded(host:${o}) is timeout`);
          n({});
          return;
        }
        h = window.setTimeout(() => {
          u();
        }, 100);
      }
      if (s) {
        for (let e = 0; e < c; e++) {
          let i = s[e];
          if (i.complete) {
            d++;
            continue;
          }
          let n = false;
          if (!docxShortcutFeatureDetection.isPDFMode() && !docxShortcutFeatureDetection.hasMaxBlockCount() && !docxShortcutFeatureDetection.isTextCardAnchor() && !function (e) {
            let {
              innerHeight: i
            } = window;
            return !!e && !(e.getBoundingClientRect().top >= i);
          }(i)) {
            d++;
            continue;
          }
          i.addEventListener("load", () => {
            d++;
            u();
          });
          i.addEventListener("error", () => {
            {
              let e = "image loaded fail";
              m({
                reason: e
              });
              r(Error(e));
            }
          });
        }
      }
      u();
    });
  }
  async function f(e) {
    if (e) {
      let {
        id: i,
        block_sequence: n
      } = e;
      let {
        block_id: s,
        scene: u
      } = platformDocUtils.o0s.parseQuery(location.href);
      let p = Number(u);
      if (s) {
        if ((p === anchorConstantsConfig.anchorScene.SCENE_ANCHOR_CONTENT || p === anchorConstantsConfig.anchorScene.SCENE_HIGHLIGHT) && n) {
          try {
            let e = await docxAnchorApi.getAnchorData({
              page_id: i,
              anchor_id: s
            });
            let l = e.selectedBlocks || [];
            let o = l.map(e => e.block_id);
            let a = n.find(e => o.includes(e));
            r = a ? {
              recordId: a,
              selectedBlocks: l.filter(e => e.block_id !== i),
              subtype: e.subtype
            } : {
              recordId: ""
            };
          } catch (e) {
            r = {
              recordId: ""
            };
            (function (e, i = false) {
              v(docxShortcutConstants.docxShortcutConsts.CANCEL_RENDER, {
                reason: e
              });
              let n = new Image();
              let r = "//localhost/signal/cancel/";
              if (!i) {
                r = `${r}?error=${e}`;
              }
              n.src = xssContentSanitizer.sanitizeUrl(r, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZW1*SE9-b*tSMDR4Wk$NN%1X%khiSE5qZ$R$d1l6Skdl$m96$m5vPQ"
              });
            })("rpcerror");
          }
        } else {
          r = p === anchorConstantsConfig.anchorScene.SCENE_BLOCK && (n == null ? undefined : n.includes(s)) && s !== i ? {
            recordId: s,
            selectedBlocks: [{
              block_id: s
            }]
          } : {
            recordId: ""
          };
        }
      } else {
        r = undefined;
      }
      let f = localStorage.getItem("mock_docx_anchor");
      if (f) {
        docxShortcutFeatureDetection.debugLogger("use mock anchor data");
        try {
          r = JSON.parse(f);
        } catch (e) {}
      }
    }
    return r;
  }
  function v(e, i, n = {}) {
    if (!docxShortcutFeatureDetection.isShortcutEnabled()) {
      return;
    }
    let r = docxUtilityHelpers.maskSensitiveData(function () {
      let {
        search: e
      } = location;
      return new URLSearchParams(e).get("token") || "";
    }());
    let l = new XMLHttpRequest();
    l.open("POST", "//localhost/signal/log/");
    l.send(JSON.stringify({
      event: e,
      params: i,
      custom_header: {
        search: platformDocUtils.d6y?.search || location.search,
        hash: platformDocUtils.d6y?.hash || location.hash,
        front_session_id: `${r}_${window.shortcutRenderStart}`,
        isPDF: docxShortcutFeatureDetection.isPDFMode(),
        token: r,
        ...n
      }
    }));
  }
  function m(e) {
    docxShortcutFeatureDetection.debugLogger(`error: ${JSON.stringify(e)}`);
    v(docxShortcutConstants.docxShortcutConsts.ERROR_LOG, e);
  }
  function g() {
    let e = window.shortcutRenderStart;
    if (e) {
      return Date.now() - e;
    } else {
      return 0;
    }
  }
  function _(e, i = g()) {
    docxShortcutFeatureDetection.debugLogger(`[render duration] ${e}, duration: ${i}`);
    v(docxShortcutConstants.docxShortcutConsts.RENDER_DURATION, {
      sub_name: "stage_duration",
      stage_name: e,
      duration: i
    });
  }
  function w(e, i = g()) {
    v(docxShortcutConstants.docxShortcutConsts.RENDER_DURATION, {
      sub_name: "block_duration",
      block_type: e,
      duration: i
    });
  }
  function b(e, i, n = g()) {
    v(docxShortcutConstants.docxShortcutConsts.BLOCK_RENDER_TIMEOUT, {
      block_type: i,
      record_id: docxUtilityHelpers.maskSensitiveData(e),
      duration: n
    });
  }
  function E(e, i, n = {}) {
    let r = g();
    let l = "";
    try {
      l = JSON.stringify(n);
    } catch (e) {
      l = "stringify info error";
    }
    docxShortcutFeatureDetection.debugLogger(`[collect Block info dev] ${e}, blockType: ${i}, duration: ${r}, infoStr: ${l}`);
    v(docxShortcutConstants.docxShortcutConsts.BLOCK_INFO_DEV, {
      action: e,
      block_type: i,
      duration: r,
      info: l
    });
  }
  require.d(exports, {
    logRenderDuration: function () {
      return w;
    },
    collectBlockInfoDev: function () {
      return E;
    },
    waitImageLoaded: function () {
      return p;
    },
    logBlockRenderTimeout: function () {
      return b;
    },
    logStageDuration: function () {
      return _;
    },
    getAnchorRecordData: function () {
      return f;
    },
    logError: function () {
      return m;
    },
    reportDowngrade: function () {
      return u;
    },
    getRenderDuration: function () {
      return g;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'lk' to 'openUrlInNewWindow'
// - Renamed export 'aE' to 'handleAnchorNavigation'
// - Renamed export 'cb' to 'normalizeUrl'
// - Renamed export 'B7' to 'isCommentUrl'
// - Renamed export 'CB' to 'isCombinedUrl'
// - Renamed export 'cn' to 'isStrictUrl'
// - Renamed export 'Yo' to 'openUrlWithPlatform'
// - Renamed export 'ni' to 'extractHashFromUrl'
// - Renamed export 'b2' to 'decodeUrlComponent'
// - Renamed export '$h' to 'parseUrlForPreview'
// - Renamed export 'b8' to 'extractUrlRanges'
// - Renamed export 'en' to 'createUrlObject'
// - Renamed export 'Fy' to 'getDocxRecordType'
// - Renamed export 'MI' to 'openUrlSafely'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 330118
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var urlParserUtil = require("url-parser-util") /*id: 14217*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var clientsideLinkExports = require("clientside-link-exports") /*id: 751953*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docNetworkStateCollector = require("doc-network-state-collector") /*id: 193991*/;
  var docAnchorCollabUtilities = require("doc-anchor-collab-utilities") /*id: 762610*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  var driveUrlValidationUtilities = require("drive-url-validation-utilities") /*id: 262405*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let T = "noopener=yes,noreferrer=yes";
  let C = "_blank";
  function k(e, n = C) {
    let r = window.open(xssContentSanitizer.sanitizeUrl(e, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3llSEJp-lhOMFl$ZFdjMk5I$m5sT%1qbDNXb*MwZEdSW$NuTk1XRll3W$ZkN*$reH$$bnBa$0$wd$p*aE5Q%T09"
    }), n, T);
    if (r) {
      r.opener = null;
    }
  }
  function I(e, n = C, r) {
    let i = platformDocUtils.ERO(e);
    let l = window.open(xssContentSanitizer.sanitizeUrl(i, null, {
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
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3llSEJp-lhOMFl$ZFdjMk5I$m5sT%1qbDNXb*MwZEdSW$NuTk1XRll3W$ZkN*$reH$$bnBa$0$wd$p*aE5Q%T09"
    }), n, T);
    if (!r) {
      platformDocUtils.cu7();
    }
    if (l) {
      l.opener = null;
    }
    return l;
  }
  var urlRegexValidator = require("url-regex-validator") /*id: 959147*/;
  let y = (e, n, r) => {
    let i = new URL(e);
    let {
      parseQuery: l,
      formatQuery: c
    } = platformDocUtils.o0s;
    let u = l(e);
    u.subFrom = function (e, n) {
      if (!e.hasBlockModelByBlockId(n)) {
        return docBlockTypeConstants.blockTypeConstants.PAGE;
      }
      let o = [...e.getBlockPath(n), n].reverse().find(n => {
        let r = e.getBlockModelByBlockIdNotCheck(n);
        return r && docBlockTypeConstants.pageTableTypes.includes(r.type);
      });
      if (!o) {
        return docBlockTypeConstants.blockTypeConstants.PAGE;
      }
      let i = e.getBlockModelByBlockIdNotCheck(o)?.type || docBlockTypeConstants.blockTypeConstants.PAGE;
      if (/^heading/.test(i)) {
        return "heading";
      } else {
        return i;
      }
    }(r, n);
    i.search = c(u);
    return i.toString();
  };
  function O(e) {
    try {
      return new URL(e, window.location.href);
    } catch (e) {
      return null;
    }
  }
  function S(e = "") {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let r = arguments.length > 2 ? arguments[2] : undefined;
    let o = arguments.length > 3 ? arguments[3] : undefined;
    if (urlRegexValidator.isVcsProtocol(e)) {
      if (n) {
        return encodeURIComponent(e);
      } else {
        return e;
      }
    }
    let i = "";
    i = driveUrlValidationUtilities.hasValidUrlProtocol(e) ? e : driveUrlValidationUtilities.isValidEmailTld(e) ? `mailto:${e}` : `http://${e}`;
    let l = n ? encodeURIComponent(i) : i;
    if (r && o && browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5 && urlRegexConstants.docsUrlRegex.test(l)) {
      return y(l, r, o);
    } else {
      return l;
    }
  }
  function A(e, n, r) {
    let o = n ? urlRegexConstants.globalUrlRegex : urlRegexConstants.combinedUrlRegex;
    if (r) {
      o = RegExp(`^(${o.source})$`, "gi");
    }
    let i = new RegExp(o).exec(e);
    return !!i && i.index === 0;
  }
  function L(e, n, r) {
    let o = [];
    if (urlRegexValidator.isCombinedUrl(n)) {
      (function (e) {
        let n = new RegExp(urlRegexConstants.combinedUrlRegex);
        n.lastIndex = 0;
        let r = null;
        let o = [];
        while (r = n.exec(e)) {
          let e = r.index;
          let n = r[0];
          let i = S(n);
          o.push({
            range: [e, e + n.length],
            mark: {
              [clientsideLinkExports.localLink]: i
            }
          });
        }
        return o;
      })(n).forEach(n => {
        let {
          range: i
        } = n;
        let l = [r[0] + i[0], r[0] + i[1]];
        let c = editorRangeUtilities.convertRangeWithZone(e, l);
        if (!e.model.zoneState.getEntities(c).every(e => e.attributes[clientsideLinkExports.unlink] && e[clientsideLinkExports.link])) {
          o.push({
            range: l,
            value: decodeURIComponent(n.mark[clientsideLinkExports.localLink])
          });
        }
      });
    }
    return o;
  }
  function N(e) {
    if (!platformDocUtils.O_4(e)) {
      return false;
    }
    let n = window.docsLocation || window.location;
    let {
      pathname: r,
      token: i
    } = urlParserUtil.parseUrl(e, true);
    let {
      pathname: c
    } = urlParserUtil.parseUrl(n.href, true);
    let a = platformDocUtils.o0s.parseQuery(e)[platformDocUtils.BvL.VERSION_PAGE] || "";
    let d = platformDocUtils.o0s.parseQuery(n.href)[platformDocUtils.BvL.VERSION_PAGE] || "";
    if (r === c) {
      return d === a;
    }
    if (syncUrlBlockUtils.isSyncingActive()) {
      return i === syncUrlBlockUtils.getUrlToken();
    }
    let f = browserEnvironmentDetectionUtils.browserDetector.isMobile ? new URL(e).pathname : e;
    return platformDocUtils.ci3(f) === docTokenHelperUtils.resolveDocToken();
  }
  function B(e) {
    let {
      comment_id: n,
      comment_anchor: r
    } = platformDocUtils.o0s.parseQuery(e);
    return N(e) && !!n && r === "true";
  }
  function D(e) {
    return platformDocUtils.o0s.parseQuery(e)[urlRegexConstants.docxRecordType] || "";
  }
  function w(e) {
    let {
      hash: n
    } = urlParserUtil.parseUrl(e, true);
    return n.slice(1);
  }
  function M(e, n, r = w) {
    let {
      metaKey: i
    } = e;
    let {
      ctrlKey: l
    } = e;
    let u = r(n);
    if (!u && r !== w) {
      u = w(n);
    }
    let {
      comment_id: a,
      comment_type: s
    } = platformDocUtils.o0s.parseQuery(n);
    let d = N(n) && !!u;
    let f = platformDocUtils.G3X() && B(n);
    if (d || f) {
      var E;
      var m;
      var b;
      var v;
      if (i || l) {
        k(n);
      } else if (f && a) {
        if ((m = document.activeElement) !== null && m !== undefined && (E = m.blur) !== null && E !== undefined) {
          E.call(m);
        }
        platformDocUtils.vpe.emit(docxCommentConstants.commentAnchorActiveEvent, {
          commentId: a,
          commentType: s
        });
      } else {
        if ((v = document.activeElement) !== null && v !== undefined && (b = v.blur) !== null && b !== undefined) {
          b.call(v);
        }
        if (docAnchorCollabUtilities.isPlatformSupported()) {
          docNetworkStateCollector.collectNetworkState.handleAnchor(u);
        } else {
          docxEditorEventConstantsAndManager.globalEventBus.trigger(editorCommands.editorCommands.LocateBlockWithRecordId, [u]);
        }
      }
    }
    return d || f;
  }
  function P(e) {
    if (!urlRegexValidator.isCombinedUrl(e)) {
      return {
        parse: false,
        blockTypeId: ""
      };
    }
    let n = browserEnvironmentDetectionUtils.browserDetector.isMobile ? objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_docverse_settings") : objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_docverse_settings");
    let r = (n == null ? undefined : n.linkToUrlPreview) || {};
    let o = false;
    let l = "";
    for (let n in r) {
      if (new RegExp(r[n]).test(e)) {
        o = true;
        l = n;
        break;
      }
    }
    return {
      parse: o,
      blockTypeId: l,
      record: {
        url: e,
        ...function (e) {
          let {
            search: n
          } = new URL(e);
          let r = new URLSearchParams(n);
          let o = r.get(urlRegexConstants.snapshotIdKey);
          if (!o) {
            return {
              block_type_id: "",
              record: {}
            };
          }
          let i = r.get(urlRegexConstants.isSandBoxKey) === urlRegexConstants.stringConstantOne;
          let l = r.get(urlRegexConstants.languageKey);
          return {
            block_type_id: i ? urlRegexConstants.blockIdConstantA : urlRegexConstants.blockIdConstantB,
            record: {
              url: e,
              blockSnapshotId: o,
              language: l,
              search: n
            }
          };
        }(e).record
      }
    };
  }
  let F = e => {
    try {
      return decodeURIComponent(e);
    } catch (n) {
      return e;
    }
  };
  require.d(exports, {
    openUrlInNewWindow: function () {
      return A;
    },
    handleAnchorNavigation: function () {
      return M;
    },
    normalizeUrl: function () {
      return S;
    },
    isCommentUrl: function () {
      return B;
    },
    isCombinedUrl: function () {
      return urlRegexValidator.isCombinedUrl;
    },
    isStrictUrl: function () {
      return urlRegexValidator.isStrictUrl;
    },
    openUrlWithPlatform: function () {
      return I;
    },
    extractHashFromUrl: function () {
      return w;
    },
    decodeUrlComponent: function () {
      return F;
    },
    parseUrlForPreview: function () {
      return P;
    },
    extractUrlRanges: function () {
      return L;
    },
    createUrlObject: function () {
      return O;
    },
    getDocxRecordType: function () {
      return D;
    },
    openUrlSafely: function () {
      return k;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lg' to 'getLoadedBlockStats'
// - Renamed export 'D2' to 'fontConfig'
// - Renamed export 'ij' to 'isLoadTimeout'
// - Renamed export 'YM' to 'countVisibleBlocks'
// - Renamed export 'tZ' to 'isBlockTypeLoaded'
// - Renamed export 'fM' to 'registerBlockLoadListener'
// - Renamed export 'WK' to 'sendRenderSignal'
// - Renamed export '$J' to 'loadedBlockData'
// - Renamed export 'fw' to 'getEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 977936
         */
module.exports = function (module, exports, require) {
  let n;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxAnchorImageLoaderLogger = require("docx-anchor-image-loader-logger") /*id: 48587*/;
  var docPreviewBlockUtils = require("doc-preview-block-utils") /*id: 579459*/;
  var docxShortcutErrorHandler = require("docx-shortcut-error-handler") /*id: 396634*/;
  var docxShortcutConstants = require("docx-shortcut-constants") /*id: 853990*/;
  var docxPdfPaginationUtil = require("docx-pdf-pagination-util") /*id: 691369*/;
  var revisionExtensionServiceToken = require("revision-extension-service-token") /*id: 755911*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var docxTextRangeHighlightUtils = require("docx-text-range-highlight-utils") /*id: 663042*/;
  var flowDocBlockConstants = require("flow-doc-block-constants") /*id: 920877*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let C = false;
  let _ = browserEnvironmentDetectionUtils.browserDetector.windows ? "'Source Code Pro', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', 'Microsoft Yahei'" : "SourceCodeProMac";
  let T = Date.now();
  let I = 400;
  let R = 20;
  let L = 28;
  let N = 40;
  let A = 500;
  let P = 460;
  let D = 26;
  let j = 28;
  let O = {
    textual: 6,
    [docBlockTypeConstants.blockTypeConstants.BITABLE]: [0, 14],
    [docBlockTypeConstants.blockTypeConstants.SHEET]: [0, 14],
    default: 14
  };
  let B = Math.max(...Object.values(O).map(e => typeof e == "number" ? e : Math.max(...e)));
  let F = Math.max(N, j + B);
  let Z = P - (j + B) * 2;
  let z = [[Z, 1, 0], [0, 1, 1]];
  let H = {
    search_long_preview: {
      width: 540,
      height: {
        min: 304,
        max: 1440
      }
    },
    search_square_preview: {
      width: 820,
      height: {
        min: 461,
        max: 820
      }
    }
  };
  let $ = (e, i) => {
    let r = i.getRootBlockId();
    let n = i.getBlockModelByBlockId(r).children;
    let o = n[n.length - 1].id;
    let l = e.getBlockRect(o);
    let s = i.editorAPI.config.get("boundary").getBoundingClientRect().top;
    let a = !!docxShortcutFeatureDetection.isSyncedBlockToken() * 28;
    return Math.ceil(l.bottom + s + a);
  };
  let W = e => {
    let i = !docxShortcutFeatureDetection.isNeedWatermark();
    docxShortcutFeatureDetection.debugLogger(`getWatermarkEnableDefault: ${i} source: ${e}`);
    return i;
  };
  let V = new Set();
  let U = false;
  let X = false;
  let Y = !docxShortcutFeatureDetection.isAdminWithComment();
  let q = W("init");
  let G = null;
  let J = () => G;
  let K = new Set();
  let Q = new Set();
  let ee = new Set();
  let et = new Set();
  let ei = [docBlockTypeConstants.blockTypeConstants.CODE, docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.DIAGRAM, docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.POLL, docBlockTypeConstants.blockTypeConstants.EQUATION, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.WIKI_CATALOG, docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER, docBlockTypeConstants.blockTypeConstants.WIKI_RECENT, docBlockTypeConstants.blockTypeConstants.BOOKMARK, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.AI, docBlockTypeConstants.blockTypeConstants.CALENDAR_EVENT, docBlockTypeConstants.blockTypeConstants.MERMAID, ...docBlockTypeConstants.chartEmbeddedTypes];
  let er = (e, i) => {
    docxShortcutFeatureDetection.debugLogger(`setWatermarkEnable: before: ${q} after: ${e} source: ${i}`);
    q = e;
  };
  let en = [...ei];
  let eo = {};
  let el = new Proxy({}, {
    set: (e, i, r, n) => {
      if (r > 0) {
        docxAnchorImageLoaderLogger.logRenderDuration(i.toString());
      }
      return Reflect.set(e, i, r, n);
    }
  });
  let es = {};
  let ea = false;
  let ec = () => es;
  let ed = function () {
    let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let i = document.querySelector(".shortcut-page-container");
    i.classList.remove(docxShortcutConstants.optimizeHeightId);
    if (e) {
      i.classList.add("shortcut-page-container-pc");
      i.classList.remove("shortcut-page-container-mobile");
      I = 400;
      R = 20;
      L = 28;
      N = 40;
      A = 500;
    } else {
      i.classList.remove("shortcut-page-container-pc");
      i.classList.add("shortcut-page-container-mobile");
      I = 320;
      R = 20;
      L = 28;
      N = 40;
      A = 434;
    }
    D = 26;
    F = Math.max(N, (j = 28) + B);
    z = [[Z = (P = A - R * 2) - (j + B) * 2, 1, 0], [0, 1, 1]];
    window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("textShortcutChangeMode", {
      detail: {
        isPC: e
      },
      bubbles: true,
      cancelable: false
    }));
  };
  window.changeShortcutWidth = () => {
    docxShortcutFeatureDetection.debugLogger("changeShortcutWidth");
    ed(false);
    eI(true);
  };
  let eu = () => {
    let e = platformDocUtils.o0s.parseQuery(location.href).max_load_time;
    if (e) {
      return Number(e);
    } else if (docxShortcutFeatureDetection.isPDFMode()) {
      return 110;
    } else if (es[docBlockTypeConstants.blockTypeConstants.JIRA_FILTER] > 0 || es[docBlockTypeConstants.blockTypeConstants.SHEET] > 0 || es[docBlockTypeConstants.blockTypeConstants.BITABLE] > 0 || es[docBlockTypeConstants.blockTypeConstants.WHITEBOARD] > 0) {
      return 9;
    } else {
      return 7;
    }
  };
  let eh = () => {
    U = false;
    ea = false;
    Y = !docxShortcutFeatureDetection.isAdminWithComment();
    er(W("reset"), "reset");
    eo = {};
    ei.forEach(e => {
      es[e] = 0;
      el[e] = 0;
      eo[e] = 0;
    });
    K.clear();
    Q.clear();
    ee.clear();
    V.clear();
    et.clear();
    if (n) {
      clearTimeout(n);
    }
  };
  eh();
  let ep = () => U;
  let ef = e => el[e] + eo[e] >= es[e];
  let eg = () => en.every(e => {
    let i = e === docBlockTypeConstants.blockTypeConstants.FILE || e === docBlockTypeConstants.blockTypeConstants.EQUATION ? ef(e) || U : ef(e);
    if (!i) {
      docxShortcutFeatureDetection.debugLogger("isAllBlockLoaded: not all block loaded. type:", e);
    }
    return i;
  });
  let em = e => {
    if (G == null ? undefined : G.blockManager) {
      V.forEach(e => {
        if (e) {
          eo[String(e)] = 0;
        }
      });
      G.blockManager.allBlockViews.forEach(i => {
        let r = i.type;
        if (V.has(r) && !e(i, r)) {
          var n;
          eo[r]++;
          let {
            id: e
          } = i.record;
          docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxShortcutErrorHandler.ERROR_EVENT_TYPE, e);
          docxShortcutFeatureDetection.debugLogger(`LoadTimeout, type: ${r}, recordId: ${docxUtilityHelpers.maskSensitiveData(e)}`);
          if (r === docBlockTypeConstants.blockTypeConstants.CODE) {
            if (i != null && (n = i.forceHideLoading) !== null && n !== undefined) {
              n.call(i);
            }
          }
          if (r === docBlockTypeConstants.blockTypeConstants.IMAGE) {
            docxShortcutFeatureDetection.debugLogger(`image state, isError:${i == null ? undefined : i.state?.isError}, isBlockReady: ${i == null ? undefined : i.state?.isBlockReady}`);
          }
        }
      });
      docxShortcutFeatureDetection.debugLogger(`unloadedBlockNumMap: ${JSON.stringify(eo)}`);
    }
  };
  let ev = (e, i) => {
    if (!G) {
      return false;
    }
    let r = blockSettingResolver.getBlockSetting(i, G.blockManager, "isLoaded");
    return !!r && r({
      blockView: e,
      takedMindMapIds: Q,
      takedBitableIds: K,
      takedTableIds: ee
    });
  };
  let eb = () => {
    docxShortcutFeatureDetection.debugLogger("blockLoadTimeout");
    U = true;
    [...ei].filter(e => ![docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.BOOKMARK, docBlockTypeConstants.blockTypeConstants.TASK_LIST, docBlockTypeConstants.blockTypeConstants.EQUATION].includes(e)).forEach(e => {
      if (!ef(e)) {
        V.add(e);
      }
    });
    V.add(docBlockTypeConstants.blockTypeConstants.CHAT_CARD);
    em(ev);
    eI();
    if (n) {
      clearTimeout(n);
    }
  };
  let ey = e => {
    let i = 0;
    if ((G == null ? undefined : G.blockManager) && G.fold) {
      G.blockManager.editorAPI.dataService.getRecordMap().forEach(r => {
        if (G && r.snapshot.type === e) {
          var n;
          var o;
          let l = (n = G.blockManager) === null || n === undefined ? undefined : n.getBlockStructsByRecordId(r.id);
          if (!(l == null ? undefined : l.length)) {
            docxShortcutFeatureDetection.debugLogger(`cant find block struct, type: ${e}, id: ${r.id}`);
            return;
          }
          let s = l[0];
          let a = s && ((o = G.fold) === null || o === undefined ? undefined : o.isShowWithStruct(s));
          if (docxShortcutFeatureDetection.isPDFMode() || !s || a) {
            i++;
          }
        }
      });
    }
    return i;
  };
  let ew = e => {
    let i = 0;
    if ((G == null ? undefined : G.blockManager) && G.fold) {
      G.blockManager.editorAPI.dataService.getRecordMap().forEach(r => {
        var n;
        var o;
        if (!G) {
          return;
        }
        let s = (n = G.blockManager) === null || n === undefined ? undefined : n.getBlockModelsByRecordId(r.id)[0];
        if (s == null ? undefined : s.isTextBlock) {
          let n = s && ((o = G.fold) === null || o === undefined ? undefined : o.isShowWithStruct(s.struct));
          let {
            text: a
          } = r.snapshot;
          if (s && !n || !a) {
            return;
          }
          let c = a.initialAttributedTexts.attribs[0];
          for (let [r, n] of Object.entries(a.apool.numToAttrib)) {
            let o = parseInt(r).toString(36);
            let [s] = n;
            if (s === e) {
              let e = RegExp(`\\*${o}[+*]`, "g");
              let r = c.match(e)?.length;
              if (r) {
                i += r;
              }
            }
          }
        }
      });
    }
    return i;
  };
  let ek = e => {
    let i = [];
    if (!G) {
      return i;
    }
    let {
      blockManager: r,
      fold: n
    } = G;
    if (r && n) {
      r.traverse(r.rootBlockId, o => {
        let l = r.getBlockStructByBlockId(o);
        return !l || l.snapshot.type !== e || (l && n.isShowWithStruct(l) && i.push(l.id), true);
      });
    }
    return i;
  };
  let eS = () => {
    let e = 0;
    if ((G == null ? undefined : G.blockManager) && G.fold) {
      ek(docBlockTypeConstants.blockTypeConstants.FILE).forEach(i => {
        var r;
        let o = (r = G.blockManager) === null || r === undefined ? undefined : r.getBlockViewByBlockIdNotCheck(i);
        if (o && o.props?.viewType === viewTypeConstants.viewTypes.Preview) {
          e++;
        }
      });
    }
    return e;
  };
  let eM = e => {
    var i;
    let r = G == null ? undefined : (i = G.blockManager) === null || i === undefined ? undefined : i.editorAPI.getService(revisionExtensionServiceToken.revisionExtSvcToken);
    if (r != null) {
      r.onBlockReady(e);
    }
    if (r) {
      docxShortcutFeatureDetection.debugLogger(`notify block render to revision: ${e}`);
    }
  };
  window.addEventListener("watermarkDidRender", e => {
    docxShortcutFeatureDetection.debugLogger("watermarkDidRenderEnter");
    let {
      status: i,
      config: r
    } = e.detail;
    setTimeout(() => {
      er(true, "watermarkDidRender");
      docxShortcutFeatureDetection.debugLogger("watermarkDidRender", i, r);
      eI();
    }, 20);
  });
  let ex = (e, i) => {
    window.addEventListener(e, async r => {
      let {
        blockId: n
      } = r.detail || {};
      if (n) {
        eM(n);
      }
      el[i]++;
      if (ef(i)) {
        setTimeout(() => {
          eI();
        }, 20);
      }
      docxShortcutFeatureDetection.debugLogger(e, el[i], es[i]);
    });
  };
  async function eE(e) {
    let {
      blockManager: i,
      shareTextRect: r,
      isTextSelectedOversize: n
    } = e;
    let {
      highlightToPageTop: o = 0,
      topMaskHeight: l = 0,
      bottomMaskHeight: s = 0,
      screenShotHeight: a = A
    } = r;
    let c = document.querySelector(".page-preview-container");
    let u = document.querySelector(".shortcut-page-container");
    let h = u.getBoundingClientRect().height;
    let p = R + F;
    c.style.paddingBottom = `${h - a + p}px`;
    if (n) {
      u.classList.add(docxShortcutConstants.optimizeHeightId);
    }
    i.layoutManager.getViewportHelper().setScrollTop(o - l, {
      force: true
    });
    let f = document.querySelector(".top-share-mask");
    let g = document.querySelector(".bottom-share-mask");
    f.style.top = "0px";
    f.style.height = `${l}px`;
    g.style.height = `${s}px`;
    g.style.top = `${a - s}px`;
    await new Promise(e => firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => e(), 0));
  }
  async function eC(e, i = false) {
    let {
      selectedBlocks: r = []
    } = e;
    let {
      recordId: n
    } = e;
    let {
      blockManager: o,
      rect: l
    } = G || {};
    if (!o) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found blockManager"
      });
      return;
    }
    if (!l) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found rect"
      });
      return;
    }
    let c = o.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey);
    if (!c) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found selectionAPI"
      });
      return;
    }
    if (!o.getBlockIdsByRecordId(n).length) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found block"
      });
      return;
    }
    eT(i);
    let d = docPreviewBlockUtils.setValidatedSelection(r, o, c);
    if (!(d == null ? undefined : d.length)) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found select block"
      });
      return;
    }
    if (!i) {
      docPreviewBlockUtils.filterEmptyTextBlocks(o, d);
      docPreviewBlockUtils.fixListPadding(o, d);
    }
    window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("resize"));
    o.layoutManager.getReconciler().handleRootWidthResize();
    await new Promise(e => firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(i => {
      docxShortcutFeatureDetection.debugLogger(`after handleRootWidthResize trigger is ${i}`);
      e();
    }, 0));
    l.clearCache();
    let u = {
      textLineHeight: D,
      headingLineHeight: j,
      blockMargin: O
    };
    let h = d;
    if (d.length > 1) {
      h = docPreviewBlockUtils.mapSelectionsToRects(d, o, l, u);
    }
    let p = docPreviewBlockUtils.getBlockSelectionRect(h, o, l, u);
    if (!p) {
      docxAnchorImageLoaderLogger.logError({
        reason: "can not found select block rect"
      });
      return;
    }
    let f = p.height > Z;
    docxShortcutFeatureDetection.debugLogger(`highlightHeight:${p.height},MAX_HIGHLIGHT_HEIGHT:${Z}`);
    let {
      topExpandHeight: g,
      bottomExpandHeight: m
    } = function (e) {
      let {
        blockManager: i,
        rect: r,
        selectedRect: n,
        selections: o,
        isTextSelectedOversize: l,
        styleOptions: s
      } = e;
      let {
        headingLineHeight: c,
        textLineHeight: d
      } = s;
      let u = n.height || d;
      let [, h, p] = z.find(e => e[0] < u) || [0, 0, 0];
      let f = h * (c + B);
      let g = p * (c + B);
      let m = o[0].id;
      let v = false;
      let b = docxShortcutFeatureDetection.isOkrContentHighlightShare() && o.every((e, r) => {
        let n = i.getBlockViewByBlockIdNotCheck(e.id);
        let o = n == null ? undefined : n.hostElement;
        if (!~~r) {
          v = [docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT].includes((n == null ? undefined : n.snapshot?.type) ?? "");
        }
        if (o == null) {
          return undefined;
        } else {
          return o.closest(".docx-okr-block");
        }
      });
      let y = v ? 45 : docPreviewBlockUtils.getBlockExpandHeight({
        blockManager: i,
        rect: r,
        startBlockId: m,
        styleOptions: s,
        direction: "top",
        getBlockExpandableHeight: (e, i) => {
          if (e.id === m) {
            let {
              top: e
            } = n;
            let {
              top: r
            } = i;
            return e - r;
          }
          return i.height;
        },
        condition: (e, i) => i <= f
      }).expandedHeight;
      let w = 0;
      if (!l) {
        let e = o[o.length - 1].id;
        w = b ? 46 : docPreviewBlockUtils.getBlockExpandHeight({
          blockManager: i,
          rect: r,
          startBlockId: e,
          styleOptions: s,
          direction: "bottom",
          getBlockExpandableHeight: (i, r) => {
            if (i.id === e) {
              let {
                bottom: e
              } = n;
              let {
                bottom: i
              } = r;
              return i - e;
            }
            return r.height;
          },
          condition: (e, i) => i <= g
        }).expandedHeight;
      }
      return {
        topExpandHeight: y,
        bottomExpandHeight: w
      };
    }({
      blockManager: o,
      rect: l,
      selections: h,
      selectedRect: p,
      isTextSelectedOversize: f,
      styleOptions: u
    });
    docxShortcutFeatureDetection.debugLogger(`topExpandHeight:${g},bottomExpandHeight:${m}`);
    let b = function (e) {
      let {
        blockManager: i,
        rect: r,
        topExpandHeight: n,
        bottomExpandHeight: o,
        selections: l,
        selectedRect: s,
        isTextSelectedOversize: c,
        styleOptions: d
      } = e;
      let u = {
        highlightHeight: s.height || D,
        highlightToPageTop: s.top || 0,
        visibleHighlightHeight: 0,
        topMaskHeight: 0,
        bottomMaskHeight: 0,
        screenShotHeight: 0
      };
      if (n > 0) {
        u.topMaskHeight = R + n;
      } else {
        u.topMaskHeight = L;
      }
      if (c) {
        u.bottomMaskHeight = L + N;
        let e = A - u.topMaskHeight - L;
        let {
          expandedHeight: n
        } = docPreviewBlockUtils.getBlockExpandHeight({
          blockManager: i,
          rect: r,
          startBlockId: l[0].id,
          styleOptions: d,
          direction: "bottom",
          getBlockExpandableHeight: (e, i) => {
            if (e.id === l[0].id) {
              let {
                top: e
              } = s;
              let {
                bottom: r
              } = i;
              return r - e;
            }
            return i.height;
          },
          condition: (i, r) => r <= e
        });
        u.visibleHighlightHeight = n;
        u.screenShotHeight = u.topMaskHeight + u.visibleHighlightHeight + L;
      } else {
        if (o > 0) {
          u.bottomMaskHeight = R + o;
        } else {
          u.bottomMaskHeight = L;
        }
        u.visibleHighlightHeight = u.highlightHeight;
        u.screenShotHeight = u.topMaskHeight + u.visibleHighlightHeight + u.bottomMaskHeight;
      }
      return u;
    }({
      blockManager: o,
      rect: l,
      topExpandHeight: g,
      bottomExpandHeight: m,
      selections: h,
      selectedRect: p,
      isTextSelectedOversize: f,
      styleOptions: u
    });
    await eE({
      blockManager: o,
      shareTextRect: b,
      isTextSelectedOversize: f
    });
    docxShortcutFeatureDetection.debugLogger(`shareTextRect:${JSON.stringify(b)}`);
    return b;
  }
  function e_(e) {
    let i = G == null ? undefined : G.blockManager;
    return !i || !i.getBlockModelsByRecordId(e).length;
  }
  async function eT(e = false) {
    let i = document.querySelector(".shortcut-page-container");
    i.classList.add(e ? "share-to-mobile" : "share-to-pc");
    if (e) {
      i.classList.remove("share-to-pc");
    }
  }
  function eI() {
    var e;
    let i = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (!function (e = false) {
      let i = eg();
      docxShortcutFeatureDetection.debugLogger(`checkCanSendSignal: WatermarkEnable  ${q}`);
      return !!i && !!Y && !X && !!ea && !!q || !!e || (docxShortcutFeatureDetection.debugLogger(`sendsignal return, allLoaded: ${i}, isCommentLoaded: ${Y},
      shortcutRenderEnd: ${X}, isDocxDidRender: ${ea},
      isWatermarkLoaded: ${q},
      isChangePlatform: ${e}`), false);
    }(i)) {
      return;
    }
    if (!i) {
      docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.ALL_BLOCK_FINISH);
      ed();
    }
    docxShortcutFeatureDetection.debugLogger(`all module loaded, isChangePlatform:${i}`);
    let r = G == null ? undefined : (e = G.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(hookServiceDiConstants_1.$$);
    let n = r == null ? undefined : r.callHook(hookServiceDiConstants_1.hookActionTypes.SHORTCUT, flowDocBlockConstants.renderEvents.waitResourcesLoaded, {
      document
    }, {
      isAllResults: true
    });
    docxShortcutFeatureDetection.debugLogger("waitingPromises", n);
    (function () {
      if (!docxShortcutFeatureDetection.isPDFMode()) {
        return;
      }
      let e = document.getElementsByTagName("a");
      try {
        Array.from(e).forEach(e => {
          let i = e && e.getAttribute("data-href");
          let r = e && e.getAttribute("href");
          if (i && !r) {
            e.setAttribute("href", xssContentSanitizer.sanitizeUrl(i, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZW1*SE9-b*tSMDR4Wk$NNW$tRkhPW*xr%jA0eFpF$XhiR016$*1o-%1s$jFaRWhP-%dOdFpERmpkejA5"
            }));
          }
        });
      } catch (e) {}
    })();
    if (U) {
      n = [];
    }
    Promise.all(n).then(async () => {
      let e;
      if (X && !i) {
        return;
      }
      X = true;
      let r = new Image();
      let n = Date.now();
      let c = `//localhost/signal/loaded/?t=${n}`;
      let h = await docxAnchorImageLoaderLogger.getAnchorRecordData();
      if ((h == null ? undefined : h.recordId) && (!docxShortcutFeatureDetection.isTextCardAnchor() || e_(h.recordId))) {
        e = function (e) {
          let {
            recordId: i,
            selectedBlocks: r
          } = e;
          let n = Date.now();
          if (!(G == null ? undefined : G.blockManager)) {
            docxAnchorImageLoaderLogger.logError({
              reason: "can not found blockManager"
            });
            return;
          }
          let {
            blockManager: o,
            rect: a
          } = G;
          let c = o.getBlockIdsByRecordId(i);
          if (!c.length) {
            docxAnchorImageLoaderLogger.logError({
              reason: "can not found block"
            });
            return;
          }
          let d = o.getBlockViewByBlockIdNotCheck(c[0]);
          let u = d ? d.hostElement : document.querySelector(`[data-block-id="${c[0]}"]`);
          let h = (u == null ? undefined : u.getBoundingClientRect().top) || 0;
          let p = window.innerHeight < h;
          docxShortcutFeatureDetection.debugLogger(`first offsetTop: ${h}`);
          o.layoutManager.getViewportHelper().setScrollTop(h, {
            force: true
          });
          let m = (u == null ? undefined : u.getBoundingClientRect().top) || 0;
          if (m < 0) {
            docxShortcutFeatureDetection.debugLogger(`second offsetTop: ${m}`);
            o.layoutManager.getViewportHelper().setScrollTop(h + m, {
              force: true
            });
          }
          if (platformDocUtils.o0s.parseQuery(location.href).highlight !== "false") {
            let e = false;
            if (r) {
              let i = docxTextRangeHighlightUtils.prepareFlashData(r, {
                blockManager: o,
                rect: a
              });
              if (i) {
                let {
                  flashBlocks: r,
                  flashStyles: n
                } = i;
                blockFlashEnhancementManager.flashBlocks(r, n, false);
                e = true;
              }
            }
            if (!e) {
              let e = o.getBlockViewsByRecordId(i);
              if (e.length) {
                blockFlashEnhancementManager.flashBlocks([e[0]], undefined, false);
              }
            }
          }
          docxShortcutFeatureDetection.debugLogger(`scrollToAnchor duration: ${Date.now() - n}`);
          return p;
        }(h);
      }
      if (h && e) {
        c += "&offscreen=true";
      }
      let p = platformDocUtils.o0s.parseQuery(location.href);
      let {
        preview_scene: m
      } = p;
      let v = G == null ? undefined : G.rect;
      let b = G == null ? undefined : G.blockManager;
      if (docxShortcutFeatureDetection.isSyncedBlockToken()) {
        let e = p.content_width || 640;
        c += `&width=${e}`;
        if (p.full && v && b) {
          let e = $(v, b);
          c += `&height=${e}`;
        } else {
          c += `&height=${e}`;
        }
      } else if (H[m]) {
        let {
          width: e
        } = H[m];
        let i = H[m].height.max;
        if (v && b) {
          let e = H[m].height.max;
          try {
            e = $(v, b);
          } catch (i) {
            e = H[m].height.min;
          }
          i = e < H[m].height.min ? H[m].height.min : e > H[m].height.max ? H[m].height.max : e;
        }
        c += `&width=${e}&height=${i}`;
      }
      let y = 1;
      try {
        y = docxPdfPaginationUtil.handlePdfPagination();
      } catch (e) {
        docxShortcutFeatureDetection.debugLogger("calcAddOffset catch error :", e);
      }
      docxShortcutFeatureDetection.debugLogger("pageCount", y);
      setTimeout(() => {
        requestAnimationFrame(async () => {
          if ((h == null ? undefined : h.recordId) && docxShortcutFeatureDetection.isTextCardAnchor() && !e_(h.recordId)) {
            if (!i) {
              docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.CALC_TEXT_SHARE_CARD_BEFORE);
            }
            let e = await eC(h, i);
            if (!i) {
              docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.CALC_TEXT_SHARE_CARD_FINISH);
            }
            if (!e) {
              throw Error("cal share_text_info failed");
            }
            let {
              width: r,
              height: n,
              x: o,
              y: l
            } = function (e) {
              let {
                screenShotHeight: i
              } = e;
              return {
                x: document.querySelector(".shortcut-page-container").getBoundingClientRect().left,
                y: 0,
                width: I,
                height: i
              };
            }(e);
            c += `&width=${r}&height=${n}&x=${o}&y=${l}`;
          }
          docPreviewBlockUtils.clearTextSelection(G == null ? undefined : G.blockManager);
          let e = Date.now();
          docxShortcutFeatureDetection.debugLogger("sendDidRenderSignal", (e - T) / 1000);
          if (!i) {
            docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.SEND_SIGNAL_FINISH);
          }
          docxShortcutFeatureDetection.debugLogger(`sendSignalURL: ${c}`);
          r.src = xssContentSanitizer.sanitizeUrl(y ? `${c}&pageCount=${y}` : c, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZW1*SE9-b*tSMDR4Wk$NNW$tRkhPW*xr%jA0eFpF$XhiR016$*1o-%1s$jFaRWhP-%dOdFpERmpkejA5"
          });
        });
      }, 50);
      docxShortcutFeatureDetection.debugLogger("sendDidRenderSignalTime", docxAnchorImageLoaderLogger.getRenderDuration());
      if (!i) {
        docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.SEND_SIGNAL_BEFORE);
      }
    }).catch(e => {
      docxShortcutFeatureDetection.debugLogger("sendDidRenderSignal catch error :", e);
    }).finally(() => {
      eh();
    });
  }
  window.addEventListener("commentDidRender", () => {
    setTimeout(() => {
      Y = true;
      docxShortcutFeatureDetection.debugLogger("comment render done");
      eI();
    }, 20);
  });
  window.addEventListener("docxDidRender", e => {
    docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.DISPATCH_DOCX_DID_RENDER_FINISH);
    G = e.detail.editor;
    if (docxShortcutFeatureDetection.isTextCardAnchor()) {
      docxAnchorImageLoaderLogger.getAnchorRecordData().then(e => docPreviewBlockUtils.applyAnchorHighlight(e == null ? undefined : e.selectedBlocks, G == null ? undefined : G.blockManager)).catch(e => undefined);
    }
    window.context = G;
    if (docxShortcutFeatureDetection.isPDFMode()) {
      var i;
      if (G != null && (i = G.fold) !== null && i !== undefined) {
        i.enterIgnoreMode();
      }
    }
    if (docxShortcutFeatureDetection.hasMaxBlockCount() && (G == null ? undefined : G.blockManager)) {
      if (G != null) {
        G.blockManager.layoutManager.enterForceLayoutForAll();
      }
    }
    U = false;
    X = false;
    ei.forEach(e => {
      if (e === docBlockTypeConstants.blockTypeConstants.FILE) {
        es[e] = eS();
      } else if (e === docBlockTypeConstants.blockTypeConstants.EQUATION) {
        es[e] = ew(e);
      } else {
        es[e] = ey(e);
      }
    });
    docxShortcutFeatureDetection.debugLogger("blockNumber", JSON.stringify(es));
    ea = true;
    let r = eu();
    let o = r * 1000 - docxAnchorImageLoaderLogger.getRenderDuration();
    o = o > 0 ? o : 0;
    docxShortcutFeatureDetection.debugLogger(`docxDidRender, outTime: ${o}, maxLoadTime: ${r}`);
    n = window.setTimeout(() => {
      eb();
    }, o);
    eI();
  });
  window.addEventListener("shortcutRenderStart", e => {
    eh();
  });
  window.addEventListener("clear", e => {
    eh();
    docxShortcutFeatureDetection.debugLogger(`afterlear WatermarkEnable  ${q}, isPDF ${docxShortcutFeatureDetection.isPDFMode()}, isShortcut ${docxShortcutFeatureDetection.isShortcutEnabled()})`);
    docxAnchorImageLoaderLogger.logStageDuration(docxShortcutConstants.shortcutEventTypes.CLEAR);
  });
  let eR = {
    loadedBlockMap: el,
    takeJiraFilterIds: et,
    takedMindMapIds: Q,
    takedTableIds: ee,
    takedBitableIds: K,
    setListenerRegistered: e => {
      C = e;
    },
    getListenerRegistered: () => C
  };
  require.d(exports, {
    getLoadedBlockStats: function () {
      return ec;
    },
    fontConfig: function () {
      return _;
    },
    isLoadTimeout: function () {
      return ep;
    },
    countVisibleBlocks: function () {
      return ey;
    },
    isBlockTypeLoaded: function () {
      return ef;
    },
    registerBlockLoadListener: function () {
      return ex;
    },
    sendRenderSignal: function () {
      return eI;
    },
    loadedBlockData: function () {
      return eR;
    },
    getEditor: function () {
      return J;
    }
  });
}
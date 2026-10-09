// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useOverlayPosition'
// - Renamed export 'm' to 'calcElementRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 662835
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docCatalogueConstants = require("doc-catalogue-constants") /*id: 512439*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var reactViewportSizeHook = require("react-viewport-size-hook") /*id: 887539*/;
  function g(e, n) {
    let r;
    if (!e) {
      return overlayUiConstants.defaultRect;
    }
    let o = e.getBoundingClientRect();
    if (!n) {
      return o;
    }
    let i = (r = e.startContainer !== undefined ? e.startContainer.parentElement : e) == null ? undefined : r.closest(n);
    if (!i) {
      return o;
    }
    let l = i.getBoundingClientRect();
    let c = ["top", "bottom", "left", "right"].reduce((e, n) => {
      if (["top", "left"].includes(n)) {
        e[n] = Math.max(o[n], l[n]);
      } else {
        e[n] = Math.min(o[n], l[n]);
      }
      return e;
    }, {});
    c.height = c.bottom - c.top;
    c.width = c.right - c.left;
    return new DOMRect(c.left, c.top, c.width, c.height);
  }
  function E(e, n, r, {
    scrollContainer: E,
    onlyCalcTargetVisibleAreaInSelector: m,
    listenModelUpdate: b,
    listenEditorResize: v
  } = {}) {
    let [T, C] = reactCoreLibraryReexport.useState(() => g(e));
    let k = reactCoreLibraryReexport.useCallback(() => {
      C(n => {
        let o = r ? g(e, m) : overlayUiConstants.defaultRect;
        if (uiLayoutPositionUtils.compareRects(n, o)) {
          return n;
        } else {
          return o;
        }
      });
    }, [e, r]);
    let I = reactCoreLibraryReexport.useMemo(() => debounceUtilWrapper.createDebounce(k, overlayUiConstants.baseFontSize, {
      leading: false
    }), [k]);
    let R = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(k), [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        return () => {
          I.cancel();
          R.cancel();
        };
      }
    }, [r, I, R]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r && v) {
        n.addListener(editorUiConstants.editorResizeClass, I);
        return () => {
          n.removeListener(editorUiConstants.editorResizeClass, I);
        };
      }
    }, [r, v, n, I]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        I();
        let n = new MutationObserver(I);
        if (e && e instanceof Node) {
          let r = e.closest("div.block") || e.closest("div.overlay-container");
          n.observe(r || e, {
            attributes: true,
            childList: true,
            subtree: true
          });
        }
        return () => {
          n.disconnect();
        };
      }
    }, [I, e, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        window.addEventListener("resize", R);
        return () => {
          window.removeEventListener("resize", R);
        };
      }
    }, [R, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.UPDATE_OVERLAY_POSITION, I);
        return () => {
          docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.UPDATE_OVERLAY_POSITION, I);
        };
      }
    }, [I, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        let e = e => {
          if (e === true) {
            C(overlayUiConstants.defaultRect);
          } else {
            R();
          }
        };
        n.addListener(docxDragDropConstants.dragStatusEvent, e);
        n.addListener(docCatalogueConstants.catalogueEventTypes.CATALOGUE_UPDATE, e);
        return () => {
          n.removeListener(docxDragDropConstants.dragStatusEvent, e);
          n.removeListener(docCatalogueConstants.catalogueEventTypes.CATALOGUE_UPDATE, e);
        };
      }
    }, [n, R, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (b && r) {
        let e = debounceUtilWrapper.createDebounce(e => {
          if (e.options.from === collaborativeEditingFlowSyncModule.kq.REMOTE) {
            I();
          }
        }, overlayUiConstants.defaultHeight);
        let r = n.editorAPI.dataService.change$.subscribe(e);
        return () => r.unsubscribe();
      }
    }, [b, n, I, r]);
    reactCoreLibraryReexport.useEffect(() => {
      if (E && r) {
        E.addEventListener("scroll", k, true);
        return () => {
          E.removeEventListener("scroll", k, true);
        };
      }
    }, [E, r, k]);
    let y = reactViewportSizeHook.useViewportSize(r);
    reactCoreLibraryReexport.useEffect(() => {
      if (browserEnvDetectionUtil.browserDetector.ios || browserEnvDetectionUtil.browserDetector.isWebKit) {
        I();
      }
    }, [y, browserEnvDetectionUtil.browserDetector.ios, browserEnvDetectionUtil.browserDetector.isWebKit, I]);
    return T;
  }
  require.d(exports, {
    useOverlayPosition: function () {
      return E;
    },
    calcElementRect: function () {
      return g;
    }
  });
}
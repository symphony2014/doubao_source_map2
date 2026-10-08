// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docxEditorBlockRenderer'
// - Resolved require(211843) to 'docx-editor-block-renderer'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'textToolbarPluginSignalModule'
// - Resolved require(89483) to 'text-toolbar-plugin-signal-module'
// - Renamed variable 'a' to 'docxEditorToolbarProviderSelector'
// - Resolved require(932717) to 'docx-editor-toolbar-provider-selector'
// - Renamed variable 'c' to 'templateSearchPopover'
// - Resolved require(523597) to 'template-search-popover'
// - Renamed variable 'u' to 'overlayLayoutPositionHook'
// - Resolved require(397384) to 'overlay-layout-position-hook'
// - Renamed variable 's' to 'useLayoutPositionHook'
// - Resolved require(234774) to 'use-layout-position-hook'
// - Renamed variable 'd' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'h' to 'uiLayoutPositionEnums'
// - Resolved require(463752) to 'ui-layout-position-enums'
// - Renamed variable 'm' to 'docxOverlayPositionSync'
// - Resolved require(662835) to 'docx-overlay-position-sync'
// - Renamed variable 'v' to 'uiLayoutPositionUtils'
// - Resolved require(274647) to 'ui-layout-position-utils'
// - Renamed variable 'b' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'y' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable '_' to 'docxErrorDebugUtils'
// - Resolved require(899478) to 'docx-error-debug-utils'
// - Renamed variable 'E' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'C' to 'docxBlockSelectionHandler_1'
// - Resolved require(801350) to 'docx-block-selection-handler_1'
// - Renamed variable 'k' to 'editorSelectionUtilities'
// - Resolved require(913651) to 'editor-selection-utilities'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Nm' to 'positionAlignTypes' (module 463752)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'G2' to 'useInjector' (module 211843)
// - Updated imported property 'Rc' to 'toolbarSignal' (module 89483)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'wP' to 'compareRects' (module 274647)
// - Updated imported property 'm2' to 'isEmptyRect' (module 274647)
// - Updated imported property 'm' to 'calcElementRect' (module 662835)
// - Updated imported property 'a' to 'useOverlayPosition' (module 662835)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property '_d' to 'getErrorStack' (module 899478)
// - Updated imported property 'Zj' to 'isSelectionChanged' (module 913651)
// - Updated imported property 'Yr' to 'isRangeEqual' (module 913651)
// - Updated imported property 'N2' to 'getActiveEditorRangeFromSelection' (module 913651)
// - Updated imported property 'RT' to 'blockTypes' (module 801350)
// - Updated imported property 'Z' to 'useLayoutPosition' (module 234774)
// - Updated imported property 'Z' to 'useOverlayPosition' (module 397384)
// - Updated imported property 'Z' to 'SearchPopover' (module 523597)
// - Updated imported property 'S' to 'getHideBlockCodeOrConst' (module 932717)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 375213
         */
module.exports = function (module, exports, require) {
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var textToolbarPluginSignalModule = require("text-toolbar-plugin-signal-module") /*id: 89483*/;
  var docxEditorToolbarProviderSelector = require("docx-editor-toolbar-provider-selector") /*id: 932717*/;
  var templateSearchPopover = require("template-search-popover") /*id: 523597*/;
  var overlayLayoutPositionHook = require("overlay-layout-position-hook") /*id: 397384*/;
  var useLayoutPositionHook = require("use-layout-position-hook") /*id: 234774*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  let f = [uiLayoutPositionEnums.positionAlignTypes.TopCenter, uiLayoutPositionEnums.positionAlignTypes.BottomCenter];
  let p = [0, !browserEnvironmentDetectionUtils.browserDetector.isH5 && (browserEnvironmentDetectionUtils.browserDetector.isIPad || browserEnvironmentDetectionUtils.browserDetector.isAndroid) ? 40 : 8];
  let g = [true, false];
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  function w(e, n) {
    var r;
    if (n.hasBlockModelByBlockId(e.id)) {
      if ((r = n.getBlockModelByBlockId(e.id)).parent && [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(r.parent.type)) {
        return r.parent.id;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
  function I(e, n) {
    if (n.hasBlockModelByBlockId(e.id)) {
      return function (e) {
        let n = e;
        while (n) {
          if ([docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.GRID_COLUMN].includes(n.type)) {
            return n.id;
          }
          n = n.parent;
        }
        return -1;
      }(n.getBlockModelByBlockId(e.id));
    } else {
      return -1;
    }
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var T = e => {
    let {
      visible: n,
      target: r,
      selectedBlockTupleRef: d,
      blocks: h,
      onClose: E,
      mousePoint: T,
      boundary: B,
      boundaryRect: M,
      fold: R,
      blockManager: O,
      selectionAPI: A,
      children: Z,
      getSelectionsRange: L,
      forceUpdateTarget: x,
      updateToolbarDirection: N
    } = e;
    let P = O.editorAPI.config.get("pageMainBoundary") || B;
    let D = docxEditorBlockRenderer.useInjector(textToolbarPluginSignalModule.toolbarSignal);
    let H = A.isTextSelectionAcrossBlocks();
    let K = function (e, n, r, o, l) {
      let {
        fold: a,
        blockManager: c,
        isMultiSelection: u
      } = o;
      let [s, d] = reactCoreLibraryReexport.useState(e);
      let h = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(e => {
        d(n => uiLayoutPositionUtils.compareRects(n, e) ? n : e);
      }, 16), []);
      reactCoreLibraryReexport.useEffect(() => {
        h(uiLayoutPositionUtils.isEmptyRect(e) && (l == null ? undefined : l.length) === 2 ? function (e) {
          let [n, r] = e;
          let {
            top: o,
            left: i
          } = docxOverlayPositionSync.calcElementRect(n.hostElement);
          let {
            bottom: l,
            right: a
          } = docxOverlayPositionSync.calcElementRect(r.hostElement);
          return new DOMRect(i, o, a - i, l - o);
        }(l) : function (e, n, r, o) {
          if (!o) {
            docxEventCollector.wrappedCollector("doc_bug_track_dev", {
              action: "destructure_oops",
              info: JSON.stringify({
                func: "getTargetRect",
                arg1: typeof e,
                arg2: typeof n,
                arg3: typeof r,
                arg4: typeof o,
                stack: docxErrorDebugUtils.getErrorStack()
              })
            });
          }
          let {
            fold: i,
            blockManager: l,
            isMultiSelection: a
          } = o;
          if (r.length === 0 || a && !n) {
            return new DOMRect(0, 0, 0, 0);
          }
          let c = r[0];
          let u = function (e, n) {
            let r = e.length;
            let o = e[r - 1];
            for (let i = r - 1; i >= 0; i--) {
              if (n.isShow(e[i].id)) {
                o = e[i];
                break;
              }
            }
            return o;
          }(r, i);
          if (a) {
            let e = I(c, l);
            let r = I(u, l);
            let o = document.getSelection();
            if (e === r) {
              return docxOverlayPositionSync.calcElementRect(editorSelectionUtilities.isSelectionChanged(o, 0));
            }
            let i = editorSelectionUtilities.isRangeEqual(o, editorSelectionUtilities.isSelectionChanged(o, 0));
            let [a, s] = n;
            let d = e => {
              if (!l.hasBlockViewByBlockId(e.id)) {
                return new DOMRect(0, 0, 0, 0);
              }
              let n = l.getBlockViewByBlockId(e.id);
              if (e.type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
                let r = document.createRange();
                let o = n.editor.selection.toDOMRange(editorSelectionUtilities.getActiveEditorRangeFromSelection(l, e, false));
                r.setStart(o.startContainer, o.startOffset);
                r.setEnd(o.endContainer, o.endOffset);
                return docxOverlayPositionSync.calcElementRect(r);
              }
              return docxOverlayPositionSync.calcElementRect(n.hostElement);
            };
            let {
              top: h,
              left: f,
              right: p
            } = d(a);
            let {
              left: g,
              bottom: v,
              right: b
            } = d(s);
            if (v >= h && b >= f) {
              return new DOMRect(f, h, b - f, v - h);
            } else if (i) {
              return new DOMRect(f, h, p - f, 999);
            } else {
              return new DOMRect(g, v - 999, b - g, 999);
            }
          }
          {
            if (w(c, l) === w(u, l)) {
              return e;
            }
            let {
              top: n,
              left: r
            } = docxOverlayPositionSync.calcElementRect(c.hostElement);
            let {
              bottom: o,
              right: i
            } = docxOverlayPositionSync.calcElementRect(u.hostElement);
            return new DOMRect(r, n, i - r, o - n);
          }
        }(e, n.current, r, {
          fold: a,
          blockManager: c,
          isMultiSelection: u
        }));
      }, [e, r, a, c, l, h]);
      return s;
    }(function (e, n, r, o, l) {
      let a = docxOverlayPositionSync.useOverlayPosition(e, n, r, {
        scrollContainer: o
      });
      let c = reactCoreLibraryReexport.useRef(false);
      reactCoreLibraryReexport.useEffect(() => {
        if (r && uiLayoutPositionUtils.isEmptyRect(a)) {
          if (!c.current) {
            c.current = true;
            l();
          }
        } else {
          c.current = false;
        }
      }, [a]);
      return a;
    }(r, O, n, P, x), d, h, {
      fold: R,
      blockManager: O,
      isMultiSelection: H
    }, reactCoreLibraryReexport.useMemo(() => n && (r == null ? undefined : r.collapsed) ? L() : undefined, [r == null ? undefined : r.collapsed, L, n]));
    let U = useLayoutPositionHook.useLayoutPosition(n, T, K);
    let [j, F] = overlayLayoutPositionHook.useOverlayPosition({
      visible: n,
      referencePoint: U,
      targetRect: K,
      boundaryRect: M
    });
    let z = reactCoreLibraryReexport.useCallback(e => {
      let n = j(e);
      N(n);
      return n;
    }, [j, N]);
    let V = reactCoreLibraryReexport.useCallback(e => {
      let n = F(e);
      if (D != null) {
        D.next({
          contentRect: e.contentRect,
          visible: true
        });
      }
      return n;
    }, [F, D]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n && D != null) {
        D.next({
          visible: false
        });
      }
    }, [n, D]);
    return reactJsxRuntimeCoreReexport.jsx(templateSearchPopover.SearchPopover, {
      visible: n,
      allowDirections: f,
      offset: p,
      sticky: g,
      targetRect: K,
      zIndex: docxEditorToolbarProviderSelector.getHideBlockCodeOrConst(),
      boundaryRect: M,
      calcDirection: z,
      calcPosition: V,
      onClose: E,
      blockManager: O,
      selectionAPI: A,
      children: Z
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return T;
    }
  });
}
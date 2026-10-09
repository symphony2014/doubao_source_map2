// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'o' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'l' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'c' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 's' to 'blockTypeConstants'
// - Resolved require(403997) to 'block-type-constants'
// - Renamed variable 'u' to 'diagramCodeTabsPanelComponent'
// - Resolved require(761808) to 'diagram-code-tabs-panel-component'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'mindmapComponent_1'
// - Resolved require(805794) to 'mindmap-component_1'
// - Renamed variable 'p' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'f' to 'logoIconWhiteBgPath'
// - Resolved require(685324) to 'logo-icon-white-bg-path'
// - Renamed variable 'h' to 'useMindMapEvents'
// - Resolved require(936926) to 'use-mind-map-events'
// - Renamed variable 'g' to 'codeBlockPositionContext'
// - Resolved require(871792) to 'code-block-position-context'
// - Renamed variable 'w' to 'reactContextHook'
// - Resolved require(449294) to 'react-context-hook'
// - Renamed variable 'y' to 'codeBlockComponent'
// - Resolved require(523030) to 'code-block-component'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'useContextValue' (module 449294)
// - Updated imported property 'R' to 'blockTypes' (module 403997)
// - Updated imported property 'D' to 'calculateCodeBlockPosition' (module 871792)
// - Updated imported property 'S' to 'useMindMapEvents' (module 936926)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'K' to 'DiagramCodeTabsPanel' (module 761808)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 254524
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var i = clipboardCopyHelper;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var diagramCodeTabsPanelComponent = require("diagram-code-tabs-panel-component") /*id: 761808*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var mindmapComponent_1 = require("mindmap-component_1") /*id: 805794*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var logoIconWhiteBgPath = require("logo-icon-white-bg-path") /*id: 685324*/;
  var useMindMapEvents = require("use-mind-map-events") /*id: 936926*/;
  var codeBlockPositionContext = require("code-block-position-context") /*id: 871792*/;
  var reactContextHook = require("react-context-hook") /*id: 449294*/;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      code: t,
      loading: n,
      onPreview: l,
      viewOnly: v,
      messageLink: b,
      message: x,
      conversationId: $,
      customHandleEnterFullscreen: R,
      hideDownload: C,
      className: S,
      onDownload: E
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let k = reactContextHook.useContextValue();
    let N = R || k.customHandleEnterFullscreen;
    let [j, F] = reactCoreLibraryReexport.useState(blockTypeConstants.blockTypes.Diagram);
    let [M, Z] = reactCoreLibraryReexport.useState(t);
    let D = reactCoreLibraryReexport.useRef(null);
    let W = codeBlockPositionContext.calculateCodeBlockPosition(t, x);
    let O = useMindMapEvents.useMindMapEvents({
      trackEvent: teaAnalyticsEventTracker.trackEvent,
      messageLink: b,
      message: x,
      conversationId: $,
      reportParams: {
        graph_type: "mind_map"
      },
      codeBlockPosition: W
    });
    let P = reactCoreLibraryReexport.useRef({
      initialExpandLevel: 4
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (j === blockTypeConstants.blockTypes.Diagram && t !== M) {
        Z(t);
      }
    }, [j, t]);
    reactCoreLibraryReexport.useEffect(() => {
      O.onMindMapShow(false, true);
    }, []);
    let I = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "new-loading-mFSXRS",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "small"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: T("deepResearch_tool_gencode_generating")
      })]
    }), [T]);
    return reactJsxRuntimeCoreReexport.jsx(diagramCodeTabsPanelComponent.DiagramCodeTabsPanel, {
      onDownloadImage: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.downloadImage) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onCopyImage: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.copyImage) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onCopyHtml: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.copyHtml) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onZoomOut: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.zoomOut) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onZoomIn: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.zoomIn) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onZoomFit: function () {
        var e;
        var t;
        var n = arguments.length;
        var r = Array(n);
        var a = 0;
        for (; a < n; a++) {
          r[a] = arguments[a];
        }
        if ((t = D.current) === null || t === undefined) {
          return undefined;
        } else if ((e = t.zoomFit) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t, ...r);
        }
      },
      onFullScreenEnter: e => {
        if (N) {
          N({
            key: e,
            diagramCode: M,
            diagramType: "mindmap"
          });
          return;
        }
        if (e === blockTypeConstants.blockTypes.Diagram) {
          var n;
          var r;
          if ((r = D.current) !== null && r !== undefined && (n = r.enterFullscreen) !== null && n !== undefined) {
            n.call(r);
          }
          return;
        }
        if (l != null) {
          l(t);
        }
      },
      onCopyText: () => {
        var e;
        i(t);
        if ((e = O.onCopyCode) !== null && e !== undefined) {
          e.call(O);
        }
      },
      onTabChange: e => {
        F(e);
        O.onTabChange({
          buttonName: e === blockTypeConstants.blockTypes.Diagram ? "graph" : "code"
        });
      },
      hideDownload: C,
      disabled: n,
      className: S,
      i18nConfig: {
        diagramTitle: T("chat_response_cr_btn_preview"),
        codeTitle: T("chat_response_cr_btn_viewCode"),
        downloadImage: T("flow_web_ext_search_mindmap_download"),
        copyImage: T("flow_web_ext_search_mindmap_copy"),
        copyRichText: T("flow_web_ext_mindmap_copy_rich_text"),
        zoomIn: T("flow_web_ext_search_mindmap_zoom_in"),
        zoomOut: T("flow_web_ext_search_mindmap_zoom_out"),
        fitPage: T("flow_web_ext_search_mindmap_fit"),
        fullscreenView: T("flow_web_ext_search_mindmap_full"),
        copyText: T("skill_search_copytext"),
        copyDoneText: T("text_copied_tip")
      },
      diagram: reactJsxRuntimeCoreReexport.jsx(mindmapComponent_1.default, {
        actionButtonRef: D,
        t: T,
        value: M,
        handleRetry: emptyExportFunction.emptyFunction,
        extName: T("brandName_doubao"),
        iconUrl: logoIconWhiteBgPath,
        isDone: !n,
        className: "mindmap-container-o0aeW0",
        actionButtonClassName: "action-button-container-N_4Nvy",
        maxHeight: 336,
        minHeight: 336,
        markmapOptions: P.current,
        hideAction: true,
        inMessage: true,
        customHandleEnterFullscreen: N ? () => N({
          key: blockTypeConstants.blockTypes.Diagram,
          diagramCode: M,
          diagramType: "mindmap"
        }) : undefined,
        onDownload: e => {
          var t;
          if ((t = O.onDownload) !== null && t !== undefined) {
            t.call(O, e);
          }
          if (E != null) {
            E(e);
          }
        },
        ...throttledOmitPathStringify.omitPathStringify(O, ["onCopyCode", "onTabChange", "onDownload"])
      }),
      code: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
        showHeader: false,
        code: t,
        className: "!m-0 !rounded-none !border-none",
        contentClassName: "!max-h-336 !border-none",
        codeAreaClassName: "!rounded-none",
        viewOnly: v,
        language: "mindmap"
      }),
      customRenderTabTools: n ? I : undefined
    });
  };
  require.r(exports);
  require.d(exports, {
    Mindmap: function () {
      return v;
    }
  });
}
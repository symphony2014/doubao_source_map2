// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'i' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'useFullscreenState'
// - Resolved require(463357) to 'use-fullscreen-state'
// - Renamed variable 'c' to 'diagramFullscreenContainer'
// - Resolved require(709999) to 'diagram-fullscreen-container'
// - Renamed variable 'u' to 'imageExportHook'
// - Resolved require(714582) to 'image-export-hook'
// - Renamed variable 's' to 'mindmapExportCard'
// - Resolved require(244147) to 'mindmap-export-card'
// - Renamed variable 'd' to 'blockTypeConstants'
// - Resolved require(403997) to 'block-type-constants'
// - Renamed variable 'f' to 'diagramCodeTabsPanelComponent'
// - Resolved require(761808) to 'diagram-code-tabs-panel-component'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'g' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'useMindMapEvents'
// - Resolved require(936926) to 'use-mind-map-events'
// - Renamed variable 'w' to 'codeBlockPositionContext'
// - Resolved require(871792) to 'code-block-position-context'
// - Renamed variable 'y' to 'codeBlockComponent'
// - Resolved require(523030) to 'code-block-component'
// - Resolved require.e(89990) to 'd3-interpolation-utils'
// - Resolved require.e(58288) to 'visualization-bundle'
// - Resolved require.e(32683) to 'vega-lite-renderer'
// - Resolved require.bind(985920) to 'search-history-utils'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D' to 'calculateCodeBlockPosition' (module 871792)
// - Updated imported property 'S' to 'useMindMapEvents' (module 936926)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'H' to 'useFullscreenState' (module 463357)
// - Updated imported property 'W' to 'useImageExport' (module 714582)
// - Updated imported property 'R' to 'blockTypes' (module 403997)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'K' to 'DiagramCodeTabsPanel' (module 761808)
// - Updated imported property 'Q' to 'DiagramFullscreenContainer' (module 709999)
// - Updated imported property 'S' to 'MindmapExportCard' (module 244147)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36489.4bcec570.js
         * chunkId: 36489
         * moduleId: 270812
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var a = clipboardCopyHelper;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useFullscreenState = require("use-fullscreen-state") /*id: 463357*/;
  var diagramFullscreenContainer = require("diagram-fullscreen-container") /*id: 709999*/;
  var imageExportHook = require("image-export-hook") /*id: 714582*/;
  var mindmapExportCard = require("mindmap-export-card") /*id: 244147*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var diagramCodeTabsPanelComponent = require("diagram-code-tabs-panel-component") /*id: 761808*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useMindMapEvents = require("use-mind-map-events") /*id: 936926*/;
  var codeBlockPositionContext = require("code-block-position-context") /*id: 871792*/;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  let v = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("visualization-bundle") /*id: 58288*/, require.e("vega-lite-renderer") /*id: 32683*/]).then(require.bind(require, "search-history-utils") /*id: 985920*/).then(e => ({
    default: e.VegaLiteRenderer
  })));
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      code: t,
      onPreview: r,
      loading: o,
      viewOnly: _,
      messageLink: x,
      message: S,
      conversationId: E,
      customHandleEnterFullscreen: C,
      onDownload: A
    } = e;
    let N = codeBlockPositionContext.calculateCodeBlockPosition(t, S);
    let T = useMindMapEvents.useMindMapEvents({
      trackEvent: teaAnalyticsEventTracker.trackEvent,
      messageLink: x,
      message: S,
      conversationId: E,
      reportParams: {
        graph_type: "vega-lite"
      },
      codeBlockPosition: N
    });
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fullscreenVisible: R,
      handleEnterFullscreen: k,
      handleExitFullscreen: D
    } = useFullscreenState.useFullscreenState();
    let P = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useRef(null);
    let {
      svgContainerRef: j,
      downloadImage: F,
      copyImage: O
    } = imageExportHook.useImageExport({
      exportSvgSelf: true
    });
    let L = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useRef(false);
    let B = function (e, t) {
      let r = reactCoreLibraryReexport.useRef();
      return reactCoreLibraryReexport.useMemo(() => {
        if (t) {
          return false;
        }
        if (r.current === undefined) {
          try {
            JSON.parse(e);
            r.current = false;
          } catch {
            r.current = true;
          }
        }
        return !r.current;
      }, [t, e]);
    }(t, o);
    reactCoreLibraryReexport.useEffect(() => {
      if (!M.current && B) {
        var e;
        if ((e = L.current) !== null && e !== undefined) {
          e.switchTab(blockTypeConstants.blockTypes.Diagram);
        }
      }
    }, [B]);
    let [U, W] = reactCoreLibraryReexport.useState(false);
    let z = e => ({
      onZoomIn: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomIn();
        }
        T.onZoomIn(R);
      },
      onZoomOut: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomOut();
        }
        T.onZoomOut(R);
      },
      onZoomFit: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.fit();
        }
        T.onZoomFit(R);
      },
      onCopyText: () => {
        a(t);
        T.onCopyCode(R);
      },
      onTabChange: t => {
        M.current = true;
        if (t === blockTypeConstants.blockTypes.Diagram) {
          var r;
          if ((r = e.current) !== null && r !== undefined) {
            r.fit();
          }
        }
        T.onTabChange({
          buttonName: t === blockTypeConstants.blockTypes.Diagram ? "graph" : "code"
        });
      },
      onFullScreenEnter: e => {
        if (C) {
          C(e);
          return;
        }
        T.onEnterFullscreen();
        if (e === blockTypeConstants.blockTypes.Diagram) {
          k();
          return;
        }
        if (r != null) {
          r(t);
        }
      },
      onDownloadImage: () => {
        F();
        if (A != null) {
          A(R);
        }
        T.onDownload(R);
      },
      onCopyImage: () => {
        O();
        T.onCopyImg(R);
      }
    });
    let H = function (e, t = {}) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "vega_lite_render_error",
        error: e,
        meta: t
      });
      if (t.from === "message") {
        T.onMindMapShow(false, false);
      }
    };
    let V = function (e, t = {}) {
      W(true);
      H(e, t);
    };
    let q = function (e = {}) {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "vega_lite_render_success",
        meta: e
      });
      if (e.from === "message") {
        T.onMindMapShow(false, true);
      }
    };
    let Z = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "new-loading-xVGRRB",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "small"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: $("deepResearch_tool_gencode_generating")
      })]
    }), [$]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(diagramCodeTabsPanelComponent.DiagramCodeTabsPanel, {
        ref: L,
        defaultActiveKey: B ? blockTypeConstants.blockTypes.Diagram : blockTypeConstants.blockTypes.Code,
        ...z(P),
        disabled: U,
        disableDiagram: o,
        enableCopyRichText: false,
        i18nConfig: {
          diagramTitle: $("chat_response_cr_btn_preview"),
          codeTitle: $("chat_response_cr_btn_viewCode"),
          downloadImage: $("flow_web_ext_search_mindmap_download"),
          copyImage: $("flow_web_ext_search_mindmap_copy"),
          copyRichText: $("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: $("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: $("flow_web_ext_search_mindmap_zoom_out"),
          fitPage: $("flow_web_ext_search_mindmap_fit"),
          fullscreenView: $("flow_web_ext_search_mindmap_full"),
          copyText: $("skill_search_copytext"),
          copyDoneText: $("text_copied_tip")
        },
        diagram: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          ref: P,
          loading: o,
          onError: function (e, t = {}) {
            V(e, {
              ...t,
              from: "message"
            });
          },
          onSuccess: function (e = {}) {
            return q({
              ...e,
              from: "message"
            });
          }
        }),
        code: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
          showHeader: false,
          code: t,
          className: "!m-0 !h-full overflow-auto !rounded-none !border-none",
          codeAreaClassName: "!rounded-none !h-full",
          viewOnly: _,
          contentClassName: "!border-none !rounded-none min-h-full",
          language: "json"
        }),
        customRenderTabTools: o ? Z : undefined
      }), R ? reactJsxRuntimeCoreReexport.jsx(diagramFullscreenContainer.DiagramFullscreenContainer, {
        ...z(I),
        disabled: U,
        i18nConfig: {
          downloadImage: $("flow_web_ext_search_mindmap_download"),
          copyImage: $("flow_web_ext_search_mindmap_copy"),
          copyHtml: $("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: $("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: $("flow_web_ext_search_mindmap_zoom_out"),
          zoomFit: $("flow_web_ext_search_mindmap_fit"),
          close: $("flow_web_ext_close_upper_case")
        },
        onCloseClick: D,
        enableCopyRichText: false,
        children: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          loading: o,
          ref: I,
          onError: function (e, t = {}) {
            V(e, {
              ...t,
              from: "fullscreen"
            });
          },
          onSuccess: function (e = {}) {
            return q({
              ...e,
              from: "fullscreen"
            });
          }
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(mindmapExportCard.MindmapExportCard, {
        i18nConfig: {
          brandName: $("brandName_doubao"),
          brandDesc: $("flow_web_ext_search_share_pic_doubao")
        },
        svgContainerRef: j,
        children: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          loading: o,
          onError: function (e, t = {}) {
            V(e, {
              ...t,
              from: "exporter"
            });
          },
          onSuccess: function (e = {}) {
            return q({
              ...e,
              from: "exporter"
            });
          }
        })
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    VegaLiteDiagram: function () {
      return _;
    }
  });
}
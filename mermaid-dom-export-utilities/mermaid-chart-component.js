// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'i' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'mermaidDiagramZoomableRenderer'
// - Resolved require(935111) to 'mermaid-diagram-zoomable-renderer'
// - Renamed variable 'c' to 'useFullscreenState'
// - Resolved require(463357) to 'use-fullscreen-state'
// - Renamed variable 'u' to 'diagramFullscreenContainer'
// - Resolved require(709999) to 'diagram-fullscreen-container'
// - Renamed variable 's' to 'imageExportHook'
// - Resolved require(714582) to 'image-export-hook'
// - Renamed variable 'd' to 'mindmapExportCard'
// - Resolved require(244147) to 'mindmap-export-card'
// - Renamed variable 'f' to 'blockTypeConstants'
// - Resolved require(403997) to 'block-type-constants'
// - Renamed variable 'h' to 'diagramCodeTabsPanelComponent'
// - Resolved require(761808) to 'diagram-code-tabs-panel-component'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'p' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'w' to 'useMindMapEvents'
// - Resolved require(936926) to 'use-mind-map-events'
// - Renamed variable 'y' to 'codeBlockPositionContext'
// - Resolved require(871792) to 'code-block-position-context'
// - Renamed variable 'v' to 'reactContextHook'
// - Resolved require(449294) to 'react-context-hook'
// - Renamed variable 'b' to 'codeBlockComponent'
// - Resolved require(523030) to 'code-block-component'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useContextValue' (module 449294)
// - Updated imported property 'D' to 'calculateCodeBlockPosition' (module 871792)
// - Updated imported property 'S' to 'useMindMapEvents' (module 936926)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'H' to 'useFullscreenState' (module 463357)
// - Updated imported property 'W' to 'useImageExport' (module 714582)
// - Updated imported property 'R' to 'blockTypes' (module 403997)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'K' to 'DiagramCodeTabsPanel' (module 761808)
// - Updated imported property 'e' to 'ZoomableMermaidDiagram' (module 935111)
// - Updated imported property 'Q' to 'DiagramFullscreenContainer' (module 709999)
// - Updated imported property 'S' to 'MindmapExportCard' (module 244147)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27139.0cd87021.js
         * chunkId: 27139
         * moduleId: 629650
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var a = clipboardCopyHelper;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var mermaidDiagramZoomableRenderer = require("mermaid-diagram-zoomable-renderer") /*id: 935111*/;
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
  var reactContextHook = require("react-context-hook") /*id: 449294*/;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      code: t,
      onPreview: r,
      loading: o,
      viewOnly: x,
      messageLink: S,
      message: E,
      conversationId: C,
      customHandleEnterFullscreen: $,
      className: T,
      onDownload: A
    } = e;
    let k = reactContextHook.useContextValue();
    let N = $ || k.customHandleEnterFullscreen;
    let R = codeBlockPositionContext.calculateCodeBlockPosition(t, E);
    let F = useMindMapEvents.useMindMapEvents({
      trackEvent: teaAnalyticsEventTracker.trackEvent,
      messageLink: S,
      message: E,
      conversationId: C,
      reportParams: {
        graph_type: "mermaid"
      },
      codeBlockPosition: R,
      loading: o
    });
    let j = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fullscreenVisible: P,
      handleEnterFullscreen: D,
      handleExitFullscreen: I
    } = useFullscreenState.useFullscreenState();
    let M = reactCoreLibraryReexport.useRef(null);
    let O = reactCoreLibraryReexport.useRef(null);
    let {
      svgContainerRef: B,
      downloadImage: L,
      copyImage: W
    } = imageExportHook.useImageExport();
    let [z, U] = reactCoreLibraryReexport.useState(false);
    let H = e => ({
      onZoomIn: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomIn();
        }
        F.onZoomIn(P);
      },
      onZoomOut: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomOut();
        }
        F.onZoomOut(P);
      },
      onZoomFit: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.fit();
        }
        F.onZoomFit(P);
      },
      onCopyText: () => {
        a(t);
        F.onCopyCode(P);
      },
      onTabChange: e => {
        F.onTabChange({
          buttonName: e === blockTypeConstants.blockTypes.Diagram ? "graph" : "code"
        });
      },
      onFullScreenEnter: e => {
        if (N) {
          N({
            key: e,
            diagramCode: t,
            diagramType: "mermaid"
          });
          return;
        }
        F.onEnterFullscreen();
        if (e === blockTypeConstants.blockTypes.Diagram) {
          D();
          return;
        }
        if (r != null) {
          r(t);
        }
      },
      onDownloadImage: () => {
        L();
        if (A != null) {
          A(P);
        }
        F.onDownload(P);
      },
      onCopyImage: () => {
        W();
        F.onCopyImg(P);
      }
    });
    let Z = function (e, t = {}) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "mermaid_render_error",
        error: e,
        meta: t
      });
      if (t.from === "message") {
        F.onMindMapShow(false, false);
      }
    };
    let q = function (e, t = {}) {
      U(true);
      Z(e, t);
    };
    let V = function (e = {}) {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "mermaid_render_success",
        meta: e
      });
      if (e.from === "message") {
        F.onMindMapShow(false, true);
      }
    };
    let X = reactCoreLibraryReexport.useMemo(() => ({
      errorText: j("reading_mindmap_toast_reAsk")
    }), [j]);
    let J = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "new-loading-m1L35u",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "small"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: j("deepResearch_tool_gencode_generating")
      })]
    }), [j]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(diagramCodeTabsPanelComponent.DiagramCodeTabsPanel, {
        ...H(M),
        disabled: z,
        className: T,
        enableCopyRichText: false,
        i18nConfig: {
          diagramTitle: j("chat_response_cr_btn_preview"),
          codeTitle: j("chat_response_cr_btn_viewCode"),
          downloadImage: j("flow_web_ext_search_mindmap_download"),
          copyImage: j("flow_web_ext_search_mindmap_copy"),
          copyRichText: j("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: j("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: j("flow_web_ext_search_mindmap_zoom_out"),
          fitPage: j("flow_web_ext_search_mindmap_fit"),
          fullscreenView: j("flow_web_ext_search_mindmap_full"),
          copyText: j("skill_search_copytext"),
          copyDoneText: j("text_copied_tip")
        },
        diagram: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          ref: M,
          loading: o,
          onError: function (e, t = {}) {
            q(e, {
              ...t,
              from: "message"
            });
          },
          onSuccess: function (e = {}) {
            return V({
              ...e,
              from: "message"
            });
          },
          i18nConfig: X
        }),
        code: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
          showHeader: false,
          code: t,
          className: "!m-0 !rounded-none !border-none",
          contentClassName: "!max-h-336 !border-none",
          codeAreaClassName: "!rounded-none",
          viewOnly: x,
          language: "mermaid"
        }),
        customRenderTabTools: o ? J : undefined
      }), P ? reactJsxRuntimeCoreReexport.jsx(diagramFullscreenContainer.DiagramFullscreenContainer, {
        ...H(O),
        disabled: z,
        i18nConfig: {
          downloadImage: j("flow_web_ext_search_mindmap_download"),
          copyImage: j("flow_web_ext_search_mindmap_copy"),
          copyHtml: j("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: j("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: j("flow_web_ext_search_mindmap_zoom_out"),
          zoomFit: j("flow_web_ext_search_mindmap_fit"),
          close: j("flow_web_ext_close_upper_case")
        },
        onCloseClick: I,
        enableCopyRichText: false,
        children: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          loading: o,
          ref: O,
          onError: function (e, t = {}) {
            q(e, {
              ...t,
              from: "fullscreen"
            });
          },
          onSuccess: function (e = {}) {
            return V({
              ...e,
              from: "fullscreen"
            });
          },
          i18nConfig: X
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(mindmapExportCard.MindmapExportCard, {
        i18nConfig: {
          brandName: j("brandName_doubao"),
          brandDesc: j("flow_web_ext_search_share_pic_doubao")
        },
        svgContainerRef: B,
        children: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          loading: o,
          onError: function (e, t = {}) {
            q(e, {
              ...t,
              from: "exporter"
            });
          },
          onSuccess: function (e = {}) {
            return V({
              ...e,
              from: "exporter"
            });
          },
          i18nConfig: X
        })
      })]
    });
  };
  require.r(exports);
  require.d(exports, {
    Mermaid: function () {
      return x;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'i' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'imageExportHook'
// - Resolved require(714582) to 'image-export-hook'
// - Renamed variable 'c' to 'mindmapExportCard'
// - Resolved require(244147) to 'mindmap-export-card'
// - Renamed variable 'u' to 'useFullscreenState'
// - Resolved require(463357) to 'use-fullscreen-state'
// - Renamed variable 's' to 'blockTypeConstants'
// - Resolved require(403997) to 'block-type-constants'
// - Renamed variable 'd' to 'diagramCodeTabsPanelComponent'
// - Resolved require(761808) to 'diagram-code-tabs-panel-component'
// - Renamed variable 'f' to 'diagramFullscreenContainer'
// - Resolved require(709999) to 'diagram-fullscreen-container'
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
// - Resolved require.e(29872) to 'geogebra-renderer'
// - Resolved require.bind(103419) to 'geogebra-applet-renderer'
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
         * chunk file: 80073.ed793e2c.js
         * chunkId: 80073
         * moduleId: 873918
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var a = clipboardCopyHelper;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var imageExportHook = require("image-export-hook") /*id: 714582*/;
  var mindmapExportCard = require("mindmap-export-card") /*id: 244147*/;
  var useFullscreenState = require("use-fullscreen-state") /*id: 463357*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var diagramCodeTabsPanelComponent = require("diagram-code-tabs-panel-component") /*id: 761808*/;
  var diagramFullscreenContainer = require("diagram-fullscreen-container") /*id: 709999*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useMindMapEvents = require("use-mind-map-events") /*id: 936926*/;
  var codeBlockPositionContext = require("code-block-position-context") /*id: 871792*/;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  let v = reactCoreLibraryReexport.lazy(() => require.e("geogebra-renderer") /*id: 29872*/.then(require.bind(require, "geogebra-applet-renderer") /*id: 103419*/).then(e => ({
    default: e.GeogebraRenderer
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
      customHandleEnterFullscreen: C
    } = e;
    let A = codeBlockPositionContext.calculateCodeBlockPosition(t, S);
    let N = useMindMapEvents.useMindMapEvents({
      trackEvent: teaAnalyticsEventTracker.trackEvent,
      messageLink: x,
      message: S,
      conversationId: E,
      reportParams: {
        graph_type: "geogebra"
      },
      codeBlockPosition: A
    });
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fullscreenVisible: $,
      handleEnterFullscreen: R,
      handleExitFullscreen: k
    } = useFullscreenState.useFullscreenState();
    let D = reactCoreLibraryReexport.useRef(null);
    let P = reactCoreLibraryReexport.useRef(null);
    let {
      svgContainerRef: I,
      downloadImage: j,
      copyImage: F
    } = imageExportHook.useImageExport({
      exportSvgSelf: true,
      exportCanvasSelf: true
    });
    let O = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef(false);
    let [M, B] = reactCoreLibraryReexport.useState(false);
    let U = e => ({
      onZoomIn: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomIn();
        }
        N.onZoomIn($);
      },
      onZoomOut: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.zoomOut();
        }
        N.onZoomOut($);
      },
      onZoomFit: () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.fit();
        }
        N.onZoomFit($);
      },
      onCopyText: () => {
        a(t);
        N.onCopyCode($);
      },
      onTabChange: t => {
        L.current = true;
        if (t === blockTypeConstants.blockTypes.Diagram) {
          var r;
          if ((r = e.current) !== null && r !== undefined) {
            r.fit();
          }
        }
        N.onTabChange({
          buttonName: t === blockTypeConstants.blockTypes.Diagram ? "graph" : "code"
        });
      },
      onFullScreenEnter: e => {
        if (C) {
          C(e);
          return;
        }
        N.onEnterFullscreen();
        if (e === blockTypeConstants.blockTypes.Diagram) {
          R();
          return;
        }
        if (r != null) {
          r(t);
        }
      },
      onDownloadImage: () => {
        j();
        N.onDownload($);
      },
      onCopyImage: () => {
        F();
        N.onCopyImg($);
      }
    });
    let W = function (e, t = {}) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "geogebra_render_error",
        error: e,
        meta: t
      });
      if (t.from === "message") {
        N.onMindMapShow(false, false);
      }
    };
    let z = function (e, t = {}) {
      B(true);
      W(e, t);
    };
    let H = function (e = {}) {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "geogebra_render_success",
        meta: e
      });
      if (e.from === "message") {
        N.onMindMapShow(false, true);
      }
    };
    let V = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "new-loading-fbs6S5",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "small"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: T("deepResearch_tool_gencode_generating")
      })]
    }), [T]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(diagramCodeTabsPanelComponent.DiagramCodeTabsPanel, {
        ref: O,
        defaultActiveKey: blockTypeConstants.blockTypes.Diagram,
        ...U(D),
        disabled: M,
        disableDiagram: o,
        enableCopyRichText: false,
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
        diagram: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          ref: D,
          loading: o,
          onError: function (e, t = {}) {
            z(e, {
              ...t,
              from: "message"
            });
          },
          onSuccess: function (e = {}) {
            return H({
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
        customRenderTabTools: o ? V : undefined
      }), $ ? reactJsxRuntimeCoreReexport.jsx(diagramFullscreenContainer.DiagramFullscreenContainer, {
        ...U(P),
        disabled: M,
        i18nConfig: {
          downloadImage: T("flow_web_ext_search_mindmap_download"),
          copyImage: T("flow_web_ext_search_mindmap_copy"),
          copyHtml: T("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: T("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: T("flow_web_ext_search_mindmap_zoom_out"),
          zoomFit: T("flow_web_ext_search_mindmap_fit"),
          close: T("flow_web_ext_close_upper_case")
        },
        onCloseClick: k,
        enableCopyRichText: false,
        children: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          loading: o,
          ref: P,
          onError: function (e, t = {}) {
            z(e, {
              ...t,
              from: "fullscreen"
            });
          },
          onSuccess: function (e = {}) {
            return H({
              ...e,
              from: "fullscreen"
            });
          }
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(mindmapExportCard.MindmapExportCard, {
        i18nConfig: {
          brandName: T("brandName_doubao"),
          brandDesc: T("flow_web_ext_search_share_pic_doubao")
        },
        svgContainerRef: I,
        children: reactJsxRuntimeCoreReexport.jsx(v, {
          code: t,
          loading: o,
          onError: function (e, t = {}) {
            z(e, {
              ...t,
              from: "exporter"
            });
          },
          onSuccess: function (e = {}) {
            return H({
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
    GeogebraDiagram: function () {
      return _;
    }
  });
}
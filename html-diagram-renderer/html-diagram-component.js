// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'clipboardCopyHelper'
// - Resolved require(735474) to 'clipboard-copy-helper'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'i' to 'useFullscreenState'
// - Resolved require(463357) to 'use-fullscreen-state'
// - Renamed variable 'c' to 'diagramFullscreenContainer'
// - Resolved require(709999) to 'diagram-fullscreen-container'
// - Renamed variable 's' to 'blockTypeConstants'
// - Resolved require(403997) to 'block-type-constants'
// - Renamed variable 'u' to 'imageExportUtils'
// - Resolved require(195626) to 'image-export-utils'
// - Renamed variable 'd' to 'diagramCodeTabsPanelComponent'
// - Resolved require(761808) to 'diagram-code-tabs-panel-component'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'g' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'p' to 'useMindMapEvents'
// - Resolved require(936926) to 'use-mind-map-events'
// - Renamed variable 'h' to 'codeBlockPositionContext'
// - Resolved require(871792) to 'code-block-position-context'
// - Renamed variable 'w' to 'codeBlockComponent'
// - Resolved require(523030) to 'code-block-component'
// - Resolved require.e(5374) to 'html-parser'
// - Resolved require.e(53224) to 'css-tree-source-map'
// - Resolved require.e(19906) to 'html-renderer'
// - Resolved require.bind(773976) to 'html-renderer-component'
// - Renamed variable 'v' to 'htmlCopyAndCleanupUtils'
// - Resolved require(433842) to 'html-copy-and-cleanup-utils'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D' to 'calculateCodeBlockPosition' (module 871792)
// - Updated imported property 'S' to 'useMindMapEvents' (module 936926)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'H' to 'useFullscreenState' (module 463357)
// - Updated imported property 'R' to 'blockTypes' (module 403997)
// - Updated imported property 'tg' to 'downloadImage' (module 195626)
// - Updated imported property 'l8' to 'copyImageToClipboard' (module 195626)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'Vt' to 'HtmlCacheManager' (module 433842)
// - Updated imported property 'K' to 'DiagramCodeTabsPanel' (module 761808)
// - Updated imported property 'Q' to 'DiagramFullscreenContainer' (module 709999)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 54121.d1c4c58f.js
         * chunkId: 54121
         * moduleId: 52564
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var a = clipboardCopyHelper;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useFullscreenState = require("use-fullscreen-state") /*id: 463357*/;
  var diagramFullscreenContainer = require("diagram-fullscreen-container") /*id: 709999*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var imageExportUtils = require("image-export-utils") /*id: 195626*/;
  var diagramCodeTabsPanelComponent = require("diagram-code-tabs-panel-component") /*id: 761808*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useMindMapEvents = require("use-mind-map-events") /*id: 936926*/;
  var codeBlockPositionContext = require("code-block-position-context") /*id: 871792*/;
  var codeBlockComponent = require("code-block-component") /*id: 523030*/;
  let y = reactCoreLibraryReexport.lazy(() => Promise.all([require.e("html-parser") /*id: 5374*/, require.e("css-tree-source-map") /*id: 53224*/, require.e("html-renderer") /*id: 19906*/]).then(require.bind(require, "html-renderer-component") /*id: 773976*/).then(e => ({
    default: e.HTMLRenderer
  })));
  var htmlCopyAndCleanupUtils = require("html-copy-and-cleanup-utils") /*id: 433842*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      code: o,
      onPreview: b,
      loading: E,
      viewOnly: S,
      conversationId: x,
      messageLink: A,
      message: R,
      customHandleEnterFullscreen: T,
      onDownload: C
    } = e;
    let N = codeBlockPositionContext.calculateCodeBlockPosition(o, R);
    let k = useMindMapEvents.useMindMapEvents({
      trackEvent: teaAnalyticsEventTracker.trackEvent,
      messageLink: A,
      message: R,
      conversationId: x,
      reportParams: {
        graph_type: "html"
      },
      codeBlockPosition: N
    });
    let $ = i18nTranslationUtils.useTranslationWithFallback();
    let {
      fullscreenVisible: D,
      handleEnterFullscreen: I,
      handleExitFullscreen: P
    } = useFullscreenState.useFullscreenState();
    let M = reactCoreLibraryReexport.useRef(null);
    let F = reactCoreLibraryReexport.useRef(null);
    let [O, L] = reactCoreLibraryReexport.useState(false);
    let j = e => ({
      onCopyText: () => {
        a(o);
        k.onCopyCode(D);
      },
      onTabChange: e => {
        k.onTabChange({
          buttonName: e === blockTypeConstants.blockTypes.Diagram ? "graph" : "code"
        });
      },
      onFullScreenEnter: e => {
        if (T) {
          T(e);
          return;
        }
        k.onEnterFullscreen();
        if (e === blockTypeConstants.blockTypes.Diagram) {
          I();
          return;
        }
        if (b != null) {
          b(o);
        }
      },
      onDownloadImage: () => {
        var t;
        let r = (t = e.current) === null || t === undefined ? undefined : t.exportImage();
        if (r) {
          r.then(e => {
            imageExportUtils.downloadImage(e);
          });
        }
        if (C != null) {
          C(D);
        }
        k.onDownload(D);
      },
      onCopyImage: () => {
        var t;
        let r = (t = e.current) === null || t === undefined ? undefined : t.exportImage();
        if (r) {
          r.then(e => {
            imageExportUtils.copyImageToClipboard(e);
          });
        }
        k.onCopyImg(D);
      }
    });
    let W = function (e, t = {}) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "html_render_error",
        error: e,
        meta: t
      });
      k.onMindMapShow(false, false);
    };
    let B = function (e, t = {}) {
      L(true);
      W(e, t);
    };
    let U = function (e = {}) {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "html_render_success",
        meta: e
      });
      k.onMindMapShow(false, true);
    };
    let [z, H] = reactCoreLibraryReexport.useState(undefined);
    let X = reactCoreLibraryReexport.useCallback(e => {
      if (e == null ? undefined : e.height) {
        H(e.height);
      }
    }, []);
    let V = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "new-loading-LP0lsp",
      children: [reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "small"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: $("deepResearch_tool_gencode_generating")
      })]
    }), [$]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!E) {
        var e;
        let t = (e = M.current) === null || e === undefined ? undefined : e.getImageAfterRender();
        if (t) {
          t.then(e => {
            htmlCopyAndCleanupUtils.HtmlCacheManager.setHTMLStore(o, e);
          });
        }
      }
    }, [E]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(diagramCodeTabsPanelComponent.DiagramCodeTabsPanel, {
        ref: F,
        ...j(M),
        className: "container-Qq7Ex3",
        disabled: O,
        enableCopyRichText: false,
        enableZoom: false,
        hideBorder: true,
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
        diagram: reactJsxRuntimeCoreReexport.jsx(y, {
          autoHeight: true,
          uniqueId: (R == null ? undefined : R.message_id) ?? "",
          code: o,
          ref: M,
          loading: E,
          onError: B,
          onSuccess: function (e = {}) {
            return U({
              ...e,
              from: "message"
            });
          },
          hideScrollBarWhileStreaming: E,
          onPreviewSizeChanged: X,
          onPageScroll: () => {
            var e;
            if ((e = F.current) !== null && e !== undefined) {
              e.pageScroll();
            }
          }
        }),
        panelStyle: {
          height: z
        },
        code: reactJsxRuntimeCoreReexport.jsx(codeBlockComponent.MdboxCodeBlock, {
          showHeader: false,
          code: o,
          className: "!m-0 !h-full overflow-auto !rounded-none !border-none",
          codeAreaClassName: "!rounded-none !h-full",
          viewOnly: S,
          contentClassName: "!border-none !rounded-none min-h-full",
          language: "html"
        }),
        customRenderTabTools: E ? V : undefined
      }), D ? reactJsxRuntimeCoreReexport.jsx(diagramFullscreenContainer.DiagramFullscreenContainer, {
        ...j(M),
        disabled: O,
        i18nConfig: {
          downloadImage: $("flow_web_ext_search_mindmap_download"),
          copyImage: $("flow_web_ext_search_mindmap_copy"),
          copyHtml: $("flow_web_ext_mindmap_copy_rich_text"),
          zoomIn: $("flow_web_ext_search_mindmap_zoom_in"),
          zoomOut: $("flow_web_ext_search_mindmap_zoom_out"),
          zoomFit: $("flow_web_ext_search_mindmap_fit"),
          close: $("flow_web_ext_close_upper_case")
        },
        onCloseClick: P,
        enableCopyRichText: false,
        enableZoom: false,
        children: reactJsxRuntimeCoreReexport.jsx(y, {
          code: o,
          autoHeight: true,
          uniqueId: (R == null ? undefined : R.message_id) ?? "",
          loading: E,
          ref: M,
          fullscreen: true,
          onError: B,
          onSuccess: function (e = {}) {
            return U({
              ...e,
              from: "fullscreen"
            });
          }
        })
      }) : null]
    });
  };
  require.r(exports);
  require.d(exports, {
    HTMLDiagram: function () {
      return b;
    }
  });
}
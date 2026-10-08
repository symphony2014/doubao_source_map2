// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'DeepThinkBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 944691
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatCanvasModeHook = require("chat-canvas-mode-hook") /*id: 269582*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var collapseComponent = require("collapse-component") /*id: 542405*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var chatMessageAnalyticsHook = require("chat-message-analytics-hook") /*id: 344910*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var thinkingUiComponent = require("thinking-ui-component") /*id: 409662*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var fadeAnimationStyles = require("fade-animation-styles") /*id: 775422*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      block: n,
      message: i,
      inView: l,
      share: o,
      showAnimation: a
    } = e;
    let {
      matcher: s
    } = chatPluginMatcherRegistry.useReceiveContentBlockMatcher();
    let c = s == null ? undefined : s.find(e => e.matchContentBlock(n.block_type))?.pluginIdentifier;
    let {
      plugin: d,
      loading: u
    } = chatPluginIocManager.contentBlockPluginHook(c ?? "", o ? "THREAD_SHARE" : undefined);
    let {
      plugin: m,
      loading: v,
      pluginContentProps: y
    } = functionInvoker.invoke(() => {
      let e = n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
      let t = {
        contentBlock: n,
        message: i,
        inView: l
      };
      if (o) {
        return {
          plugin: d,
          loading: u,
          pluginContentProps: t
        };
      } else {
        return {
          plugin: d,
          loading: u,
          pluginContentProps: e ? {
            ...t,
            customRenderOptions: {
              rightClickCopyReportParams: {
                click_from: "deep_think"
              }
            }
          } : t
        };
      }
    });
    if (m && !v && c) {
      if (!m && a) {
        return reactJsxRuntimeCoreReexport.jsx(thinkingUiComponent.ThinkingIndicator, {});
      } else if (m) {
        if (o) {
          return reactJsxRuntimeCoreReexport.jsx(m.Content, {
            ...y
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            className: f({
              [fadeAnimationStyles.fadeStyles["fade-in"]]: a
            }),
            children: reactJsxRuntimeCoreReexport.jsx(m.Content, {
              ...y
            })
          });
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  var deepThinkingSuggestion = require("deep-thinking-suggestion") /*id: 272303*/;
  var constantFalseUtil = require("constant-false-util") /*id: 770345*/;
  var thinkBlockStyles = require("think-block-styles") /*id: 364079*/;
  let R = e => {
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      contentBlock: v,
      message: f
    } = e;
    let {
      is_finish: h
    } = v ?? {};
    let g = reactCoreLibraryReexport.useRef(Date.now());
    let _ = reactCoreLibraryReexport.useRef(0);
    let {
      content_obj: b,
      children: R = []
    } = v ?? {};
    let {
      finish_title: $,
      streaming_title: C
    } = b ?? {};
    let T = usePreviousHook.usePrevious((R == null ? undefined : R.length) ?? 0);
    let {
      isCanvasNotNarrowMode: j
    } = chatCanvasModeHook.useChatCanvasMode();
    let {
      isSelectMode: N
    } = chatMessageShareSelectStore.chatMessageShareSelectStore();
    let {
      trackDeepThinkingShow: E,
      trackDeepThinkingClick: P,
      trackDeepThinkingProgressEnd: I
    } = chatMessageAnalyticsHook.useMessageAnalytics({
      message: f
    });
    let W = usePreviousHook.usePrevious(R.length);
    let F = messageContentTypeAndStatusChecker.vlk(f);
    let M = h || F;
    let A = usePreviousHook.usePrevious(M);
    let Z = usePreviousHook.usePrevious(M);
    let B = functionInvoker.invoke(() => h || F || !C ? !h && F || F ? n("web_search_deep_think_thinking_done_label") : $ : C);
    let O = !isUndefinedCheck.isUndefined(A) || !h;
    let D = R.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT);
    let L = constantFalseUtil.alwaysFalse();
    reactCoreLibraryReexport.useEffect(() => {
      E({
        whether_browsing: +!!D
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (R.length > 0 && T === 0) {
        _.current = Date.now() - g.current;
      }
    }, [R.length]);
    reactCoreLibraryReexport.useEffect(() => {
      if (M && Z === false) {
        I({
          total_duration: Date.now() - g.current,
          first_token_duration: _.current,
          is_finished: +!!h,
          whether_browsing: +!!D
        });
      }
    }, [M]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(collapseComponent.Collapse, {
        isCanvasMode: j,
        defaultExpand: O,
        isSelectMode: N,
        isFinished: M,
        collapseheaderTitleCls: thinkBlockStyles.ThinkBlockStyles["think-block-title"],
        collapseWrapperCls: "!mb-0",
        wrapperStyles: L ? {
          "--collapse-wrapper-btn-header-after-bg": "none"
        } : {},
        collapseButtonText: B,
        onCollapseButtonClick: e => {
          P({
            to_status: e ? "open" : "close",
            whether_browsing: +!!D
          });
        },
        tooltip: {
          expand: n("web_deepResearch_tooltip_expand"),
          collapse: n("web_deepResearch_tooltip_collapse")
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: thinkBlockStyles.ThinkBlockStyles["think-block-container"],
          children: R.map((t, n) => {
            let i = !M && (!W || n - W >= 0);
            return reactJsxRuntimeCoreReexport.jsx(y, {
              block: t,
              showAnimation: i,
              ...e
            }, `think-block-${t.id}`);
          })
        })
      }), !M && reactJsxRuntimeCoreReexport.jsx(deepThinkingSuggestion.DeepThinkSuggestion, {
        message: f
      })]
    });
  };
  require.d(exports, {
    DeepThinkBlock: function () {
      return R;
    }
  });
}
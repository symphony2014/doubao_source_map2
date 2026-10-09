// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'l' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 's' to 'reactErrorBoundary'
// - Resolved require(528804) to 'react-error-boundary'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'skeletonComponent'
// - Resolved require(619442) to 'skeleton-component'
// - Renamed variable 'm' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'v' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'f' to 'i18nextLanguageGetter'
// - Resolved require(124507) to 'i18next-language-getter'
// - Renamed variable 'p' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'h' to 'resizeObserverHooks'
// - Resolved require(246619) to 'resize-observer-hooks'
// - Renamed variable 'g' to 'useDebouncedCallbackHook_1'
// - Resolved require(366474) to 'use-debounced-callback-hook_1'
// - Renamed variable 'b' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'y' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(21082) to 'flowpd-card-web-runtime'
// - Resolved require.bind(605849) to 'card-web-runtime'
// - Renamed variable 'R' to 'ugcBotCardSymbol'
// - Resolved require(780218) to 'ugc-bot-card-symbol'
// - Updated imported property 'cO' to 'useErrorBoundary' (module 528804)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'kz' to 'MessageApiService' (module 147875)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'l' to 'getCurrentLanguage' (module 124507)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'y' to 'useResizeObserverEx' (module 246619)
// - Updated imported property 'Z' to 'useDebouncedCallback' (module 366474)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'Skeleton' (module 619442)
// - Updated imported property 'a' to 'ugcBotCardSymbol' (module 780218)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 722037
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  let c = e => {
    let {
      showBoundary: t
    } = reactErrorBoundary.useErrorBoundary();
    let n = reactCoreLibraryReexport.useCallback(e => {
      t(e);
    }, [t]);
    let r = reactCoreLibraryReexport.useCallback(emptyExportFunction.emptyFunction, []);
    let o = reactCoreLibraryReexport.useCallback(emptyExportFunction.emptyFunction, []);
    let c = reactCoreLibraryReexport.useCallback(async () => {
      if (e) {
        return (await apiServicesCollection.MessageApiService.GetMsgContent({
          msg_id: e
        })).data;
      }
    }, []);
    return reactCoreLibraryReexport.useMemo(() => ({
      onError: n,
      onLoadStart: r,
      onLoadEnd: o,
      onLoad: c
    }), [n, r, o, c]);
  };
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("flowpd-card-web-runtime") /*id: 21082*/.then(require.bind(require, "card-web-runtime") /*id: 605849*/)
  }));
  let x = e => {
    let {
      fold: t,
      contentBoxEvents: n,
      message: r
    } = e;
    let o = messageContentTypeAndStatusChecker.Z37(r) ? r : undefined;
    let l = (o == null ? undefined : o.conversation_id) || "";
    let s = (o == null ? undefined : o.message_id) || "";
    let c = {
      ...(o == null ? undefined : o.content_obj),
      createTime: o == null ? undefined : o.create_time
    };
    let u = i18nextLanguageGetter.getCurrentLanguage();
    let {
      sendMessage: _
    } = chatServiceContext.useChatService("chatMessageService");
    let p = reactCoreLibraryReexport.useRef(null);
    let {
      width: x = 0,
      height: S = 0
    } = resizeObserverHooks.useResizeObserverEx({
      ref: p
    });
    let C = reactCoreLibraryReexport.useCallback((e, t) => {
      let n = {
        ...t
      };
      teaAnalyticsEventTracker.trackEvent(e, n);
    }, []);
    let {
      run: E
    } = useDebouncedCallbackHook_1.useDebouncedCallback(C || emptyExportFunction.emptyFunction, {
      wait: 3000
    });
    let R = reactCoreLibraryReexport.useMemo(() => eventReportingService.createEventReporter({
      eventName: "card_render_status",
      meta: {
        messageId: s,
        conversationId: l,
        card_type: c == null ? undefined : c.card_type
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      E("show_coze_card", {
        card_show_type: t ? "fold" : "expend",
        card_height: S,
        card_width: x
      });
      if (n != null && (e = n.onLoad) !== null && e !== undefined) {
        e.call(n, S);
      }
    }, [x, S]);
    return reactCoreLibraryReexport.useMemo(() => {
      let e = safeJsonUtils.safeParse(c == null ? undefined : c.data, {});
      return reactJsxRuntimeCoreReexport.jsx(k, {
        cardRef: p,
        dsl: e,
        remoteForce: true,
        lang: u === "zh-CN" ? "zh-CN" : "en",
        eventCallbacks: {
          sendMsg: e => {
            let {
              msg: t
            } = e;
            return _([{
              text: t,
              reportParams: {
                scene: "keyboard"
              }
            }]);
          }
        },
        afterRender: () => {
          var e;
          if (n != null && (e = n.onLoadEnd) !== null && e !== undefined) {
            e.call(n);
          }
          if (C != null) {
            C("card_runtime_status", {
              code: 0,
              msg: "",
              status: 1
            });
          }
          if (R != null) {
            R.addDurationPoint("finish");
          }
          if (C != null) {
            C("card_runtime_render", {
              duration: (R == null ? undefined : R.getDuration()?.finish) || 0
            });
          }
          if (R != null) {
            R.success();
          }
        },
        onError: e => {
          var t;
          if (n != null && (t = n.onError) !== null && t !== undefined) {
            t.call(n, e);
          }
          if (C != null) {
            C("card_runtime_status", {
              code: e.code,
              msg: e.msg,
              status: 0
            });
          }
          if (R != null) {
            R.addDurationPoint("error");
          }
          if (C != null) {
            C("card_runtime_render", {
              duration: (R == null ? undefined : R.getDuration()?.error) || 0
            });
          }
          if (R != null) {
            R.error({
              reason: e.msg,
              meta: {
                error: e
              }
            });
          }
        },
        region: "cn-release"
      });
    }, [c == null ? undefined : c.data, n.onError, n.onLoad, n.onLoadEnd, n.onLoadStart]);
  };
  var S = {
    skeleton: "skeleton-jH1kFV",
    container: "container-DUoxZq",
    inner: "inner-QPTxWj",
    "inner-show-more": "inner-show-more-LkNd5R",
    "inner-mask": "inner-mask-SOHIO0",
    "show-more-action": "show-more-action-tTqV7s",
    "inner-unloaded": "inner-unloaded-y5wfiG"
  };
  let C = e => {
    let t = reactCoreLibraryReexport.useRef(e);
    let n = reactCoreLibraryReexport.useRef(e);
    if (e && !n.current) {
      t.current = n.current;
      n.current = e;
    }
    return {
      prevHasInViewRef: t,
      hasInViewRef: n
    };
  };
  let E = e => {
    let {
      inView: t,
      message: n
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback()("more") || "More";
    let {
      hasInViewRef: a
    } = C(t);
    let l = c(n.message_id);
    let [s, m] = reactCoreLibraryReexport.useState(false);
    let [v, f] = reactCoreLibraryReexport.useState(false);
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let g = reactCoreLibraryReexport.useCallback(function (e = 0) {
      if (e - 520 < 48) {
        f(true);
        m(false);
      }
      if (e - 520 >= 48) {
        f(false);
        m(true);
      }
      return Promise.resolve(undefined);
    }, []);
    let b = reactCoreLibraryReexport.useCallback(() => {
      var e;
      h(true);
      if (l != null && (e = l.onLoadEnd) !== null && e !== undefined) {
        e.call(l);
      }
    }, []);
    let y = reactCoreLibraryReexport.useMemo(() => ({
      fold: s,
      contentBoxEvents: {
        ...l,
        onLoad: g,
        onLoadEnd: b
      }
    }), [g, s, b]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!p && reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Paragraph, {
        className: S.skeleton
      }), a.current && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: S.container,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o({
            [S["inner-show-more"]]: v,
            [S.inner]: true,
            [S["inner-mask"]]: s,
            [S["inner-unloaded"]]: !p
          }),
          children: reactJsxRuntimeCoreReexport.jsx(x, {
            ...y,
            message: n
          })
        }), s ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: S["show-more-action"],
          onClick: () => {
            teaAnalyticsEventTracker.trackEvent("show_more_button_click");
            f(true);
            m(false);
          },
          children: r
        }) : null]
      })]
    });
  };
  var ugcBotCardSymbol = require("ugc-bot-card-symbol") /*id: 780218*/;
  function T(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class j {
    constructor() {
      T(this, "pluginIdentifier", ugcBotCardSymbol.ugcBotCardSymbol);
      T(this, "Content", E);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCozeCardPlugin: function () {
      return j;
    }
  });
}
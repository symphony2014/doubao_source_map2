// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'ChatGuidancePage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 980189
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatAsrOverlayTab = require("chat-asr-overlay-tab") /*id: 155113*/;
  var chatLayoutResponsiveHooks = require("chat-layout-responsive-hooks") /*id: 833112*/;
  var superTaskSwitchChecker = require("super-task-switch-checker") /*id: 224573*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatTargetTypes = require("chat-target-types") /*id: 909338*/;
  var chatSkillBarRenderer = require("chat-skill-bar-renderer") /*id: 958066*/;
  var chatInputGuidanceEngine = require("chat-input-guidance-engine") /*id: 956394*/;
  var chatUserInfoStore = require("chat-user-info-store") /*id: 130751*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var i18nVisibleTranslator = require("i18n-visible-translator") /*id: 77869*/;
  let P = () => l("relative text-dbx-text-primary text-center mb-28 font-semibold mx-auto text-28 min-h-[var(--greeting-height)] w-fit cursor-default", "greeting-text-Q0pGud");
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = (e, t) => t ? i18nVisibleTranslator.visibleT("newChat_greeting_title_doubao") : i18nVisibleTranslator.visibleT("newChat_greeting_help");
  let E = e => {
    let {
      userName: t,
      isGuest: n
    } = e;
    if (!t) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: P()
      });
    }
    let i = y(t, n);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: P(),
      children: i
    });
  };
  let x = e => {
    let {
      activeSkillType: t
    } = e;
    let {
      userInfo: n
    } = chatUserInfoStore.userInfoStore();
    let i = userInfoStatusSelectors.selectUserInfoFailed();
    let r = n == null ? undefined : n.name;
    if (t) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(E, {
        isGuest: i,
        userName: r
      });
    }
  };
  var chatLogIdExtractor = require("chat-log-id-extractor") /*id: 738448*/;
  var flowLayoutStateRunner = require("flow-layout-state-runner") /*id: 358717*/;
  var chatGuidanceStoreSelectors = require("chat-guidance-store-selectors") /*id: 970651*/;
  var chatPageInteractiveTracker = require("chat-page-interactive-tracker") /*id: 798740*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  function M(e, t, n) {
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
  let A = require("flow-api-service-proxy") /*id: 538321*/.createServiceProxy("experience", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    GetNexPulse(e, t) {
      let n = e || {};
      let i = this.genBaseURL("/biz/onboarding/get_nexpulse");
      let r = {
        bot_id: n.bot_id,
        conversation_id: n.conversation_id,
        skip_cache: n.skip_cache,
        scene: n.scene,
        params: n.params
      };
      return this.request({
        url: i,
        method: "POST",
        data: r
      }, t);
    }
    constructor(e) {
      M(this, "request", () => {
        throw Error("ExperienceApiService.request is undefined");
      });
      M(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  (i = {})[i.Unknown = 0] = "Unknown";
  i[i.WCB = 1] = "WCB";
  i[i.WcbRegen = 2] = "WcbRegen";
  i[i.PopWindow = 3] = "PopWindow";
  i[i.WcbPC = 4] = "WcbPC";
  let D = i;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  let L = function (e = {}) {
    let {
      botId: t = chatConstantId.chatConstantId,
      scene: n = D.WcbPC
    } = e;
    let {
      run: i,
      loading: r,
      runAsync: o
    } = useRequestHook.useRequest(async () => await A.GetNexPulse({
      bot_id: t,
      scene: n
    }), {
      manual: true
    });
    return {
      run: i,
      loading: r,
      runAsync: o
    };
  };
  let O = e => {
    let {
      resolved: t
    } = e;
    let n = reactCoreLibraryReexport.useRef((() => {
      if (t) {
        return {
          promise: null,
          resolve: null
        };
      }
      {
        let e;
        return {
          promise: new Promise(t => {
            e = t;
          }),
          resolve: e
        };
      }
    })());
    reactCoreLibraryReexport.useEffect(() => {
      if (t && n.current.resolve) {
        n.current.resolve();
        n.current.resolve = null;
        n.current.promise = null;
      }
    }, [t]);
    return reactCoreLibraryReexport.useCallback(() => {
      if (n.current.promise) {
        throw n.current.promise;
      }
      return null;
    }, []);
  };
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var skeletonLoaderExport = require("skeleton-loader-export") /*id: 766114*/;
  let j = [[200, 200, 200], [158, 144, 200], [242, 162, 130]];
  let W = e => {
    let {
      rowIndex: t,
      colIndex: n,
      mode: i = "desktop"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(skeletonLoaderExport.SkeletonLoader, {
      className: l(i === "desktop" ? `
            flex h-[42px] flex-none truncate
            rounded-[var(--dbx-radius-xl-12,12px)]
          ` : `
            flex h-42 flex-none flex-col truncate
            rounded-[var(--dbx-radius-xl-12,12px)]
          `),
      style: {
        width: j[t][n]
      }
    }, `${t}-${n}`);
  };
  let U = e => {
    let {
      mode: t
    } = e;
    let n = numericRangeUtil.createRange(0, 9);
    let i = [n.slice(0, 3), n.slice(3, 6), n.slice(6, 9)];
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t === "mobile" ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
              left-[-4px] w-[calc(100vw-24px)] overflow-x-auto
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            `,
          children: i.map((e, n) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: "mb-8 flex justify-start gap-8",
            children: e.map((e, i) => reactJsxRuntimeCoreReexport.jsx(W, {
              rowIndex: n,
              colIndex: i,
              mode: t
            }))
          }, n))
        })
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "max-w-full",
        children: i.map((e, n) => reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
                mb-8 flex h-[42px] flex-wrap justify-center gap-8
                overflow-hidden
              `,
          children: e.map((e, i) => reactJsxRuntimeCoreReexport.jsx(W, {
            rowIndex: n,
            mode: t,
            colIndex: i
          }, `${n}-${i}`))
        }, n))
      })
    });
  };
  let F = reactCoreLibraryReexport.lazy(async () => await flowLayoutStateRunner.runOnVisible(async () => ({
    default: await Promise.all([require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("chat-runtime-chunk-after-visible") /*id: 80792*/]).then(require.bind(require, "experiment-guidance-suggestion-component") /*id: 630373*/).then(e => e.ExperimentGuidanceSug)
  })));
  let V = e => {
    let {
      activeSkillType: t,
      chatId: n,
      chatType: i,
      mode: o
    } = e;
    let {
      pageInteractive: a
    } = chatPageInteractiveTracker.useChatPageInitTracker();
    let l = chatGuidanceStoreSelectors.useFetchedNexPulseRecommendationId();
    let s = chatGuidanceStoreSelectors.useFetchedNexPulseCandidate() || [];
    let {
      runAsync: u,
      loading: c
    } = L({});
    let [d, m] = reactCoreLibraryReexport.useState((() => {
      let e = false;
      if (typeof window != "undefined") {
        let t = chatStoreManager.getStoreState("chatGuidanceStore");
        let n = t.fetchedNexPulseCandidate || [];
        let i = t.usedOnboardingSugs || [];
        if (n.length || s.length) {
          if (i.length) {
            e ||= s.some(e => {
              return i.includes((e == null ? undefined : e.text_conf?.send_message_text) || "");
            });
          }
        } else {
          e = true;
        }
      }
      return e;
    })());
    reactCoreLibraryReexport.useEffect(() => {
      if (a && d) {
        m(false);
        u().then(e => {
          let {
            data: t
          } = e;
          let n = chatLogIdExtractor.getLogId(e);
          if (t) {
            let e = chatGuidanceStoreSelectors.filterValidCandidates(t);
            chatStoreManager.getStore("chatGuidanceStore").setState(t => ({
              ...t,
              fetchedNexPulseRecommendationId: n,
              fetchedNexPulseCandidate: e,
              usedOnboardingSugs: []
            }));
          }
        });
      }
    }, [d, a]);
    let g = O({
      resolved: !d && !c
    });
    if (t) {
      return null;
    } else if (o === "mobile") {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex min-h-150 w-full flex-col justify-center",
        children: reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(U, {
            mode: o
          }),
          children: [reactJsxRuntimeCoreReexport.jsx(F, {
            recommendationId: l,
            items: s,
            activeSkillType: t,
            chatId: n,
            chatType: i,
            mode: o
          }), reactJsxRuntimeCoreReexport.jsx(g, {})]
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex min-h-150 w-full justify-center",
        id: "experiment-guidance-suggestions",
        children: reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(U, {
            mode: o
          }),
          children: [reactJsxRuntimeCoreReexport.jsx(F, {
            recommendationId: l,
            items: s,
            activeSkillType: t,
            chatId: n,
            chatType: i,
            mode: o
          }), reactJsxRuntimeCoreReexport.jsx(g, {})]
        })
      });
    }
  };
  var chatGuidanceConfigSelector = require("chat-guidance-config-selector") /*id: 811136*/;
  var chatAsrOverlayTabHook = require("chat-asr-overlay-tab-hook") /*id: 440106*/;
  var commonErrorPageWithSuspense = require("common-error-page-with-suspense") /*id: 620276*/;
  require("xss-content-sanitizer") /*id: 508971*/;
  let $ = () => {
    userInfoStatusSelectors.selectUserInfoFailed();
    return null;
  };
  let K = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
    default: await Promise.all([require.e("animation-dom-utils") /*id: 38951*/, require.e("semi-ui-primitive-widgets") /*id: 63517*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("coding-skill-store") /*id: 30108*/, require.e("ui-components-templates") /*id: 14700*/, require.e("semi-typography-i18n") /*id: 60734*/, require.e("ui-tooltip-component") /*id: 18848*/, require.e("async-skill-guidance-suggestions") /*id: 96934*/]).then(require.bind(require, "skill-guidance-suggestions") /*id: 921470*/).then(e => e.GuidanceSuggestions)
  })));
  let X = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
    default: await Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("async-after-interactive-event-tracker") /*id: 38237*/]).then(require.bind(require, "page-enter-event-tracker") /*id: 404417*/).then(e => e.EventTracker)
  })));
  let Q = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("async-after-interactive-event-tracker") /*id: 38237*/]).then(require.bind(require, "guidance-metrics-logger") /*id: 593205*/).then(e => ({
    default: e.GuidanceMetricsLogger
  }))));
  let q = reactCoreLibraryReexport.memo(() => {
    let n = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let i = (n == null ? undefined : n.chatId) ?? "";
    let a = (n == null ? undefined : n.chatType) ?? chatConversationTypes.ConversationTypes.NewThread;
    let {
      activeSkillType: v
    } = chatStoreManager.useStoreSelector("chatInputStore", e => {
      let r = i ? e.activeSkillTypeMap?.[i] : undefined;
      let o = r && i ? {
        ...e.skillMap?.[r],
        skill_type: r
      } : undefined;
      return {
        activeSkillType: r,
        activeSkill: o
      };
    }, deepEqualityUtil.deepEqual);
    let {
      isSuperTaskSwitchEnabled: b
    } = superTaskSwitchChecker.useSuperTaskSwitch({
      chatId: i,
      activeSkillType: v
    });
    let S = v || b;
    reactCoreLibraryReexport.useMemo(() => {
      var e;
      var t;
      if ((e = (t = chatStoreManager.getStoreState("chatGuidanceStore")).setActiveSkillGuidanceIdentifier) !== null && e !== undefined) {
        e.call(t);
      }
    }, []);
    let P = chatLayoutResponsiveHooks.useChatMediaQuery(chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand));
    let {
      guidanceGenericInputMode: y
    } = chatGuidanceConfigSelector.useChatGuidanceConfig();
    let {
      wrapperRef: E,
      asrTabLeftPos: T,
      asrTabWidth: k,
      showAsrOverlayTab: R,
      asrVolume: w,
      asrStartMethod: I,
      asrStatus: M
    } = chatAsrOverlayTabHook.useAsrOverlayTab();
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
      errorBoundaryName: "guidance_page_error",
      logger: loggerServiceCore.defaultLogger,
      errorBoundaryScope: chatTargetTypes.chatTargetTypes.Page,
      FallbackComponent: commonErrorPageWithSuspense.CommonErrorPageWithSuspense,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: E,
        className: `
          -mt-[var(--header-height)] flex w-full flex-grow flex-col items-center
          px-16
        `,
        "data-testid": "flow_chat_guidance_page",
        children: [reactJsxRuntimeCoreReexport.jsxs(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: [reactJsxRuntimeCoreReexport.jsx(X, {}), reactJsxRuntimeCoreReexport.jsx(Q, {
            useV3: true
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "min-h-56 flex-1"
        }), reactJsxRuntimeCoreReexport.jsx(x, {
          activeSkillType: v
        }), reactJsxRuntimeCoreReexport.jsx(V, {
          chatType: a,
          chatId: i,
          activeSkillType: v,
          mode: P ? "mobile" : "desktop"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "min-h-8 flex-1"
        }), reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
          children: reactJsxRuntimeCoreReexport.jsx(K, {
            chatId: i,
            activeSkillType: v,
            contentClassName: "max-dbx-xs:relative",
            className: "max-dbx-xs:!h-fit",
            isSuperTaskSwitchEnabled: b
          })
        }), y && reactJsxRuntimeCoreReexport.jsx(chatSkillBarRenderer.renderSkillBar, {
          className: l("pb-10", {
            "!hidden": S,
            "opacity-20": R
          }),
          chatId: i,
          chatType: a
        }), reactJsxRuntimeCoreReexport.jsx(chatInputGuidanceEngine.ChatInputGuidance, {
          className: l({
            "opacity-20": R
          }),
          chatId: i,
          chatType: a,
          activeSkillType: v,
          scene: "landing"
        }), reactJsxRuntimeCoreReexport.jsx($, {}), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "h-20"
        }), R && reactJsxRuntimeCoreReexport.jsx(chatAsrOverlayTab.AsrOverlayTab, {
          leftCenterPos: T,
          tabWidth: k,
          asrVolume: w,
          asrStartMethod: I,
          asrStatus: M
        })]
      })
    });
  });
  require.d(exports, {
    ChatGuidancePage: function () {
      return q;
    }
  });
}
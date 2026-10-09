// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'l' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'c' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'd' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'u' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'h' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'p' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'g' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'm' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'S' to 'useIntersectionObserver'
// - Resolved require(774639) to 'use-intersection-observer'
// - Renamed variable 'f' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable '_' to 'searchIconComponent_2'
// - Resolved require(773676) to 'search-icon-component_2'
// - Renamed variable 'y' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'w' to 'searchSkillMessageUtils'
// - Resolved require(67970) to 'search-skill-message-utils'
// - Renamed variable 'b' to 'deepSearchSkillChatInputStore'
// - Resolved require(679775) to 'deep-search-skill-chat-input-store'
// - Renamed variable 'x' to 'searchGuidanceSkeleton'
// - Resolved require(675898) to 'search-guidance-skeleton'
// - Renamed variable 'C' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'useIntersection' (module 774639)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'uq' to 'deepSearchChatInputStore' (module 679775)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'ci' to 'formatSkillId' (module 361602)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'JO' to 'isSearchGuidancePage' (module 67970)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'SearchIcon' (module 773676)
// - Updated imported property 'b' to 'GuidanceSkeleton' (module 675898)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page.f437683f.js
         * chunkId: 32568
         * moduleId: 110701
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var searchSkillMessageUtils = require("search-skill-message-utils") /*id: 67970*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var searchGuidanceSkeleton = require("search-guidance-skeleton") /*id: 675898*/;
  var k = {
    search: "search-JIK4HK",
    content: "content-ESGN5O",
    title: "title-b4dCze",
    desc: "desc-g1TG0q"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = e => {
    let {
      item: i,
      index: t,
      trackParams: r,
      onClick: c
    } = e;
    let o = reactCoreLibraryReexport.useRef(null);
    let [d] = useIntersectionObserver.useIntersection(o, {
      threshold: 0.5
    });
    let u = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      teaAnalyticsEventTracker.trackEvent("ai_search_thread_show", {
        title: i.title,
        content: i.desc,
        content_length: i.desc?.length ?? 0,
        row_position: t + 1
      });
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
        ...r,
        content_detail: i.title,
        genre: null
      });
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        u();
      }
    }, [d]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: o,
      className: s(k.content, "flex items-center py-16 cursor-pointer px-10 hover:bg-s-color-bg-trans"),
      onClick: () => {
        teaAnalyticsEventTracker.trackEvent("ai_search_thread_click", {
          title: i.title,
          content: i.desc,
          content_length: i.desc?.length ?? 0,
          row_position: t + 1
        });
        teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
          ...r,
          content_detail: i.title,
          genre: null
        });
        let l = (i == null ? undefined : i.prompt_title) ?? (i == null ? undefined : i.value);
        if (c && l) {
          c(l);
        }
      },
      "data-testid": "skill-page-search-item",
      children: [reactJsxRuntimeCoreReexport.jsx("img", {
        src: xssContentSanitizer.sanitizeUrl(i.icon_url, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWXpK$2FHTnR%bTlNTTA1N$d-az$h$0ZZ-jNSWk1qbDBZM*M1ZFZwWE5%Qk1Na1p3$EZoT2J*bFlTbXBo%Xp*d$p*ZHNhMWx-Tldw-$$6RjNX$mRr-k$3eld-aE1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        className: "mr-16 h-82 w-120 rounded-12 object-cover"
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: k.title,
          "data-testid": "skill-page-search-item-title",
          children: i.title
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: s(k.desc, "my-2"),
          "data-testid": "skill-page-search-item-desc",
          children: i.desc
        })]
      })]
    });
  };
  let $ = e => {
    let {
      renderHeader: i,
      trackParams: t,
      reportParams: a,
      from: c,
      onBeforeSendMessage: s
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: S
    } = chatServiceContext.useChatService("chatMessageService");
    let [$, j, N] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.aiSearchConfigLoading, e.aiSearchConfig, e.initAISearchConfigList], deepEqualityUtil_1.isDeepEqual);
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.Search);
    let I = chatAppEnums.SkillType.Search.toString();
    let E = chatAppEnums.SkillType.DeepSearch.toString();
    let A = async e => {
      if (!e || (await (s == null ? undefined : s())) === false) {
        return;
      }
      let i = deepSearchSkillChatInputStore.deepSearchChatInputStore.getState().currentActiveSearchSkill === chatAppEnums.SkillType.DeepSearch;
      let t = {
        skill_id: i ? E : I,
        skill_type: i ? chatAppEnums.SkillType.DeepSearch : chatAppEnums.SkillType.Search
      };
      S([{
        text: e,
        reportParams: {
          scene: "sidebar_skill_click",
          sec_scene: "click_suggestedprompt_case",
          preset_prompt_type: "default_prompt",
          ...a
        },
        extraExt: {
          input_skill: JSON.stringify(t),
          send_from_skill_guidance_or_suggestion: "1"
        }
      }]);
    };
    let O = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "skill_guidance_page_show",
        meta: {
          success: "1",
          skill_type: chatAppEnums.SkillType.Search,
          skill_type_str: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.Search),
          skill_id: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.Search),
          from: c
        }
      });
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      N();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (j == null ? undefined : j.length) {
        performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
        if (searchSkillMessageUtils.isSearchGuidancePage()) {
          O();
        }
      }
    }, [j == null ? undefined : j.length]);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      className: "h-screen overflow-auto",
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [i == null ? undefined : i({
          icon: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
            className: "text-16"
          }),
          title: p("skill_search_title2"),
          greeting: p("onboarding_aisearch_description")
        }), $ ? reactJsxRuntimeCoreReexport.jsx(searchGuidanceSkeleton.GuidanceSkeleton, {}) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: j && j.length > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
            className: k.search,
            "data-testid": "search-guidance-page-show",
            children: j.map((e, i) => reactJsxRuntimeCoreReexport.jsx(T, {
              index: i,
              item: e,
              trackParams: t,
              onClick: A
            }, i))
          })
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    AISearchGuidancePage: function () {
      return $;
    }
  });
}
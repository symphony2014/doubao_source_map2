// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'c' to 'skillGuidanceSuggestionsList'
// - Resolved require(213126) to 'skill-guidance-suggestions-list'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'f' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'h' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'm' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'v' to 'useRequestHook'
// - Resolved require(870590) to 'use-request-hook'
// - Renamed variable 'g' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'b' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'y' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'x' to 'exerciseSkillGuidanceHandler'
// - Resolved require(676189) to 'exercise-skill-guidance-handler'
// - Renamed variable 'w' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'E' to 'exerciseSkillInputModule'
// - Resolved require(597310) to 'exercise-skill-input-module'
// - Renamed variable 'C' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'ae' to 'useChatId' (module 837195)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'Z' to 'useRequest' (module 870590)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'd' to 'handleExerciseSkillClick' (module 676189)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'ExerciseSkillInput' (module 597310)
// - Updated imported property 'l' to 'SkillGuidanceList' (module 213126)
// - Updated imported property 'L' to 'SkillCardContent' (module 171032)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance.e3b9469f.js
         * chunkId: 64113
         * moduleId: 246507
         */
module.exports = function (module, exports, require) {
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var skillGuidanceSuggestionsList = require("skill-guidance-suggestions-list") /*id: 213126*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var exerciseSkillGuidanceHandler = require("exercise-skill-guidance-handler") /*id: 676189*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "text-center",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-s-color-text-secondary s-font-h1 mb-8 mt-28",
        children: e("skill_label_solve_problem")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-s-color-text-quaternary s-font-base mb-24",
        "data-testid": "skill-page-title",
        children: e("newChat_skill_triggered_title_for_solveProblem")
      })]
    });
  };
  var exerciseSkillInputModule = require("exercise-skill-input-module") /*id: 597310*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let _ = e => {
    let {
      activeSkillType: t
    } = e;
    let n = chatViewCoreSelectors.useChatId();
    let r = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillFromMap[n || ""]);
    if (t === (r == null ? undefined : r.skillType)) {
      if (r == null) {
        return undefined;
      } else {
        return r.skillFrom;
      }
    } else {
      return undefined;
    }
  };
  var j = {
    tag: "tag-CtKyLt"
  };
  let k = e => {
    let {
      trackParams: t,
      skillConfig: n,
      reportParams: r,
      onBeforeSendMessage: s,
      onAfterSendMessage: C
    } = e;
    let k = i18nTranslationUtils.useTranslationWithFallback();
    let T = chatAppEnums.SkillType.ExerciseAssistant;
    let O = {
      skill_from: _({
        activeSkillType: T
      }),
      ...r
    };
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.ExerciseAssistant);
    let {
      data: P
    } = useRequestHook.useRequest(async () => {
      var r;
      var i;
      let o = n == null ? undefined : n.exercise_assistant?.item_list;
      if (o) {
        return o;
      }
      try {
        let {
          data: e
        } = await apiServicesCollection.SamanthaApiService.GetRecommendSkills({
          omit_sidebar: true,
          omit_image: true,
          omit_music: true,
          omit_write: true,
          omit_search: true
        });
        chatStoreManager.getStore("chatGuidanceStore").setState({
          skillConfig: e == null ? undefined : e.onboarding_skills
        });
        if (e == null) {
          return undefined;
        } else if ((i = e.onboarding_skills) === null || i === undefined) {
          return undefined;
        } else if ((r = i.find(e => e.skill_type === T)) === null || r === undefined) {
          return undefined;
        } else {
          return r.exercise_assistant?.item_list;
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "getRecommendSkills_failed",
          error: e
        });
      }
    });
    let N = reactCoreLibraryReexport.useMemo(() => {
      return (P == null ? undefined : P.map(e => {
        var n;
        var r;
        return {
          title: e.prompt,
          center: reactJsxRuntimeCoreReexport.jsx("img", {
            className: "h-full w-full rounded-t-10 object-contain object-center",
            src: xssContentSanitizer.sanitizeUrl((r = e.images) === null || r === undefined ? undefined : (n = r[0]) === null || n === undefined ? undefined : n.image_ori?.url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkw$2xk%01$d3p%bmxaZ$Rsc$lqSXhkMkl5Tld4aWJsRjJXb*hv-kdOdFRuQmpNbF-w$2pO$2N*cEhSblZaTWxWMFkwZEdibHB%T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
            }),
            alt: "",
            "data-testid": "skill-page-exercise-template-item-image"
          }),
          header: reactJsxRuntimeCoreReexport.jsx("div", {
            className: a("absolute backdrop-blur-lg top-4 left-4 z-1 rounded-s-radius-xxss py-2 px-6 s-font-xxs text-s-color-text-invert-intact-primary", j.tag),
            "data-testid": "skill-page-exercise-template-item-title",
            children: e.title
          })
        };
      })) ?? [];
    }, [P]);
    let M = reactFunctionMemoHook.useMemoizedCallback((e, n) => {
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
        ...t,
        content_detail: P == null ? undefined : P[n]?.title,
        genre: null
      });
    });
    let R = exerciseSkillGuidanceHandler.handleExerciseSkillClick(n, t, O, s, C);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      autoShowScrollbar: true,
      className: "h-screen overflow-auto",
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [reactJsxRuntimeCoreReexport.jsx(S, {}), reactJsxRuntimeCoreReexport.jsx(exerciseSkillInputModule.ExerciseSkillInput, {
          skill: {
            skill_type: T
          },
          trackParams: t || {},
          reportParams: O,
          showExitSkillButton: false,
          onBeforeSendMessage: s,
          onAfterSendMessage: C
        }), reactJsxRuntimeCoreReexport.jsx(skillGuidanceSuggestionsList.SkillGuidanceList, {
          className: "mt-24 px-10",
          items: N,
          moreText: k("newChat_skill_sample_view_more"),
          reportParams: O,
          onShow: M,
          itemTestId: "skill-page-exercise-template-item",
          onClick: (e, t) => {
            R(t);
          },
          isShowMore: false
        })]
      })
    });
  };
  class T extends asyncSkillGuidanceCard_1.SkillCardContent {
    constructor(...e) {
      var t;
      var n;
      super(...e);
      if ((t = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "Content", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: k,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = k;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ExerciseChatGuidancePlugin: function () {
      return T;
    }
  });
}
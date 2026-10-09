// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'o' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 's' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'codeInterpreterSkillGuidance'
// - Resolved require(180379) to 'code-interpreter-skill-guidance'
// - Renamed variable 'm' to 'asyncSkillGuidanceInputComponent'
// - Resolved require(570915) to 'async-skill-guidance-input-component'
// - Renamed variable 'h' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'v' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Updated imported property 'ae' to 'useChatId' (module 837195)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 's' to 'AsyncSkillGuidanceInput' (module 570915)
// - Updated imported property 'g' to 'SkillGuidancePage' (module 180379)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: code-interpreter-skill-guidance-page.89c02c2b.js
         * chunkId: 45894
         * moduleId: 129732
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      title: t,
      greeting: n,
      renderClose: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r("header-sdFToY", "sticky-header"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col gap-10 mb-24 mt-28",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex items-center justify-center text-s-color-text-secondary",
          children: reactJsxRuntimeCoreReexport.jsx("p", {
            className: "m-0 s-font-h1",
            children: t
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "desc-WDsBYx",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: r("greeting-RgijLz", "relative truncate text-center"),
            "data-testid": "skill-page-title",
            children: n
          }), i == null ? undefined : i()]
        })]
      })
    });
  };
  var codeInterpreterSkillGuidance = require("code-interpreter-skill-guidance") /*id: 180379*/;
  var asyncSkillGuidanceInputComponent = require("async-skill-guidance-input-component") /*id: 570915*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let g = e => {
    let {
      activeSkillType: t
    } = e;
    let n = chatViewCoreSelectors.useChatId();
    let i = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillFromMap[n || ""]);
    if (t === (i == null ? undefined : i.skillType)) {
      if (i == null) {
        return undefined;
      } else {
        return i.skillFrom;
      }
    } else {
      return undefined;
    }
  };
  let y = e => {
    let {
      trackParams: t,
      renderClose: n,
      reportParams: l,
      onBeforeSendMessage: h,
      onAfterSendMessage: v
    } = e;
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let k = chatAppEnums.SkillType.CodeInterpreter;
    let x = {
      skill_from: g({
        activeSkillType: k
      }),
      ...l
    };
    skillGuidanceValidator.useSkillGuard(k);
    reactCoreLibraryReexport.useEffect(() => {
      performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      autoShowScrollbar: true,
      className: r("ci-guidance-Y5vPqn", "h-screen overflow-auto"),
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [reactJsxRuntimeCoreReexport.jsx(f, {
          title: y("skill_dataAnalysis_title"),
          greeting: y("newChat_skill_triggered_title_for_dataAnalysis"),
          renderClose: n
        }), reactJsxRuntimeCoreReexport.jsx(asyncSkillGuidanceInputComponent.AsyncSkillGuidanceInput, {
          trackParams: t,
          reportParams: x,
          skill: {
            skill_type: k
          },
          showExitSkillButton: false,
          onBeforeSendMessage: h,
          onAfterSendMessage: v
        }), reactJsxRuntimeCoreReexport.jsx(codeInterpreterSkillGuidance.SkillGuidancePage, {
          trackParams: t,
          reportParams: x,
          onBeforeSendMessage: h,
          onAfterSendMessage: v
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    CIGuidancePage: function () {
      return y;
    }
  });
}
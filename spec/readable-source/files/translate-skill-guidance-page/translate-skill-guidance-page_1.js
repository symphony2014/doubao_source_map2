// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'i' to 'performanceStoreHook'
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
// - Renamed variable 'p' to 'translateSkillGuidancePage_2'
// - Resolved require(670554) to 'translate-skill-guidance-page_2'
// - Renamed variable 'f' to 'translateSkillGuidancePage'
// - Resolved require(923423) to 'translate-skill-guidance-page'
// - Renamed variable 'm' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'h' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Updated imported property 'ae' to 'useChatId' (module 837195)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'f' to 'TranslateGuidanceSkillInput' (module 923423)
// - Updated imported property 'j' to 'TranslateSkillGuidance' (module 670554)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: translate-skill-guidance-page.ef1836c4.js
         * chunkId: 29337
         * moduleId: 605789
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
  let g = e => {
    let {
      title: t,
      greeting: n,
      renderClose: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r("header-NRgR1_", "sticky-header"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col gap-10 mb-24 mt-28",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex items-center justify-center text-s-color-text-secondary",
          children: reactJsxRuntimeCoreReexport.jsx("p", {
            className: "m-0 s-font-h1",
            children: t
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "desc-hCI67_",
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: r("greeting-zvHweh", "relative truncate text-center"),
            "data-testid": "skill-page-title",
            children: n
          }), l == null ? undefined : l()]
        })]
      })
    });
  };
  var translateSkillGuidancePage_2 = require("translate-skill-guidance-page_2") /*id: 670554*/;
  var translateSkillGuidancePage = require("translate-skill-guidance-page") /*id: 923423*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let v = e => {
    let {
      activeSkillType: t
    } = e;
    let n = chatViewCoreSelectors.useChatId();
    let l = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillFromMap[n || ""]);
    if (t === (l == null ? undefined : l.skillType)) {
      if (l == null) {
        return undefined;
      } else {
        return l.skillFrom;
      }
    } else {
      return undefined;
    }
  };
  let k = e => {
    let {
      trackParams: t,
      reportParams: n,
      skillConfig: a,
      renderClose: m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let k = chatAppEnums.SkillType.Translate;
    let x = {
      skill_from: v({
        activeSkillType: k
      }),
      ...n
    };
    skillGuidanceValidator.useSkillGuard(k);
    reactCoreLibraryReexport.useEffect(() => {
      performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      autoShowScrollbar: true,
      className: r("h-screen overflow-auto"),
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        children: [reactJsxRuntimeCoreReexport.jsx(g, {
          title: h("skill_translate_title"),
          greeting: h("onboarding_translation_description"),
          renderClose: m
        }), reactJsxRuntimeCoreReexport.jsx(translateSkillGuidancePage.TranslateGuidanceSkillInput, {
          trackParams: t,
          reportParams: x,
          skill: {
            skill_type: k
          },
          showExitSkillButton: false
        }), reactJsxRuntimeCoreReexport.jsx(translateSkillGuidancePage_2.TranslateSkillGuidance, {
          trackParams: t,
          skillConfig: a,
          reportParams: x,
          isShowMore: false
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    TranslateGuidancePage: function () {
      return k;
    }
  });
}
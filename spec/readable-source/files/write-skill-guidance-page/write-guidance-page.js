// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'o' to 'samanthaTagSelector'
// - Resolved require(848347) to 'samantha-tag-selector'
// - Renamed variable 'a' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'reactCarouselComponent'
// - Resolved require(464116) to 'react-carousel-component'
// - Renamed variable 'l' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'c' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'performanceStoreHook'
// - Resolved require(299680) to 'performance-store-hook'
// - Renamed variable 'p' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'h' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'f' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'v' to 'responsiveScreenHooks'
// - Resolved require(221846) to 'responsive-screen-hooks'
// - Renamed variable 'y' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'b' to 'wrenchToolIcon'
// - Resolved require(457145) to 'wrench-tool-icon'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require(685032) to 'write-skill-tool-entry-component'
// - Renamed variable 'w' to 'writingInputVerifier'
// - Resolved require(102812) to 'writing-input-verifier'
// - Renamed variable 'x' to 'writingChatInputController_1'
// - Resolved require(659572) to 'writing-chat-input-controller_1'
// - Renamed variable 'S' to 'writeSkillGuidancePage'
// - Resolved require(642563) to 'write-skill-guidance-page'
// - Renamed variable 'E' to 'writingSkillGuidanceTemplateHandler'
// - Resolved require(519617) to 'writing-skill-guidance-template-handler'
// - Renamed variable 'C' to 'writingSkillConfigHooks'
// - Resolved require(276565) to 'writing-skill-config-hooks'
// - Renamed variable 'k' to 'chatAiWriteTemplateList'
// - Resolved require(587322) to 'chat-ai-write-template-list'
// - Renamed variable 'N' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'PG' to 'useIsNarrowScreen' (module 221846)
// - Updated imported property 'dF' to 'useWritingToolList' (module 276565)
// - Updated imported property 'Oc' to 'useWritingLongArticleConfig' (module 276565)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'ci' to 'formatSkillId' (module 361602)
// - Updated imported property 'qx' to 'verifyWritingInput' (module 102812)
// - Updated imported property 'C' to 'writingChatInput' (module 659572)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'g' to 'useTemplateHandler' (module 519617)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'Z' to 'usePerformanceStore' (module 299680)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'WrenchToolIcon' (module 457145)
// - Updated imported property 'Q' to 'WriteSkillGuidancePage' (module 642563)
// - Updated imported property 'Z' to 'WriteTemplateList' (module 587322)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'l' to 'Carousel' (module 464116)
// - Updated imported property 'P' to 'SamanthaTagSelector' (module 848347)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: write-skill-guidance-page.8bdb5e97.js
         * chunkId: 56853
         * moduleId: 717478
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var samanthaTagSelector = require("samantha-tag-selector") /*id: 848347*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  require("write-skill-tool-entry-component") /*id: 685032*/;
  var writingInputVerifier = require("writing-input-verifier") /*id: 102812*/;
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  var writeSkillGuidancePage = require("write-skill-guidance-page") /*id: 642563*/;
  var writingSkillGuidanceTemplateHandler = require("writing-skill-guidance-template-handler") /*id: 519617*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var chatAiWriteTemplateList = require("chat-ai-write-template-list") /*id: 587322*/;
  var T = {
    icon: "icon-LKPpEt"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let O = e => {
    let {
      className: t,
      style: n,
      top: i,
      renderHeader: o,
      trackParams: s,
      currentTabIndex: c,
      checkedCategories: O,
      from: R
    } = e;
    let j = i18nTranslationUtils.useTranslationWithFallback();
    let P = responsiveScreenHooks.useIsNarrowScreen();
    writingSkillConfigHooks.useWritingToolList();
    let Z = userInfoStatusSelectors.selectUserInfoSuccess_1();
    reactCoreLibraryReexport.useEffect(() => {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "skill_guidance_page_show",
        meta: {
          success: "1",
          skill_type: chatAppEnums.SkillType.WriteAssistant,
          skill_type_str: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.WriteAssistant),
          skill_id: skillTypeMappings.formatSkillId(chatAppEnums.SkillType.WriteAssistant),
          from: R
        }
      });
    }, []);
    let $ = async e => {
      let t = await writingInputVerifier.verifyWritingInput({
        value: e
      });
      let n = writingChatInputController_1.writingChatInput.getWritingEditorValue();
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "skill_guidance_page_set_template",
        meta: {
          skill_type: chatAppEnums.SkillType.WriteAssistant,
          success: +!!t,
          ...(t ? {} : {
            reason: "editor_value_unequal",
            current: n && inputToolConverter.extractText(n.data),
            expected: inputToolConverter.extractText(e.data)
          })
        }
      });
    };
    let {
      templates: D,
      currentTemplate: M,
      onClickTemplate: A
    } = writingSkillGuidanceTemplateHandler.useTemplateHandler({
      clickAfter: $,
      clickBefore: e => {
        let t = deepEqualUtil_1.deepEqual(M, e);
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "skill_guidance_page_click",
          meta: {
            skill_type: chatAppEnums.SkillType.WriteAssistant,
            type: t ? "unset_template" : "set_template"
          }
        });
        return t;
      },
      source: "side_bar",
      currentCategories: O
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (D.length) {
        performanceStoreHook.usePerformanceStore.getState().addDurationPoint("guidance_group_mount");
      }
    }, [D.length]);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      className: u(t, "h-screen overflow-auto"),
      style: n,
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        className: P ? undefined : "px-10",
        children: [o == null ? undefined : o({
          icon: reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {
            className: T.icon
          }),
          title: j("skill_writing_title"),
          greeting: j("onboarding_writing_description"),
          className: P ? "mx-10" : ""
        }), false, Z && reactJsxRuntimeCoreReexport.jsx(writeSkillGuidancePage.WriteSkillGuidancePage, {}), i, reactJsxRuntimeCoreReexport.jsx(chatAiWriteTemplateList.WriteTemplateList, {
          templates: D,
          handleClickTemplate: (e, t) => A({
            template: e,
            value: t
          }),
          trackParams: {
            ...s,
            show_scene: R === "default" ? "direct_enter" : "sidebar_skill"
          },
          currentTemplate: M,
          className: "gap-10",
          showLongArticle: true,
          handleClickLongArticle: (e, t) => A({
            template: e,
            value: t,
            isLongArticle: true
          }),
          currentTabIndex: c
        })]
      })
    });
  };
  let R = e => {
    let {
      config: l
    } = writingSkillConfigHooks.useWritingLongArticleConfig() ?? {};
    let {
      genre_category: c = []
    } = (l == null ? undefined : l.template) ?? {};
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.WriteAssistant);
    let [u, d] = reactCoreLibraryReexport.useState([0]);
    return reactJsxRuntimeCoreReexport.jsx(O, {
      className: "write-assistant-Bc61lu",
      checkedCategories: u,
      top: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "header-CMV9ru",
        children: reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
          arrowSize: "large",
          enableArrowBorder: false,
          children: reactJsxRuntimeCoreReexport.jsx(samanthaTagSelector.SamanthaTagSelector, {
            value: [String(u[0])],
            defaultValue: [String(u[0])],
            items: c.map((e, t) => {
              let {
                show_name: n
              } = e;
              return {
                key: String(t),
                label: n ?? ""
              };
            }),
            onChange: e => {
              let [t] = e;
              return d([parseInt(t, 10)]);
            }
          })
        })
      }),
      currentTabIndex: u[0],
      ...e
    });
  };
  require.r(exports);
  require.d(exports, {
    WriteGuidancePage: function () {
      return R;
    }
  });
}
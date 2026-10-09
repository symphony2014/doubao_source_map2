// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 'l' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'o' to 'imageSkillGuidancePage'
// - Resolved require(833873) to 'image-skill-guidance-page'
// - Renamed variable 's' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'p' to 'superTaskSuggestionList'
// - Resolved require(657847) to 'super-task-suggestion-list'
// - Renamed variable 'h' to 'superTaskGuidancePortalModal_1'
// - Resolved require(743071) to 'super-task-guidance-portal-modal_1'
// - Renamed variable 'm' to 'imageSkillGuidanceHook'
// - Resolved require(347172) to 'image-skill-guidance-hook'
// - Renamed variable 'g' to 'imageSkillGuidanceConfig'
// - Resolved require(837880) to 'image-skill-guidance-config'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'JW' to 'useChatViewConfig' (module 837195)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 'G' to 'useImageSkillGuidance' (module 347172)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'q' to 'SuperTaskSuggestion' (module 657847)
// - Updated imported property 'x' to 'SuperTaskGuidance' (module 743071)
// - Updated imported property 'm' to 'skillGuidanceConfig' (module 837880)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-guidance-page.b074653e.js
         * chunkId: 25336
         * moduleId: 376708
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var imageSkillGuidancePage = require("image-skill-guidance-page") /*id: 833873*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var superTaskSuggestionList = require("super-task-suggestion-list") /*id: 657847*/;
  var superTaskGuidancePortalModal_1 = require("super-task-guidance-portal-modal_1") /*id: 743071*/;
  var imageSkillGuidanceHook = require("image-skill-guidance-hook") /*id: 347172*/;
  var imageSkillGuidanceConfig = require("image-skill-guidance-config") /*id: 837880*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      trackParams: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = chatViewCoreSelectors.useChatViewConfig();
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.DesExtSkillSuperTask);
    let {
      guidanceVisible: f,
      handleCloseGuidance: v
    } = imageSkillGuidanceHook.useImageSkillGuidance();
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      className: r("overflow-auto", "complex-wrapper-VhNnYQ"),
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        containerClassName: r(false),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "layout-padding-x-Qz5wRJ",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "placeholder-wfaPKQ"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: `
              mb-40 flex items-center justify-center text-28/40 font-[500]
              text-s-color-text-secondary
            `,
            children: n("complexTask_mainPage_intro")
          }), (i == null ? undefined : i.chatId) && reactJsxRuntimeCoreReexport.jsxs("div", {
            onMouseMove: e => {
              e.stopPropagation();
            },
            children: [reactJsxRuntimeCoreReexport.jsx(imageSkillGuidancePage.GuidanceInputFoundation, {
              chatId: i.chatId,
              chatType: i.chatType,
              specificSkillType: chatAppEnums.SkillType.DesExtSkillSuperTask,
              showExitSkillButton: false
            }), reactJsxRuntimeCoreReexport.jsx(superTaskSuggestionList.SuperTaskSuggestion, {
              trackParams: t
            })]
          })]
        }), f ? reactJsxRuntimeCoreReexport.jsx(superTaskGuidancePortalModal_1.SuperTaskGuidance, {
          locales: imageSkillGuidanceConfig.skillGuidanceConfig,
          onClose: v
        }) : null]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    SuperTaskGuidancePage: function () {
      return f;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'i' to 'skillGuidanceValidator'
// - Resolved require(400987) to 'skill-guidance-validator'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'a' to 'scrollViewComponent'
// - Resolved require(683125) to 'scroll-view-component'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'responsiveScreenHooks'
// - Resolved require(221846) to 'responsive-screen-hooks'
// - Renamed variable 'd' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'p' to 'chatNotificationIcon'
// - Resolved require(465843) to 'chat-notification-icon'
// - Renamed variable 'f' to 'musicGenerationTemplateParser'
// - Resolved require(802219) to 'music-generation-template-parser'
// - Renamed variable 'v' to 'musicSkillTemplateList'
// - Resolved require(436446) to 'music-skill-template-list'
// - Renamed variable 'm' to 'musicSkillGuidanceStore'
// - Resolved require(240022) to 'music-skill-guidance-store'
// - Renamed variable 'y' to 'musicSkillGuidanceConfig'
// - Resolved require(185684) to 'music-skill-guidance-config'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'D' to 'useSkillGuard' (module 400987)
// - Updated imported property 't' to 'musicGuidanceStore' (module 240022)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'PG' to 'useIsNarrowScreen' (module 221846)
// - Updated imported property 'pf' to 'ScrollView' (module 683125)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'Z' to 'NotificationIcon' (module 465843)
// - Updated imported property 'ZP' to 'MusicTemplateTabs' (module 436446)
// - Updated imported property 'y6' to 'parseTemplateToComponents' (module 802219)
// - Updated imported property 'e' to 'sceneConfig' (module 185684)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 717964
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var skillGuidanceValidator = require("skill-guidance-validator") /*id: 400987*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var chatNotificationIcon = require("chat-notification-icon") /*id: 465843*/;
  var musicGenerationTemplateParser = require("music-generation-template-parser") /*id: 802219*/;
  var musicSkillTemplateList = require("music-skill-template-list") /*id: 436446*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  var musicSkillGuidanceConfig = require("music-skill-guidance-config") /*id: 185684*/;
  var h = {
    musicTab: "musicTab-sJumY9",
    icon: "icon-I_xeCH"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var w = e => {
    let {
      renderHeader: t,
      trackParams: r,
      from: w
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    skillGuidanceValidator.useSkillGuard(chatAppEnums.SkillType.MusicAssistant);
    let [k, R, A, x, j, T] = musicSkillGuidanceStore.musicGuidanceStore(e => [e.packInputConfig.inputConfig, e.initPackInputConfig, e.updateEditorValue, e.updateMusicGenre, e.updateMusicLyric, e.updateMusicMood], deepEqualityUtil_1.isDeepEqual);
    let {
      template: P = {},
      input_options: C = {},
      value: E
    } = k || {};
    let S = responsiveScreenHooks.useIsNarrowScreen();
    reactCoreLibraryReexport.useEffect(() => {
      R();
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      className: "h-screen overflow-auto",
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        className: S ? undefined : "px-10",
        children: [t == null ? undefined : t({
          icon: reactJsxRuntimeCoreReexport.jsx(chatNotificationIcon.NotificationIcon, {
            className: h.icon
          }),
          title: b("skill_createMusic_title"),
          greeting: b("onboarding_music_description"),
          className: "pb-20"
        }), reactJsxRuntimeCoreReexport.jsx(musicSkillTemplateList.MusicTemplateTabs, {
          tabProps: {
            type: "button",
            classNames: h.musicTab
          },
          open: true,
          templates: P,
          onUseTemplate: e => {
            if (e) {
              A(musicGenerationTemplateParser.parseTemplateToComponents({
                template: e,
                origin: String(E),
                inputOptions: C
              }));
              j(e.lyric || "");
              T(e.mood?.value || "");
              x(e.genre?.value || "");
            }
          },
          itemHeight: 183,
          itemWidth: 183,
          trackEventForShow: e => {
            teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
              ...r,
              content_detail: e.title,
              genre: e.genre?.show_name,
              show_scene: w === "default" ? musicSkillGuidanceConfig.sceneConfig.showScene.directEnter : w === "guidance_page" ? musicSkillGuidanceConfig.sceneConfig.showScene.landing : musicSkillGuidanceConfig.sceneConfig.showScene.sidebarSkill
            });
          },
          trackEventForClick: (e, t) => {
            teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
              ...r,
              content_detail: e.title,
              genre: e.genre?.show_name,
              button_name: t
            });
          }
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return w;
    }
  });
}
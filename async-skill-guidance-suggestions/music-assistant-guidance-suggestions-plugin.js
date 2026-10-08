// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'n' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'l' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'a' to 'guidanceLayoutUtils'
// - Resolved require(474255) to 'guidance-layout-utils'
// - Renamed variable 'o' to 'skillGuidanceLogger'
// - Resolved require(492448) to 'skill-guidance-logger'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'u' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'd' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'm' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable '_' to 'arrowRightIcon_1'
// - Resolved require(851073) to 'arrow-right-icon_1'
// - Renamed variable 'v' to 'musicSkillTemplateList'
// - Resolved require(436446) to 'music-skill-template-list'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'y' to 'musicGenerationTemplateParser'
// - Resolved require(802219) to 'music-generation-template-parser'
// - Renamed variable 'k' to 'musicSkillGuidanceStore'
// - Resolved require(240022) to 'music-skill-guidance-store'
// - Renamed variable 'w' to 'musicSkillGuidanceConfig'
// - Resolved require(185684) to 'music-skill-guidance-config'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'ArrowRightIcon' (module 851073)
// - Updated imported property '$V' to 'MusicTemplateList' (module 436446)
// - Updated imported property 't' to 'musicGuidanceStore' (module 240022)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'Ax' to 'useLauncherConfig' (module 317711)
// - Updated imported property 'Y' to 'useGuidanceShow' (module 492448)
// - Updated imported property 'i' to 'logGuidanceClick' (module 492448)
// - Updated imported property 'P' to 'useGuidanceLayout' (module 474255)
// - Updated imported property 'e' to 'sceneConfig' (module 185684)
// - Updated imported property 'i' to 'musicPath' (module 185684)
// - Updated imported property 'y6' to 'parseTemplateToComponents' (module 802219)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-suggestions.e5908877.js
         * chunkId: 96934
         * moduleId: 388031
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var guidanceLayoutUtils = require("guidance-layout-utils") /*id: 474255*/;
  var skillGuidanceLogger = require("skill-guidance-logger") /*id: 492448*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var p = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var musicSkillTemplateList = require("music-skill-template-list") /*id: 436446*/;
  var f = "container-eCv8AT";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      data: t,
      onUseTemplate: i,
      trackEventForClick: r,
      trackEventForShow: n,
      onMoreClick: l,
      onMoreShow: a
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (a != null) {
        a();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: p("flex flex-col gap-2 px-10", f),
      "data-testid": "music-generation-skill-templates",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          flex cursor-pointer items-center justify-center gap-2 self-end
          rounded-8 px-8 py-5
          hover:bg-[var(--s-color-bg-trans,rgba(0,0,0,0.04))]
        `,
        onClick: l,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "text-center text-s-color-text-tertiary s-font-xs-strong",
          children: o("newChat_skill_sample_view_more")
        }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
          className: "m-2 text-12 text-s-color-text-tertiary"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mb-12 text-16",
        children: t && reactJsxRuntimeCoreReexport.jsx(musicSkillTemplateList.MusicTemplateList, {
          templates: t,
          onUseTemplate: i,
          templateClassName: "!rounded-10",
          trackEventForShow: n,
          trackEventForClick: r,
          count: 5,
          open: true
        })
      })]
    });
  };
  var musicGenerationTemplateParser = require("music-generation-template-parser") /*id: 802219*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  var musicSkillGuidanceConfig = require("music-skill-guidance-config") /*id: 185684*/;
  let b = e => {
    let {
      data: t,
      onUseTemplate: i,
      trackEventForClick: r,
      trackEventForShow: n,
      onMoreClick: l,
      onMoreShow: a
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useEffect(() => {
      if (a != null) {
        a();
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: p("flex flex-col gap-12 mt-24 px-10", f),
      "data-testid": "music-generation-skill-templates",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "text-16 text-primary-text-color",
        children: t && reactJsxRuntimeCoreReexport.jsx(musicSkillTemplateList.MusicTemplateList, {
          templates: t,
          onUseTemplate: i,
          templateClassName: "!rounded-10",
          trackEventForShow: n,
          trackEventForClick: r,
          count: 5,
          open: true
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex justify-center items-center gap-2 py-5 px-8 cursor-pointer self-end rounded-8 hover:bg-[var(--s-color-bg-trans,rgba(0,0,0,0.04))]",
        onClick: l,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "s-font-xs-strong text-s-color-text-tertiary text-center",
          children: o("newChat_skill_sample_view_more")
        }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
          className: "text-12 m-2 text-s-color-text-tertiary"
        })]
      })]
    });
  };
  let x = e => {
    let {
      navigate: t,
      reportParams: i,
      trackParams: u
    } = e;
    let [d, p, m, _, v] = musicSkillGuidanceStore.musicGuidanceStore(e => [e.packInputConfig.inputConfig, e.updateEditorValue, e.updateMusicGenre, e.updateMusicLyric, e.updateMusicMood], deepEqualityUtil_1.isDeepEqual);
    let {
      inputAggregateList: f
    } = chatLauncherConfigHooks.useLauncherConfig();
    let {
      input_options: x = {},
      value: S
    } = d || {};
    skillGuidanceLogger.useGuidanceShow({
      loading: !(d == null ? undefined : d.template),
      testId: "landing_music_creation_template_item",
      reportParams: i
    });
    let {
      guidancePageLayoutMode: C
    } = guidanceLayoutUtils.useGuidanceLayout();
    if (d == null ? undefined : d.template) {
      return reactJsxRuntimeCoreReexport.jsx(C ? h : b, {
        data: d == null ? undefined : d.template,
        trackEventForShow: e => {
          teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
            ...u,
            show_scene: musicSkillGuidanceConfig.sceneConfig.showScene.landing,
            content_detail: e.title,
            genre: e.genre?.show_name
          });
        },
        trackEventForClick: (e, t) => {
          teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
            ...u,
            content_detail: e.title,
            genre: e.genre?.show_name,
            button_name: t
          });
        },
        onUseTemplate: e => {
          skillGuidanceLogger.logGuidanceClick("send_message", i);
          if (!e) {
            return;
          }
          let n = musicGenerationTemplateParser.parseTemplateToComponents({
            template: e,
            origin: String(S),
            inputOptions: x
          });
          if (f == null ? undefined : f.includes(String(chatAppEnums.SkillType.MusicAssistant))) {
            chatInputStoreHelpers.setEditorValue(n);
          } else {
            p(n);
          }
          _(e.lyric || "");
          v(e.mood?.value || "");
          m(e.genre?.value || "");
        },
        onMoreShow: () => {
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_show", {
            ...u
          });
        },
        onMoreClick: () => {
          skillGuidanceLogger.logGuidanceClick("navigate", i);
          teaAnalyticsEventTracker.trackEvent("skill_detailpage_entrance_click", {
            ...u
          });
          if (t != null) {
            t(musicSkillGuidanceConfig.musicPath);
          }
        }
      });
    } else {
      return null;
    }
  };
  function S(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class C {
    constructor() {
      S(this, "titleKey", "newChat_skill_triggered_title_for_music");
      S(this, "Content", x);
    }
  }
  require.r(exports);
  require.d(exports, {
    MusicAssistantGuidanceSuggestionsPlugin: function () {
      return C;
    }
  });
}
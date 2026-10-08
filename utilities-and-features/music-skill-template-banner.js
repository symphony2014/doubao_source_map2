// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'MusicSkillTemplate'
// - Renamed export 'P' to 'MusicTemplateBanner'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 209736
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var musicGenerationTemplateParser = require("music-generation-template-parser") /*id: 802219*/;
  var musicSkillTemplateList = require("music-skill-template-list") /*id: 436446*/;
  var musicSkillGuidanceStore = require("music-skill-guidance-store") /*id: 240022*/;
  var useMusicSkillEventTracker = require("use-music-skill-event-tracker") /*id: 296506*/;
  var musicSkillGuidanceConfig = require("music-skill-guidance-config") /*id: 185684*/;
  var f = {
    banner: "banner-qzvfYj",
    musicTab: "musicTab-VDIzEu"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      visible: t,
      open: r,
      chatId: i,
      trackParams: h,
      onUpdateValue: g
    } = e;
    let {
      template: v = {},
      input_options: _ = {},
      value: y = ""
    } = musicSkillGuidanceStore.musicGuidanceStore(e => e.packInputConfig.inputConfig, deepEqualityUtil_1.isDeepEqual) || {};
    let [b, w, k] = musicSkillGuidanceStore.musicGuidanceStore(e => [e.updateMusicLyric, e.updateMusicGenre, e.updateMusicMood], deepEqualityUtil_1.isDeepEqual);
    let {
      sendTeaEvent: x
    } = useMusicSkillEventTracker.useMusicTeaEvent({
      conversation_id: i || ""
    });
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "music-generation-skill-templates",
        className: l(f.banner),
        children: v ? reactJsxRuntimeCoreReexport.jsx(musicSkillTemplateList.MusicTemplateTabs, {
          open: r,
          templates: v,
          onUseTemplate: e => {
            if (!e) {
              return null;
            }
            let n = musicGenerationTemplateParser.parseTemplateToComponents({
              template: e,
              origin: y,
              inputOptions: _
            });
            loggerServiceCore.defaultLogger.persist.log({
              eventName: "music_skill_set_template",
              meta: {
                title: e.title
              }
            });
            g(n);
            b(e.lyric || "");
            k(e.mood?.value || "");
            w(e.genre?.value || "");
          },
          tabProps: {
            type: "button",
            classNames: f.musicTab
          },
          trackEventForShow: e => {
            x("show_suggested_content", {
              ...h,
              content_detail: e.title,
              genre: e.genre?.show_name,
              show_scene: musicSkillGuidanceConfig.sceneConfig.showScene.bottomBar
            });
          },
          trackEventForClick: (e, t) => {
            teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
              ...h,
              content_detail: e.title,
              genre: e.genre?.show_name,
              button_name: t,
              show_scene: musicSkillGuidanceConfig.sceneConfig.showScene.bottomBar
            });
          }
        }) : null
      });
    } else {
      return null;
    }
  };
  let g = e => {
    let {
      visible: t,
      open: r,
      chatId: i,
      trackParams: l
    } = e;
    let [a] = musicSkillGuidanceStore.musicGuidanceStore(e => [e.updateEditorValue], deepEqualityUtil_1.isDeepEqual);
    return reactJsxRuntimeCoreReexport.jsx(h, {
      visible: t,
      open: r,
      chatId: i,
      onUpdateValue: a,
      trackParams: l
    });
  };
  require.d(exports, {
    MusicSkillTemplate: function () {
      return g;
    },
    MusicTemplateBanner: function () {
      return h;
    }
  });
}
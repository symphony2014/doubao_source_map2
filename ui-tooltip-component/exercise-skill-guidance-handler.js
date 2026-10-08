// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'handleExerciseSkillClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 676189
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var useAiChatSendMessage = require("use-ai-chat-send-message") /*id: 797491*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = (e, t, i, c, u) => {
    let d = chatAppEnums.SkillType.ExerciseAssistant.toString();
    let h = chatAppEnums.SkillType.ExerciseAssistant;
    let {
      sendMessage: p
    } = useAiChatSendMessage.useAiSendMessage();
    let f = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    return async r => {
      var l;
      if (isUndefinedCheck.isUndefined(d) || isUndefinedCheck.isUndefined(h)) {
        return;
      }
      let g = e == null ? undefined : (l = e.exercise_assistant) === null || l === undefined ? undefined : l.item_list?.[r];
      let {
        key: v,
        image_thumb: _,
        image_ori: w
      } = (g == null ? undefined : g.images?.[0]) || {};
      if (!v) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[ExerciseSkillGuidance]: uri not found",
          error: Error("[ExerciseSkillGuidance]: uri not found")
        });
        return;
      }
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        content_detail: (g == null ? undefined : g.title) || "",
        genre: null,
        ...t
      });
      if ((await (c == null ? undefined : c())) !== false) {
        await p({
          chatId: f || "",
          reportParams: {
            scene: "sidebar_skill_click",
            sec_scene: "click_suggestedprompt_case",
            from: "skill_guidance_suggested_prompt",
            ...i
          },
          extraExt: {
            send_from_skill_guidance_or_suggestion: "1"
          },
          imageKey: v,
          imageOri: {
            url: w == null ? undefined : w.url
          },
          imageThumb: _
        });
        if (u != null) {
          u();
        }
      }
    };
  };
  require.d(exports, {
    handleExerciseSkillClick: function () {
      return c;
    }
  });
}
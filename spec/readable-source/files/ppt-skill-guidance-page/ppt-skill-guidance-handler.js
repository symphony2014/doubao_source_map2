// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createPptGuidanceClickHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-skill-guidance-page.ce63514f.js
         * chunkId: 10571
         * moduleId: 895557
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let o = (e, t, i) => {
    let o = chatAppEnums.SkillType.AiPPT.toString();
    let r = chatAppEnums.SkillType.AiPPT;
    let {
      sendMessage: d
    } = chatServiceContext.useChatService("chatMessageService");
    return async (n, c, _) => {
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        content_detail: c,
        genre: null,
        show_scene: _ === "default" ? "direct_enter" : _ === "guidance_page" ? "landing" : _ === "guidance_suggestions" ? "bottom_bar" : "sidebar_skill",
        ...e
      });
      if (isUndefinedCheck.isUndefined(o) || isUndefinedCheck.isUndefined(r) || (await (i == null ? undefined : i())) === false) {
        return;
      }
      let p = {
        skill_id: chatAppEnums.SkillType.AiPPT.toString(),
        skill_type: chatAppEnums.SkillType.AiPPT,
        variables: {
          action: "gen_outline",
          genre: "ai_ppt"
        }
      };
      d([{
        text: n,
        action: "gen_outline",
        gen_outline_input: {
          genre: "ai_ppt"
        },
        reportParams: {
          scene: "chat_action_bar_landing",
          ...t
        },
        extraExt: {
          input_skill: JSON.stringify(p),
          answer_with_suggest: "0",
          useSamanthaChat: "true",
          send_from_skill_guidance_or_suggestion: "1"
        }
      }]);
    };
  };
  require.d(exports, {
    createPptGuidanceClickHandler: function () {
      return o;
    }
  });
}
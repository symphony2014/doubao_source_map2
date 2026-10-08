// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'getSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: academic-search-skill-chat-input.5b4c226a.js
         * chunkId: 38369
         * moduleId: 210919
         */
module.exports = function (module, exports, require) {
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let u = e => {
    let {
      skill: t,
      trackParams: l,
      reportParams: u,
      closeEvent: i,
      clearInput: a,
      onAfterSendMessage: c,
      onBeforeSendMessage: s
    } = e;
    let {
      sendMessage: o
    } = chatServiceContext.useChatService("chatMessageService");
    return async e => {
      var n;
      let v = {
        skill_id: t == null ? undefined : (n = t.skill_type) === null || n === undefined ? undefined : n.toString(),
        skill_type: t == null ? undefined : t.skill_type
      };
      if ((await (s == null ? undefined : s())) !== false) {
        await o([{
          text: e,
          reportParams: {
            scene: "chat_action_bar",
            ...u
          },
          extraExt: {
            input_skill: JSON.stringify(v)
          }
        }]);
        teaAnalyticsEventTracker.trackEvent("", {
          ...l
        });
        if (i != null) {
          i();
        }
        if (a != null) {
          a();
        }
        if (c != null) {
          c({
            exitSkill: false
          });
        }
        return true;
      }
    };
  };
  require.d(exports, {
    getSkillChatInput: function () {
      return u;
    }
  });
}
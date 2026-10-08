// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'createSkillChatSender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 964748
         */
module.exports = function (module, exports, require) {
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  let r = e => {
    let {
      skill: t,
      closeEvent: n,
      clearInput: r,
      reportParams: l,
      onAfterSendMessage: a,
      onBeforeSendMessage: o
    } = e;
    let {
      sendMessage: s
    } = chatServiceContext.useChatService("chatMessageService");
    return async e => {
      var i;
      if ((await (o == null ? undefined : o())) === false) {
        return;
      }
      let u = {
        skill_id: t == null ? undefined : (i = t.skill_type) === null || i === undefined ? undefined : i.toString(),
        skill_type: t == null ? undefined : t.skill_type
      };
      await s([{
        text: e,
        action: "gen_outline",
        gen_outline_input: {
          genre: "ai_ppt"
        },
        reportParams: {
          scene: "chat_action_bar",
          ...l
        },
        extraExt: {
          input_skill: JSON.stringify(u),
          useSamanthaChat: "true"
        }
      }]);
      if (n != null) {
        n();
      }
      if (r != null) {
        r();
      }
      if (a != null) {
        a({
          exitSkill: false
        });
      }
    };
  };
  require.d(exports, {
    createSkillChatSender: function () {
      return r;
    }
  });
}
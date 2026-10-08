// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'aiChatSkillConversationChecker'
// - Resolved require(728119) to 'ai-chat-skill-conversation-checker'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'l' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'h' to 'isValidSkillType' (module 728119)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 747349
         */
module.exports = function (module, exports, require) {
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  let a = e => {
    let {
      text: t,
      attachments: i,
      attachmentKeys: n,
      preGeneratedLocalMessageId: r,
      skillId: a,
      skillType: o,
      reportParams: u
    } = e;
    let s = {
      preGeneratedLocalMessageId: r,
      extraExt: {
        input_skill: JSON.stringify({
          skill_id: a,
          skill_type: o
        })
      },
      reportParams: {
        from: "skill_input",
        sec_scene: skillTypeMappings.getSkillActionClass(o),
        scene: "chat_action_bar",
        is_upload_file: 0,
        ...u
      }
    };
    if ((i == null ? undefined : i.length) && (n == null ? undefined : n.length)) {
      s.image_key = n[0];
      s.reportParams = {
        ...s.reportParams,
        is_upload_file: 1
      };
    } else {
      s.text = t;
    }
    return s;
  };
  let o = {
    id: "biz-edu:input-submit-workflow",
    submitNodes: [{
      id: "edu:input-skill-node",
      execute: async e => {
        let {
          text: t,
          chatId: i,
          localMessageId: l
        } = e.content;
        let o = e.content.abilityType || chatAppEnums.SkillType.ExerciseAssistant;
        let u = o.toString();
        if (await aiChatSkillConversationChecker.isValidSkillType(e.content.abilityType)) {
          return e;
        } else {
          e.payload = [{
            ...a({
              text: t || "",
              attachments: e.content.attachments,
              attachmentKeys: e.content.attachmentKeys,
              attachmentStates: e.content.attachmentStates,
              preGeneratedLocalMessageId: l,
              skillId: u,
              skillType: o,
              reportParams: e.content.reportParams
            }),
            conversationId: i,
            enableRefContent: false
          }];
          return Promise.resolve(e);
        }
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return o;
    }
  });
}
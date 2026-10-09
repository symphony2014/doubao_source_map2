// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'chatMessageUtils_2'
// - Resolved require(149539) to 'chat-message-utils_2'
// - Renamed variable 'a' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 's' to 'aiChatEnumConstants'
// - Resolved require(458113) to 'ai-chat-enum-constants'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'd' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'p' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable '_' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'Z_' to 'isVisibleStatus' (module 149539)
// - Updated imported property 'Pn' to 'getSourceKeySync' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'lx' to 'getSkillActionClass' (module 361602)
// - Updated imported property 'zo' to 'skillTypes' (module 458113)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 279298
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let u = e => {
    let t;
    let i = chatMessageStoreFactory.createMessageStore.getState();
    let n = i.messageLinkMap[e];
    for (let a = n.length - 1; a >= 0; a--) {
      let u = n[a];
      let s = conversationMessageUtils_1.getMessageFromLink(i, e, u);
      if (!s || (s == null ? undefined : s.reply_id) === "0") {
        continue;
      }
      let c = n[a - 1];
      let d = conversationMessageUtils_1.getMessageFromLink(i, e, c);
      if (messageContentTypeAndStatusChecker.KQr(s) && messageContentTypeAndStatusChecker.KQr(d)) {
        t = messageContentTypeAndStatusChecker.v08(s) ? d : s;
        break;
      }
      if (chatMessageUtils_2.isVisibleStatus(s)) {
        t = s;
        break;
      }
    }
    return messageContentTypeAndStatusChecker.ey$(t) && !messageContentTypeAndStatusChecker.vlk(t);
  };
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let f = () => !!chatFgStoreHooks.getSourceKeySync("deep_research_chat_next", {
    defaultValue: undefined,
    source: chatStorageKeys.chatStorageKeys.serverAB
  });
  let v = {
    id: "biz-deep-research:input-submit-workflow",
    submitNodes: [{
      id: "deep-research:input-skill-node",
      execute: e => {
        let {
          content: t
        } = e;
        let i = {
          skill_type: e.content.abilityType || chatAppEnums.SkillType.SkillDeepResearch
        };
        let n = f();
        let r = {
          ...e.content.reportParams,
          scene: "chat_action_bar",
          sec_scene: e.content.reportParams.sec_scene ? String(e.content.reportParams.sec_scene) : skillTypeMappings.getSkillActionClass(i.skill_type),
          use_skill: 1
        };
        let l = {
          answer_with_suggest: "0"
        };
        let a = t.text || "";
        let {
          abilityType: o = aiChatEnumConstants.skillTypes.SkillDeepResearch
        } = e.content;
        let u = {
          skill_id: o == null ? undefined : o.toString(),
          skill_type: o
        };
        if (n) {
          e.content.text = a;
          e.content.extra = {
            ...e.content.extra,
            ...l
          };
          e.content.reportParams = r;
        } else {
          e.payload = [{
            text: a,
            reportParams: r,
            extraExt: {
              ...l,
              input_skill: JSON.stringify(u)
            }
          }];
        }
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: [{
      id: "deep-research:send-message-after",
      execute: async e => {
        let {
          content: t
        } = e;
        let i = t == null ? undefined : t.chatId;
        let r = u(i);
        if (i && r) {
          chatStoreManager.getStore("chatInputStore").getState().closeSkillPanel(i);
        }
        return Promise.resolve(e);
      }
    }]
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return v;
    }
  });
}
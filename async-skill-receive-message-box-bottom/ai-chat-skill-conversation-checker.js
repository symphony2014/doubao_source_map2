// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'isValidSkillType'
// - Renamed export 'z' to 'isValidConversationForSkill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 728119
         */
module.exports = function (module, exports, require) {
  require("object-path-get-default") /*id: 690546*/;
  require("task-status-constants") /*id: 100834*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  require("api-services-collection") /*id: 147875*/;
  let l = [aiChatEnumConstants.skillTypes.FreeChat, aiChatEnumConstants.skillTypes.SkillWrite, aiChatEnumConstants.skillTypes.SkillSearch, aiChatEnumConstants.skillTypes.SkillTranslate, aiChatEnumConstants.skillTypes.SkillRead, aiChatEnumConstants.skillTypes.DesExtSkillReferenceAsk, aiChatEnumConstants.skillTypes.SkillPPTGen];
  let u = async () => true;
  let c = e => {
    let t = e ?? aiChatEnumConstants.skillTypes.FreeChat;
    if (typeof window != "undefined" && window.location.hostname === "new-tab-page") {
      return [aiChatEnumConstants.skillTypes.FreeChat, aiChatEnumConstants.skillTypes.SkillWrite, aiChatEnumConstants.skillTypes.SkillTranslate].some(e => e === t);
    } else {
      return l.includes(t);
    }
  };
  let d = async e => {
    let t = await u();
    return c(e) && t;
  };
  let f = async e => {
    let i = messageContentTypeAndStatusChecker.fjb(e);
    let l = chatConversationSelectors_2.getLocalConversation(chatFeedStoreFactory.useFeedStore.getState(), e == null ? undefined : e.local_conversation_id) ?? chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), e == null ? undefined : e.conversation_id);
    return (await d(e == null ? undefined : e.skill?.skill_type)) && !i && chatConversationCheckers.isSupportedConv(l);
  };
  require.d(exports, {
    isValidSkillType: function () {
      return d;
    },
    isValidConversationForSkill: function () {
      return f;
    }
  });
}
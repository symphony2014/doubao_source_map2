// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'useMusicTeaEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 296506
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let c = require("chat-app-enums") /*id: 299505*/.SkillType.MusicAssistant;
  let d = skillTypeMappings.getSkillName(c);
  let u = e => {
    let t = chatConversationSelectors.selectConversation(e.conversation_id);
    let n = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let {
      samanthaBotInfo: l
    } = chatConversationSelectors.getSamanthaBot();
    return {
      sendTeaEvent: function (r) {
        let a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        teaAnalyticsEventTracker.trackEvent(r, {
          chat_type: chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatKey,
          content_type: "music",
          conversation_type: t == null ? undefined : t.conversation_type,
          bot_id: n ?? (l == null ? undefined : l.bot_id),
          skill_id: c.toString(),
          skill_name: d,
          ...e,
          ...a
        });
      }
    };
  };
  require.d(exports, {
    useMusicTeaEvent: function () {
      return u;
    }
  });
}
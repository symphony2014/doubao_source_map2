// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'trackSkillEntrance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 388128
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let u = e => {
    let {
      chatId: t,
      entranceType: n
    } = e;
    let u = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
    teaAnalyticsEventTracker.trackEvent("skill_sub_entrance_click", {
      bot_id: chatConversationBotId.getConversationBotId(t),
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", t),
      entrance_type: n,
      click_scene: "bottom_bar",
      conversation_id: t,
      conversation_type: u == null ? undefined : u.conversation_type,
      skill_id: String(chatAppEnums.SkillType.SkillAiPodcast),
      skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.SkillAiPodcast)
    });
  };
  require.d(exports, {
    trackSkillEntrance: function () {
      return u;
    }
  });
}
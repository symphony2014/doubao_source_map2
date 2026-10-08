// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'trackSkillEntrance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 111111
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let c = e => {
    let {
      chatId: t,
      entranceType: n
    } = e;
    let c = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), t);
    teaAnalyticsEventTracker.trackEvent("skill_sub_entrance_click", {
      bot_id: chatConversationBotId.getConversationBotId(t),
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", t),
      entrance_type: n,
      click_scene: "bottom_bar",
      conversation_id: t,
      conversation_type: c == null ? undefined : c.conversation_type,
      skill_id: "6",
      skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.ReadPDF)
    });
  };
  require.d(exports, {
    trackSkillEntrance: function () {
      return c;
    }
  });
}
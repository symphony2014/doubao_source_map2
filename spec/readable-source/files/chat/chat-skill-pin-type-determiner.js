// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yT' to 'determineSkillPinType'
// - Renamed export 'lC' to 'getConversationBotInfo'
// - Renamed export 'nD' to 'getBotLocalConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 926482
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  let u = (e, t) => t ? t === e : chatUserInfoActions.getUserIdStr() === e;
  let c = (e, t, n, r, a) => {
    let {
      conversation: h,
      botInfo: m
    } = chatConversationSelectors_1.getConversationBotInfo(e, n);
    let g = chatConversationSelectors_2.getLocalConversation(e, n);
    if (chatConversationCheckers.isCocoConversation(h) || chatConversationCheckers.isCocoPlatform(a)) {
      return skillConstantsEnum.SkillPinType.default;
    }
    if (chatConversationCheckers.isCocoSubConv(h) || chatConversationCheckers.isCocoSubConv(g) || chatConversationCheckers.isCocoSubPlatform(a)) {
      return skillConstantsEnum.SkillPinType.defaultNew;
    }
    if (u((h == null ? undefined : h.bot_creator_info?.creator_id) || "", t) || u((r == null ? undefined : r.creator_info?.creator_id) || "", t)) {
      return skillConstantsEnum.SkillPinType.selfCreated;
    }
    if (chatConversationCheckers.isUserParticipant(h == null ? undefined : h.bot_type) || chatConversationCheckers.isUserParticipant(m == null ? undefined : m.bot_type) || chatConversationCheckers.isUserParticipant(r == null ? undefined : r.bot_type)) {
      return skillConstantsEnum.SkillPinType.othersCreated;
    }
    if (chatConversationCheckers.isOfficialMember(h == null ? undefined : h.bot_type) || chatConversationCheckers.isOfficialMember(m == null ? undefined : m.bot_type) || chatConversationCheckers.isOfficialMember(r == null ? undefined : r.bot_type)) {
      return skillConstantsEnum.SkillPinType.otherDefault;
    } else if (chatConversationCheckers.isCocoParticipant(m == null ? undefined : m.bot_type) || chatConversationCheckers.isCocoParticipant(r == null ? undefined : r.bot_type)) {
      return skillConstantsEnum.SkillPinType.default;
    } else {
      return "";
    }
  };
  var chatServiceContext_1 = require("chat-service-context_1") /*id: 698136*/;
  let h = e => chatConversationSelectors_1.getConversationBotInfo(chatFeedStoreFactory.useFeedStore.getState(), e);
  let m = e => {
    let n = chatServiceContext_1.serviceContext.get("chatBotService", true);
    if (n == null) {
      return undefined;
    } else {
      return n.getBotIdToLocalConversationMap()?.[e];
    }
  };
  let g = function (e = "", t, n, i) {
    return c(chatFeedStoreFactory.useFeedStore.getState(), e, t, n, i);
  };
  require.d(exports, {
    determineSkillPinType: function () {
      return g;
    },
    getConversationBotInfo: function () {
      return h;
    },
    getBotLocalConversation: function () {
      return m;
    }
  });
}
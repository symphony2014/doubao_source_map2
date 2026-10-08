// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'asyncSkillSendMessageBox_2'
// - Resolved require(19807) to 'async-skill-send-message-box_2'
// - Resolved require(266064) to 'send-link-quota-symbol'
// - Updated imported property 'x' to 'sendLinkQuotaSymbol' (module 266064)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'Jm' to 'isValidMessageForSamantha' (module 19807)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 356934
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var asyncSkillSendMessageBox_2 = require("async-skill-send-message-box_2") /*id: 19807*/;
  let o = {
    pluginIdentifier: require("send-link-quota-symbol") /*id: 266064*/.sendLinkQuotaSymbol,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && asyncSkillSendMessageBox_2.isValidMessageForSamantha(e)
  };
  require.r(exports);
  require.d(exports, {
    sendLinkQuoteContentMatcher: function () {
      return o;
    }
  });
}
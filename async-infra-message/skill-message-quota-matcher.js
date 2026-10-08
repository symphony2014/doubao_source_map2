// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'asyncSkillSendMessageBoxHandler'
// - Resolved require(801371) to 'async-skill-send-message-box-handler'
// - Resolved require(767585) to 'send-quota-content-symbol'
// - Updated imported property 'b' to 'sendQuotaContent' (module 767585)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'qs' to 'isSkillMessage' (module 801371)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 766245
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var asyncSkillSendMessageBoxHandler = require("async-skill-send-message-box-handler") /*id: 801371*/;
  let l = {
    pluginIdentifier: require("send-quota-content-symbol") /*id: 767585*/.sendQuotaContent,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && (messageContentTypeAndStatusChecker.PMd(e) || messageContentTypeAndStatusChecker.pEk(e) || messageContentTypeAndStatusChecker.fE5(e) || messageContentTypeAndStatusChecker.cLH(e) || messageContentTypeAndStatusChecker.G7Q(e) && asyncSkillSendMessageBoxHandler.isSkillMessage(e))
  };
  require.r(exports);
  require.d(exports, {
    sendQuotaContentMatcher: function () {
      return l;
    }
  });
}
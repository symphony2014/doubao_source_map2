// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(549255) to 'receive-writing-card-symbol'
// - Updated imported property 'i' to 'receiveWritingCardId' (module 549255)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 818407
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("receive-writing-card-symbol") /*id: 549255*/.receiveWritingCardId,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.z7f(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveWritingRecognitionCardMatcher: function () {
      return o;
    }
  });
}
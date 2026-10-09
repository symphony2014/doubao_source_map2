// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(303178) to 'receive-simple-search-content'
// - Updated imported property 'M' to 'receiveSearchToken' (module 303178)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 294339
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("receive-simple-search-content") /*id: 303178*/.receiveSearchToken,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.H6e(e) && !messageContentTypeAndStatusChecker.fdv(e) && !messageContentTypeAndStatusChecker.qqf(e) && !messageContentTypeAndStatusChecker.N0s(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveSimpleSearchContentMatcher: function () {
      return o;
    }
  });
}
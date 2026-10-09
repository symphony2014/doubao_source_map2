// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(15246) to 'chat-search-result-symbol_2'
// - Updated imported property 'd' to 'searchResultSymbol' (module 15246)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 796100
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-search-result-symbol_2") /*id: 15246*/.searchResultSymbol,
    matchPlugin(e) {
      if (botConversationTypeCheck.isBotConversation(e)) {
        return false;
      }
      let t = messageContentTypeAndStatusChecker.Yb1(e);
      return messageContentTypeAndStatusChecker.s27(e) && !messageContentTypeAndStatusChecker.mT2(e) && !messageContentTypeAndStatusChecker.pp8(e) || t || messageContentTypeAndStatusChecker.$sc(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveSearchResultContentMatcher: function () {
      return o;
    }
  });
}
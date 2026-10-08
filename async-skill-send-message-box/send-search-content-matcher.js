// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(643175) to 'chat-send-search-symbol'
// - Updated imported property 'G' to 'sendSearchContent' (module 643175)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 984067
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-send-search-symbol") /*id: 643175*/.sendSearchContent,
    matchPlugin(e) {
      if (botConversationTypeCheck.isBotConversation(e)) {
        return false;
      }
      let t = messageContentTypeAndStatusChecker.H6e(e);
      let n = messageContentTypeAndStatusChecker.exC(e);
      return t && !n && !messageContentTypeAndStatusChecker.wum(e) && !messageContentTypeAndStatusChecker.Bmf(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    sendSearchContentMatcher: function () {
      return o;
    }
  });
}
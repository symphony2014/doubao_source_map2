// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(6683) to 'chat-search-action-symbol'
// - Updated imported property 's' to 'searchMessageAction' (module 6683)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 704416
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let a = {
    area: "third",
    actionType: "search-source",
    pluginIdentifier: require("chat-search-action-symbol") /*id: 6683*/.searchMessageAction,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && (messageContentTypeAndStatusChecker.b5v(e) && !messageContentTypeAndStatusChecker.qqf(e) && !messageContentTypeAndStatusChecker.N0s(e) || !!messageContentTypeAndStatusChecker.UQt(e))
  };
  require.r(exports);
  require.d(exports, {
    searchSourceReceiveMessageActionButtonMatcher: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(168939) to 'chat-send-composite-symbol'
// - Updated imported property 'e' to 'sendCompositeSymbol' (module 168939)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 302753
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-send-composite-symbol") /*id: 168939*/.sendCompositeSymbol,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.xop(e) && !messageContentTypeAndStatusChecker.kwD(e) && !messageContentTypeAndStatusChecker.O7X(e)
  };
  require.r(exports);
  require.d(exports, {
    sendCompositeContentMatcher: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'n' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(215580) to 'chat-ugc-suggest-symbol'
// - Updated imported property 'E' to 'ugcSuggestSymbol' (module 215580)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 386639
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let r = {
    pluginIdentifier: require("chat-ugc-suggest-symbol") /*id: 215580*/.ugcSuggestSymbol,
    matchPluginForAliceChatMessageToMessage: e => botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.DRY(e),
    matchPluginForSamanthaChatMessageToMessage: e => botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.DRY(e)
  };
  require.r(exports);
  require.d(exports, {
    UGCSuggestChatProtocolransformPluginMatcher: function () {
      return r;
    }
  });
}
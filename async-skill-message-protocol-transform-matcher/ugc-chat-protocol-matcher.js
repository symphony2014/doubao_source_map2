// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Resolved require(469259) to 'ugc-symbol-constant'
// - Updated imported property 'y' to 'ugcSymbol' (module 469259)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform-matcher.d094b131.js
         * chunkId: 21292
         * moduleId: 889943
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  let n = {
    pluginIdentifier: require("ugc-symbol-constant") /*id: 469259*/.ugcSymbol,
    matchPluginForAliceChatMessageToMessage: e => botConversationTypeCheck.isBotConversation(e),
    matchPluginForMessageToAliceChatMessage: e => botConversationTypeCheck.isBotConversation(e)
  };
  require.r(exports);
  require.d(exports, {
    UGCChatProtocolransformPluginMatcher: function () {
      return n;
    }
  });
}
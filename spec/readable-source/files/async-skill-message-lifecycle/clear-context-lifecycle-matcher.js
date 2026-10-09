// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Resolved require(999332) to 'chat-clear-context-symbol'
// - Updated imported property 'X' to 'clearContextSymbol' (module 999332)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 955757
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  let r = {
    pluginIdentifier: require("chat-clear-context-symbol") /*id: 999332*/.clearContextSymbol,
    matchPlugin: e => botConversationTypeCheck.isBotConversation(e),
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    ClearContextMessageLifeCyclePluginMatcher: function () {
      return r;
    }
  });
}
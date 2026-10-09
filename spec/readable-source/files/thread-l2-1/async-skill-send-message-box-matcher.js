// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Resolved require(336112) to 'chat-send-write-input-symbol'
// - Updated imported property 'l' to 'chatInputWriteSymbol' (module 336112)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 313214
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  let r = {
    pluginIdentifier: require("chat-send-write-input-symbol") /*id: 336112*/.chatInputWriteSymbol,
    matchPlugin: e => {
      botConversationTypeCheck.isBotConversation(e);
      return false;
    }
  };
  require.r(exports);
  require.d(exports, {
    sendWriteInputContentMatcher: function () {
      return r;
    }
  });
}
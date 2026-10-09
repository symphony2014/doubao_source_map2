// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Resolved require(141934) to 'receive-image-gen-symbol'
// - Updated imported property 's' to 'receiveImageGen' (module 141934)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 772405
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  let o = {
    pluginIdentifier: require("receive-image-gen-symbol") /*id: 141934*/.receiveImageGen,
    matchPlugin: e => messageContentTypeAndStatusChecker.qP0(e) && !botConversationTypeCheck.isBotConversation(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveImageMessageBoxPluginMatcher: function () {
      return o;
    }
  });
}
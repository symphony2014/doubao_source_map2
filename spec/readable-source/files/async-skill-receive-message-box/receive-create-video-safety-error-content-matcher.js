// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Resolved require(301263) to 'chat-video-safety-error'
// - Updated imported property 'a' to 'videoSafetyError' (module 301263)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 442233
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  let o = {
    pluginIdentifier: require("chat-video-safety-error") /*id: 301263*/.videoSafetyError,
    matchPlugin: e => !botConversationTypeCheck.isBotConversation(e) && messageContentTypeAndStatusChecker.zTh(e) && messageContentTypeAndStatusChecker.ho6(e)
  };
  require.r(exports);
  require.d(exports, {
    receiveCreateVideoSafetyErrorContentMatcher: function () {
      return o;
    }
  });
}
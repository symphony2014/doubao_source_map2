// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'extractArtifactFromChatMessage'
// - Resolved require(117895) to 'extract-artifact-from-chat-message'
// - Resolved require(123347) to 'chat-meeting-minutes-key'
// - Updated imported property 'B' to 'receiveMinutesKey' (module 123347)
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'le' to 'extractArtifactFromMessage' (module 117895)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 626465
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  let a = {
    pluginIdentifier: require("chat-meeting-minutes-key") /*id: 123347*/.receiveMinutesKey,
    matchPlugin(e) {
      if (botConversationTypeCheck.isBotConversation(e)) {
        return false;
      }
      let {
        intention: n
      } = extractArtifactFromChatMessage.extractArtifactFromMessage(e) ?? {};
      return n === "meeting_minutes" && messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.jSN(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    receiveMinutesMeetingContentMatcher: function () {
      return a;
    }
  });
}
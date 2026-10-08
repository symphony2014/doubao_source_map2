// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'isMeetingMinutes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 103882
         */
module.exports = function (module, exports, require) {
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  let o = e => {
    if (botConversationTypeCheck.isBotConversation(e)) {
      return false;
    }
    let {
      intention: n
    } = extractArtifactFromChatMessage.extractArtifactFromMessage(e) ?? {};
    return n === "meeting_minutes" && messageContentTypeAndStatusChecker.G7Q(e) && !messageContentTypeAndStatusChecker.jSN(e);
  };
  require.d(exports, {
    isMeetingMinutes: function () {
      return o;
    }
  });
}
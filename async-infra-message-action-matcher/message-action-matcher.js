// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'u' to 'chatMessageActionSymbol'
// - Resolved require(286846) to 'chat-message-action-symbol'
// - Updated imported property 'wG' to 'isPodcastValidProto' (module 942305)
// - Updated imported property 'd8' to 'isLyricsToSongLyric' (module 749637)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 't' to 'messageActionSymbol' (module 286846)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 850899
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var chatMessageActionSymbol = require("chat-message-action-symbol") /*id: 286846*/;
  let l = e => (messageContentTypeAndStatusChecker.G7Q(e) || messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.C_i(e) || messageContentTypeAndStatusChecker.pp8(e) || messageContentTypeAndStatusChecker.mT2(e) || aiPodcastContentUtils.isPodcastValidProto(e) || messageContentTypeAndStatusChecker.isLyricsToSongLyric(e)) && messageContentTypeAndStatusChecker.ZRq(e) && !messageContentTypeAndStatusChecker.Jgn(e);
  let s = {
    area: "fold",
    actionType: "report",
    pluginIdentifier: chatMessageActionSymbol.messageActionSymbol,
    matchPlugin: e => {
      if (e.content_blocks_v2) {
        if (!messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e)) {
          chatMessageStatusCheck.isMessageFinished(e);
        }
      }
      return l(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultReportReceiveMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}
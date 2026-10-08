// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'o' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'u' to 'messageFeedbackActionSymbol'
// - Resolved require(365800) to 'message-feedback-action-symbol'
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 'wG' to 'isPodcastValidProto' (module 942305)
// - Updated imported property 'w' to 'feedbackActionKey' (module 365800)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 424124
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageFeedbackActionSymbol = require("message-feedback-action-symbol") /*id: 365800*/;
  let l = e => (messageContentTypeAndStatusChecker.G7Q(e) || messageContentTypeAndStatusChecker.pp8(e) || messageContentTypeAndStatusChecker.mT2(e) || messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.dqg(e) || messageContentTypeAndStatusChecker.cnd(e)) && (messageContentTypeAndStatusChecker.ZRq(e) || messageContentTypeAndStatusChecker.tK5(e)) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e) && !messageContentTypeAndStatusChecker.Jgn(e) || aiPodcastContentUtils.isPodcastValidProto(e);
  let s = {
    area: "main",
    actionType: "feedback",
    pluginIdentifier: messageFeedbackActionSymbol.feedbackActionKey,
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
    defaultFeedbackReceiveMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}
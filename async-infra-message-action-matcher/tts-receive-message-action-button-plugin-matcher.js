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
// - Renamed variable 'l' to 'infraTtsMessageActionSymbol'
// - Resolved require(653278) to 'infra-tts-message-action-symbol'
// - Updated imported property 'rP' to 'getPodcastWaiting' (module 942305)
// - Updated imported property 'B' to 'ttsReceiveAction' (module 653278)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 89862
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  let u = () => false;
  var infraTtsMessageActionSymbol = require("infra-tts-message-action-symbol") /*id: 653278*/;
  let s = e => !u() && (messageContentTypeAndStatusChecker.G7Q(e) && messageContentTypeAndStatusChecker.t4S(e) && !!e.tts_content && !messageContentTypeAndStatusChecker.dqg(e) && !messageContentTypeAndStatusChecker.Jgn(e) || !!aiPodcastContentUtils.getPodcastWaiting(e));
  let c = {
    area: "main",
    actionType: "tts",
    pluginIdentifier: infraTtsMessageActionSymbol.ttsReceiveAction,
    matchPlugin: e => e.content_blocks_v2 ? !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !!e.tts_content : s(e)
  };
  require.r(exports);
  require.d(exports, {
    defaultTTSReceiveMessageActionButtonPluginMatcher: function () {
      return c;
    }
  });
}
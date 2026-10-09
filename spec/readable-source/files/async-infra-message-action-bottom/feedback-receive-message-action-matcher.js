// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'infraReceiveFeedbackSymbol'
// - Resolved require(560811) to 'infra-receive-feedback-symbol'
// - Updated imported property 'wG' to 'isPodcastValidProto' (module 942305)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Q' to 'receiveFeedbackSym' (module 560811)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action-matcher.d15222af.js
         * chunkId: 77779
         * moduleId: 825863
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var infraReceiveFeedbackSymbol = require("infra-receive-feedback-symbol") /*id: 560811*/;
  let s = e => (messageContentTypeAndStatusChecker.G7Q(e) || messageContentTypeAndStatusChecker.pp8(e) || messageContentTypeAndStatusChecker.mT2(e) || messageContentTypeAndStatusChecker.qP0(e) || messageContentTypeAndStatusChecker.dqg(e) || messageContentTypeAndStatusChecker.cnd(e) || aiPodcastContentUtils.isPodcastValidProto(e)) && (messageContentTypeAndStatusChecker.ZRq(e) || messageContentTypeAndStatusChecker.tK5(e)) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e) && !messageContentTypeAndStatusChecker.Jgn(e) && conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), (e == null ? undefined : e.conversation_id) || "", (e == null ? undefined : e.message_id) || "");
  let u = {
    actionType: "feedback",
    pluginIdentifier: infraReceiveFeedbackSymbol.receiveFeedbackSym,
    matchPlugin(e, t) {
      return s(e) && this.actionType === t;
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultFeedbackReceiveMessageActionBottomPluginMatcher: function () {
      return u;
    }
  });
}
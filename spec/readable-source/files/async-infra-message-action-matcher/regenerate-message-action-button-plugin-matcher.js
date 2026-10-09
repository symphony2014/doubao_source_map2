// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'r' to 'chatMessageUtils_2'
// - Resolved require(149539) to 'chat-message-utils_2'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'aiPodcastContentUtils'
// - Resolved require(942305) to 'ai-podcast-content-utils'
// - Renamed variable 'u' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'l' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'messageRegenAndReplyUtils'
// - Resolved require(893308) to 'message-regen-and-reply-utils'
// - Renamed variable 'f' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'p' to 'receiveMessageRegenerateSymbol'
// - Resolved require(602917) to 'receive-message-regenerate-symbol'
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'wG' to 'isPodcastValidProto' (module 942305)
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 'H' to 'receiveRegenSymbol' (module 602917)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'WV' to 'isDisableRegen' (module 149539)
// - Updated imported property 'QO' to 'isSingleValidReply' (module 893308)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 904033
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatMessageUtils_2 = require("chat-message-utils_2") /*id: 149539*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var aiPodcastContentUtils = require("ai-podcast-content-utils") /*id: 942305*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var messageRegenAndReplyUtils = require("message-regen-and-reply-utils") /*id: 893308*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  let v = e => false;
  var receiveMessageRegenerateSymbol = require("receive-message-regenerate-symbol") /*id: 602917*/;
  let g = e => {
    let i = chatFeedStoreFactory.useFeedStore.getState().conversationMap[e.conversation_id || ""]?.last_section_id ?? "";
    let r = !!i && i === (e == null ? undefined : e.section_id);
    let l = messageContentTypeAndStatusChecker.nmA(e);
    let d = aiPodcastContentUtils.isPodcastValidProto(e);
    let p = messageContentTypeAndStatusChecker.pp8(e);
    let g = messageContentTypeAndStatusChecker.mT2(e);
    let _ = messageContentTypeAndStatusChecker.G7Q(e);
    let m = messageContentTypeAndStatusChecker.lpb(e);
    let S = messageContentTypeAndStatusChecker.ZRq(e);
    let h = messageContentTypeAndStatusChecker.RF2(e);
    let M = messageContentTypeAndStatusChecker.vlk(e);
    let y = messageContentTypeAndStatusChecker.qP0(e);
    let T = messageContentTypeAndStatusChecker.XM5(e);
    let k = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
    let A = (_ || p || g || m) && !messageContentTypeAndStatusChecker.hWN(e) && !messageContentTypeAndStatusChecker.Kzj(e) && S && !h && !M && k && r && chatMessageStatusCheck.isMessageFinished(e);
    let b = d && r && k && chatMessageStatusCheck.isMessageFinished(e);
    let C = T && r && k && !M && chatMessageStatusCheck.isMessageFinished(e);
    let P = messageContentTypeAndStatusChecker.isOnboardingMessage(e);
    return (!!A || !!y) && !l && !P && !v(e) || b || C;
  };
  let _ = {
    area: "main",
    actionType: "regenerate",
    pluginIdentifier: receiveMessageRegenerateSymbol.receiveRegenSymbol,
    matchPlugin: e => {
      return e.ext?.disable_regen !== "1" && (e.content_blocks_v2 && !isEmptyUtil.isEmpty(e.content_blocks_v2) ? !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && !chatMessageUtils_2.isDisableRegen(e) && chatMessageStatusCheck.isMessageFinished(e) && conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "") && !!messageRegenAndReplyUtils.isSingleValidReply(e.conversation_id || "", e) : g(e));
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultRegenerateReceiveMessageActionButtonPluginMatcher: function () {
      return _;
    }
  });
}
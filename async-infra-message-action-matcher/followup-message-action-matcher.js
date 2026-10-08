// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'u' to 'chatMessageFollowupSymbol'
// - Resolved require(153851) to 'chat-message-followup-symbol'
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'C' to 'chatFollowupSymbol' (module 153851)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'qF' to 'isOnboardingMessage' (module 749637)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 551392
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageFollowupSymbol = require("chat-message-followup-symbol") /*id: 153851*/;
  let l = e => {
    var t;
    var n;
    return !!((t = e.content_blocks_v2) === null || t === undefined ? undefined : t.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT)) || !!((n = e.content_blocks) === null || n === undefined ? undefined : n.some(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT)) || !!messageContentTypeAndStatusChecker.dpK(e);
  };
  let s = {
    area: "fold",
    actionType: "followup",
    pluginIdentifier: chatMessageFollowupSymbol.chatFollowupSymbol,
    matchPlugin: e => !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && !messageContentTypeAndStatusChecker.isOnboardingMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && l(e)
  };
  require.r(exports);
  require.d(exports, {
    defaultFollowupReceiveMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}
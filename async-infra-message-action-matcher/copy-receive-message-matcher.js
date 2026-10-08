// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'extractMessageContent'
// - Resolved require(562040) to 'extract-message-content'
// - Renamed variable 'u' to 'messageContentBlockUtils'
// - Resolved require(798818) to 'message-content-block-utils'
// - Resolved require(531079) to 'receive-message-action-copy'
// - Updated imported property 'h' to 'messageActionCopy' (module 531079)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// - Updated imported property '$' to 'isSingleTextBlock' (module 798818)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 394196
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var messageContentBlockUtils = require("message-content-block-utils") /*id: 798818*/;
  let l = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: require("receive-message-action-copy") /*id: 531079*/.messageActionCopy,
    matchPlugin: e => {
      let t = extractMessageContent.extractMessageContent(e);
      if (messageContentBlockUtils.isSingleTextBlock(e)) {
        return !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !!t;
      } else {
        return !messageContentTypeAndStatusChecker.RF2(e) && messageContentTypeAndStatusChecker.G7Q(e) && messageContentTypeAndStatusChecker.t4S(e) && !messageContentTypeAndStatusChecker.Jgn(e) && !!t && !messageContentTypeAndStatusChecker.p_0(e) && !messageContentTypeAndStatusChecker.rAP(e);
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultCopyReceiveMessageActionButtonPluginMatcher: function () {
      return l;
    }
  });
}
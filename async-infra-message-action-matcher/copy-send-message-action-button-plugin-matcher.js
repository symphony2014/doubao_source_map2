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
// - Renamed variable 'u' to 'messageCopyAction'
// - Resolved require(738187) to 'message-copy-action'
// - Renamed variable 'l' to 'messageContentBlockUtils'
// - Resolved require(798818) to 'message-content-block-utils'
// - Updated imported property 'O' to 'messageCopyAction' (module 738187)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// - Updated imported property 'h' to 'hasContentBlocks' (module 798818)
// - Updated imported property '$' to 'isSingleTextBlock' (module 798818)
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 792659
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var messageCopyAction = require("message-copy-action") /*id: 738187*/;
  var messageContentBlockUtils = require("message-content-block-utils") /*id: 798818*/;
  let s = {
    area: "main",
    actionType: "copy",
    pluginIdentifier: messageCopyAction.messageCopyAction,
    matchPlugin: e => {
      let t = extractMessageContent.extractMessageContent(e);
      if (messageContentBlockUtils.hasContentBlocks(e)) {
        return !!messageContentBlockUtils.isSingleTextBlock(e) && !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !messageContentTypeAndStatusChecker.vlk(e) && !!t;
      } else {
        return !messageContentTypeAndStatusChecker.RF2(e) && messageContentTypeAndStatusChecker.G7Q(e) && messageContentTypeAndStatusChecker.t4S(e) && !messageContentTypeAndStatusChecker.Jgn(e) && !!t;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultCopySendMessageActionButtonPluginMatcher: function () {
      return s;
    }
  });
}
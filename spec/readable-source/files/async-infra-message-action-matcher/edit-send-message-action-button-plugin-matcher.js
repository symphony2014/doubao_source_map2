// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'checkLocalReplyMessage'
// - Resolved require(819927) to 'check-local-reply-message'
// - Renamed variable 'o' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'u' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'l' to 'extractMessageContent'
// - Resolved require(562040) to 'extract-message-content'
// - Renamed variable 's' to 'messageContentBlockUtils'
// - Resolved require(798818) to 'message-content-block-utils'
// - Renamed variable 'd' to 'chatMessageEditAction'
// - Resolved require(427301) to 'chat-message-edit-action'
// - Updated imported property 'S' to 'isLocalReplyMessage' (module 819927)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'F' to 'messageEditAction' (module 427301)
// - Updated imported property 'Wz' to 'checkMessageId' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property '$' to 'isSingleTextBlock' (module 798818)
// - Updated imported property 'Y' to 'extractMessageContent' (module 562040)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 38498
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var checkLocalReplyMessage = require("check-local-reply-message") /*id: 819927*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var extractMessageContent = require("extract-message-content") /*id: 562040*/;
  var messageContentBlockUtils = require("message-content-block-utils") /*id: 798818*/;
  let c = e => false;
  var chatMessageEditAction = require("chat-message-edit-action") /*id: 427301*/;
  let f = e => {
    let t = messageContentTypeAndStatusChecker.fE5(e) || messageContentTypeAndStatusChecker.NB8(e) || messageContentTypeAndStatusChecker.Acz(e) || messageContentTypeAndStatusChecker.EkH(e) || messageContentTypeAndStatusChecker.H6e(e) || messageContentTypeAndStatusChecker.Bmf(e) || messageContentTypeAndStatusChecker.uml(e) || messageContentTypeAndStatusChecker.Cw_(e) || messageContentTypeAndStatusChecker.pEk(e) || messageContentTypeAndStatusChecker.cLH(e) || messageContentTypeAndStatusChecker.Sqr(e) || messageContentTypeAndStatusChecker.k56(e) || messageContentTypeAndStatusChecker.wDF(e) || messageContentTypeAndStatusChecker.oSo(e) || messageContentTypeAndStatusChecker.T0Z(e) || messageContentTypeAndStatusChecker.JGL(e) || messageContentTypeAndStatusChecker.uPu(e) || messageContentTypeAndStatusChecker.AqD(e) || messageContentTypeAndStatusChecker.t89(e) || messageContentTypeAndStatusChecker.esE(e) || c(e) || messageContentTypeAndStatusChecker.sdK(e);
    return messageContentTypeAndStatusChecker.G7Q(e) && !t && !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && messageContentTypeAndStatusChecker.U18(e);
  };
  let v = {
    area: "main",
    actionType: "edit",
    pluginIdentifier: chatMessageEditAction.messageEditAction,
    matchPlugin: e => {
      let t = conversationMessageUtils_1.checkMessageId(chatMessageStoreFactory.createMessageStore.getState(), e.conversation_id || "", e.message_id || "");
      if (messageContentBlockUtils.isSingleTextBlock(e)) {
        let a = extractMessageContent.extractMessageContent(e) ?? "";
        return t && !messageContentTypeAndStatusChecker.FFC(e) && !checkLocalReplyMessage.isLocalReplyMessage(e) && chatMessageStatusCheck.isMessageFinished(e) && !c(e) && !messageContentTypeAndStatusChecker.nmA(e) && !!a;
      }
      return t && f(e) && !messageContentTypeAndStatusChecker.nmA(e);
    }
  };
  require.r(exports);
  require.d(exports, {
    defaultEditSendMessageActionButtonPluginMatcher: function () {
      return v;
    }
  });
}
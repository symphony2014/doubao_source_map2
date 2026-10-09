// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillSendMessageActionMatcher'
// - Resolved require(49233) to 'async-skill-send-message-action-matcher'
// - Renamed variable 'r' to 'chatMessageReadStatusMapper'
// - Resolved require(414453) to 'chat-message-read-status-mapper'
// - Renamed variable 'o' to 'attachmentProcessingUtils'
// - Resolved require(274055) to 'attachment-processing-utils'
// - Renamed variable 'a' to 'botConversationTypeCheck'
// - Resolved require(492342) to 'bot-conversation-type-check'
// - Renamed variable 'u' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'l' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'c' to 'sendMessageActionRefSymbol'
// - Resolved require(249609) to 'send-message-action-ref-symbol'
// - Updated imported property 'V' to 'isBotConversation' (module 492342)
// - Updated imported property 'r' to 'isSkillSendMessageAction' (module 49233)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'tK' to 'mapAttachments' (module 274055)
// - Updated imported property 'WM' to 'isVersion1Uuid' (module 274055)
// - Updated imported property '_f' to 'hasValidAttachments' (module 274055)
// - Updated imported property 't' to 'mapFileReadStatuses' (module 414453)
// - Updated imported property 'MZ' to 'parseState' (module 292449)
// - Updated imported property 'm9' to 'reviewState' (module 292449)
// - Updated imported property 'l' to 'SendMessageActionRef' (module 249609)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-action-matcher.9ea34ed9.js
         * chunkId: 97792
         * moduleId: 381495
         */
module.exports = function (module, exports, require) {
  var asyncSkillSendMessageActionMatcher = require("async-skill-send-message-action-matcher") /*id: 49233*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var botConversationTypeCheck = require("bot-conversation-type-check") /*id: 492342*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var sendMessageActionRefSymbol = require("send-message-action-ref-symbol") /*id: 249609*/;
  let d = e => {
    let {
      message: t
    } = e;
    if (!t || botConversationTypeCheck.isBotConversation(t)) {
      return false;
    }
    let n = asyncSkillSendMessageActionMatcher.isSkillSendMessageAction(t);
    let c = checkNestedContentType.isNestedContentType(t);
    let d = messageContentTypeAndStatusChecker.Sqr(t);
    if (!n) {
      return n;
    }
    if (c || d) {
      var v;
      let e = attachmentProcessingUtils.mapAttachments(t);
      let n = (v = chatMessageReadStatusMapper.mapFileReadStatuses({
        conversationId: t.conversation_id || "",
        messageId: t.message_id || ""
      }, e.map(e => e.fileKey))) === null || v === undefined ? undefined : v[0]?.isHitRisk;
      let i = e.some(e => e.fileParseStatus !== messagingConstants.parseState.ParseState_Failed && e.fileNameReviewStatus !== messagingConstants.reviewState.ReviewState_NotCompliant);
      let a = e.some(e => attachmentProcessingUtils.isVersion1Uuid(e.fileKey));
      return !n && i && !a;
    }
    {
      let e = attachmentProcessingUtils.hasValidAttachments(t);
      return n && !e;
    }
  };
  let f = {
    area: "main",
    actionType: "ref",
    pluginIdentifier: sendMessageActionRefSymbol.SendMessageActionRef,
    matchPlugin: e => d({
      message: e
    })
  };
  require.r(exports);
  require.d(exports, {
    defaultRefSendMessageActionButtonPluginMatcher: function () {
      return f;
    },
    isRefActionAvailableByMessage: function () {
      return d;
    }
  });
}
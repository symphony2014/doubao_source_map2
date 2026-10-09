// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillSendMessageActionMatcher'
// - Resolved require(49233) to 'async-skill-send-message-action-matcher'
// - Renamed variable 'r' to 'chatMessageReadStatusMapper'
// - Resolved require(414453) to 'chat-message-read-status-mapper'
// - Renamed variable 'a' to 'attachmentProcessingUtils'
// - Resolved require(274055) to 'attachment-processing-utils'
// - Renamed variable 'o' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 's' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'u' to 'messagingConstants'
// - Resolved require(292449) to 'messaging-constants'
// - Renamed variable 'd' to 'chatSendMessageActionRef'
// - Resolved require(130848) to 'chat-send-message-action-ref'
// - Updated imported property 'r' to 'isSkillSendMessageAction' (module 49233)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'tK' to 'mapAttachments' (module 274055)
// - Updated imported property 't' to 'mapFileReadStatuses' (module 414453)
// - Updated imported property 'MZ' to 'parseState' (module 292449)
// - Updated imported property 'm9' to 'reviewState' (module 292449)
// - Updated imported property 'T' to 'sendMessageActionRef' (module 130848)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action-matcher.1e7a3334.js
         * chunkId: 96243
         * moduleId: 965620
         */
module.exports = function (module, exports, require) {
  var asyncSkillSendMessageActionMatcher = require("async-skill-send-message-action-matcher") /*id: 49233*/;
  var chatMessageReadStatusMapper = require("chat-message-read-status-mapper") /*id: 414453*/;
  var attachmentProcessingUtils = require("attachment-processing-utils") /*id: 274055*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatSendMessageActionRef = require("chat-send-message-action-ref") /*id: 130848*/;
  let c = e => {
    var d;
    let {
      message: c
    } = e;
    let f = asyncSkillSendMessageActionMatcher.isSkillSendMessageAction(c);
    let v = checkNestedContentType.isNestedContentType(c);
    let g = messageContentTypeAndStatusChecker.Sqr(c);
    if (!f) {
      return f;
    }
    let p = (c == null ? undefined : c.skill?.skill_type) === chatAppEnums.SkillType.CodeAssistant;
    if (!v && !g) {
      return f && p;
    }
    {
      let e = attachmentProcessingUtils.mapAttachments(c);
      let t = (d = chatMessageReadStatusMapper.mapFileReadStatuses({
        conversationId: c.conversation_id || "",
        messageId: c.message_id || ""
      }, e.map(e => e.fileKey))) === null || d === undefined ? undefined : d[0]?.isHitRisk;
      let i = e.some(e => e.fileParseStatus !== messagingConstants.parseState.ParseState_Failed && e.fileNameReviewStatus !== messagingConstants.reviewState.ReviewState_NotCompliant);
      return !t && i && p;
    }
  };
  let f = {
    area: "main",
    actionType: "ref",
    pluginIdentifier: chatSendMessageActionRef.sendMessageActionRef,
    matchPlugin: e => c({
      message: e
    })
  };
  require.r(exports);
  require.d(exports, {
    codeRefSendMessageActionButtonPluginMatcher: function () {
      return f;
    },
    isRefActionAvailableByMessage: function () {
      return c;
    }
  });
}
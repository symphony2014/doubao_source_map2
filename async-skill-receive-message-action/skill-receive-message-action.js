// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'validateMessageData'
// - Renamed export 'c' to 'filterAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 14727
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var readPreviewConstant = require("read-preview-constant") /*id: 22478*/;
  var messageAttachmentExtractor = require("message-attachment-extractor") /*id: 495014*/;
  let m = (e, t) => {
    let {
      attachments: n = []
    } = t;
    return n.filter(t => e === t.key && t.file_review_state !== messagingConstants.reviewState.ReviewState_NotCompliant && t.file_parse_state !== messagingConstants.parseState.ParseState_Failed).map(e => ({
      file_name: e.name || "",
      key: e.key || ""
    }));
  };
  let g = e => {
    let {
      message: t
    } = e;
    let n = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand && (e.matchedCanvasPluginIdentifier === "read-preview" || e.matchedCanvasPluginIdentifier === readPreviewConstant.readPreview));
    let {
      isValid: v,
      pdfFile: m,
      pdfLink: g,
      skillTypeTrack: h
    } = chatMessageStoreFactory.createMessageStore(e => {
      let v = messageContentTypeAndStatusChecker.VQ4(t);
      let {
        reply_id: p
      } = t ?? {};
      let m = p ? conversationMessageUtils_1.getMessageFromLink(e, t.conversation_id || "", {
        isLocalMessage: false,
        messageId: p
      }) : null;
      let g = (m && arrayFirstElement.getFirstElement(messageAttachmentExtractor.getPdfAttachments(m))) ?? null;
      let h = (m && messageAttachmentExtractor.getAttachmentLink(m)) ?? null;
      let _ = t == null ? undefined : t.skill?.skill_type;
      let b = _ === chatAppEnums.SkillType.ReadPDF || _ === chatAppEnums.SkillType.Default;
      let y = !!t.content_blocks_v2?.length;
      return {
        isValid: b && !v && !messageContentTypeAndStatusChecker.Yns(t) && (messageContentTypeAndStatusChecker.G7Q(t) || y) && chatMessageStatusCheck.isMessageFinished(t) && !messageContentTypeAndStatusChecker.XD1(t) && (!!g || !!h),
        pdfFile: g,
        pdfLink: h,
        skillTypeTrack: m == null ? undefined : m.skill?.skill_type_no_default
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let _ = arxivPdfUrlChecker_1.checkArxivPdfUrl(g || "");
    return {
      isValid: v && (!g || _) && !n,
      pdfFile: m,
      pdfLink: g,
      skillTypeTrack: h
    };
  };
  require.d(exports, {
    validateMessageData: function () {
      return g;
    },
    filterAttachments: function () {
      return m;
    }
  });
}
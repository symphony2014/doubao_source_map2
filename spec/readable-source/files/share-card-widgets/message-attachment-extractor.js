// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getAttachmentLink'
// - Renamed export 'u' to 'getPdfAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 495014
         */
module.exports = function (module, exports, require) {
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let d = e => {
    let t = [];
    if (e.content_blocks_v2) {
      var o;
      var d;
      var c;
      var u;
      let a = e.content_blocks_v2.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)?.[0];
      t = (a == null ? undefined : (u = a.content) === null || u === undefined ? undefined : (c = u.attachment_block) === null || c === undefined ? undefined : (d = c.attachments) === null || d === undefined ? undefined : (o = d.filter(e => {
        return e.type === attachmentConstants.AttachmentType.AttachmentTypeFile && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.file?.name || e.file?.uri || "")) === "PDF" && e.review_state !== attachmentConstants.ReviewState.ReviewStateNotCompliant && e.parse_state !== attachmentConstants.ParseState.ParseStateFail;
      })) === null || o === undefined ? undefined : o.map(e => {
        return {
          file_name: e.file?.name || "",
          key: e.file?.uri || ""
        };
      })) || [];
    } else {
      let {
        attachments: n = []
      } = e;
      t = n.filter(e => fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.name || "")) === "PDF" && e.file_review_state !== messagingConstants.reviewState.ReviewState_NotCompliant && e.file_parse_state !== messagingConstants.parseState.ParseState_Failed).map(e => ({
        file_name: e.name || "",
        key: e.key || ""
      }));
    }
    if (!(t.length > 1)) {
      return t;
    }
  };
  let c = e => {
    var n;
    var a;
    var l;
    var d;
    if (e.content_blocks_v2) {
      let o = e.content_blocks_v2.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)?.[0];
      let c = o == null ? undefined : (l = o.content) === null || l === undefined ? undefined : (a = l.attachment_block) === null || a === undefined ? undefined : (n = a.attachments) === null || n === undefined ? undefined : n.filter(e => e.type === attachmentConstants.AttachmentType.AttachmentTypeLink);
      if (c == null) {
        return undefined;
      } else if ((d = c[0]) === null || d === undefined) {
        return undefined;
      } else {
        return d.link?.link_url;
      }
    }
    {
      let {
        attachments: t = []
      } = e;
      return t.filter(e => e.type === chatCoreConstants.ContentTypes.Link)[0]?.url;
    }
  };
  require.d(exports, {
    getAttachmentLink: function () {
      return c;
    },
    getPdfAttachments: function () {
      return d;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'extractChatAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21617.72465d64.js
         * chunkId: 21617
         * moduleId: 85490
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatAttachmentProcessor = require("chat-attachment-processor") /*id: 735334*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  let l = [{
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeLink,
    transform: e => {
      let {
        attachmentItem: n
      } = e;
      return {
        type: "link",
        link: n.link?.link_url ?? ""
      };
    }
  }, {
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeFile,
    transform: e => {
      let {
        attachmentItem: u
      } = e;
      return {
        type: "attachment",
        fileName: u.file?.name ?? "",
        fileKey: u.file?.uri ?? "",
        identifier: u.identifier ?? "",
        link: u.file?.url ?? ""
      };
    }
  }, {
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeImage,
    transform: e => {
      var r;
      let {
        attachmentItem: l
      } = e;
      return {
        type: "image",
        fileName: l.image?.uri ?? "",
        fileKey: l.image?.uri ?? "",
        identifier: l.identifier ?? "",
        link: ((r = l.image) === null || r === undefined ? undefined : r.image_ori?.url) ?? ""
      };
    }
  }, {
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeCodeDirectory,
    transform: e => {
      let {
        attachmentItem: s
      } = e;
      return {
        type: "directory",
        fileName: s.code_directory?.directory_id ?? "",
        fileKey: s.code_directory?.directory_id ?? "",
        identifier: s.identifier ?? ""
      };
    }
  }, {
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeVideo,
    transform: e => {
      let {
        attachmentItem: s
      } = e;
      return {
        type: "attachment",
        fileName: s.media?.name ?? "",
        fileKey: s.media?.vid ?? "",
        identifier: s.identifier ?? ""
      };
    }
  }, {
    matcher: e => e.type === attachmentConstants.AttachmentType.AttachmentTypeLarkDoc,
    transform: e => {
      let {
        attachmentItem: t
      } = e;
      return {
        type: "lark_doc",
        larkDoc: t.lark_doc
      };
    }
  }];
  let c = e => e.map(e => {
    var i;
    return (((i = e.content) === null || i === undefined ? undefined : i.attachment_block?.attachments) ?? []).map(e => {
      let t = l.find(t => t.matcher(e));
      if (t == null) {
        return undefined;
      } else {
        return t.transform({
          attachmentItem: e
        });
      }
    }).filter(e => e !== undefined);
  }).flatMap(e => e);
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let h = e => {
    return e.content_obj?.link_model && ((e.content_obj?.link_model).extra?.repo_id || "") || "";
  };
  let m = e => {
    var t;
    var i;
    return ((i = e.attachments) === null || i === undefined ? undefined : (t = i.filter(e => e.file_review_state !== messagingConstants.reviewState.ReviewState_NotCompliant && e.file_parse_state !== messagingConstants.parseState.ParseState_Failed && !!e.key)) === null || t === undefined ? undefined : t.map(t => {
      return {
        type: t.type !== chatCoreConstants.ContentTypes.Link ? t.type === chatCoreConstants.ContentTypes.Directory ? "directory" : "attachment" : "link",
        fileKey: t.key || chatAttachmentProcessor.getPreprocessKey(chatStoreManager.getStore("attachmentUploadStore").getState(), (e == null ? undefined : e.local?.localKey) || "") || "",
        fileName: t.name,
        link: t.url,
        identifier: t.identifier || h(e)
      };
    })) || [];
  };
  let v = e => {
    return messageContentTypeAndStatusChecker.tfX(e) && (e.content_obj.website_model?.pages).map(e => {
      if (e.url && e.title) {
        return {
          type: "link",
          link: e.url
        };
      }
    }).filter(infraUtilFunctions.isDefined) || [];
  };
  let _ = e => {
    var t;
    let n = ((t = e.content_blocks_v2) === null || t === undefined ? undefined : t.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)) ?? [];
    if (n.length > 0) {
      return c(n);
    } else if ("attachments" in e) {
      return m(e);
    } else if (messageContentTypeAndStatusChecker.tfX(e)) {
      return v(e);
    } else {
      return [];
    }
  };
  require.d(exports, {
    extractChatAttachments: function () {
      return _;
    }
  });
}
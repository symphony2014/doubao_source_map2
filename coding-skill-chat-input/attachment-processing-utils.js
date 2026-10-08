// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CT' to 'isImageFile'
// - Renamed export 'WM' to 'isVersion1Uuid'
// - Renamed export 'Y7' to 'extractTextContent'
// - Renamed export '_f' to 'hasValidAttachments'
// - Renamed export '_j' to 'isSpreadsheetOrCsv'
// - Renamed export 'nK' to 'filterValidAttachments'
// - Renamed export 'nn' to 'getValidAttachments'
// - Renamed export 't6' to 'extractSourceFiles'
// - Renamed export 'tK' to 'mapAttachments'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 274055
         */
module.exports = function (module, exports, require) {
  var uuidValidator = require("uuid-validator") /*id: 95560*/;
  var uuidVersionExtractor = require("uuid-version-extractor") /*id: 872638*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  let m = e => {
    let n = e == null ? undefined : e.content_obj?.text;
    if (n && isStringTypeCheck.isString(n)) {
      return n;
    } else {
      return undefined;
    }
  };
  let f = {
    [chatCoreConstants.ContentTypes.File]: contentTypeEnums.resourceType.File,
    [chatCoreConstants.ContentTypes.Image]: contentTypeEnums.resourceType.Image,
    [chatCoreConstants.ContentTypes.VlmImage]: contentTypeEnums.resourceType.Image,
    [chatCoreConstants.ContentTypes.Unknown]: contentTypeEnums.resourceType.Unknown,
    [chatCoreConstants.ContentTypes.Directory]: contentTypeEnums.resourceType.Directory
  };
  let g = e => {
    var t;
    return (e == null ? undefined : e.attachments) && ((t = e.attachments) === null || t === undefined ? undefined : t.filter(e => !!e.key).map(e => {
      let a = e.type === "audio";
      let s = e.type === "video";
      return {
        fileType: f[e.type || chatCoreConstants.ContentTypes.File],
        asrMediaType: a ? "audio" : s ? "video" : undefined,
        identifier: e.identifier ?? "",
        fileParseStatus: e.file_parse_state ?? messagingConstants.parseState.ParseState_Processing,
        fileNameReviewStatus: e.file_review_state ?? messagingConstants.reviewState.ReviewState_Processing,
        fileName: e.name ?? "",
        fileKey: e.key,
        size: e.size ?? 0,
        imageUrl: e.url,
        localKey: e.local_key,
        option: e.option
      };
    })) || [];
  };
  let v = e => {
    var n;
    var i;
    if (!(e == null ? undefined : e.ext?.source_file)) {
      return [];
    }
    try {
      if ((i = safeJsonUtils.safeParse(e == null ? undefined : e.ext?.source_file, [])) === null || i === undefined) {
        return undefined;
      } else if ((n = i.filter(e => e.key)) === null || n === undefined) {
        return undefined;
      } else {
        return n.map(e => {
          return {
            fileType: f[e.file_type || chatCoreConstants.ContentTypes.File],
            identifier: "",
            fileParseStatus: 1,
            fileNameReviewStatus: 0,
            fileName: e.file_name ?? "",
            fileKey: "",
            size: e.size ?? 0,
            imageUrl: "",
            localKey: ""
          };
        });
      }
    } catch (e) {
      return [];
    }
  };
  let b = e => e.fileType === contentTypeEnums.resourceType.Image;
  let y = e => {
    let t = getFileExtension.getFileExtension(e);
    return fileTypeDetectionUtils.isSpreadsheetFile(t) || fileTypeDetectionUtils.isCsvFile(t);
  };
  let x = e => !!e && !!uuidValidator.isValidUuid(e) && uuidVersionExtractor.extractUuidVersion(e) === 1;
  let w = e => {
    var n;
    var i;
    var r;
    var o;
    if (!e.content_blocks_v2) {
      return;
    }
    let l = (o = e.content_blocks_v2) === null || o === undefined ? undefined : (r = o.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)) === null || r === undefined ? undefined : (i = r[0]) === null || i === undefined ? undefined : (n = i.content) === null || n === undefined ? undefined : n.attachment_block?.attachments;
    if (l && l.length) {
      return l.filter(e => {
        if (e.type === attachmentConstants.AttachmentType.AttachmentTypeImage) {
          return x(e.image?.uri);
        } else {
          return e.type === attachmentConstants.AttachmentType.AttachmentTypeFile && x(e.file?.uri);
        }
      });
    }
  };
  let A = e => {
    let {
      attachments: t
    } = e;
    if (t && t.length) {
      return t.filter(e => {
        if (e.type) {
          let t = e.type;
          if ([chatCoreConstants.ContentTypes.VlmImage, chatCoreConstants.ContentTypes.Image, chatCoreConstants.ContentTypes.File].includes(t)) {
            return x(e.key);
          }
        }
        return false;
      });
    }
  };
  let _ = e => {
    let t;
    return !!((t = e.content_blocks_v2 ? w(e) : A(e)) == null ? undefined : t.length);
  };
  require.d(exports, {
    isImageFile: function () {
      return b;
    },
    isVersion1Uuid: function () {
      return x;
    },
    extractTextContent: function () {
      return m;
    },
    hasValidAttachments: function () {
      return _;
    },
    isSpreadsheetOrCsv: function () {
      return y;
    },
    filterValidAttachments: function () {
      return w;
    },
    getValidAttachments: function () {
      return A;
    },
    extractSourceFiles: function () {
      return v;
    },
    mapAttachments: function () {
      return g;
    }
  });
}
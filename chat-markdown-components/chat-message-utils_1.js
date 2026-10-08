// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$d' to 'getSkillIdWithDefault'
// - Renamed export 'Dc' to 'extractAttachments'
// - Renamed export 'KU' to 'determineMessageType'
// - Renamed export 'Kt' to 'getAttachmentNames'
// - Renamed export 'Nm' to 'hasSkillId'
// - Renamed export 'QT' to 'extractReferences'
// - Renamed export 'S7' to 'getAttachmentUris'
// - Renamed export '_X' to 'getReferenceType'
// - Renamed export 'eH' to 'getSkillId'
// - Renamed export 'e_' to 'getSkillIdNoDefault'
// - Renamed export 'ij' to 'getAttachmentCategories'
// - Renamed export 'r6' to 'extractTextBlocks'
// - Renamed export 't6' to 'getAttachmentSizes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 711513
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let v = e => {
    return safeJsonUtils.safeParse(e.ext?.chat_ability, undefined);
  };
  let h = e => {
    let {
      action_bar_skill_id: r
    } = e.ext ?? {};
    if (isStringTypeCheck.isString(r)) {
      return r;
    }
    let o = v(e);
    if ((o == null ? undefined : o.ability_type) !== undefined) {
      return `${o == null ? undefined : o.ability_type}`;
    } else {
      return (e == null ? undefined : e.skill?.skill_id) || "0";
    }
  };
  let m = e => {
    let {
      action_bar_skill_id: s
    } = e.ext ?? {};
    if (isStringTypeCheck.isString(s)) {
      if (s === skillConstantsEnum.SkillId.SkillFreeChat) {
        return null;
      } else {
        return s;
      }
    }
    let l = v(e);
    let a = (l == null ? undefined : l.ability_type) ?? (e == null ? undefined : e.skill?.skill_id_no_default);
    if (a) {
      return `${a}`;
    } else {
      return null;
    }
  };
  let f = e => {
    let r = infraUtilFunctions.parseNumber(e.ext?.action_bar_skill_id);
    if (r === aiAssistantSkillTypes.SkillTypes.SkillFreeChat) {
      return null;
    }
    let o = v(e);
    let l = r ?? (o == null ? undefined : o.ability_type) ?? (e == null ? undefined : e.skill?.skill_id_no_default);
    if (l) {
      return skillTypeMappings.getSkillName(l);
    } else {
      return null;
    }
  };
  let g = e => {
    let r = infraUtilFunctions.parseNumber(e.ext?.action_bar_skill_id);
    let o = v(e);
    return +!!(r ?? (o == null ? undefined : o.ability_type) ?? (e == null ? undefined : e.skill?.skill_id_no_default));
  };
  let y = e => {
    let t = safeArrayFlattenUtil.safeFlattenArray(e.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT).map(e => {
      var n;
      if ((n = e.content) === null || n === undefined) {
        return undefined;
      } else {
        return n.attachment_block?.attachments;
      }
    })).filter(e => !!e);
    if (t.length) {
      return t;
    }
  };
  let b = e => safeArrayFlattenUtil.safeFlattenArray(e.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT).map(e => {
    var n;
    if ((n = e.content) === null || n === undefined) {
      return undefined;
    } else {
      return n.attachment_block?.attachments;
    }
  })).filter(e => (e == null ? undefined : e.type) === attachmentConstants.AttachmentType.AttachmentTypeImage);
  let S = e => e.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE).map(e => {
    return e.content?.reference_block;
  }).filter(e => !!e);
  let k = e => {
    let t = e.map(e => e.type)[0];
    if (t) {
      return {
        [attachmentConstants.ReferenceType.ReferenceTypeText]: "text",
        [attachmentConstants.ReferenceType.ReferenceTypeLink]: "url",
        [attachmentConstants.ReferenceType.ReferenceTypeFile]: "file",
        [attachmentConstants.ReferenceType.ReferenceTypeImage]: "file",
        [attachmentConstants.ReferenceType.ReferenceTypeVideo]: "file",
        [attachmentConstants.ReferenceType.ReferenceTypeCodeDirectory]: "directory",
        [attachmentConstants.ReferenceType.ReferenceTypeUnknown]: "text",
        [attachmentConstants.ReferenceType.ReferenceTypePPTTemplate]: "file",
        [attachmentConstants.ReferenceType.ReferenceTypeLarkDoc]: "lark_doc"
      }[t];
    }
  };
  let T = e => e.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT);
  let w = e => {
    let t = y(e);
    if (t && t.length > 0) {
      return "file";
    }
    if (b(e).length > 0) {
      return "pic";
    }
    let n = T(e);
    if (n != null) {
      n.length;
    }
    return "text";
  };
  let E = e => {
    if (e == null ? undefined : e.length) {
      return e.map(e => {
        return (e == null ? undefined : e.file?.size) ?? (e == null ? undefined : e.media?.size);
      }).join(",");
    }
  };
  let C = e => {
    if (e == null ? undefined : e.length) {
      return e.map(e => {
        return fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension((e == null ? undefined : e.file?.name) ?? (e == null ? undefined : e.image?.name) ?? (e == null ? undefined : e.media?.name) ?? ""));
      }).join(",");
    }
  };
  let x = e => {
    if (!(e == null ? undefined : e.length)) {
      return;
    }
    let t = e.map(e => {
      return (e == null ? undefined : e.file?.uri) ?? (e == null ? undefined : e.image?.uri) ?? (e == null ? undefined : e.media?.resource_uri) ?? "";
    });
    if (t.length > 1) {
      return safeJsonUtils.safeStringify(t);
    } else {
      return t[0];
    }
  };
  let I = e => {
    if (!(e == null ? undefined : e.length)) {
      return;
    }
    let t = e.map(e => {
      return (e == null ? undefined : e.file?.name) ?? (e == null ? undefined : e.image?.name) ?? (e == null ? undefined : e.media?.name) ?? "";
    });
    if (t.length > 1) {
      return safeJsonUtils.safeStringify(t);
    } else {
      return t[0];
    }
  };
  require.d(exports, {
    getSkillIdWithDefault: function () {
      return m;
    },
    extractAttachments: function () {
      return y;
    },
    determineMessageType: function () {
      return w;
    },
    getAttachmentNames: function () {
      return I;
    },
    hasSkillId: function () {
      return g;
    },
    extractReferences: function () {
      return S;
    },
    getAttachmentUris: function () {
      return x;
    },
    getReferenceType: function () {
      return k;
    },
    getSkillId: function () {
      return h;
    },
    getSkillIdNoDefault: function () {
      return f;
    },
    getAttachmentCategories: function () {
      return C;
    },
    extractTextBlocks: function () {
      return T;
    },
    getAttachmentSizes: function () {
      return E;
    }
  });
}
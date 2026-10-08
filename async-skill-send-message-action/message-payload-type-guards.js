// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$r' to 'hasImageInPayload'
// - Renamed export 'BY' to 'hasTextInPayload'
// - Renamed export 'Eu' to 'hasCopySendOperation'
// - Renamed export 'Fd' to 'isMainDiffStage'
// - Renamed export 'L2' to 'hasFileInPayload'
// - Renamed export 'MX' to 'hasAttachmentsInPayload'
// - Renamed export 'NC' to 'hasCompositeContentInPayload'
// - Renamed export 'Nn' to 'hasTextInMessage'
// - Renamed export 'Nr' to 'hasSendAttachmentsInMessage'
// - Renamed export 'Pf' to 'hasCollectionReference'
// - Renamed export 'RP' to 'hasDirectResearchInPayload'
// - Renamed export 'VT' to 'hasFilesInCompositeContent'
// - Renamed export 'YE' to 'hasRegenerateOperation'
// - Renamed export 'Zz' to 'hasGenPptInputInPayload'
// - Renamed export '_z' to 'hasLinksInCompositeContent'
// - Renamed export 'ah' to 'hasFileInMessage'
// - Renamed export 'cz' to 'hasWebsitesInCompositeContent'
// - Renamed export 'dL' to 'isMainReleaseOrSpecialSkill'
// - Renamed export 'gg' to 'hasNestedItemsInMessage'
// - Renamed export 'gm' to 'hasUpTemplateKeyInPayload'
// - Renamed export 'l5' to 'isGenOutlineAction'
// - Renamed export 'm$' to 'hasCompositeContentInMessage'
// - Renamed export 'qb' to 'hasImagesInCompositeContent'
// - Renamed export 'sO' to 'hasNestedItemsInPayload'
// - Renamed export 'tn' to 'hasImageInPayload_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 669738
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let s = e => "nestedItems" in e.payload;
  let l = e => "text" in e.payload;
  let u = e => "image" in e.payload || "image_key" in e.payload;
  let d = e => "file" in e.payload || "file_key" in e.payload;
  let m = e => "compositeContent" in e.payload;
  let c = e => {
    return !!e.payload.operation && "copySend" in e.payload.operation && !!e.payload.operation?.copySend;
  };
  let f = e => "attachments" in e.payload;
  let p = e => "gen_ppt_input" in e.payload || "gen_outline_input" in e.payload;
  let g = e => "up_template_key" in e.payload;
  let _ = e => "direct_research" in e.payload;
  let h = e => {
    return !!e.operation && !!("regenerate" in e.operation) && !!e.operation?.regenerate;
  };
  let b = e => "text" in e;
  let v = e => "image" in e || "image_key" in e;
  let y = e => "file" in e || "file_key" in e;
  let E = e => "compositeContent" in e;
  let N = e => E(e) && !!e.compositeContent && "images" in e.compositeContent && !!e.compositeContent.images;
  let T = e => E(e) && !!e.compositeContent && "files" in e.compositeContent && !!e.compositeContent.files;
  let I = e => E(e) && !!e.compositeContent && "links" in e.compositeContent && !!e.compositeContent.links;
  let S = e => E(e) && !!e.compositeContent && "websites" in e.compositeContent && !!e.compositeContent.websites;
  let A = e => "nestedItems" in e;
  let O = e => "sendAttachments" in e;
  let k = e => {
    return objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(e == null ? undefined : e.extraExt?.input_skill, undefined), "variables.action") === "gen_outline";
  };
  function w(e) {
    let {
      stage: t,
      botType: n,
      isNeedDowngrade: i
    } = e;
    return n === "Main" && t === uiComponentTypeConstants.releaseType.Diff && !i;
  }
  function C(e) {
    let {
      botType: t,
      stage: n,
      isNeedDowngrade: i,
      skill: o
    } = e;
    return t === "Main" && (n === uiComponentTypeConstants.releaseType.Release && !i || (o == null ? undefined : o.skill_type) === chatAppEnums.SkillType.VideoGeneration || (o == null ? undefined : o.skill_type) === chatAppEnums.SkillType.CodeAssistant || (o == null ? undefined : o.skill_type) === chatAppEnums.SkillType.MediaUnderstandingByAsr);
  }
  let D = e => {
    var r;
    if (e == null ? undefined : e.ext?.collection_id) {
      return true;
    }
    if (e == null ? undefined : e.ext?.reference_resource) {
      try {
        return !!((r = JSON.parse(e.ext.reference_resource)) === null || r === undefined ? undefined : r.collection?.id);
      } catch {}
    }
    return false;
  };
  require.d(exports, {
    hasImageInPayload: function () {
      return v;
    },
    hasTextInPayload: function () {
      return l;
    },
    hasCopySendOperation: function () {
      return c;
    },
    isMainDiffStage: function () {
      return w;
    },
    hasFileInPayload: function () {
      return d;
    },
    hasAttachmentsInPayload: function () {
      return f;
    },
    hasCompositeContentInPayload: function () {
      return m;
    },
    hasTextInMessage: function () {
      return b;
    },
    hasSendAttachmentsInMessage: function () {
      return O;
    },
    hasCollectionReference: function () {
      return D;
    },
    hasDirectResearchInPayload: function () {
      return _;
    },
    hasFilesInCompositeContent: function () {
      return T;
    },
    hasRegenerateOperation: function () {
      return h;
    },
    hasGenPptInputInPayload: function () {
      return p;
    },
    hasLinksInCompositeContent: function () {
      return I;
    },
    hasFileInMessage: function () {
      return y;
    },
    hasWebsitesInCompositeContent: function () {
      return S;
    },
    isMainReleaseOrSpecialSkill: function () {
      return C;
    },
    hasNestedItemsInMessage: function () {
      return A;
    },
    hasUpTemplateKeyInPayload: function () {
      return g;
    },
    isGenOutlineAction: function () {
      return k;
    },
    hasCompositeContentInMessage: function () {
      return E;
    },
    hasImagesInCompositeContent: function () {
      return N;
    },
    hasNestedItemsInPayload: function () {
      return s;
    },
    hasImageInPayload_1: function () {
      return u;
    }
  });
}
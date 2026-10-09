// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hb' to 'renderBlockContent'
// - Renamed export '_9' to 'getArtifactOp'
// - Renamed export 'bu' to 'getResearchBlocks'
// - Renamed export 'fY' to 'getDeepResearchId'
// - Renamed export 'mD' to 'getDocumentTitle'
// - Renamed export 'o2' to 'getArtifactBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 292414
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let s = e => {
    let t = "";
    for (let o of e) {
      if (o.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        t += safeJsonUtils.safeParse(o.content, {}).text;
      }
      if (o.block_type === chatConstantsEnum.messageContentType.BLOCK_IMAGE) {
        var i;
        let e = safeJsonUtils.safeParse(o.content, {});
        t += `![](${e == null ? undefined : (i = e.images) === null || i === undefined ? undefined : i[0]?.thumb_url})`;
      }
    }
    return t;
  };
  let l = e => {
    var t;
    return (e == null ? undefined : (t = e.content_blocks) === null || t === undefined ? undefined : t.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_RESEARCH)) ?? [];
  };
  let c = e => {
    var n;
    let i = e == null ? undefined : (n = e.content_blocks) === null || n === undefined ? undefined : n.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP)?.content_obj;
    if (i == null) {
      return undefined;
    } else {
      return i.artifact;
    }
  };
  let d = e => {
    var n;
    if (e == null) {
      return undefined;
    } else if ((n = e.content_blocks) === null || n === undefined) {
      return undefined;
    } else {
      return n.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT)?.content_obj;
    }
  };
  let u = e => {
    let t = objectPathGetDefault.getObjectPathDefault(e, ["verbose", "deep_research", "deep_research_id"]);
    let n = objectPathGetDefault.getObjectPathDefault(e, ["ext", "deep_research_id"]);
    return t || n;
  };
  let h = e => i18nTranslationUtils.i18nextTranslate("doc_title_duplicate", {
    docName: e || i18nTranslationUtils.i18nextTranslate("doc_title_unnamed")
  });
  require.d(exports, {
    renderBlockContent: function () {
      return s;
    },
    getArtifactOp: function () {
      return c;
    },
    getResearchBlocks: function () {
      return l;
    },
    getDeepResearchId: function () {
      return u;
    },
    getDocumentTitle: function () {
      return h;
    },
    getArtifactBlock: function () {
      return d;
    }
  });
}
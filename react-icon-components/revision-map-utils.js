// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AW' to 'createFlagMap'
// - Renamed export 'S2' to 'getRevisionMap'
// - Renamed export 'U0' to 'getEnabledMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 246069
         */
module.exports = function (module, exports, require) {
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  function a(e, r) {
    return i(docxCommentUtils.getCommentIdsFromAttributes(e, r));
  }
  function i(e) {
    return e.reduce((e, r) => {
      e[docxCommentUtils.getCommentIdPrefix(r)] = "true";
      return e;
    }, {});
  }
  function c(e, r) {
    return editorRevisionUtilities.getRevisionAttrs(e, r, false).reduce((e, r) => {
      e[editorRevisionUtilities.formatRevisionId(r.revisionId)] = editorRevisionUtilities.stringifyRevOmitId(r);
      return e;
    }, {});
  }
  require.d(exports, {
    createFlagMap: function () {
      return i;
    },
    getRevisionMap: function () {
      return c;
    },
    getEnabledMap: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Updated imported property 'hl' to 'isInsertOp' (module 135760)
// - Updated imported property 'BO' to 'isMergeMutation' (module 135760)
// - Updated imported property '_k' to 'isReplaceOp' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: collab-delay.8beaeed6.js
         * chunkId: 14097
         * moduleId: 788873
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  function t(i) {
    return n => n.some(n => docxEditorCore.isInsertOp(n) && !i(n.action.li) || docxEditorCore.isMergeMutation(n) && !i(n.action.li) || docxEditorCore.isReplaceOp(n) && Array.isArray(n.action.oi) && n.action.oi.length > 0);
  }
  require.r(exports);
  require.d(exports, {
    moveOpChecker: function () {
      return t;
    }
  });
}
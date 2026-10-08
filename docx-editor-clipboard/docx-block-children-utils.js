// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getBlockStructure'
// - Renamed export 'q' to 'getAllBlockChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 429601
         */
module.exports = function (module, exports, require) {
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  function l(e) {
    if (docxTableLayoutUtils.isTableBlock(e)) {
      return {
        children: docxTableLayoutUtils.getCellRecordIds(e)
      };
    }
    let n = e.children || [];
    let r = [];
    if (editorTextBlockUtilities.hasTextWithApoolSimple(e)) {
      r = editorTextBlockUtilities.getInlineDisplayMarksFromText(e);
    }
    return {
      children: n,
      derivedChildren: r
    };
  }
  function a(e) {
    let {
      children: n,
      derivedChildren: r = []
    } = l(e);
    return n.concat(r);
  }
  require.d(exports, {
    getBlockStructure: function () {
      return l;
    },
    getAllBlockChildren: function () {
      return a;
    }
  });
}
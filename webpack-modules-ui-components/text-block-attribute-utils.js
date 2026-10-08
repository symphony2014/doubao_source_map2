// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Zj' to 'sanitizeBlockData'
// - Renamed export 'lP' to 'updateInlineMarks'
// - Renamed export 'NT' to 'isInlineComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 37833
         */
module.exports = function (module, exports, require) {
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var docxEquationBlockRenderer = require("docx-equation-block-renderer") /*id: 541234*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  function s(e) {
    let {
      attributes: r = {}
    } = e;
    return !!r[inlineComponentConstants.componentType] || !!r[displayTypeConstants.displayInlineBlock];
  }
  function c(e) {
    if (e) {
      if (e[docxEquationBlockRenderer.EquationRenderer.KEY]) {
        delete e[docxEquationBlockRenderer.EquationRenderer.KEY];
        delete e.objectID;
      }
      delete e[displayTypeConstants.displayInlineBlock];
      delete e[inlineComponentConstants.componentType];
      delete e.inlineCode;
    }
  }
  function d(e, r, n) {
    editorTextBlockUtilities.getInlineDisplayMarks(r).forEach(r => {
      e.replace(r, ["parent_id"], n);
    });
  }
  require.d(exports, {
    sanitizeBlockData: function () {
      return c;
    },
    updateInlineMarks: function () {
      return d;
    },
    isInlineComponent: function () {
      return s;
    }
  });
}
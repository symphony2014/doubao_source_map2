// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UT' to 'canApplyHighlight'
// - Renamed export 'Vi' to 'applyHighlight'
// - Renamed export 'x7' to 'applyHighlightWithTimeout'
// - Renamed export 'zE' to 'clearHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 788454
         */
module.exports = function (module, exports, require) {
  var editorFormatRevisionUtils = require("editor-format-revision-utils") /*id: 63043*/;
  var textHighlightColors = require("text-highlight-colors") /*id: 514350*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  let a = (e, i) => {
    let n = JSON.stringify(e);
    try {
      window.localStorage.setItem(`${i}_TEXTHIGHLIGHT_COLOR`, n);
    } catch (e) {}
  };
  let s = (e, i, n, s) => {
    if (s) {
      a(i, s);
    }
    let c = n ? textHighlightColors.textHighlightBg : textHighlightColors.textHighlight;
    let d = n ? i[textHighlightColors.highlightColors.BACKGROUND_COLOR] : i[textHighlightColors.highlightColors.COLOR];
    let u = e.filter(e => editorTextBlockUtilities.isTextEditable(e));
    window.setTimeout(() => editorFormatRevisionUtils.toggleAttributeForBlocks(u, c, d), 0);
  };
  let c = function (e, i, n = false, s) {
    let c = e.filter(e => editorTextBlockUtilities.isTextEditable(e));
    let d = i[textHighlightColors.highlightColors.COLOR];
    let u = i[textHighlightColors.highlightColors.BACKGROUND_COLOR];
    let h = {};
    if (d) {
      h[textHighlightColors.textHighlight] = d;
    }
    if (u) {
      h[textHighlightColors.textHighlightBg] = u;
    }
    editorFormatRevisionUtils.applyFormatRevisions(c, h);
    if (n && s) {
      a(i, s);
    }
  };
  function d(e) {
    let i = e.filter(e => editorTextBlockUtilities.isTextEditable(e));
    editorFormatRevisionUtils.applyFormatRevisions(i, {
      [textHighlightColors.textHighlight]: "",
      [textHighlightColors.textHighlightBg]: ""
    }, {
      [textHighlightColors.textHighlight]: true,
      [textHighlightColors.textHighlightBg]: true
    });
  }
  let u = (e, i) => {
    if (Object.values(i).every(e => !e)) {
      return false;
    }
    let n = e.filter(e => !e.model.isEmpty);
    return !!n.length && !!n[0] && n.every(e => {
      let n = true;
      if (i[textHighlightColors.highlightColors.COLOR]) {
        n = n && editorFormatRevisionUtils.checkAttributeInSelection(e.model, textHighlightColors.textHighlight, i[textHighlightColors.highlightColors.COLOR]);
      }
      if (i[textHighlightColors.highlightColors.BACKGROUND_COLOR]) {
        n = n && editorFormatRevisionUtils.checkAttributeInSelection(e.model, textHighlightColors.textHighlightBg, i[textHighlightColors.highlightColors.BACKGROUND_COLOR]);
      }
      return n;
    });
  };
  require.d(exports, {
    canApplyHighlight: function () {
      return u;
    },
    applyHighlight: function () {
      return c;
    },
    applyHighlightWithTimeout: function () {
      return s;
    },
    clearHighlight: function () {
      return d;
    }
  });
}
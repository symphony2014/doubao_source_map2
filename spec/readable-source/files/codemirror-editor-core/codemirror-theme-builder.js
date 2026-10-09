// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 615084
         */
module.exports = function (module, exports, require) {
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  exports.createTheme = t => {
    var {
      theme: e,
      settings: i = {},
      styles: r = []
    } = t;
    var o = {
      ".cm-gutters": {}
    };
    var l = {};
    if (i.background) {
      l.backgroundColor = i.background;
    }
    if (i.backgroundImage) {
      l.backgroundImage = i.backgroundImage;
    }
    if (i.foreground) {
      l.color = i.foreground;
    }
    if (i.fontSize) {
      l.fontSize = i.fontSize;
    }
    if (i.background || i.foreground) {
      o["&"] = l;
    }
    if (i.fontFamily) {
      o["&.cm-editor .cm-scroller"] = {
        fontFamily: i.fontFamily
      };
    }
    if (i.gutterBackground) {
      o[".cm-gutters"].backgroundColor = i.gutterBackground;
    }
    if (i.gutterForeground) {
      o[".cm-gutters"].color = i.gutterForeground;
    }
    if (i.gutterBorder) {
      o[".cm-gutters"].borderRightColor = i.gutterBorder;
    }
    if (i.caret) {
      o[".cm-content"] = {
        caretColor: i.caret
      };
      o[".cm-cursor, .cm-dropCursor"] = {
        borderLeftColor: i.caret
      };
    }
    var a = {};
    if (i.gutterActiveForeground) {
      a.color = i.gutterActiveForeground;
    }
    if (i.lineHighlight) {
      o[".cm-activeLine"] = {
        backgroundColor: i.lineHighlight
      };
      a.backgroundColor = i.lineHighlight;
    }
    o[".cm-activeLineGutter"] = a;
    if (i.selection) {
      o["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"] = {
        background: i.selection + " !important"
      };
    }
    if (i.selectionMatch) {
      o["& .cm-selectionMatch"] = {
        backgroundColor: i.selectionMatch
      };
    }
    var h = codemirrorEditorViewCore.EditorView.theme(o, {
      dark: e === "dark"
    });
    var c = codemirrorLanguageSupport.HighlightStyle.define(r);
    return [h, codemirrorLanguageSupport.highlightTheme(c)];
  };
}
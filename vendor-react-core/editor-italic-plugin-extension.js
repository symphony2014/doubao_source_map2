// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'CustomItalicPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 913509
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorKitConstants = require("editor-kit-constants") /*id: 71435*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var a = function (t) {
    function e(r) {
      var n = t.call(this, r) || this;
      n.handleInput = function (t) {
        if (t.inputType === "formatItalic") {
          t.preventEvent();
          t.preventDefault();
          t.stopEvent();
          n.editor.toggleAttribute(e.KEY);
        }
      };
      var o = n.editor;
      o.registerCommand(e.KEY, function () {
        o.toggleAttribute(e.KEY);
      });
      o.on(editorEventConstants.editorEventTypes.INPUT, n.handleInput);
      return n;
    }
    typescriptHelpers.extendClass(e, t);
    var r = e.prototype;
    r.deserialize = function (t) {
      var e = t.node;
      var r = t.deltaSet;
      var n = t.zoneId;
      if (e instanceof HTMLElement) {
        var i = e.tagName;
        var s = e.getAttribute("style") || "";
        if (i === "I" || i === "EM" || /\bfont-style:\s*italic\b/i.test(s)) {
          return editorClipboardManager.addAttrsToDelta(r, n, {
            italic: "true"
          }, false);
        }
      }
      return r;
    };
    r.serialize = function (t) {
      return editorClipboardManager.nodeWrapSerializer(t, {
        tagAttribute: "italic",
        wrapTag: editorKitConstants.formatMarkMap.italic
      });
    };
    return e;
  }(require("editor-italic-plugin") /*id: 566226*/.ItalicPlugin);
  require.d(exports, {
    CustomItalicPlugin: function () {
      return a;
    }
  });
}
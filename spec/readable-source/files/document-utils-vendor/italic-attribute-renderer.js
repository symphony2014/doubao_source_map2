// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'ItalicRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 675703
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorKitConstants = require("editor-kit-constants") /*id: 71435*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var renderWrapperUtil = require("render-wrapper-util") /*id: 212000*/;
  var u = function (e) {
    function t(r) {
      var n = e.call(this, r) || this;
      n.handleInput = function (e) {
        if (e.inputType === "formatItalic") {
          e.preventEvent();
          e.preventDefault();
          e.stopEvent();
          n.editor.toggleAttribute(t.KEY);
        }
      };
      var o = n.editor;
      o.registerCommand(t.KEY, function () {
        o.toggleAttribute(t.KEY);
      });
      o.on(editorEventConstants.editorEventTypes.INPUT, n.handleInput);
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.deserialize = function (e) {
      var t = e.node;
      var r = e.deltaSet;
      var n = e.zoneId;
      if (t instanceof HTMLElement) {
        var i = t.tagName;
        var a = t.getAttribute("style") || "";
        if (i === "I" || i === "EM" || /\bfont-style:\s*italic\b/i.test(a)) {
          return editorClipboardManager.addAttrsToDelta(r, n, {
            italic: "true"
          }, false);
        }
      }
      return r;
    };
    r.serialize = function (e) {
      return editorClipboardManager.nodeWrapSerializer(e, {
        tagAttribute: "italic",
        wrapTag: editorKitConstants.formatMarkMap.italic
      });
    };
    return t;
  }(function (e) {
    function t(t) {
      var r = t.editor;
      var n = e.call(this) || this;
      n.name = "Italic";
      n.editor = r;
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === t.KEY;
    };
    r.render = function (e) {
      var t = e.children;
      e.style.fontStyle = "italic";
      return t;
    };
    t.KEY = "italic";
    typescriptHelpers_1.decorate([renderWrapperUtil.wrapRenderFunction], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer));
  require.d(exports, {
    ItalicRenderer: function () {
      return u;
    }
  });
}
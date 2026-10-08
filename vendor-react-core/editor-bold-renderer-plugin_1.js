// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'BoldRendererPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 128781
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var editorKitConstants = require("editor-kit-constants") /*id: 71435*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var editorBoldRendererPlugin = require("editor-bold-renderer-plugin") /*id: 454650*/;
  function c(t) {
    var e = t.tagName;
    var r = t.getAttribute("style") || "";
    return e === "B" || e === "STRONG" || /\bfont-weight:\s*bold\b/i.test(r);
  }
  var l = function (t) {
    function e(r) {
      var n = t.call(this, r) || this;
      n.handleInput = function (t) {
        if (t.inputType === "formatBold") {
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
      if (e && e instanceof HTMLElement && c(e)) {
        return editorClipboardManager.addAttrsToDelta(r, n, {
          bold: "true"
        }, false);
      } else {
        return r;
      }
    };
    r.serialize = function (t) {
      return editorClipboardManager.nodeWrapSerializer(t, {
        tagAttribute: "bold",
        wrapTag: editorKitConstants.formatMarkMap.bold
      });
    };
    return e;
  }(editorBoldRendererPlugin.BoldRenderer);
  require.d(exports, {
    BoldRendererPlugin: function () {
      return l;
    }
  });
}
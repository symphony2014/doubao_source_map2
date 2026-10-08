// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'BoldPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 13270
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
    function t(t) {
      var r = t.editor;
      var n = e.call(this) || this;
      n.name = "Bold";
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
      e.style.fontWeight = "bold";
      return t;
    };
    t.KEY = "bold";
    typescriptHelpers_1.decorate([renderWrapperUtil.wrapRenderFunction], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  function c(e) {
    var t = e.tagName;
    var r = e.getAttribute("style") || "";
    return t === "B" || t === "STRONG" || /\bfont-weight:\s*bold\b/i.test(r);
  }
  var h = function (e) {
    function t(r) {
      var n = e.call(this, r) || this;
      n.handleInput = function (e) {
        if (e.inputType === "formatBold") {
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
      if (t && t instanceof HTMLElement && c(t)) {
        return editorClipboardManager.addAttrsToDelta(r, n, {
          bold: "true"
        }, false);
      } else {
        return r;
      }
    };
    r.serialize = function (e) {
      return editorClipboardManager.nodeWrapSerializer(e, {
        tagAttribute: "bold",
        wrapTag: editorKitConstants.formatMarkMap.bold
      });
    };
    return t;
  }(u);
  require.d(exports, {
    BoldPlugin: function () {
      return h;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'LarkDocxPasteSupport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 523382
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  require("jquery-core-library") /*id: 775150*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var docTypeConstants = require("doc-type-constants") /*id: 194096*/;
  var s = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.name = "LarkDocxPasteSupport";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleIndent = function (e, t, n) {
      if (e instanceof HTMLElement) {
        var o = e.style.textIndent;
        if (o && o !== "0px") {
          if (e.nodeName === "UL" && e.firstChild?.nodeName === "DIV") {
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
              "text-indent": "true"
            });
          } else if (e.nodeName === "DIV") {
            var r = 1;
            var l = e.innerHTML;
            var s = "&nbsp;&nbsp;";
            var u = RegExp(s, "gi");
            for (u.lastIndex = 0; u.exec(l) !== null;) {
              if (r * s.length === u.lastIndex) {
                r++;
              }
            }
            var d = {
              "text-indent": "true"
            };
            if (r > 1) {
              d.list = "indent" + --r;
            }
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, d);
          }
        }
      }
    };
    n.deserialize = function (e) {
      var n = e.node;
      var i = e.deltaSet;
      var o = e.zoneId;
      if (!(n instanceof HTMLElement)) {
        return i;
      }
      var r = n.ownerDocument.body?.lastElementChild;
      if (r instanceof HTMLElement && r.dataset[docTypeConstants.docTypeConstants.LARK_DOCX]) {
        this.handleIndent(n, i, o);
      }
      return i;
    };
    t.KEY = "LarkDocxPasteSupport";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1000)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    LarkDocxPasteSupport: function () {
      return s;
    }
  });
}
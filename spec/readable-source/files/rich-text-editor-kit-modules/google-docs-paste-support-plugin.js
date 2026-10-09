// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'GoogleDocsPasteSupport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 240012
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
      t.name = "GoogleDocsPasteSupport";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleIndent = function (e, t, n) {
      if (e instanceof HTMLElement) {
        var i = e.style.textIndent;
        var o = e.style.marginLeft;
        if (i && (richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
          "text-indent": "true"
        }), o)) {
          var r = Number(o.split("pt")[0]) / 36;
          richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
            list: "indent" + r
          });
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
      var r = n.ownerDocument.body?.firstElementChild;
      if (r && r.id.startsWith(docTypeConstants.docTypeConstants.GOOGLE_DOC)) {
        this.handleIndent(n, i, o);
      }
      return i;
    };
    t.KEY = "googleDocsPasteSupport";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1000)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    GoogleDocsPasteSupport: function () {
      return s;
    }
  });
}
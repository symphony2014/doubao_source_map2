// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'TencentDocsPasteSupportPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 368849
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
      t.name = "TencentDocsPasteSupport";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleIndent = function (e, t, n) {
      if (e instanceof HTMLElement) {
        var i = "pap-left-indent-";
        if (e.style.marginLeft) {
          richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
            "text-indent": "true"
          });
          var o;
          var r = Array.from(e.classList).find(function (e) {
            return e.startsWith(i);
          });
          if (r) {
            o = 0 + Number(r.split(i)[1].split("em")[0]) / 2;
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
              list: "indent" + o
            });
          }
        }
      }
    };
    n.deserialize = function (e) {
      var n = e.node;
      var i = e.deltaSet;
      var o = e.zoneId;
      if (n instanceof HTMLElement && n.ownerDocument.body.firstChild?.nodeName === docTypeConstants.docTypeConstants.QQ_DOC) {
        this.handleIndent(n, i, o);
      }
      return i;
    };
    t.KEY = "tencentDocsPasteSupport";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1000)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    TencentDocsPasteSupportPlugin: function () {
      return s;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'LarkPasteSupport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 234319
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
      t.name = "LarkDocsPasteSupport";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.handleIndent = function (e, t, n) {
      if (e instanceof HTMLElement) {
        var i = e.style.marginLeft ? Number(e.style.marginLeft.split("em")[0]) : 0;
        if (i > 0) {
          if (i === 1) {
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
              list: "indent1"
            });
          } else if (i === 2) {
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
              "text-indent": "true"
            });
          } else {
            var o = Math.floor((i - 2) / 1);
            richTextEditorListPlugin.updateDeltaSetAttributes(t, n, {
              "text-indent": "true",
              list: "indent" + o
            });
          }
        }
      }
    };
    n.deserialize = function (e) {
      var t = e.node;
      var n = e.deltaSet;
      var i = e.zoneId;
      var o = e.fromBusinessKey;
      if (t instanceof HTMLElement && o === docTypeConstants.docTypeConstants.LARK_DOCS) {
        this.handleIndent(t, n, i);
      }
      return n;
    };
    t.KEY = "LarkDocsPasteSupport";
    t.DATA_SET_KEY = "businessKey";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(1000)], t.prototype, "deserialize", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    LarkPasteSupport: function () {
      return s;
    }
  });
}
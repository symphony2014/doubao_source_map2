// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'InlineCodeRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 20665
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var renderWrapperUtil = require("render-wrapper-util") /*id: 212000*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var u = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.name = "InlineCode";
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.match = function (e) {
      return e === t.KEY;
    };
    n.render = function (e) {
      var d = e.children;
      var c = e.lineState;
      var h = e.op;
      var f = c.getOps();
      var p = f.indexOf(h);
      if (typeof h.insert == "string" && f[f.length - 1]?.insert === h.insert + "\n") {
        p = f.length - 1;
      }
      var v = "inline-code";
      if (p === 0 || !f[p - 1]?.attributes?.[t.KEY]) {
        v += " inline-code_start";
      }
      if (p === f.length - 1 || !f[p + 1]?.attributes?.[t.KEY] || f[p + 1]?.insert === "\n") {
        v += " inline-code_end";
      }
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        spellCheck: false,
        className: v
      }, d);
    };
    t.KEY = "inlineCode";
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(9999), renderWrapperUtil.wrapRenderFunction], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    InlineCodeRenderer: function () {
      return u;
    }
  });
}
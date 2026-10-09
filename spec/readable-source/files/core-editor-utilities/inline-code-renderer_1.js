// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'InlineCodeRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 919823
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var renderAttributeWrapper = require("render-attribute-wrapper") /*id: 31592*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var l = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.name = "InlineCode";
      return t;
    }
    typescriptHelpers.extendClass(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === t.KEY;
    };
    r.render = function (e) {
      var u = e.children;
      var d = e.lineState;
      var f = e.op;
      var g = d.getOps();
      var b = g.indexOf(f);
      if (typeof f.insert == "string" && g[g.length - 1]?.insert === f.insert + "\n") {
        b = g.length - 1;
      }
      var p = "inline-code";
      if (b === 0 || !g[b - 1]?.attributes?.[t.KEY]) {
        p += " inline-code_start";
      }
      if (b === g.length - 1 || !g[b + 1]?.attributes?.[t.KEY] || g[b + 1]?.insert === "\n") {
        p += " inline-code_end";
      }
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, {
        spellCheck: false,
        className: p
      }, u);
    };
    t.KEY = "inlineCode";
    typescriptHelpers.applyDecorators([editorPluginManager.createPriority(9999), renderAttributeWrapper.wrapRenderFunction], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    InlineCodeRenderer: function () {
      return l;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'StrikethroughRender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 728874
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var renderAttributeWrapper = require("render-attribute-wrapper") /*id: 31592*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var l = function (e) {
    function n(n) {
      var i = n.editor;
      var r = e.call(this) || this;
      r.name = "Strikethrough";
      r.editor = i;
      return r;
    }
    typescriptHelpers.extendClass(n, e);
    var i = n.prototype;
    i.match = function (e) {
      return e === n.KEY;
    };
    i.render = function (e) {
      var n = e.children;
      var i = e.style;
      var r = i.textDecoration || "";
      i.textDecoration = r + " line-through";
      e.class += " strike-through";
      return n;
    };
    n.KEY = "strikethrough";
    typescriptHelpers.applyDecorators([renderAttributeWrapper.wrapRenderFunction], n.prototype, "render", null);
    return n;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    StrikethroughRender: function () {
      return l;
    }
  });
}
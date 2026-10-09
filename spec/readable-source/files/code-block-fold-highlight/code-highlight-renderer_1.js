// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'CodeHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 645611
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var codeBlockHighlightUtils = require("code-block-highlight-utils") /*id: 873866*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var d = function (e) {
    function t(t) {
      var n = e.call(this) || this;
      n.name = "CodeHighlight";
      var o = t.editor;
      n.editor = o;
      return n;
    }
    typescriptHelpers.extendClass(t, e);
    var n = t.prototype;
    n.isCodeBlockZoneState = function (e) {
      return codeBlockHighlightUtils.isCodeBlockEntity(e);
    };
    n.match = function (e) {
      return e === t.KEY;
    };
    n.render = function (e) {
      e.class = s(e.class, e.attributes[codeBlockHighlightjsConstants.clientSideHighlightFlag]);
      return e.children;
    };
    t.KEY = codeBlockHighlightjsConstants.clientSideHighlightFlag;
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    CodeHighlight: function () {
      return d;
    }
  });
}
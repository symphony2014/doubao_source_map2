// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'buildCssString'
// - Renamed export 'q' to 'transformNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 392385
         */
module.exports = function (module, exports, require) {
  var cssSyntaxConstants = require("css-syntax-constants") /*id: 115450*/;
  var stringUtils = require("string-utils") /*id: 267634*/;
  function o(e, t) {
    var n = "";
    var r = stringUtils.getLength(e);
    var o = 0;
    for (; o < r; o++) {
      n += t(e[o], o, e, t) || "";
    }
    return n;
  }
  function s(e, t, n, s) {
    switch (e.type) {
      case cssSyntaxConstants.atLayer:
        if (e.children.length) {
          break;
        }
      case cssSyntaxConstants.atImport:
      case cssSyntaxConstants.cssDecl:
        return e.return = e.return || e.value;
      case cssSyntaxConstants.cssComment:
        return "";
      case cssSyntaxConstants.atKeyframes:
        return e.return = e.value + "{" + o(e.children, s) + "}";
      case cssSyntaxConstants.cssRule:
        e.value = e.props.join(",");
    }
    if (stringUtils.getSize(n = o(e.children, s))) {
      return e.return = e.value + "{" + n + "}";
    } else {
      return "";
    }
  }
  require.d(exports, {
    buildCssString: function () {
      return s;
    },
    transformNodes: function () {
      return o;
    }
  });
}
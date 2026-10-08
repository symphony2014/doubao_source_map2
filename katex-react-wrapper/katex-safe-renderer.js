// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'renderLatexSafe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 851686
         */
module.exports = function (module, exports, require) {
  var katexCoreRenderer = require("katex-core-renderer") /*id: 811377*/;
  require("empty-module-stub_7") /*id: 954761*/;
  let a = function (t, e = {}) {
    try {
      return katexCoreRenderer.default.renderToString(t, {
        throwOnError: false,
        strict: false,
        output: "html",
        trust: false,
        ...e
      });
    } catch (t) {
      return null;
    }
  };
  require.d(exports, {
    renderLatexSafe: function () {
      return a;
    }
  });
}
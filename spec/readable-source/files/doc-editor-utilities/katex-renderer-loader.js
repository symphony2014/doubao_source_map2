// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'loadKatexRenderer'
// - Renamed export 'p' to 'getKatexRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 62741
         */
module.exports = function (module, exports, require) {
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  let o = null;
  function s() {
    return o;
  }
  async function l() {
    if (o) {
      return o;
    }
    try {
      return o = (await Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("katex") /*id: 19945*/]).then(require.bind(require, "katex-renderer-wrapper") /*id: 958368*/)).default;
    } catch (e) {
      docxUtilityHelpers.captureException(`Failed to load katex: ${String(e)}`);
      return null;
    }
  }
  require.d(exports, {
    loadKatexRenderer: function () {
      return l;
    },
    getKatexRenderer: function () {
      return s;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'isLatexMathEnv'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 803017
         */
module.exports = function (module, exports, require) {
  var r = /\\begin\n*\{(equation|split|align|gather|alignat|CD)\}|\\tag/;
  function i(t) {
    return r.test(t);
  }
  require.d(exports, {
    isLatexMathEnv: function () {
      return i;
    }
  });
}
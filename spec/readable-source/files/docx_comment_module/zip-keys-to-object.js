// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'zipToObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_comment_module.03c94317.js
         * chunkId: 58738
         * moduleId: 133054
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    return e.reduce(function (e, o, n) {
      e[o] = t[n];
      return e;
    }, {});
  }
  require.d(exports, {
    zipToObject: function () {
      return n;
    }
  });
}
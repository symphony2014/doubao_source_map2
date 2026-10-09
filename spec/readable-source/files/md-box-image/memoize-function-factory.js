// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createMemoizer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 227553
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = Object.create(null);
    return function (n) {
      if (t[n] === undefined) {
        t[n] = e(n);
      }
      return t[n];
    };
  }
  require.d(exports, {
    createMemoizer: function () {
      return r;
    }
  });
}
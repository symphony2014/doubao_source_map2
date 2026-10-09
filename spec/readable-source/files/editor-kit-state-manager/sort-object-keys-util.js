// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'sortObjectKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 780137
         */
module.exports = function (module, exports, require) {
  function r(t) {
    if (t) {
      return Object.keys(t).sort().reduce(function (e, n) {
        e[n] = t[n];
        return e;
      }, {});
    } else {
      return null;
    }
  }
  require.d(exports, {
    sortObjectKeys: function () {
      return r;
    }
  });
}
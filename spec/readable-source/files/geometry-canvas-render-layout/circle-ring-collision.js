// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'isPointInRing'
// - Renamed export 'm' to 'isPointInCircle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 812309
         */
module.exports = function (module, exports, require) {
  function i(t, e, n, i, r) {
    var o = i - t;
    var a = r - e;
    return o * o + a * a < n * n;
  }
  function r(t, e, n, r, o, a) {
    return i(t, e, n + r / 2, o, a) && !i(t, e, n - r / 2, o, a);
  }
  require.d(exports, {
    isPointInRing: function () {
      return r;
    },
    isPointInCircle: function () {
      return i;
    }
  });
}
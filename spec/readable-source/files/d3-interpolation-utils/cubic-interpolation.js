// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createInterpolator'
// - Renamed export 't' to 'cubicInterpolate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 165595
         */
module.exports = function (module, exports, require) {
  function i(t, n, e, i, r) {
    var o = t * t;
    var u = o * t;
    return ((1 - t * 3 + o * 3 - u) * n + (4 - o * 6 + u * 3) * e + (1 + t * 3 + o * 3 - u * 3) * i + u * r) / 6;
  }
  function r(t) {
    var n = t.length - 1;
    return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n);
      var o = t[r];
      var u = t[r + 1];
      var a = r > 0 ? t[r - 1] : o * 2 - u;
      var s = r < n - 1 ? t[r + 2] : u * 2 - o;
      return i((e - r / n) * n, a, o, u, s);
    };
  }
  require.d(exports, {
    createInterpolator: function () {
      return r;
    },
    cubicInterpolate: function () {
      return i;
    }
  });
}
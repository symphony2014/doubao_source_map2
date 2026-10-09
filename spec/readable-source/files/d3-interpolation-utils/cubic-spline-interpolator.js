// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createCubicSpline'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 289649
         */
module.exports = function (module, exports, require) {
  var cubicInterpolation = require("cubic-interpolation") /*id: 165595*/;
  function r(t) {
    var n = t.length;
    return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n);
      var o = t[(r + n - 1) % n];
      var u = t[r % n];
      var a = t[(r + 1) % n];
      var s = t[(r + 2) % n];
      return cubicInterpolation.cubicInterpolate((e - r / n) * n, o, u, a, s);
    };
  }
  require.d(exports, {
    createCubicSpline: function () {
      return r;
    }
  });
}
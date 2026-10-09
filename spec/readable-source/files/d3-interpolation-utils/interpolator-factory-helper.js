// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createInterpolatedFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 143943
         */
module.exports = function (module, exports, require) {
  var interpolatorFactory = require("interpolator-factory") /*id: 585471*/;
  function r(t, n) {
    if (n === undefined) {
      n = t;
      t = interpolatorFactory.createInterpolator;
    }
    var e = 0;
    var r = n.length - 1;
    var o = n[0];
    var u = Array(r < 0 ? 0 : r);
    while (e < r) {
      u[e] = t(o, o = n[++e]);
    }
    return function (t) {
      var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
      return u[n](t - n);
    };
  }
  require.d(exports, {
    createInterpolatedFunction: function () {
      return r;
    }
  });
}
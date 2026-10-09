// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'cubicBezierEasing'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 4151
         */
module.exports = function (module, exports, require) {
  var identityFunction = require("identity-function") /*id: 482695*/;
  let l = (e, t, n) => (((1 - n * 3 + t * 3) * e + (n * 3 - t * 6)) * e + t * 3) * e;
  function r(e, t, n, r) {
    if (e === t && n === r) {
      return identityFunction.identity;
    }
    let o = t => function (e, t, n, i, r) {
      let o;
      let a;
      let s = 0;
      do {
        if ((o = l(a = t + (n - t) / 2, i, r) - e) > 0) {
          n = a;
        } else {
          t = a;
        }
      } while (Math.abs(o) > 1e-7 && ++s < 12);
      return a;
    }(t, 0, 1, e, n);
    return e => e === 0 || e === 1 ? e : l(o(e), t, r);
  }
  require.d(exports, {
    cubicBezierEasing: function () {
      return r;
    }
  });
}
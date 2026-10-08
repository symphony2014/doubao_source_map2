// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'cubicBezier'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 303125
         */
module.exports = function (module, exports, require) {
  var identityFunctionExport = require("identity-function-export") /*id: 107915*/;
  let r = (t, e, i) => (((1 - i * 3 + e * 3) * t + (i * 3 - e * 6)) * t + e * 3) * t;
  function s(t, e, i, s) {
    if (t === e && i === s) {
      return identityFunctionExport.identity;
    }
    let o = e => function (t, e, i, n, s) {
      let o;
      let a;
      let l = 0;
      do {
        if ((o = r(a = e + (i - e) / 2, n, s) - t) > 0) {
          i = a;
        } else {
          e = a;
        }
      } while (Math.abs(o) > 1e-7 && ++l < 12);
      return a;
    }(e, 0, 1, t, i);
    return t => t === 0 || t === 1 ? t : r(o(t), e, s);
  }
  require.d(exports, {
    cubicBezier: function () {
      return s;
    }
  });
}
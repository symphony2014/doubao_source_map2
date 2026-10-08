// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 685991
         */
module.exports = function (module, exports, require) {
  var r = Math.ceil;
  var i = Math.max;
  function o(e, t, n, o) {
    var a = -1;
    var s = i(r((t - e) / (n || 1)), 0);
    var u = Array(s);
    while (s--) {
      u[o ? s : ++a] = e;
      e += n;
    }
    return u;
  }
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var toSafeNumberUtil = require("to-safe-number-util") /*id: 338794*/;
  function u(e, t, n) {
    if (n && typeof n != "number" && verifyPropertyMatch.checkPropertyValue(e, t, n)) {
      t = n = undefined;
    }
    e = toSafeNumberUtil.toSafeNumber(e);
    if (t === undefined) {
      t = e;
      e = 0;
    } else {
      t = toSafeNumberUtil.toSafeNumber(t);
    }
    n = n === undefined ? e < t ? 1 : -1 : toSafeNumberUtil.toSafeNumber(n);
    return o(e, t, n, undefined);
  }
  require.d(exports, {
    createRange: function () {
      return u;
    }
  });
}
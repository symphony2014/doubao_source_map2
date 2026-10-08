// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'tickCalculator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 127535
         */
module.exports = function (module, exports, require) {
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  function a(t, e, n, a) {
    var s = a.minInterval;
    var h = a.maxInterval;
    var l = a.interval;
    var u = a.ticks;
    var c = a.exactTickCount;
    var p = a.allowDecimals;
    var d = p === undefined || p;
    if (arrayIsArrayUtil.isArray(u)) {
      return u.slice().sort(function (t, e) {
        return t - e;
      });
    }
    var f = (e - t) / (n - 1);
    var g = Math.floor(mathCalcUtils.calcLogBase(f, 10));
    var y = Math.pow(10, g);
    if (!d && y < 1) {
      y = 1;
    }
    var v = y;
    var m = false;
    if (c) {
      var x = [];
      var _ = 1;
      while (_ < 10) {
        x.push(_);
        _ += 0.5;
      }
      x.push(1.25);
      x.push(3.75);
      x.push(6.25);
      x.push(8.75);
      var b = x.map(function (t) {
        return t * y;
      });
      if (!d) {
        b = b.filter(function (t) {
          return Math.floor(t) === t;
        });
      }
      var w = 0;
      var S = b;
      for (; w < S.length; w++) {
        var A = S[w];
        var E = Math.floor(t / A) * A;
        if (Math.round((Math.ceil(e / A) * A - E) / A) + 1 === n) {
          v = A;
          m = true;
          break;
        }
      }
    }
    if (!c || !m) {
      var b = [y, y * 2, y * 5, y * 10];
      var k = 0;
      var M = b;
      for (; k < M.length; k++) {
        var A = M[k];
        if (Math.abs(A - f) < Math.abs(v - f)) {
          v = A;
        }
      }
    }
    if (isNumberUtil.isNumber(s) && Math.abs(v) < Math.abs(s)) {
      v = s;
    }
    if (isNumberUtil.isNumber(h) && Math.abs(v) > Math.abs(h)) {
      v = h;
    }
    if (typeof l == "number") {
      v = l;
    }
    var P = Math.floor(t / v) * v;
    var O = Math.round((Math.ceil(e / v) * v - P) / v + 1);
    var C = [];
    var T = 0;
    for (; T < O; T += 1) {
      if (typeof l == "number") {
        C.push(P + v * T);
      } else {
        C.push(parseFloat((P + v * T).toFixed(g < 0 ? -g + 2 : g + 2)));
      }
    }
    return C;
  }
  require.d(exports, {
    tickCalculator: function () {
      return a;
    }
  });
}
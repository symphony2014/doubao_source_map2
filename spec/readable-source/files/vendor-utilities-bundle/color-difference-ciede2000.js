// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40789.cd567674.js
         * chunkId: 40789
         * moduleId: 99121
         */
module.exports = function (module, exports, require) {
  exports.ciede2000 = function (e, a) {
    var s = e.L;
    var p = e.a;
    var m = e.b;
    var d = a.L;
    var x = a.a;
    var v = a.b;
    var f = i(n(p, 2) + n(m, 2));
    var b = i(n(x, 2) + n(v, 2));
    var h = (f + b) / 2;
    var g = (1 - i(n(h, 7) / (n(h, 7) + n(25, 7)))) * 0.5;
    var y = (1 + g) * p;
    var w = (1 + g) * x;
    var k = i(n(y, 2) + n(m, 2));
    var j = i(n(w, 2) + n(v, 2));
    var T = u(m, y);
    var A = u(v, w);
    var S = j - k;
    var _ = function (e, a, i, n) {
      if (e * a == 0) {
        return 0;
      }
      if (c(n - i) <= 180) {
        return n - i;
      }
      if (n - i > 180) {
        return n - i - 360;
      }
      if (n - i < -180) {
        return n - i + 360;
      }
      throw Error();
    }(f, b, T, A);
    var E = i(k * j) * 2 * t(l(_) / 2);
    var O = (s + d) / 2;
    var L = (k + j) / 2;
    var z = function (e, a, i, n) {
      if (e * a == 0) {
        return i + n;
      }
      if (c(i - n) <= 180) {
        return (i + n) / 2;
      }
      if (c(i - n) > 180 && i + n < 360) {
        return (i + n + 360) / 2;
      }
      if (c(i - n) > 180 && i + n >= 360) {
        return (i + n - 360) / 2;
      }
      throw Error();
    }(f, b, T, A);
    var C = 1 - o(l(z - 30)) * 0.17 + o(l(z * 2)) * 0.24 + o(l(z * 3 + 6)) * 0.32 - o(l(z * 4 - 63)) * 0.2;
    var N = r(-n((z - 275) / 25, 2)) * 30;
    var M = i(n(L, 7) / (n(L, 7) + n(25, 7)));
    var R = 1 + n(O - 50, 2) * 0.015 / i(20 + n(O - 50, 2));
    var D = 1 + L * 0.045;
    var P = 1 + L * 0.015 * C;
    var I = M * -2 * t(l(N * 2));
    return i(n((d - s) / +R, 2) + n(S / +D, 2) + n(E / +P, 2) + S / +D * I * (E / +P));
  };
  var i = Math.sqrt;
  var n = Math.pow;
  var o = Math.cos;
  var s = Math.atan2;
  var t = Math.sin;
  var c = Math.abs;
  var r = Math.exp;
  var p = Math.PI;
  function l(e) {
    return p / 180 * e;
  }
  function u(e, a) {
    if (e === 0 && a === 0) {
      return 0;
    }
    var i = 180 / p * s(e, a);
    if (i >= 0) {
      return i;
    } else {
      return i + 360;
    }
  }
}
// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 903754
         */
module.exports = function (module, exports, require) {
  exports.read = function (e, t, n, r, i) {
    var o;
    var a;
    var s = i * 8 - r - 1;
    var u = (1 << s) - 1;
    var c = u >> 1;
    var l = -7;
    var f = n ? i - 1 : 0;
    var h = n ? -1 : 1;
    var d = e[t + f];
    f += h;
    o = d & (1 << -l) - 1;
    d >>= -l;
    l += s;
    for (; l > 0; l -= 8) {
      o = o * 256 + e[t + f];
      f += h;
    }
    a = o & (1 << -l) - 1;
    o >>= -l;
    l += r;
    for (; l > 0; l -= 8) {
      a = a * 256 + e[t + f];
      f += h;
    }
    if (o === 0) {
      o = 1 - c;
    } else {
      if (o === u) {
        if (a) {
          return NaN;
        } else {
          return (d ? -1 : 1) * Infinity;
        }
      }
      a += Math.pow(2, r);
      o -= c;
    }
    return (d ? -1 : 1) * a * Math.pow(2, o - r);
  };
  exports.write = function (e, t, n, r, i, o) {
    var a;
    var s;
    var u;
    var c = o * 8 - i - 1;
    var l = (1 << c) - 1;
    var f = l >> 1;
    var h = (i === 23) * 5.960464477539062e-8;
    var d = r ? 0 : o - 1;
    var p = r ? 1 : -1;
    var g = +(t < 0 || t === 0 && 1 / t < 0);
    for (isNaN(t = Math.abs(t)) || t === Infinity ? (s = +!!isNaN(t), a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + f >= 1 ? t += h / u : t += h * Math.pow(2, 1 - f), t * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; i -= 8) {
      e[n + d] = s & 255;
      d += p;
      s /= 256;
    }
    a = a << i | s;
    c += i;
    for (; c > 0; c -= 8) {
      e[n + d] = a & 255;
      d += p;
      a /= 256;
    }
    e[n + d - p] |= g * 128;
  };
}
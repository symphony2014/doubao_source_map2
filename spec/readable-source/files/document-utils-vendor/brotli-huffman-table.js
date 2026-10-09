// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 379768
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    this.bits = e;
    this.value = t;
  }
  function n(e, t) {
    for (var r = 1 << t - 1; e & r;) {
      r >>= 1;
    }
    return (e & r - 1) + r;
  }
  function i(e, t, n, i, o) {
    do {
      e[t + (i -= n)] = new r(o.bits, o.value);
    } while (i > 0);
  }
  exports.HuffmanCode = r;
  exports.BrotliBuildHuffmanTable = function (e, t, o, a, s) {
    var l;
    var u;
    var c;
    var h;
    var d;
    var f;
    var A;
    var g;
    var p;
    var m;
    var y;
    var v = t;
    var b = new Int32Array(16);
    var w = new Int32Array(16);
    c = 0;
    y = new Int32Array(s);
    for (; c < s; c++) {
      b[a[c]]++;
    }
    u = 1;
    w[1] = 0;
    for (; u < 15; u++) {
      w[u + 1] = w[u] + b[u];
    }
    for (c = 0; c < s; c++) {
      if (a[c] !== 0) {
        y[w[a[c]]++] = c;
      }
    }
    m = p = 1 << (g = o);
    if (w[15] === 1) {
      for (h = 0; h < m; ++h) {
        e[t + h] = new r(0, y[0] & 65535);
      }
      return m;
    }
    u = 1;
    h = 0;
    c = 0;
    d = 2;
    for (; u <= o; ++u, d <<= 1) {
      for (; b[u] > 0; --b[u]) {
        i(e, t + h, d, p, l = new r(u & 255, y[c++] & 65535));
        h = n(h, u);
      }
    }
    A = m - 1;
    f = -1;
    u = o + 1;
    d = 2;
    for (; u <= 15; ++u, d <<= 1) {
      for (; b[u] > 0; --b[u]) {
        if ((h & A) !== f) {
          t += p;
          m += p = 1 << (g = function (e, t, r) {
            for (var n = 1 << t - r; t < 15 && !((n -= e[t]) <= 0);) {
              ++t;
              n <<= 1;
            }
            return t - r;
          }(b, u, o));
          e[v + (f = h & A)] = new r(g + o & 255, t - v - f & 65535);
        }
        l = new r(u - o & 255, y[c++] & 65535);
        i(e, t + (h >> o), d, p, l);
        h = n(h, u);
      }
    }
    return m;
  };
}
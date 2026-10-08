// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 860616
         */
module.exports = function (module, exports, require) {
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var n = 15;
  var o = 852;
  var s = 592;
  var a = 0;
  var l = 1;
  var h = 2;
  var c = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
  var u = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
  var d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
  var f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
  module.exports = function (t, e, r, p, g, m, v, y) {
    var b;
    var A;
    var S;
    var x;
    var w;
    var C;
    var T;
    var E;
    var F;
    var k = y.bits;
    var P = 0;
    var R = 0;
    var M = 0;
    var O = 0;
    var D = 0;
    var I = 0;
    var L = 0;
    var N = 0;
    var B = 0;
    var j = 0;
    var _ = null;
    var U = 0;
    var z = new commonBufferUtils.Buf16(n + 1);
    var V = new commonBufferUtils.Buf16(n + 1);
    var W = null;
    var G = 0;
    for (P = 0; P <= n; P++) {
      z[P] = 0;
    }
    for (R = 0; R < p; R++) {
      z[e[r + R]]++;
    }
    D = k;
    O = n;
    for (; O >= 1 && z[O] === 0; O--);
    if (D > O) {
      D = O;
    }
    if (O === 0) {
      g[m++] = 20971520;
      g[m++] = 20971520;
      y.bits = 1;
      return 0;
    }
    for (M = 1; M < O && z[M] === 0; M++);
    if (D < M) {
      D = M;
    }
    N = 1;
    P = 1;
    for (; P <= n; P++) {
      N <<= 1;
      if ((N -= z[P]) < 0) {
        return -1;
      }
    }
    if (N > 0 && (t === a || O !== 1)) {
      return -1;
    }
    P = 1;
    V[1] = 0;
    for (; P < n; P++) {
      V[P + 1] = V[P] + z[P];
    }
    for (R = 0; R < p; R++) {
      if (e[r + R] !== 0) {
        v[V[e[r + R]]++] = R;
      }
    }
    if (t === a) {
      _ = W = v;
      C = 19;
    } else if (t === l) {
      _ = c;
      U -= 257;
      W = u;
      G -= 257;
      C = 256;
    } else {
      _ = d;
      W = f;
      C = -1;
    }
    j = 0;
    R = 0;
    P = M;
    w = m;
    I = D;
    L = 0;
    S = -1;
    x = (B = 1 << D) - 1;
    if (t === l && B > o || t === h && B > s) {
      return 1;
    }
    while (true) {
      T = P - L;
      if (v[R] < C) {
        E = 0;
        F = v[R];
      } else if (v[R] > C) {
        E = W[G + v[R]];
        F = _[U + v[R]];
      } else {
        E = 96;
        F = 0;
      }
      b = 1 << P - L;
      M = A = 1 << I;
      do {
        g[w + (j >> L) + (A -= b)] = T << 24 | E << 16 | F | 0;
      } while (A !== 0);
      for (b = 1 << P - 1; j & b;) {
        b >>= 1;
      }
      if (b !== 0) {
        j &= b - 1;
        j += b;
      } else {
        j = 0;
      }
      R++;
      if (--z[P] == 0) {
        if (P === O) {
          break;
        }
        P = e[r + v[R]];
      }
      if (P > D && (j & x) !== S) {
        if (L === 0) {
          L = D;
        }
        w += M;
        N = 1 << (I = P - L);
        while (I + L < O && !((N -= z[I + L]) <= 0)) {
          I++;
          N <<= 1;
        }
        B += 1 << I;
        if (t === l && B > o || t === h && B > s) {
          return 1;
        }
        g[S = j & x] = D << 24 | I << 16 | w - m | 0;
      }
    }
    if (j !== 0) {
      g[w + j] = P - L << 24 | 4194304;
    }
    y.bits = D;
    return 0;
  };
}
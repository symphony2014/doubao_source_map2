// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 854896
         */
module.exports = function (module, exports, require) {
  let t = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
  let r = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
  let n = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
  let i = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
  module.exports = (e, o, a, s, l, u, c, h) => {
    let d;
    let f;
    let A;
    let g;
    let p;
    let m;
    let y;
    let v;
    let b;
    let w = h.bits;
    let C = 0;
    let E = 0;
    let I = 0;
    let B = 0;
    let x = 0;
    let D = 0;
    let S = 0;
    let k = 0;
    let _ = 0;
    let T = 0;
    let Q = null;
    let R = new Uint16Array(16);
    let F = new Uint16Array(16);
    let L = null;
    for (C = 0; C <= 15; C++) {
      R[C] = 0;
    }
    for (E = 0; E < s; E++) {
      R[o[a + E]]++;
    }
    B = 15;
    x = w;
    for (; B >= 1 && R[B] === 0; B--);
    if (x > B) {
      x = B;
    }
    if (B === 0) {
      l[u++] = 20971520;
      l[u++] = 20971520;
      h.bits = 1;
      return 0;
    }
    for (I = 1; I < B && R[I] === 0; I++);
    if (x < I) {
      x = I;
    }
    k = 1;
    C = 1;
    for (; C <= 15; C++) {
      k <<= 1;
      if ((k -= R[C]) < 0) {
        return -1;
      }
    }
    if (k > 0 && (e === 0 || B !== 1)) {
      return -1;
    }
    C = 1;
    F[1] = 0;
    for (; C < 15; C++) {
      F[C + 1] = F[C] + R[C];
    }
    for (E = 0; E < s; E++) {
      if (o[a + E] !== 0) {
        c[F[o[a + E]]++] = E;
      }
    }
    if (e === 0) {
      Q = L = c;
      m = 20;
    } else if (e === 1) {
      Q = t;
      L = r;
      m = 257;
    } else {
      Q = n;
      L = i;
      m = 0;
    }
    T = 0;
    E = 0;
    C = I;
    p = u;
    D = x;
    S = 0;
    A = -1;
    g = (_ = 1 << x) - 1;
    if (e === 1 && _ > 852 || e === 2 && _ > 592) {
      return 1;
    }
    while (true) {
      y = C - S;
      if (c[E] + 1 < m) {
        v = 0;
        b = c[E];
      } else if (c[E] >= m) {
        v = L[c[E] - m];
        b = Q[c[E] - m];
      } else {
        v = 96;
        b = 0;
      }
      d = 1 << C - S;
      I = f = 1 << D;
      do {
        l[p + (T >> S) + (f -= d)] = y << 24 | v << 16 | b | 0;
      } while (f !== 0);
      for (d = 1 << C - 1; T & d;) {
        d >>= 1;
      }
      if (d !== 0) {
        T &= d - 1;
        T += d;
      } else {
        T = 0;
      }
      E++;
      if (--R[C] == 0) {
        if (C === B) {
          break;
        }
        C = o[a + c[E]];
      }
      if (C > x && (T & g) !== A) {
        if (S === 0) {
          S = x;
        }
        p += I;
        k = 1 << (D = C - S);
        while (D + S < B && !((k -= R[D + S]) <= 0)) {
          D++;
          k <<= 1;
        }
        _ += 1 << D;
        if (e === 1 && _ > 852 || e === 2 && _ > 592) {
          return 1;
        }
        l[A = T & g] = x << 24 | D << 16 | p - u | 0;
      }
    }
    if (T !== 0) {
      l[p + T] = C - S << 24 | 4194304;
    }
    h.bits = x;
    return 0;
  };
}
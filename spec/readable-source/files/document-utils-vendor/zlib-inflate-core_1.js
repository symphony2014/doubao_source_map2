// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 264571
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t) {
    let r;
    let n;
    let i;
    let o;
    let a;
    let s;
    let l;
    let u;
    let c;
    let h;
    let d;
    let f;
    let A;
    let g;
    let p;
    let m;
    let y;
    let v;
    let b;
    let w;
    let C;
    let E;
    let I;
    let B;
    let x = e.state;
    r = e.next_in;
    I = e.input;
    n = r + (e.avail_in - 5);
    i = e.next_out;
    B = e.output;
    o = i - (t - e.avail_out);
    a = i + (e.avail_out - 257);
    s = x.dmax;
    l = x.wsize;
    u = x.whave;
    c = x.wnext;
    h = x.window;
    d = x.hold;
    f = x.bits;
    A = x.lencode;
    g = x.distcode;
    p = (1 << x.lenbits) - 1;
    m = (1 << x.distbits) - 1;
    e: do {
      if (f < 15) {
        d += I[r++] << f;
        f += 8;
        d += I[r++] << f;
        f += 8;
      }
      y = A[d & p];
      while (true) {
        d >>>= v = y >>> 24;
        f -= v;
        if ((v = y >>> 16 & 255) == 0) {
          B[i++] = y & 65535;
        } else if (v & 16) {
          b = y & 65535;
          if (v &= 15) {
            if (f < v) {
              d += I[r++] << f;
              f += 8;
            }
            b += d & (1 << v) - 1;
            d >>>= v;
            f -= v;
          }
          if (f < 15) {
            d += I[r++] << f;
            f += 8;
            d += I[r++] << f;
            f += 8;
          }
          y = g[d & m];
          while (true) {
            d >>>= v = y >>> 24;
            f -= v;
            if ((v = y >>> 16 & 255) & 16) {
              w = y & 65535;
              if (f < (v &= 15)) {
                d += I[r++] << f;
                if ((f += 8) < v) {
                  d += I[r++] << f;
                  f += 8;
                }
              }
              if ((w += d & (1 << v) - 1) > s) {
                e.msg = "invalid distance too far back";
                x.mode = 16209;
                break e;
              }
              d >>>= v;
              f -= v;
              if (w > (v = i - o)) {
                if ((v = w - v) > u && x.sane) {
                  e.msg = "invalid distance too far back";
                  x.mode = 16209;
                  break e;
                }
                C = 0;
                E = h;
                if (c === 0) {
                  C += l - v;
                  if (v < b) {
                    b -= v;
                    do {
                      B[i++] = h[C++];
                    } while (--v);
                    C = i - w;
                    E = B;
                  }
                } else if (c < v) {
                  C += l + c - v;
                  if ((v -= c) < b) {
                    b -= v;
                    do {
                      B[i++] = h[C++];
                    } while (--v);
                    C = 0;
                    if (c < b) {
                      b -= v = c;
                      do {
                        B[i++] = h[C++];
                      } while (--v);
                      C = i - w;
                      E = B;
                    }
                  }
                } else {
                  C += c - v;
                  if (v < b) {
                    b -= v;
                    do {
                      B[i++] = h[C++];
                    } while (--v);
                    C = i - w;
                    E = B;
                  }
                }
                while (b > 2) {
                  B[i++] = E[C++];
                  B[i++] = E[C++];
                  B[i++] = E[C++];
                  b -= 3;
                }
                if (b) {
                  B[i++] = E[C++];
                  if (b > 1) {
                    B[i++] = E[C++];
                  }
                }
              } else {
                C = i - w;
                do {
                  B[i++] = B[C++];
                  B[i++] = B[C++];
                  B[i++] = B[C++];
                  b -= 3;
                } while (b > 2);
                if (b) {
                  B[i++] = B[C++];
                  if (b > 1) {
                    B[i++] = B[C++];
                  }
                }
              }
            } else if ((v & 64) == 0) {
              y = g[(y & 65535) + (d & (1 << v) - 1)];
              continue;
            } else {
              e.msg = "invalid distance code";
              x.mode = 16209;
              break e;
            }
            break;
          }
        } else if ((v & 64) == 0) {
          y = A[(y & 65535) + (d & (1 << v) - 1)];
          continue;
        } else if (v & 32) {
          x.mode = 16191;
          break e;
        } else {
          e.msg = "invalid literal/length code";
          x.mode = 16209;
          break e;
        }
        break;
      }
    } while (r < n && i < a);
    r -= b = f >> 3;
    f -= b << 3;
    d &= (1 << f) - 1;
    e.next_in = r;
    e.next_out = i;
    e.avail_in = r < n ? 5 + (n - r) : 5 - (r - n);
    e.avail_out = i < a ? 257 + (a - i) : 257 - (i - a);
    x.hold = d;
    x.bits = f;
  };
}
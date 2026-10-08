// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 756369
         */
module.exports = function (module, exports, require) {
  var e = 30;
  var r = 12;
  module.exports = function (t, i) {
    var n;
    var o;
    var s;
    var a;
    var l;
    var h;
    var c;
    var u;
    var d;
    var f;
    var p;
    var g;
    var m;
    var v;
    var y;
    var b;
    var A;
    var S;
    var x;
    var w;
    var C;
    var T;
    var E;
    var F;
    var k;
    n = t.state;
    o = t.next_in;
    F = t.input;
    s = o + (t.avail_in - 5);
    a = t.next_out;
    k = t.output;
    l = a - (i - t.avail_out);
    h = a + (t.avail_out - 257);
    c = n.dmax;
    u = n.wsize;
    d = n.whave;
    f = n.wnext;
    p = n.window;
    g = n.hold;
    m = n.bits;
    v = n.lencode;
    y = n.distcode;
    b = (1 << n.lenbits) - 1;
    A = (1 << n.distbits) - 1;
    t: do {
      if (m < 15) {
        g += F[o++] << m;
        m += 8;
        g += F[o++] << m;
        m += 8;
      }
      S = v[g & b];
      while (true) {
        g >>>= x = S >>> 24;
        m -= x;
        if ((x = S >>> 16 & 255) == 0) {
          k[a++] = S & 65535;
        } else if (x & 16) {
          w = S & 65535;
          if (x &= 15) {
            if (m < x) {
              g += F[o++] << m;
              m += 8;
            }
            w += g & (1 << x) - 1;
            g >>>= x;
            m -= x;
          }
          if (m < 15) {
            g += F[o++] << m;
            m += 8;
            g += F[o++] << m;
            m += 8;
          }
          S = y[g & A];
          while (true) {
            g >>>= x = S >>> 24;
            m -= x;
            if ((x = S >>> 16 & 255) & 16) {
              C = S & 65535;
              if (m < (x &= 15)) {
                g += F[o++] << m;
                if ((m += 8) < x) {
                  g += F[o++] << m;
                  m += 8;
                }
              }
              if ((C += g & (1 << x) - 1) > c) {
                t.msg = "invalid distance too far back";
                n.mode = e;
                break t;
              }
              g >>>= x;
              m -= x;
              if (C > (x = a - l)) {
                if ((x = C - x) > d && n.sane) {
                  t.msg = "invalid distance too far back";
                  n.mode = e;
                  break t;
                }
                T = 0;
                E = p;
                if (f === 0) {
                  T += u - x;
                  if (x < w) {
                    w -= x;
                    do {
                      k[a++] = p[T++];
                    } while (--x);
                    T = a - C;
                    E = k;
                  }
                } else if (f < x) {
                  T += u + f - x;
                  if ((x -= f) < w) {
                    w -= x;
                    do {
                      k[a++] = p[T++];
                    } while (--x);
                    T = 0;
                    if (f < w) {
                      w -= x = f;
                      do {
                        k[a++] = p[T++];
                      } while (--x);
                      T = a - C;
                      E = k;
                    }
                  }
                } else {
                  T += f - x;
                  if (x < w) {
                    w -= x;
                    do {
                      k[a++] = p[T++];
                    } while (--x);
                    T = a - C;
                    E = k;
                  }
                }
                while (w > 2) {
                  k[a++] = E[T++];
                  k[a++] = E[T++];
                  k[a++] = E[T++];
                  w -= 3;
                }
                if (w) {
                  k[a++] = E[T++];
                  if (w > 1) {
                    k[a++] = E[T++];
                  }
                }
              } else {
                T = a - C;
                do {
                  k[a++] = k[T++];
                  k[a++] = k[T++];
                  k[a++] = k[T++];
                  w -= 3;
                } while (w > 2);
                if (w) {
                  k[a++] = k[T++];
                  if (w > 1) {
                    k[a++] = k[T++];
                  }
                }
              }
            } else if ((x & 64) == 0) {
              S = y[(S & 65535) + (g & (1 << x) - 1)];
              continue;
            } else {
              t.msg = "invalid distance code";
              n.mode = e;
              break t;
            }
            break;
          }
        } else if ((x & 64) == 0) {
          S = v[(S & 65535) + (g & (1 << x) - 1)];
          continue;
        } else if (x & 32) {
          n.mode = r;
          break t;
        } else {
          t.msg = "invalid literal/length code";
          n.mode = e;
          break t;
        }
        break;
      }
    } while (o < s && a < h);
    o -= w = m >> 3;
    m -= w << 3;
    g &= (1 << m) - 1;
    t.next_in = o;
    t.next_out = a;
    t.avail_in = o < s ? 5 + (s - o) : 5 - (o - s);
    t.avail_out = a < h ? 257 + (h - a) : 257 - (a - h);
    n.hold = g;
    n.bits = m;
  };
}
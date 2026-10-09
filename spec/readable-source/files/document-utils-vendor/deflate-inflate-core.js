// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 376900
         */
module.exports = function (module, exports, require) {
  function t() {
    this.table = new Uint16Array(16);
    this.trans = new Uint16Array(288);
  }
  function r(e, r) {
    this.source = e;
    this.sourceIndex = 0;
    this.tag = 0;
    this.bitcount = 0;
    this.dest = r;
    this.destLen = 0;
    this.ltree = new t();
    this.dtree = new t();
  }
  var n = new t();
  var i = new t();
  var o = new Uint8Array(30);
  var a = new Uint16Array(30);
  var s = new Uint8Array(30);
  var l = new Uint16Array(30);
  var u = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var c = new t();
  var h = new Uint8Array(320);
  function d(e, t, r, n) {
    var i;
    var o;
    for (i = 0; i < r; ++i) {
      e[i] = 0;
    }
    for (i = 0; i < 30 - r; ++i) {
      e[i + r] = i / r | 0;
    }
    o = n;
    i = 0;
    for (; i < 30; ++i) {
      t[i] = o;
      o += 1 << e[i];
    }
  }
  var f = new Uint16Array(16);
  function A(e, t, r, n) {
    var i;
    var o;
    for (i = 0; i < 16; ++i) {
      e.table[i] = 0;
    }
    for (i = 0; i < n; ++i) {
      e.table[t[r + i]]++;
    }
    o = 0;
    e.table[0] = 0;
    i = 0;
    for (; i < 16; ++i) {
      f[i] = o;
      o += e.table[i];
    }
    for (i = 0; i < n; ++i) {
      if (t[r + i]) {
        e.trans[f[t[r + i]]++] = i;
      }
    }
  }
  function g(e, t, r) {
    if (!t) {
      return r;
    }
    while (e.bitcount < 24) {
      e.tag |= e.source[e.sourceIndex++] << e.bitcount;
      e.bitcount += 8;
    }
    var n = e.tag & 65535 >>> 16 - t;
    e.tag >>>= t;
    e.bitcount -= t;
    return n + r;
  }
  function p(e, t) {
    while (e.bitcount < 24) {
      e.tag |= e.source[e.sourceIndex++] << e.bitcount;
      e.bitcount += 8;
    }
    var r = 0;
    var n = 0;
    var i = 0;
    var o = e.tag;
    do {
      n = n * 2 + (o & 1);
      o >>>= 1;
      ++i;
      r += t.table[i];
      n -= t.table[i];
    } while (n >= 0);
    e.tag = o;
    e.bitcount -= i;
    return t.trans[r + n];
  }
  function m(e, t, r) {
    while (true) {
      var n;
      var i;
      var u;
      var c;
      var h = p(e, t);
      if (h === 256) {
        return 0;
      }
      if (h < 256) {
        e.dest[e.destLen++] = h;
      } else {
        h -= 257;
        n = g(e, o[h], a[h]);
        i = p(e, r);
        c = u = e.destLen - g(e, s[i], l[i]);
        for (; c < u + n; ++c) {
          e.dest[e.destLen++] = e.dest[c];
        }
      }
    }
  }
  (function (e, t) {
    var r;
    for (r = 0; r < 7; ++r) {
      e.table[r] = 0;
    }
    r = 0;
    e.table[7] = 24;
    e.table[8] = 152;
    e.table[9] = 112;
    for (; r < 24; ++r) {
      e.trans[r] = 256 + r;
    }
    for (r = 0; r < 144; ++r) {
      e.trans[24 + r] = r;
    }
    for (r = 0; r < 8; ++r) {
      e.trans[168 + r] = 280 + r;
    }
    for (r = 0; r < 112; ++r) {
      e.trans[176 + r] = 144 + r;
    }
    for (r = 0; r < 5; ++r) {
      t.table[r] = 0;
    }
    r = 0;
    t.table[5] = 32;
    for (; r < 32; ++r) {
      t.trans[r] = r;
    }
  })(n, i);
  d(o, a, 4, 3);
  d(s, l, 2, 1);
  o[28] = 0;
  a[28] = 258;
  module.exports = function (e, t) {
    var o;
    var a;
    var s = new r(e, t);
    do {
      o = function (e) {
        if (!e.bitcount--) {
          e.tag = e.source[e.sourceIndex++];
          e.bitcount = 7;
        }
        var t = e.tag & 1;
        e.tag >>>= 1;
        return t;
      }(s);
      switch (g(s, 2, 0)) {
        case 0:
          a = function (e) {
            var t;
            var r;
            var n;
            while (e.bitcount > 8) {
              e.sourceIndex--;
              e.bitcount -= 8;
            }
            if ((t = (t = e.source[e.sourceIndex + 1]) * 256 + e.source[e.sourceIndex]) !== (~(e.source[e.sourceIndex + 3] * 256 + e.source[e.sourceIndex + 2]) & 65535)) {
              return -3;
            }
            e.sourceIndex += 4;
            n = t;
            for (; n; --n) {
              e.dest[e.destLen++] = e.source[e.sourceIndex++];
            }
            e.bitcount = 0;
            return 0;
          }(s);
          break;
        case 1:
          a = m(s, n, i);
          break;
        case 2:
          (function (e, t, r) {
            a = 0;
            n = g(e, 5, 257);
            i = g(e, 5, 1);
            o = g(e, 4, 4);
            for (; a < 19; ++a) {
              h[a] = 0;
            }
            for (a = 0; a < o; ++a) {
              var n;
              var i;
              var o;
              var a;
              var s;
              var l;
              var d = g(e, 3, 0);
              h[u[a]] = d;
            }
            A(c, h, 0, 19);
            s = 0;
            while (s < n + i) {
              var f = p(e, c);
              switch (f) {
                case 16:
                  var m = h[s - 1];
                  for (l = g(e, 2, 3); l; --l) {
                    h[s++] = m;
                  }
                  break;
                case 17:
                  for (l = g(e, 3, 3); l; --l) {
                    h[s++] = 0;
                  }
                  break;
                case 18:
                  for (l = g(e, 7, 11); l; --l) {
                    h[s++] = 0;
                  }
                  break;
                default:
                  h[s++] = f;
              }
            }
            A(t, h, 0, n);
            A(r, h, n, i);
          })(s, s.ltree, s.dtree);
          a = m(s, s.ltree, s.dtree);
          break;
        default:
          a = -3;
      }
      if (a !== 0) {
        throw Error("Data error");
      }
    } while (!o);
    if (s.destLen < s.dest.length) {
      if (typeof s.dest.slice == "function") {
        return s.dest.slice(0, s.destLen);
      } else {
        return s.dest.subarray(0, s.destLen);
      }
    } else {
      return s.dest;
    }
  };
}
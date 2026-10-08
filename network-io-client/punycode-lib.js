// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 663890
         */
module.exports = function (module, exports, require) {
  module = require.nmd(module);
  (function (n) {
    var i = exports && !exports.nodeType && exports;
    var s = module && !module.nodeType && module;
    var o = typeof require.g == "object" && require.g;
    if (o.global === o || o.window === o || o.self === o) {
      n = o;
    }
    var a;
    var c;
    var l = 2147483647;
    var h = 36;
    var u = 1;
    var f = 26;
    var p = 38;
    var d = 700;
    var y = 72;
    var g = 128;
    var v = "-";
    var m = /^xn--/;
    var b = /[^\x20-\x7E]/;
    var O = /[\x2E\u3002\uFF0E\uFF61]/g;
    var w = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var k = 35;
    var E = Math.floor;
    var S = String.fromCharCode;
    function I(e) {
      throw RangeError(w[e]);
    }
    function T(e, t) {
      var r = e.length;
      var n = [];
      while (r--) {
        n[r] = t(e[r]);
      }
      return n;
    }
    function x(e, t) {
      var r = e.split("@");
      var n = "";
      if (r.length > 1) {
        n = r[0] + "@";
        e = r[1];
      }
      return n + T((e = e.replace(O, ".")).split("."), t).join(".");
    }
    function A(e) {
      var t;
      var r;
      var n = [];
      var i = 0;
      var s = e.length;
      while (i < s) {
        if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < s) {
          if (((r = e.charCodeAt(i++)) & 64512) == 56320) {
            n.push(((t & 1023) << 10) + (r & 1023) + 65536);
          } else {
            n.push(t);
            i--;
          }
        } else {
          n.push(t);
        }
      }
      return n;
    }
    function C(e) {
      return T(e, function (e) {
        var t = "";
        if (e > 65535) {
          e -= 65536;
          t += S(e >>> 10 & 1023 | 55296);
          e = e & 1023 | 56320;
        }
        return t += S(e);
      }).join("");
    }
    function _(e) {
      if (e - 48 < 10) {
        return e - 22;
      } else if (e - 65 < 26) {
        return e - 65;
      } else if (e - 97 < 26) {
        return e - 97;
      } else {
        return h;
      }
    }
    function N(e, t) {
      return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
    }
    function j(e, t, r) {
      var n = 0;
      e = r ? E(e / d) : e >> 1;
      e += E(e / t);
      for (; e > k * f >> 1; n += h) {
        e = E(e / k);
      }
      return E(n + (k + 1) * e / (e + p));
    }
    function P(e) {
      var t;
      var r;
      var n;
      var i;
      var s;
      var o;
      var a;
      var c;
      var p;
      var d;
      var m = [];
      var b = e.length;
      var O = 0;
      var w = g;
      var k = y;
      if ((r = e.lastIndexOf(v)) < 0) {
        r = 0;
      }
      n = 0;
      for (; n < r; ++n) {
        if (e.charCodeAt(n) >= 128) {
          I("not-basic");
        }
        m.push(e.charCodeAt(n));
      }
      for (i = r > 0 ? r + 1 : 0; i < b;) {
        s = O;
        o = 1;
        a = h;
        for (; i >= b && I("invalid-input"), ((c = _(e.charCodeAt(i++))) >= h || c > E((l - O) / o)) && I("overflow"), O += c * o, !(c < (p = a <= k ? u : a >= k + f ? f : a - k)); a += h) {
          if (o > E(l / (d = h - p))) {
            I("overflow");
          }
          o *= d;
        }
        k = j(O - s, t = m.length + 1, s == 0);
        if (E(O / t) > l - w) {
          I("overflow");
        }
        w += E(O / t);
        O %= t;
        m.splice(O++, 0, w);
      }
      return C(m);
    }
    function R(e) {
      var t;
      var r;
      var n;
      var i;
      var s;
      var o;
      var a;
      var c;
      var p;
      var d;
      var m;
      var b;
      var O;
      var w;
      var k;
      var T = [];
      o = 0;
      b = (e = A(e)).length;
      t = g;
      r = 0;
      s = y;
      for (; o < b; ++o) {
        if ((m = e[o]) < 128) {
          T.push(S(m));
        }
      }
      n = i = T.length;
      if (i) {
        T.push(v);
      }
      while (n < b) {
        a = l;
        o = 0;
        for (; o < b; ++o) {
          if ((m = e[o]) >= t && m < a) {
            a = m;
          }
        }
        if (a - t > E((l - r) / (O = n + 1))) {
          I("overflow");
        }
        r += (a - t) * O;
        t = a;
        o = 0;
        for (; o < b; ++o) {
          if ((m = e[o]) < t && ++r > l) {
            I("overflow");
          }
          if (m == t) {
            c = r;
            p = h;
            for (; !(c < (d = p <= s ? u : p >= s + f ? f : p - s)); p += h) {
              k = c - d;
              w = h - d;
              T.push(S(N(d + k % w, 0)));
              c = E(k / w);
            }
            T.push(S(N(c, 0)));
            s = j(r, O, n == i);
            r = 0;
            ++n;
          }
        }
        ++r;
        ++t;
      }
      return T.join("");
    }
    function $(e) {
      return x(e, function (e) {
        if (m.test(e)) {
          return P(e.slice(4).toLowerCase());
        } else {
          return e;
        }
      });
    }
    function L(e) {
      return x(e, function (e) {
        if (b.test(e)) {
          return "xn--" + R(e);
        } else {
          return e;
        }
      });
    }
    a = {
      version: "1.3.2",
      ucs2: {
        decode: A,
        encode: C
      },
      decode: P,
      encode: R,
      toASCII: L,
      toUnicode: $
    };
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
      define("punycode", function () {
        return a;
      });
    } else if (i && s) {
      if (module.exports == i) {
        s.exports = a;
      } else {
        for (c in a) {
          if (a.hasOwnProperty(c)) {
            i[c] = a[c];
          }
        }
      }
    } else {
      n.punycode = a;
    }
  })(this);
}
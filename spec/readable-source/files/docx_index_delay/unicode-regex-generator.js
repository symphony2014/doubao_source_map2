// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 725807
         */
module.exports = function (module, exports, require) {
  var o;
  var a;
  var n;
  var s;
  var u;
  var l;
  var c;
  var _;
  var d;
  var p;
  var m;
  var D;
  var h;
  var C;
  var f;
  var y;
  var k;
  var M;
  var g;
  var v;
  var x;
  var A;
  var b;
  var L;
  var F;
  var E;
  var T;
  var I;
  var S;
  var w;
  var N;
  var R;
  var P;
  var B;
  var O;
  var j;
  var Z;
  var W;
  var z;
  var $;
  var U;
  var H;
  var V;
  module = require.nmd(module);
  o = this;
  a = module && module.exports == exports && module;
  if ((n = typeof require.g == "object" && require.g).global === n || n.window === n) {
    o = n;
  }
  s = {
    rangeOrder: "A range’s `stop` value must be greater than or equal to the `start` value.",
    codePointRange: "Invalid code point value. Code points range from U+000000 to U+10FFFF."
  };
  u = /\\x00([^0123456789]|$)/g;
  c = (l = {}).hasOwnProperty;
  _ = function (e, i) {
    var r = -1;
    var o = e.length;
    while (++r < o) {
      i(e[r], r);
    }
  };
  d = l.toString;
  p = function (e) {
    return d.call(e) == "[object Array]";
  };
  m = function (e) {
    return typeof e == "number" || d.call(e) == "[object Number]";
  };
  D = function (e, i) {
    var r = String(e);
    if (r.length < i) {
      return ("0000" + r).slice(-i);
    } else {
      return r;
    }
  };
  h = function (e) {
    return Number(e).toString(16).toUpperCase();
  };
  C = [].slice;
  f = function (e) {
    var i;
    var r = -1;
    var o = e.length;
    var a = o - 1;
    var n = [];
    var s = true;
    var u = 0;
    while (++r < o) {
      i = e[r];
      if (s) {
        n.push(i);
        u = i;
        s = false;
      } else if (i == u + 1) {
        if (r != a) {
          u = i;
          continue;
        }
        s = true;
        n.push(i + 1);
      } else {
        n.push(u + 1, i);
        u = i;
      }
    }
    if (!s) {
      n.push(i + 1);
    }
    return n;
  };
  y = function (e, i) {
    var r;
    var o;
    var a = 0;
    var n = e.length;
    while (a < n) {
      r = e[a];
      o = e[a + 1];
      if (i >= r && i < o) {
        if (i == r) {
          if (o == r + 1) {
            e.splice(a, 2);
            break;
          }
          e[a] = i + 1;
          break;
        }
        if (i == o - 1) {
          e[a + 1] = i;
          break;
        }
        e.splice(a, 2, r, i, i + 1, o);
        break;
      }
      a += 2;
    }
    return e;
  };
  k = function (e, i, r) {
    if (r < i) {
      throw Error(s.rangeOrder);
    }
    var o;
    var a;
    var n = 0;
    while (n < e.length && (o = e[n], a = e[n + 1] - 1, !(o > r))) {
      if (i <= o && r >= a) {
        e.splice(n, 2);
        continue;
      }
      if (i >= o && r < a) {
        if (i == o) {
          e[n] = r + 1;
          e[n + 1] = a + 1;
          return e;
        }
        e.splice(n, 2, o, i, r + 1, a + 1);
        break;
      }
      if (i >= o && i <= a) {
        e[n + 1] = i;
      } else if (r >= o && r <= a) {
        e[n] = r + 1;
        break;
      }
      n += 2;
    }
    return e;
  };
  M = function (e, i) {
    var r;
    var o;
    var a = 0;
    var n = null;
    var u = e.length;
    if (i < 0 || i > 1114111) {
      throw RangeError(s.codePointRange);
    }
    while (a < u) {
      r = e[a];
      o = e[a + 1];
      if (i >= r && i < o) {
        return e;
      }
      if (i == r - 1) {
        e[a] = i;
        return e;
      }
      if (r > i) {
        e.splice(n != null ? n + 2 : 0, 0, i, i + 1);
        return e;
      }
      if (i == o) {
        if (i + 1 == e[a + 2]) {
          e.splice(a, 4, r, e[a + 3]);
          return e;
        }
        e[a + 1] = i + 1;
        return e;
      }
      n = a;
      a += 2;
    }
    e.push(i, i + 1);
    return e;
  };
  g = function (e, i) {
    var r;
    var o;
    var a = 0;
    var n = e.slice();
    var s = i.length;
    while (a < s) {
      n = (r = i[a]) == (o = i[a + 1] - 1) ? M(n, r) : x(n, r, o);
      a += 2;
    }
    return n;
  };
  v = function (e, i) {
    var r;
    var o;
    var a = 0;
    var n = e.slice();
    var s = i.length;
    while (a < s) {
      n = (r = i[a]) == (o = i[a + 1] - 1) ? y(n, r) : k(n, r, o);
      a += 2;
    }
    return n;
  };
  x = function (e, i, r) {
    if (r < i) {
      throw Error(s.rangeOrder);
    }
    if (i < 0 || i > 1114111 || r < 0 || r > 1114111) {
      throw RangeError(s.codePointRange);
    }
    var o;
    var a;
    var n = 0;
    var u = false;
    var l = e.length;
    while (n < l) {
      o = e[n];
      a = e[n + 1];
      if (u) {
        if (o == r + 1) {
          e.splice(n - 1, 2);
          return e;
        }
        if (o > r) {
          return e;
        }
        if (o >= i && o <= r) {
          if (a > i && a - 1 <= r) {
            e.splice(n, 2);
          } else {
            e.splice(n - 1, 2);
          }
          n -= 2;
        }
      } else {
        if (o == r + 1 || o == r) {
          e[n] = i;
          return e;
        }
        if (o > r) {
          e.splice(n, 0, i, r + 1);
          return e;
        }
        if (i >= o && i < a && r + 1 <= a) {
          return e;
        }
        if (i >= o && i < a || a == i) {
          e[n + 1] = r + 1;
          u = true;
        } else if (i <= o && r + 1 >= a) {
          e[n] = i;
          e[n + 1] = r + 1;
          u = true;
        }
      }
      n += 2;
    }
    if (!u) {
      e.push(i, r + 1);
    }
    return e;
  };
  A = function (e, i) {
    var r = 0;
    var o = e.length;
    var a = e[r];
    var n = e[o - 1];
    if (o >= 2 && (i < a || i > n)) {
      return false;
    }
    while (r < o) {
      a = e[r];
      n = e[r + 1];
      if (i >= a && i < n) {
        return true;
      }
      r += 2;
    }
    return false;
  };
  b = function (e, i) {
    var r;
    var o = 0;
    var a = i.length;
    var n = [];
    while (o < a) {
      if (A(e, r = i[o])) {
        n.push(r);
      }
      ++o;
    }
    return f(n);
  };
  L = function (e) {
    return !e.length;
  };
  F = function (e) {
    return e.length == 2 && e[0] + 1 == e[1];
  };
  E = function (e) {
    var i;
    var r;
    var o = 0;
    var a = [];
    var n = e.length;
    while (o < n) {
      i = e[o];
      r = e[o + 1];
      while (i < r) {
        a.push(i);
        ++i;
      }
      o += 2;
    }
    return a;
  };
  T = Math.floor;
  I = function (e) {
    return parseInt(T((e - 65536) / 1024) + 55296, 10);
  };
  S = function (e) {
    return parseInt((e - 65536) % 1024 + 56320, 10);
  };
  w = String.fromCharCode;
  N = function (e) {
    var i;
    if (e == 9) {
      return "\\t";
    } else if (e == 10) {
      return "\\n";
    } else if (e == 12) {
      return "\\f";
    } else if (e == 13) {
      return "\\r";
    } else if (e == 45) {
      return "\\x2D";
    } else if (e == 92) {
      return "\\\\";
    } else if (e == 36 || e >= 40 && e <= 43 || e == 46 || e == 47 || e == 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125) {
      return "\\" + w(e);
    } else if (e >= 32 && e <= 126) {
      return w(e);
    } else if (e <= 255) {
      return "\\x" + D(h(e), 2);
    } else {
      return "\\u" + D(h(e), 4);
    }
  };
  R = function (e) {
    if (e <= 65535) {
      return N(e);
    } else {
      return "\\u{" + e.toString(16).toUpperCase() + "}";
    }
  };
  P = function (e) {
    var i = e.length;
    var r = e.charCodeAt(0);
    if (r >= 55296 && r <= 56319 && i > 1) {
      return (r - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536;
    } else {
      return r;
    }
  };
  B = function (e) {
    var i;
    var r;
    var o = "";
    var a = 0;
    var n = e.length;
    if (F(e)) {
      return N(e[0]);
    }
    while (a < n) {
      if ((i = e[a]) == (r = e[a + 1] - 1)) {
        o += N(i);
      } else if (i + 1 == r) {
        o += N(i) + N(r);
      } else {
        o += N(i) + "-" + N(r);
      }
      a += 2;
    }
    return "[" + o + "]";
  };
  O = function (e) {
    var i;
    var r;
    var o = "";
    var a = 0;
    var n = e.length;
    if (F(e)) {
      return R(e[0]);
    }
    while (a < n) {
      if ((i = e[a]) == (r = e[a + 1] - 1)) {
        o += R(i);
      } else if (i + 1 == r) {
        o += R(i) + R(r);
      } else {
        o += R(i) + "-" + R(r);
      }
      a += 2;
    }
    return "[" + o + "]";
  };
  j = function (e) {
    var i;
    var r;
    var o = [];
    var a = [];
    var n = [];
    var s = [];
    var u = 0;
    var l = e.length;
    while (u < l) {
      i = e[u];
      r = e[u + 1] - 1;
      if (i < 55296) {
        if (r < 55296) {
          n.push(i, r + 1);
        }
        if (r >= 55296 && r <= 56319) {
          n.push(i, 55296);
          o.push(55296, r + 1);
        }
        if (r >= 56320 && r <= 57343) {
          n.push(i, 55296);
          o.push(55296, 56320);
          a.push(56320, r + 1);
        }
        if (r > 57343) {
          n.push(i, 55296);
          o.push(55296, 56320);
          a.push(56320, 57344);
          if (r <= 65535) {
            n.push(57344, r + 1);
          } else {
            n.push(57344, 65536);
            s.push(65536, r + 1);
          }
        }
      } else if (i >= 55296 && i <= 56319) {
        if (r >= 55296 && r <= 56319) {
          o.push(i, r + 1);
        }
        if (r >= 56320 && r <= 57343) {
          o.push(i, 56320);
          a.push(56320, r + 1);
        }
        if (r > 57343) {
          o.push(i, 56320);
          a.push(56320, 57344);
          if (r <= 65535) {
            n.push(57344, r + 1);
          } else {
            n.push(57344, 65536);
            s.push(65536, r + 1);
          }
        }
      } else if (i >= 56320 && i <= 57343) {
        if (r >= 56320 && r <= 57343) {
          a.push(i, r + 1);
        }
        if (r > 57343) {
          a.push(i, 57344);
          if (r <= 65535) {
            n.push(57344, r + 1);
          } else {
            n.push(57344, 65536);
            s.push(65536, r + 1);
          }
        }
      } else if (i > 57343 && i <= 65535) {
        if (r <= 65535) {
          n.push(i, r + 1);
        } else {
          n.push(i, 65536);
          s.push(65536, r + 1);
        }
      } else {
        s.push(i, r + 1);
      }
      u += 2;
    }
    return {
      loneHighSurrogates: o,
      loneLowSurrogates: a,
      bmp: n,
      astral: s
    };
  };
  Z = function (e) {
    var i;
    var r;
    var o;
    var a;
    var n;
    var s;
    var u = [];
    var l = [];
    var c = false;
    var _ = -1;
    var d = e.length;
    while (++_ < d) {
      i = e[_];
      if (!(r = e[_ + 1])) {
        u.push(i);
        continue;
      }
      o = i[0];
      a = i[1];
      n = r[0];
      s = r[1];
      l = a;
      while (n && o[0] == n[0] && o[1] == n[1]) {
        l = F(s) ? M(l, s[0]) : x(l, s[0], s[1] - 1);
        o = (i = e[++_])[0];
        a = i[1];
        n = (r = e[_ + 1]) && r[0];
        s = r && r[1];
        c = true;
      }
      u.push([o, c ? l : a]);
      c = false;
    }
    return W(u);
  };
  W = function (e) {
    if (e.length == 1) {
      return e;
    }
    var i = -1;
    var r = -1;
    while (++i < e.length) {
      var o = e[i];
      var a = o[1];
      var n = a[0];
      var s = a[1];
      for (r = i; ++r < e.length;) {
        var u = e[r];
        var l = u[1];
        var c = l[0];
        var _ = l[1];
        if (n == c && s == _ && l.length === 2) {
          if (F(u[0])) {
            o[0] = M(o[0], u[0][0]);
          } else {
            o[0] = x(o[0], u[0][0], u[0][1] - 1);
          }
          e.splice(r, 1);
          --r;
        }
      }
    }
    return e;
  };
  z = function (e) {
    if (!e.length) {
      return [];
    }
    var i;
    var r;
    var o;
    var a;
    var n;
    var s;
    var u = 0;
    var l = [];
    var c = e.length;
    while (u < c) {
      i = e[u];
      r = e[u + 1] - 1;
      o = I(i);
      a = S(i);
      n = I(r);
      s = S(r);
      var _ = a == 56320;
      var d = s == 57343;
      var p = false;
      if (o == n || _ && d) {
        l.push([[o, n + 1], [a, s + 1]]);
        p = true;
      } else {
        l.push([[o, o + 1], [a, 57344]]);
      }
      if (!p && o + 1 < n) {
        if (d) {
          l.push([[o + 1, n + 1], [56320, s + 1]]);
          p = true;
        } else {
          l.push([[o + 1, n], [56320, 57344]]);
        }
      }
      if (!p) {
        l.push([[n, n + 1], [56320, s + 1]]);
      }
      u += 2;
    }
    return Z(l);
  };
  $ = function (e) {
    var i = [];
    _(e, function (e) {
      var r = e[0];
      var o = e[1];
      i.push(B(r) + B(o));
    });
    return i.join("|");
  };
  U = function (e, i, r) {
    if (r) {
      return O(e);
    }
    var o = [];
    var a = j(e);
    var n = a.loneHighSurrogates;
    var s = a.loneLowSurrogates;
    var u = a.bmp;
    var l = a.astral;
    var c = !L(n);
    var _ = !L(s);
    var d = z(l);
    if (i) {
      u = g(u, n);
      c = false;
      u = g(u, s);
      _ = false;
    }
    if (!L(u)) {
      o.push(B(u));
    }
    if (d.length) {
      o.push($(d));
    }
    if (c) {
      o.push(B(n) + "(?![\uDC00-\uDFFF])");
    }
    if (_) {
      o.push("(?:[^\uD800-\uDBFF]|^)" + B(s));
    }
    return o.join("|");
  };
  (H = function (e) {
    if (arguments.length > 1) {
      e = C.call(arguments);
    }
    if (this instanceof H) {
      this.data = [];
      if (e) {
        return this.add(e);
      } else {
        return this;
      }
    } else {
      return new H().add(e);
    }
  }).version = "1.4.2";
  (function (e, i) {
    var r;
    for (r in i) {
      if (c.call(i, r)) {
        e[r] = i[r];
      }
    }
  })(V = H.prototype, {
    add: function (e) {
      var i = this;
      if (e != null) {
        if (e instanceof H) {
          i.data = g(i.data, e.data);
        } else {
          if (arguments.length > 1) {
            e = C.call(arguments);
          }
          if (p(e)) {
            _(e, function (e) {
              i.add(e);
            });
          } else {
            i.data = M(i.data, m(e) ? e : P(e));
          }
        }
      }
      return i;
    },
    remove: function (e) {
      var i = this;
      if (e != null) {
        if (e instanceof H) {
          i.data = v(i.data, e.data);
        } else {
          if (arguments.length > 1) {
            e = C.call(arguments);
          }
          if (p(e)) {
            _(e, function (e) {
              i.remove(e);
            });
          } else {
            i.data = y(i.data, m(e) ? e : P(e));
          }
        }
      }
      return i;
    },
    addRange: function (e, i) {
      this.data = x(this.data, m(e) ? e : P(e), m(i) ? i : P(i));
      return this;
    },
    removeRange: function (e, i) {
      var r = m(e) ? e : P(e);
      var o = m(i) ? i : P(i);
      this.data = k(this.data, r, o);
      return this;
    },
    intersection: function (e) {
      var i = e instanceof H ? E(e.data) : e;
      this.data = b(this.data, i);
      return this;
    },
    contains: function (e) {
      return A(this.data, m(e) ? e : P(e));
    },
    clone: function () {
      var e = new H();
      e.data = this.data.slice(0);
      return e;
    },
    toString: function (e) {
      var i = U(this.data, !!e && e.bmpOnly, !!e && e.hasUnicodeFlag);
      if (i) {
        return i.replace(u, "\\0$1");
      } else {
        return "[]";
      }
    },
    toRegExp: function (e) {
      return RegExp(this.toString(e && e.indexOf("u") != -1 ? {
        hasUnicodeFlag: true
      } : null), e || "");
    },
    valueOf: function () {
      return E(this.data);
    }
  });
  V.toArray = V.valueOf;
  if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
    define(function () {
      return H;
    });
  } else if (exports && !exports.nodeType) {
    if (a) {
      a.exports = H;
    } else {
      exports.regenerate = H;
    }
  } else {
    o.regenerate = H;
  }
}
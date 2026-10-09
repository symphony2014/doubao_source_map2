// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 495562
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var a;
  var o = "__lodash_hash_undefined__";
  var s = /^\[object .+?Constructor\]$/;
  var l = typeof require.g == "object" && require.g && require.g.Object === Object && require.g;
  var c = typeof self == "object" && self && self.Object === Object && self;
  var u = l || c || Function("return this")();
  function d(e, t) {
    return !!(e ? e.length : 0) && function (e, t, r) {
      if (t != t) {
        return function (e, t, r, i) {
          var n = e.length;
          var a = r + -1;
          while (++a < n) {
            if (t(e[a], a, e)) {
              return a;
            }
          }
          return -1;
        }(e, _, 0);
      }
      var i = r - 1;
      var n = e.length;
      while (++i < n) {
        if (e[i] === t) {
          return i;
        }
      }
      return -1;
    }(e, t, 0) > -1;
  }
  function p(e, t, r) {
    var i = -1;
    var n = e ? e.length : 0;
    while (++i < n) {
      if (r(t, e[i])) {
        return true;
      }
    }
    return false;
  }
  function _(e) {
    return e != e;
  }
  function h(e, t) {
    return e.has(t);
  }
  function m(e) {
    var t = -1;
    var r = Array(e.size);
    e.forEach(function (e) {
      r[++t] = e;
    });
    return r;
  }
  var g = Array.prototype;
  var f = Function.prototype;
  var y = Object.prototype;
  var E = u["__core-js_shared__"];
  var T = (i = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "";
  var v = f.toString;
  var S = y.hasOwnProperty;
  var L = y.toString;
  var k = RegExp("^" + v.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var C = g.splice;
  var A = Math.max;
  var I = j(u, "Map");
  var N = j(u, "Set");
  var b = j(Object, "create");
  function R(e) {
    var t = -1;
    var r = e ? e.length : 0;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  function M(e) {
    var t = -1;
    var r = e ? e.length : 0;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  function O(e) {
    var t = -1;
    var r = e ? e.length : 0;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  function P(e) {
    var t = -1;
    var r = e ? e.length : 0;
    for (this.__data__ = new O(); ++t < r;) {
      this.add(e[t]);
    }
  }
  function w(e, t) {
    var r;
    var i;
    var n = e.length;
    while (n--) {
      r = e[n][0];
      if (r === (i = t) || r != r && i != i) {
        return n;
      }
    }
    return -1;
  }
  function D(e, t, r, i) {
    var n = -1;
    var a = d;
    var o = true;
    var s = e.length;
    var l = [];
    var c = t.length;
    if (!s) {
      return l;
    }
    if (r) {
      t = function (e, t) {
        var r = -1;
        var i = e ? e.length : 0;
        var n = Array(i);
        while (++r < i) {
          n[r] = t(e[r], r, e);
        }
        return n;
      }(t, function (e) {
        return r(e);
      });
    }
    if (i) {
      a = p;
      o = false;
    } else if (t.length >= 200) {
      a = h;
      o = false;
      t = new P(t);
    }
    e: while (++n < s) {
      var u = e[n];
      var _ = r ? r(u) : u;
      u = i || u !== 0 ? u : 0;
      if (o && _ == _) {
        for (var m = c; m--;) {
          if (t[m] === _) {
            continue e;
          }
        }
        l.push(u);
      } else if (!a(t, _, i)) {
        l.push(u);
      }
    }
    return l;
  }
  R.prototype.clear = function () {
    this.__data__ = b ? b(null) : {};
  };
  R.prototype.delete = function (e) {
    return this.has(e) && delete this.__data__[e];
  };
  R.prototype.get = function (e) {
    var t = this.__data__;
    if (b) {
      var r = t[e];
      if (r === o) {
        return undefined;
      } else {
        return r;
      }
    }
    if (S.call(t, e)) {
      return t[e];
    } else {
      return undefined;
    }
  };
  R.prototype.has = function (e) {
    var t = this.__data__;
    if (b) {
      return t[e] !== undefined;
    } else {
      return S.call(t, e);
    }
  };
  R.prototype.set = function (e, t) {
    this.__data__[e] = b && t === undefined ? o : t;
    return this;
  };
  M.prototype.clear = function () {
    this.__data__ = [];
  };
  M.prototype.delete = function (e) {
    var t = this.__data__;
    var r = w(t, e);
    return !(r < 0) && (r == t.length - 1 ? t.pop() : C.call(t, r, 1), true);
  };
  M.prototype.get = function (e) {
    var t = this.__data__;
    var r = w(t, e);
    if (r < 0) {
      return undefined;
    } else {
      return t[r][1];
    }
  };
  M.prototype.has = function (e) {
    return w(this.__data__, e) > -1;
  };
  M.prototype.set = function (e, t) {
    var r = this.__data__;
    var i = w(r, e);
    if (i < 0) {
      r.push([e, t]);
    } else {
      r[i][1] = t;
    }
    return this;
  };
  O.prototype.clear = function () {
    this.__data__ = {
      hash: new R(),
      map: new (I || M)(),
      string: new R()
    };
  };
  O.prototype.delete = function (e) {
    return U(this, e).delete(e);
  };
  O.prototype.get = function (e) {
    return U(this, e).get(e);
  };
  O.prototype.has = function (e) {
    return U(this, e).has(e);
  };
  O.prototype.set = function (e, t) {
    U(this, e).set(e, t);
    return this;
  };
  P.prototype.add = P.prototype.push = function (e) {
    this.__data__.set(e, o);
    return this;
  };
  P.prototype.has = function (e) {
    return this.__data__.has(e);
  };
  var x = N && 1 / m(new N([, -0]))[1] == Infinity ? function (e) {
    return new N(e);
  } : function () {};
  function U(e, t) {
    var r;
    var i;
    var n = e.__data__;
    if ((i = typeof (r = t)) == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null) {
      return n[typeof t == "string" ? "string" : "hash"];
    } else {
      return n.map;
    }
  }
  function j(e, t) {
    var r;
    var i = e == null ? undefined : e[t];
    if (!!Z(i) && !(r = i, T && T in r) && (H(i) || function (e) {
      var t = false;
      if (e != null && typeof e.toString != "function") {
        try {
          t = !!(e + "");
        } catch (e) {}
      }
      return t;
    }(i) ? k : s).test(function (e) {
      if (e != null) {
        try {
          return v.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }(i))) {
      return i;
    } else {
      return undefined;
    }
  }
  n = function (e) {
    return function (e, t, r) {
      var i = -1;
      var n = e.length;
      while (++i < n) {
        var a = a ? function (e, t) {
          var r = -1;
          var i = t.length;
          var n = e.length;
          while (++r < i) {
            e[n + r] = t[r];
          }
          return e;
        }(D(a, e[i], undefined, undefined), D(e[i], a, undefined, undefined)) : e[i];
      }
      if (a && a.length) {
        return function (e, t, r) {
          var i = -1;
          var n = d;
          var a = e.length;
          var o = true;
          var s = [];
          var l = s;
          if (r) {
            o = false;
            n = p;
          } else if (a >= 200) {
            var c = t ? null : x(e);
            if (c) {
              return m(c);
            }
            o = false;
            n = h;
            l = new P();
          } else {
            l = t ? [] : s;
          }
          e: while (++i < a) {
            var u = e[i];
            var _ = t ? t(u) : u;
            u = r || u !== 0 ? u : 0;
            if (o && _ == _) {
              for (var g = l.length; g--;) {
                if (l[g] === _) {
                  continue e;
                }
              }
              if (t) {
                l.push(_);
              }
              s.push(u);
            } else if (!n(l, _, r)) {
              if (l !== s) {
                l.push(_);
              }
              s.push(u);
            }
          }
          return s;
        }(a, t, r);
      } else {
        return [];
      }
    }(function (e, t) {
      var r = -1;
      var i = e ? e.length : 0;
      var n = 0;
      var a = [];
      while (++r < i) {
        var o = e[r];
        if (t(o, r, e)) {
          a[n++] = o;
        }
      }
      return a;
    }(e, B));
  };
  a = A(a === undefined ? n.length - 1 : a, 0);
  function F() {
    var e = arguments;
    var t = -1;
    var r = A(e.length - a, 0);
    var i = Array(r);
    while (++t < r) {
      i[t] = e[a + t];
    }
    t = -1;
    var o = Array(a + 1);
    for (; ++t < a;) {
      o[t] = e[t];
    }
    o[a] = i;
    return function (e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }(n, this, o);
  }
  function B(e) {
    var t;
    var r;
    var i;
    return !!(r = e) && typeof r == "object" && (t = e) != null && typeof (i = t.length) == "number" && i > -1 && i % 1 == 0 && i <= 9007199254740991 && !H(t);
  }
  function H(e) {
    var t = Z(e) ? L.call(e) : "";
    return t == "[object Function]" || t == "[object GeneratorFunction]";
  }
  function Z(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  module.exports = F;
}
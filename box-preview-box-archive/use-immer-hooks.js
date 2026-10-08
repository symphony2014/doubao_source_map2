// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useImmer'
// - Renamed export 'C' to 'useImmerReducer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21069.33dd1f3c.js
         * chunkId: 21069
         * moduleId: 771813
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var n = arguments.length;
    var t = Array(n > 1 ? n - 1 : 0);
    var r = 1;
    for (; r < n; r++) {
      t[r - 1] = arguments[r];
    }
    throw Error("[Immer] minified error nr: " + e + (t.length ? " " + t.map(function (e) {
      return "'" + e + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function o(e) {
    return !!e && !!e[U];
  }
  function u(e) {
    return !!e && (function (e) {
      if (!e || typeof e != "object") {
        return false;
      }
      var n = Object.getPrototypeOf(e);
      if (n === null) {
        return true;
      }
      var t = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return t === Object || typeof t == "function" && Function.toString.call(t) === q;
    }(e) || Array.isArray(e) || !!e[L] || !!e.constructor?.[L] || s(e) || l(e));
  }
  function i(e, n, t = false) {
    if (c(e) === 0) {
      (t ? Object.keys : K)(e).forEach(function (r) {
        if (!t || typeof r != "symbol") {
          n(r, e[r], e);
        }
      });
    } else {
      e.forEach(function (t, r) {
        return n(r, t, e);
      });
    }
  }
  function c(e) {
    var n = e[U];
    if (n) {
      if (n.i > 3) {
        return n.i - 4;
      } else {
        return n.i;
      }
    } else if (Array.isArray(e)) {
      return 1;
    } else if (s(e)) {
      return 2;
    } else {
      return !!l(e) * 3;
    }
  }
  function a(e, n) {
    if (c(e) === 2) {
      return e.has(n);
    } else {
      return Object.prototype.hasOwnProperty.call(e, n);
    }
  }
  function f(e, n, t) {
    var r = c(e);
    if (r === 2) {
      e.set(n, t);
    } else if (r === 3) {
      e.add(t);
    } else {
      e[n] = t;
    }
  }
  function s(e) {
    return T && e instanceof Map;
  }
  function l(e) {
    return I && e instanceof Set;
  }
  function d(e) {
    return e.o || e.t;
  }
  function v(e) {
    if (Array.isArray(e)) {
      return Array.prototype.slice.call(e);
    }
    var n = W(e);
    delete n[U];
    var t = K(n);
    var r = 0;
    for (; r < t.length; r++) {
      var o = t[r];
      var u = n[o];
      if (u.writable === false) {
        u.writable = true;
        u.configurable = true;
      }
      if (u.get || u.set) {
        n[o] = {
          configurable: true,
          writable: true,
          enumerable: u.enumerable,
          value: e[o]
        };
      }
    }
    return Object.create(Object.getPrototypeOf(e), n);
  }
  function p(e, n = false) {
    if (!m(e) && !o(e) && !!u(e)) {
      if (c(e) > 1) {
        e.set = e.add = e.clear = e.delete = h;
      }
      Object.freeze(e);
      if (n) {
        i(e, function (e, n) {
          return p(n, true);
        }, true);
      }
    }
    return e;
  }
  function h() {
    r(2);
  }
  function m(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e);
  }
  function b(e) {
    var n = z[e];
    if (!n) {
      r(18, e);
    }
    return n;
  }
  function y(e, n) {
    if (n) {
      b("Patches");
      e.u = [];
      e.s = [];
      e.v = n;
    }
  }
  function g(e) {
    x(e);
    e.p.forEach(O);
    e.p = null;
  }
  function x(e) {
    if (e === F) {
      F = e.l;
    }
  }
  function w(e) {
    return F = {
      p: [],
      l: F,
      h: e,
      m: true,
      _: 0
    };
  }
  function O(e) {
    var n = e[U];
    if (n.i === 0 || n.i === 1) {
      n.j();
    } else {
      n.g = true;
    }
  }
  function E(e, n) {
    n._ = n.p.length;
    var t = n.p[0];
    var o = e !== undefined && e !== t;
    if (!n.h.O) {
      b("ES5").S(n, e, o);
    }
    if (o) {
      if (t[U].P) {
        g(n);
        r(4);
      }
      if (u(e)) {
        e = P(n, e);
        if (!n.l) {
          S(n, e);
        }
      }
      if (n.u) {
        b("Patches").M(t[U].t, e, n.u, n.s);
      }
    } else {
      e = P(n, t, []);
    }
    g(n);
    if (n.u) {
      n.v(n.u, n.s);
    }
    if (e !== R) {
      return e;
    } else {
      return undefined;
    }
  }
  function P(e, n, t) {
    if (m(n)) {
      return n;
    }
    var r = n[U];
    if (!r) {
      i(n, function (o, u) {
        return A(e, r, n, o, u, t);
      }, true);
      return n;
    }
    if (r.A !== e) {
      return n;
    }
    if (!r.P) {
      S(e, r.t, true);
      return r.t;
    }
    if (!r.I) {
      r.I = true;
      r.A._--;
      var o = r.i === 4 || r.i === 5 ? r.o = v(r.k) : r.o;
      var u = o;
      var c = false;
      if (r.i === 3) {
        u = new Set(o);
        o.clear();
        c = true;
      }
      i(u, function (n, u) {
        return A(e, r, o, n, u, t, c);
      });
      S(e, o, false);
      if (t && e.u) {
        b("Patches").N(r, t, e.u, e.s);
      }
    }
    return r.o;
  }
  function A(e, n, t, r, i, c, s) {
    if (o(i)) {
      var l = P(e, i, c && n && n.i !== 3 && !a(n.R, r) ? c.concat(r) : undefined);
      f(t, r, l);
      if (!o(l)) {
        return;
      }
      e.m = false;
    } else if (s) {
      t.add(i);
    }
    if (u(i) && !m(i)) {
      if (!e.h.D && e._ < 1) {
        return;
      }
      P(e, i);
      if (!n || !n.A.l) {
        S(e, i);
      }
    }
  }
  function S(e, n, t = false) {
    if (!e.l && e.h.D && e.m) {
      p(n, t);
    }
  }
  function $(e, n) {
    var t = e[U];
    return (t ? d(t) : e)[n];
  }
  function k(e, n) {
    if (n in e) {
      for (var t = Object.getPrototypeOf(e); t;) {
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (r) {
          return r;
        }
        t = Object.getPrototypeOf(t);
      }
    }
  }
  function M(e) {
    if (!e.P) {
      e.P = true;
      if (e.l) {
        M(e.l);
      }
    }
  }
  function N(e) {
    e.o ||= v(e.t);
  }
  function j(e, n, t) {
    var r;
    var o;
    var u;
    var i;
    var c;
    var a;
    var f;
    var d = s(n) ? b("MapSet").F(n, t) : l(n) ? b("MapSet").T(n, t) : e.O ? (u = o = {
      i: +!!(r = Array.isArray(n)),
      A: t ? t.A : F,
      P: false,
      I: false,
      R: {},
      l: t,
      t: n,
      k: null,
      o: null,
      j: null,
      C: false
    }, i = B, r && (u = [o], i = H), a = (c = Proxy.revocable(u, i)).revoke, f = c.proxy, o.k = f, o.j = a, f) : b("ES5").J(n, t);
    (t ? t.A : F).p.push(d);
    return d;
  }
  function C(e, n) {
    switch (n) {
      case 2:
        return new Map(e);
      case 3:
        return Array.from(e);
    }
    return v(e);
  }
  var D;
  var F;
  var G = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var T = typeof Map != "undefined";
  var I = typeof Set != "undefined";
  var _ = typeof Proxy != "undefined" && Proxy.revocable !== undefined && typeof Reflect != "undefined";
  var R = G ? Symbol.for("immer-nothing") : ((D = {})["immer-nothing"] = true, D);
  var L = G ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var U = G ? Symbol.for("immer-state") : "__$immer_state";
  var q = "" + Object.prototype.constructor;
  var K = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== undefined ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Object.getOwnPropertyNames;
  var W = Object.getOwnPropertyDescriptors || function (e) {
    var n = {};
    K(e).forEach(function (t) {
      n[t] = Object.getOwnPropertyDescriptor(e, t);
    });
    return n;
  };
  var z = {};
  var B = {
    get: function (e, n) {
      if (n === U) {
        return e;
      }
      var t;
      var r;
      var o = d(e);
      if (!a(o, n)) {
        if (r = k(o, n)) {
          if ("value" in r) {
            return r.value;
          } else if ((t = r.get) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(e.k);
          }
        } else {
          return undefined;
        }
      }
      var i = o[n];
      if (e.I || !u(i)) {
        return i;
      } else if (i === $(e.t, n)) {
        N(e);
        return e.o[n] = j(e.A.h, i, e);
      } else {
        return i;
      }
    },
    has: function (e, n) {
      return n in d(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(d(e));
    },
    set: function (e, n, t) {
      var r = k(d(e), n);
      if (r == null ? undefined : r.set) {
        r.set.call(e.k, t);
        return true;
      }
      if (!e.P) {
        var o = $(d(e), n);
        var u = o == null ? undefined : o[U];
        if (u && u.t === t) {
          e.o[n] = t;
          e.R[n] = false;
          return true;
        }
        if ((t === o ? t !== 0 || 1 / t == 1 / o : t != t && o != o) && (t !== undefined || a(e.t, n))) {
          return true;
        }
        N(e);
        M(e);
      }
      if ((e.o[n] !== t || t === undefined && !(n in e.o)) && (!Number.isNaN(t) || !Number.isNaN(e.o[n]))) {
        e.o[n] = t;
        e.R[n] = true;
      }
      return true;
    },
    deleteProperty: function (e, n) {
      if ($(e.t, n) !== undefined || n in e.t) {
        e.R[n] = false;
        N(e);
        M(e);
      } else {
        delete e.R[n];
      }
      if (e.o) {
        delete e.o[n];
      }
      return true;
    },
    getOwnPropertyDescriptor: function (e, n) {
      var t = d(e);
      var r = Reflect.getOwnPropertyDescriptor(t, n);
      if (r) {
        return {
          writable: true,
          configurable: e.i !== 1 || n !== "length",
          enumerable: r.enumerable,
          value: t[n]
        };
      } else {
        return r;
      }
    },
    defineProperty: function () {
      r(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      r(12);
    }
  };
  var H = {};
  i(B, function (e, n) {
    H[e] = function () {
      arguments[0] = arguments[0][0];
      return n.apply(this, arguments);
    };
  });
  H.deleteProperty = function (e, n) {
    return H.set.call(this, e, n, undefined);
  };
  H.set = function (e, n, t) {
    return B.set.call(this, e[0], n, t, e[0]);
  };
  var J = new (function () {
    function e(e) {
      var n = this;
      this.O = _;
      this.D = true;
      this.produce = function (e, t, o) {
        if (typeof e == "function" && typeof t != "function") {
          var i;
          var c = t;
          t = e;
          return function (e) {
            var r = this;
            if (e === undefined) {
              e = c;
            }
            var o = arguments.length;
            var u = Array(o > 1 ? o - 1 : 0);
            var i = 1;
            for (; i < o; i++) {
              u[i - 1] = arguments[i];
            }
            return n.produce(e, function (e) {
              var n;
              return (n = t).call.apply(n, [r, e].concat(u));
            });
          };
        }
        if (typeof t != "function") {
          r(6);
        }
        if (o !== undefined && typeof o != "function") {
          r(7);
        }
        if (u(e)) {
          var a = w(n);
          var f = j(n, e, undefined);
          var s = true;
          try {
            i = t(f);
            s = false;
          } finally {
            if (s) {
              g(a);
            } else {
              x(a);
            }
          }
          if (typeof Promise != "undefined" && i instanceof Promise) {
            return i.then(function (e) {
              y(a, o);
              return E(e, a);
            }, function (e) {
              g(a);
              throw e;
            });
          } else {
            y(a, o);
            return E(i, a);
          }
        }
        if (!e || typeof e != "object") {
          if ((i = t(e)) === undefined) {
            i = e;
          }
          if (i === R) {
            i = undefined;
          }
          if (n.D) {
            p(i, true);
          }
          if (o) {
            var l = [];
            var d = [];
            b("Patches").M(e, i, l, d);
            o(l, d);
          }
          return i;
        }
        r(21, e);
      };
      this.produceWithPatches = function (e, t) {
        if (typeof e == "function") {
          return function (t) {
            var r = arguments.length;
            var o = Array(r > 1 ? r - 1 : 0);
            var u = 1;
            for (; u < r; u++) {
              o[u - 1] = arguments[u];
            }
            return n.produceWithPatches(t, function (n) {
              return e.apply(undefined, [n].concat(o));
            });
          };
        }
        var r;
        var o;
        var u = n.produce(e, t, function (e, n) {
          r = e;
          o = n;
        });
        if (typeof Promise != "undefined" && u instanceof Promise) {
          return u.then(function (e) {
            return [e, r, o];
          });
        } else {
          return [u, r, o];
        }
      };
      if (typeof (e == null ? undefined : e.useProxies) == "boolean") {
        this.setUseProxies(e.useProxies);
      }
      if (typeof (e == null ? undefined : e.autoFreeze) == "boolean") {
        this.setAutoFreeze(e.autoFreeze);
      }
    }
    var n = e.prototype;
    n.createDraft = function (e) {
      if (!u(e)) {
        r(8);
      }
      if (o(e)) {
        if (!o(n = e)) {
          r(22, n);
        }
        e = function e(n) {
          if (!u(n)) {
            return n;
          }
          var t;
          var r = n[U];
          var o = c(n);
          if (r) {
            if (!r.P && (r.i < 4 || !b("ES5").K(r))) {
              return r.t;
            }
            r.I = true;
            t = C(n, o);
            r.I = false;
          } else {
            t = C(n, o);
          }
          i(t, function (n, o) {
            var u;
            if (!r || (c(u = r.t) === 2 ? u.get(n) : u[n]) !== o) {
              f(t, n, e(o));
            }
          });
          if (o === 3) {
            return new Set(t);
          } else {
            return t;
          }
        }(n);
      }
      var n;
      var t = w(this);
      var a = j(this, e, undefined);
      a[U].C = true;
      x(t);
      return a;
    };
    n.finishDraft = function (e, n) {
      var t = (e && e[U]).A;
      y(t, n);
      return E(undefined, t);
    };
    n.setAutoFreeze = function (e) {
      this.D = e;
    };
    n.setUseProxies = function (e) {
      if (e && !_) {
        r(20);
      }
      this.O = e;
    };
    n.applyPatches = function (e, n) {
      for (t = n.length - 1; t >= 0; t--) {
        var t;
        var r = n[t];
        if (r.path.length === 0 && r.op === "replace") {
          e = r.value;
          break;
        }
      }
      if (t > -1) {
        n = n.slice(t + 1);
      }
      var u = b("Patches").$;
      if (o(e)) {
        return u(e, n);
      } else {
        return this.produce(e, function (e) {
          return u(e, n);
        });
      }
    };
    return e;
  }())();
  var Z = J.produce;
  J.produceWithPatches.bind(J);
  J.setAutoFreeze.bind(J);
  J.setUseProxies.bind(J);
  J.applyPatches.bind(J);
  J.createDraft.bind(J);
  J.finishDraft.bind(J);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function V(e) {
    var n = reactCoreLibraryReexport.useState(function () {
      return p(typeof e == "function" ? e() : e, true);
    });
    var t = n[1];
    return [n[0], reactCoreLibraryReexport.useCallback(function (e) {
      t(typeof e == "function" ? Z(e) : p(e));
    }, [])];
  }
  function Y(e, n, t) {
    var r = reactCoreLibraryReexport.useMemo(function () {
      return Z(e);
    }, [e]);
    return reactCoreLibraryReexport.useReducer(r, n, t);
  }
  require.d(exports, {
    useImmer: function () {
      return V;
    },
    useImmerReducer: function () {
      return Y;
    }
  });
}
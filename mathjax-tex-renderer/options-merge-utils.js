// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 625001
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var r = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var T = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.lookup = exports.separateOptions = exports.selectOptionsFromKeys = exports.selectOptions = exports.userOptions = exports.defaultOptions = exports.insert = exports.copy = exports.keys = exports.makeArray = exports.expandable = exports.Expandable = exports.OPTIONS = exports.REMOVE = exports.APPEND = exports.isObject = undefined;
  var n = {}.constructor;
  function o(t) {
    return typeof t == "object" && t !== null && (t.constructor === n || t.constructor === i);
  }
  exports.isObject = o;
  exports.APPEND = "[+]";
  exports.REMOVE = "[-]";
  exports.OPTIONS = {
    invalidOption: "warn",
    optionError: function (t, Q) {
      if (exports.OPTIONS.invalidOption === "fatal") {
        throw Error(t);
      }
    }
  };
  function i() {}
  function a(t) {
    return Object.assign(Object.create(i.prototype), t);
  }
  function u(t) {
    if (t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
    } else {
      return [];
    }
  }
  function s(t) {
    var e;
    var r;
    var T = {};
    try {
      var n = Q(u(t));
      var c = n.next();
      for (; !c.done; c = n.next()) {
        var p = c.value;
        var h = Object.getOwnPropertyDescriptor(t, p);
        var f = h.value;
        if (Array.isArray(f)) {
          h.value = l([], f, false);
        } else if (o(f)) {
          h.value = s(f);
        }
        if (h.enumerable) {
          T[p] = h;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (c && !c.done && (r = n.return)) {
          r.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return Object.defineProperties(t.constructor === i ? a({}) : {}, T);
  }
  function l(t, n, a) {
    var c;
    var p;
    if (a === undefined) {
      a = true;
    }
    try {
      var h = Q(u(n));
      var f = h.next();
      for (; !f.done; f = h.next()) {
        var d = f.value;
        (function (Q) {
          if (a && t[Q] === undefined && t.constructor !== i) {
            if (typeof Q == "symbol") {
              Q = Q.toString();
            }
            return exports.OPTIONS.optionError(`Invalid option "${Q}" (no default value).`, Q);
          }
          var c = n[Q];
          var p = t[Q];
          if (o(c) && p !== null && (typeof p == "object" || typeof p == "function")) {
            var h = u(c);
            if (Array.isArray(p) && (h.length === 1 && (h[0] === exports.APPEND || h[0] === exports.REMOVE) && Array.isArray(c[h[0]]) || h.length === 2 && h.sort().join(",") === exports.APPEND + "," + exports.REMOVE && Array.isArray(c[exports.APPEND]) && Array.isArray(c[exports.REMOVE]))) {
              if (c[exports.REMOVE]) {
                p = t[Q] = p.filter(function (t) {
                  return c[exports.REMOVE].indexOf(t) < 0;
                });
              }
              if (c[exports.APPEND]) {
                t[Q] = T(T([], r(p), false), r(c[exports.APPEND]), false);
              }
            } else {
              l(p, c, a);
            }
          } else if (Array.isArray(c)) {
            t[Q] = [];
            l(t[Q], c, false);
          } else if (o(c)) {
            t[Q] = s(c);
          } else {
            t[Q] = c;
          }
        })(d);
      }
    } catch (t) {
      c = {
        error: t
      };
    } finally {
      try {
        if (f && !f.done && (p = h.return)) {
          p.call(h);
        }
      } finally {
        if (c) {
          throw c.error;
        }
      }
    }
    return t;
  }
  function c(t) {
    var e;
    var r;
    var T = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      T[n - 1] = arguments[n];
    }
    var o = {};
    try {
      var i = Q(T);
      var a = i.next();
      for (; !a.done; a = i.next()) {
        var u = a.value;
        if (t.hasOwnProperty(u)) {
          o[u] = t[u];
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    return o;
  }
  exports.Expandable = i;
  exports.expandable = a;
  exports.makeArray = function (t) {
    if (Array.isArray(t)) {
      return t;
    } else {
      return [t];
    }
  };
  exports.keys = u;
  exports.copy = s;
  exports.insert = l;
  exports.defaultOptions = function (t) {
    var e = [];
    var Q = 1;
    for (; Q < arguments.length; Q++) {
      e[Q - 1] = arguments[Q];
    }
    e.forEach(function (e) {
      return l(t, e, false);
    });
    return t;
  };
  exports.userOptions = function (t) {
    var e = [];
    var Q = 1;
    for (; Q < arguments.length; Q++) {
      e[Q - 1] = arguments[Q];
    }
    e.forEach(function (e) {
      return l(t, e, true);
    });
    return t;
  };
  exports.selectOptions = c;
  exports.selectOptionsFromKeys = function (t, e) {
    return c.apply(undefined, T([t], r(Object.keys(e)), false));
  };
  exports.separateOptions = function (t) {
    var e;
    var r;
    var T;
    var n;
    var o = [];
    var i = 1;
    for (; i < arguments.length; i++) {
      o[i - 1] = arguments[i];
    }
    var a = [];
    try {
      var u = Q(o);
      var s = u.next();
      for (; !s.done; s = u.next()) {
        var l = s.value;
        var c = {};
        var p = {};
        try {
          T = undefined;
          var h = Q(Object.keys(t || {}));
          var f = h.next();
          for (; !f.done; f = h.next()) {
            var d = f.value;
            (l[d] === undefined ? p : c)[d] = t[d];
          }
        } catch (t) {
          T = {
            error: t
          };
        } finally {
          try {
            if (f && !f.done && (n = h.return)) {
              n.call(h);
            }
          } finally {
            if (T) {
              throw T.error;
            }
          }
        }
        a.push(c);
        t = p;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (s && !s.done && (r = u.return)) {
          r.call(u);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    a.unshift(t);
    return a;
  };
  exports.lookup = function (t, e, Q = null) {
    if (e.hasOwnProperty(t)) {
      return e[t];
    } else {
      return Q;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'N' to 'emptyModule_4'
// - Resolved require(503166) to 'empty-module_4'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 565505
         */
module.exports = function (module, exports, require) {
  var n = typeof Map == "function" && Map.prototype;
  var o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var i = n && o && typeof o.get == "function" ? o.get : null;
  var u = n && Map.prototype.forEach;
  var a = typeof Set == "function" && Set.prototype;
  var s = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var c = a && s && typeof s.get == "function" ? s.get : null;
  var f = a && Set.prototype.forEach;
  var l = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
  var p = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
  var d = typeof WeakRef == "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
  var h = Boolean.prototype.valueOf;
  var y = Object.prototype.toString;
  var b = Function.prototype.toString;
  var g = String.prototype.match;
  var v = String.prototype.slice;
  var m = String.prototype.replace;
  var S = String.prototype.toUpperCase;
  var w = String.prototype.toLowerCase;
  var A = RegExp.prototype.test;
  var x = Array.prototype.concat;
  var O = Array.prototype.join;
  var M = Array.prototype.slice;
  var P = Math.floor;
  var E = typeof BigInt == "function" ? BigInt.prototype.valueOf : null;
  var _ = Object.getOwnPropertySymbols;
  var j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null;
  var k = typeof Symbol == "function" && typeof Symbol.iterator == "object";
  var T = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === k ? "object" : "symbol") ? Symbol.toStringTag : null;
  var F = Object.prototype.propertyIsEnumerable;
  var R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (t) {
    return t.__proto__;
  } : null);
  function I(t, e) {
    if (t === Infinity || t === -Infinity || t != t || t && t > -1000 && t < 1000 || A.call(/e/, e)) {
      return e;
    }
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
      var n = t < 0 ? -P(-t) : P(t);
      if (n !== t) {
        var o = String(n);
        var i = v.call(e, o.length + 1);
        return m.call(o, r, "$&_") + "." + m.call(m.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return m.call(e, r, "$&_");
  }
  var emptyModule_4 = require("empty-module_4") /*id: 503166*/;
  var B = emptyModule_4.custom;
  var C = H(B) ? B : null;
  var L = {
    __proto__: null,
    double: "\"",
    single: "'"
  };
  var D = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  function z(t, e, r) {
    var n = L[r.quoteStyle || e];
    return n + t + n;
  }
  function W(t) {
    return V(t) === "[object Array]" && (!T || typeof t != "object" || !(T in t));
  }
  function U(t) {
    return V(t) === "[object RegExp]" && (!T || typeof t != "object" || !(T in t));
  }
  function H(t) {
    if (k) {
      return t && typeof t == "object" && t instanceof Symbol;
    }
    if (typeof t == "symbol") {
      return true;
    }
    if (!t || typeof t != "object" || !j) {
      return false;
    }
    try {
      j.call(t);
      return true;
    } catch (t) {}
    return false;
  }
  module.exports = function t(e, n, o, a) {
    var s;
    var y;
    var S;
    var A;
    var P;
    var _ = n || {};
    if ($(_, "quoteStyle") && !$(L, _.quoteStyle)) {
      throw TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
    }
    if ($(_, "maxStringLength") && (typeof _.maxStringLength == "number" ? _.maxStringLength < 0 && _.maxStringLength !== Infinity : _.maxStringLength !== null)) {
      throw TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
    }
    var B = !$(_, "customInspect") || _.customInspect;
    if (typeof B != "boolean" && B !== "symbol") {
      throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if ($(_, "indent") && _.indent !== null && _.indent !== "\t" && (parseInt(_.indent, 10) !== _.indent || !(_.indent > 0))) {
      throw TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
    }
    if ($(_, "numericSeparator") && typeof _.numericSeparator != "boolean") {
      throw TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
    }
    var G = _.numericSeparator;
    if (e === undefined) {
      return "undefined";
    }
    if (e === null) {
      return "null";
    }
    if (typeof e == "boolean") {
      if (e) {
        return "true";
      } else {
        return "false";
      }
    }
    if (typeof e == "string") {
      return function t(e, r) {
        if (e.length > r.maxStringLength) {
          var n = e.length - r.maxStringLength;
          return t(v.call(e, 0, r.maxStringLength), r) + ("... " + n) + " more character" + (n > 1 ? "s" : "");
        }
        var o = D[r.quoteStyle || "single"];
        o.lastIndex = 0;
        return z(m.call(m.call(e, o, "\\$1"), /[\x00-\x1f]/g, K), "single", r);
      }(e, _);
    }
    if (typeof e == "number") {
      if (e === 0) {
        if (Infinity / e > 0) {
          return "0";
        } else {
          return "-0";
        }
      }
      var tt = String(e);
      if (G) {
        return I(e, tt);
      } else {
        return tt;
      }
    }
    if (typeof e == "bigint") {
      var te = String(e) + "n";
      if (G) {
        return I(e, te);
      } else {
        return te;
      }
    }
    var tr = _.depth === undefined ? 5 : _.depth;
    if (o === undefined) {
      o = 0;
    }
    if (o >= tr && tr > 0 && typeof e == "object") {
      if (W(e)) {
        return "[Array]";
      } else {
        return "[Object]";
      }
    }
    var tn = function (t, e) {
      var r;
      if (t.indent === "\t") {
        r = "\t";
      } else {
        if (typeof t.indent != "number" || !(t.indent > 0)) {
          return null;
        }
        r = O.call(Array(t.indent + 1), " ");
      }
      return {
        base: r,
        prev: O.call(Array(e + 1), r)
      };
    }(_, o);
    if (a === undefined) {
      a = [];
    } else if (q(a, e) >= 0) {
      return "[Circular]";
    }
    function to(e, r, n) {
      if (r) {
        (a = M.call(a)).push(r);
      }
      if (n) {
        var i = {
          depth: _.depth
        };
        if ($(_, "quoteStyle")) {
          i.quoteStyle = _.quoteStyle;
        }
        return t(e, i, o + 1, a);
      }
      return t(e, _, o + 1, a);
    }
    if (typeof e == "function" && !U(e)) {
      var ti = function (t) {
        if (t.name) {
          return t.name;
        }
        var e = g.call(b.call(t), /^function\s*([\w$]+)/);
        if (e) {
          return e[1];
        } else {
          return null;
        }
      }(e);
      var tu = J(e, to);
      return "[Function" + (ti ? ": " + ti : " (anonymous)") + "]" + (tu.length > 0 ? " { " + O.call(tu, ", ") + " }" : "");
    }
    if (H(e)) {
      var ta = k ? m.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : j.call(e);
      if (typeof e != "object" || k) {
        return ta;
      } else {
        return Y(ta);
      }
    }
    if ((ts = e) && typeof ts == "object" && (typeof HTMLElement != "undefined" && ts instanceof HTMLElement || typeof ts.nodeName == "string" && typeof ts.getAttribute == "function")) {
      var ts;
      var tc;
      var tf = "<" + w.call(String(e.nodeName));
      var tl = e.attributes || [];
      var tp = 0;
      for (; tp < tl.length; tp++) {
        tf += " " + tl[tp].name + "=" + z((tc = tl[tp].value, m.call(String(tc), /"/g, "&quot;")), "double", _);
      }
      tf += ">";
      if (e.childNodes && e.childNodes.length) {
        tf += "...";
      }
      return tf += "</" + w.call(String(e.nodeName)) + ">";
    }
    if (W(e)) {
      if (e.length === 0) {
        return "[]";
      }
      var td = J(e, to);
      if (tn && !function (t) {
        for (var e = 0; e < t.length; e++) {
          if (q(t[e], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }(td)) {
        return "[" + Q(td, tn) + "]";
      } else {
        return "[ " + O.call(td, ", ") + " ]";
      }
    }
    if (V(s = e) === "[object Error]" && (!T || typeof s != "object" || !(T in s))) {
      var th = J(e, to);
      if ("cause" in Error.prototype || !("cause" in e) || F.call(e, "cause")) {
        if (th.length === 0) {
          return "[" + String(e) + "]";
        } else {
          return "{ [" + String(e) + "] " + O.call(th, ", ") + " }";
        }
      } else {
        return "{ [" + String(e) + "] " + O.call(x.call("[cause]: " + to(e.cause), th), ", ") + " }";
      }
    }
    if (typeof e == "object" && B) {
      if (C && typeof e[C] == "function" && emptyModule_4) {
        return emptyModule_4(e, {
          depth: tr - o
        });
      }
      if (B !== "symbol" && typeof e.inspect == "function") {
        return e.inspect();
      }
    }
    if (function (t) {
      if (!i || !t || typeof t != "object") {
        return false;
      }
      try {
        i.call(t);
        try {
          c.call(t);
        } catch (t) {
          return true;
        }
        return t instanceof Map;
      } catch (t) {}
      return false;
    }(e)) {
      var ty = [];
      if (u) {
        u.call(e, function (t, r) {
          ty.push(to(r, e, true) + " => " + to(t, e));
        });
      }
      return Z("Map", i.call(e), ty, tn);
    }
    if (function (t) {
      if (!c || !t || typeof t != "object") {
        return false;
      }
      try {
        c.call(t);
        try {
          i.call(t);
        } catch (t) {
          return true;
        }
        return t instanceof Set;
      } catch (t) {}
      return false;
    }(e)) {
      var tb = [];
      if (f) {
        f.call(e, function (t) {
          tb.push(to(t, e));
        });
      }
      return Z("Set", c.call(e), tb, tn);
    }
    if (function (t) {
      if (!l || !t || typeof t != "object") {
        return false;
      }
      try {
        l.call(t, l);
        try {
          p.call(t, p);
        } catch (t) {
          return true;
        }
        return t instanceof WeakMap;
      } catch (t) {}
      return false;
    }(e)) {
      return X("WeakMap");
    }
    if (function (t) {
      if (!p || !t || typeof t != "object") {
        return false;
      }
      try {
        p.call(t, p);
        try {
          l.call(t, l);
        } catch (t) {
          return true;
        }
        return t instanceof WeakSet;
      } catch (t) {}
      return false;
    }(e)) {
      return X("WeakSet");
    }
    if (function (t) {
      if (!d || !t || typeof t != "object") {
        return false;
      }
      try {
        d.call(t);
        return true;
      } catch (t) {}
      return false;
    }(e)) {
      return X("WeakRef");
    }
    if (V(y = e) === "[object Number]" && (!T || typeof y != "object" || !(T in y))) {
      return Y(to(Number(e)));
    }
    if (function (t) {
      if (!t || typeof t != "object" || !E) {
        return false;
      }
      try {
        E.call(t);
        return true;
      } catch (t) {}
      return false;
    }(e)) {
      return Y(to(E.call(e)));
    }
    if (V(S = e) === "[object Boolean]" && (!T || typeof S != "object" || !(T in S))) {
      return Y(h.call(e));
    }
    if (V(A = e) === "[object String]" && (!T || typeof A != "object" || !(T in A))) {
      return Y(to(String(e)));
    }
    if (typeof window != "undefined" && e === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis != "undefined" && e === globalThis || require.g !== undefined && e === require.g) {
      return "{ [object globalThis] }";
    }
    if ((V(P = e) !== "[object Date]" || !!T && typeof P == "object" && !!(T in P)) && !U(e)) {
      var tg = J(e, to);
      var tv = R ? R(e) === Object.prototype : e instanceof Object || e.constructor === Object;
      var tm = e instanceof Object ? "" : "null prototype";
      var tS = !tv && T && Object(e) === e && T in e ? v.call(V(e), 8, -1) : tm ? "Object" : "";
      var tw = (tv || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "") + (tS || tm ? "[" + O.call(x.call([], tS || [], tm || []), ": ") + "] " : "");
      if (tg.length === 0) {
        return tw + "{}";
      } else if (tn) {
        return tw + "{" + Q(tg, tn) + "}";
      } else {
        return tw + "{ " + O.call(tg, ", ") + " }";
      }
    }
    return String(e);
  };
  var G = Object.prototype.hasOwnProperty || function (t) {
    return t in this;
  };
  function $(t, e) {
    return G.call(t, e);
  }
  function V(t) {
    return y.call(t);
  }
  function q(t, e) {
    if (t.indexOf) {
      return t.indexOf(e);
    }
    var r = 0;
    var n = t.length;
    for (; r < n; r++) {
      if (t[r] === e) {
        return r;
      }
    }
    return -1;
  }
  function K(t) {
    var e = t.charCodeAt(0);
    var r = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[e];
    if (r) {
      return "\\" + r;
    } else {
      return "\\x" + (e < 16 ? "0" : "") + S.call(e.toString(16));
    }
  }
  function Y(t) {
    return "Object(" + t + ")";
  }
  function X(t) {
    return t + " { ? }";
  }
  function Z(t, e, r, n) {
    return t + " (" + e + ") {" + (n ? Q(r, n) : O.call(r, ", ")) + "}";
  }
  function Q(t, e) {
    if (t.length === 0) {
      return "";
    }
    var r = "\n" + e.prev + e.base;
    return r + O.call(t, "," + r) + "\n" + e.prev;
  }
  function J(t, e) {
    var r;
    var n = W(t);
    var o = [];
    if (n) {
      o.length = t.length;
      for (var i = 0; i < t.length; i++) {
        o[i] = $(t, i) ? e(t[i], t) : "";
      }
    }
    var u = typeof _ == "function" ? _(t) : [];
    if (k) {
      r = {};
      for (var a = 0; a < u.length; a++) {
        r["$" + u[a]] = u[a];
      }
    }
    for (var s in t) {
      if ($(t, s) && (!n || String(Number(s)) !== s || !(s < t.length))) {
        if (!k || !(r["$" + s] instanceof Symbol)) {
          if (A.call(/[^\w$]/, s)) {
            o.push(e(s, t) + ": " + e(t[s], t));
          } else {
            o.push(s + ": " + e(t[s], t));
          }
        }
      }
    }
    if (typeof _ == "function") {
      for (var c = 0; c < u.length; c++) {
        if (F.call(t, u[c])) {
          o.push("[" + e(u[c]) + "]: " + e(t[u[c]], t));
        }
      }
    }
    return o;
  }
}
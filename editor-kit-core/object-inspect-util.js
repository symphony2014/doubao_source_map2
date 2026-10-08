// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'N' to 'moduleUnpackStub'
// - Resolved require(659089) to 'module-unpack-stub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 406902
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
  var moduleUnpackStub = require("module-unpack-stub") /*id: 659089*/;
  var B = moduleUnpackStub.custom;
  var C = G(B) ? B : null;
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
    return !T || typeof t != "object" || !(T in t) && t[T] === undefined;
  }
  function U(t) {
    return q(t) === "[object Array]" && W(t);
  }
  function H(t) {
    return q(t) === "[object RegExp]" && W(t);
  }
  function G(t) {
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
    if (V(_, "quoteStyle") && !V(L, _.quoteStyle)) {
      throw TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
    }
    if (V(_, "maxStringLength") && (typeof _.maxStringLength == "number" ? _.maxStringLength < 0 && _.maxStringLength !== Infinity : _.maxStringLength !== null)) {
      throw TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
    }
    var B = !V(_, "customInspect") || _.customInspect;
    if (typeof B != "boolean" && B !== "symbol") {
      throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (V(_, "indent") && _.indent !== null && _.indent !== "\t" && (parseInt(_.indent, 10) !== _.indent || !(_.indent > 0))) {
      throw TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
    }
    if (V(_, "numericSeparator") && typeof _.numericSeparator != "boolean") {
      throw TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
    }
    var $ = _.numericSeparator;
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
        return z(m.call(m.call(e, o, "\\$1"), /[\x00-\x1f]/g, Y), "single", r);
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
      var te = String(e);
      if ($) {
        return I(e, te);
      } else {
        return te;
      }
    }
    if (typeof e == "bigint") {
      var tr = String(e) + "n";
      if ($) {
        return I(e, tr);
      } else {
        return tr;
      }
    }
    var tn = _.depth === undefined ? 5 : _.depth;
    if (o === undefined) {
      o = 0;
    }
    if (o >= tn && tn > 0 && typeof e == "object") {
      if (U(e)) {
        return "[Array]";
      } else {
        return "[Object]";
      }
    }
    var to = function (t, e) {
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
    } else if (K(a, e) >= 0) {
      return "[Circular]";
    }
    function ti(e, r, n) {
      if (r) {
        (a = M.call(a)).push(r);
      }
      if (n) {
        var i = {
          depth: _.depth
        };
        if (V(_, "quoteStyle")) {
          i.quoteStyle = _.quoteStyle;
        }
        return t(e, i, o + 1, a);
      }
      return t(e, _, o + 1, a);
    }
    if (typeof e == "function" && !H(e)) {
      var tu = function (t) {
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
      var ta = tt(e, ti);
      return "[Function" + (tu ? ": " + tu : " (anonymous)") + "]" + (ta.length > 0 ? " { " + O.call(ta, ", ") + " }" : "");
    }
    if (G(e)) {
      var ts = k ? m.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : j.call(e);
      if (typeof e != "object" || k) {
        return ts;
      } else {
        return X(ts);
      }
    }
    if ((tc = e) && typeof tc == "object" && (typeof HTMLElement != "undefined" && tc instanceof HTMLElement || typeof tc.nodeName == "string" && typeof tc.getAttribute == "function")) {
      var tc;
      var tf;
      var tl = "<" + w.call(String(e.nodeName));
      var tp = e.attributes || [];
      var td = 0;
      for (; td < tp.length; td++) {
        tl += " " + tp[td].name + "=" + z((tf = tp[td].value, m.call(String(tf), /"/g, "&quot;")), "double", _);
      }
      tl += ">";
      if (e.childNodes && e.childNodes.length) {
        tl += "...";
      }
      return tl += "</" + w.call(String(e.nodeName)) + ">";
    }
    if (U(e)) {
      if (e.length === 0) {
        return "[]";
      }
      var th = tt(e, ti);
      if (to && !function (t) {
        for (var e = 0; e < t.length; e++) {
          if (K(t[e], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }(th)) {
        return "[" + J(th, to) + "]";
      } else {
        return "[ " + O.call(th, ", ") + " ]";
      }
    }
    if (q(s = e) === "[object Error]" && W(s)) {
      var ty = tt(e, ti);
      if ("cause" in Error.prototype || !("cause" in e) || F.call(e, "cause")) {
        if (ty.length === 0) {
          return "[" + String(e) + "]";
        } else {
          return "{ [" + String(e) + "] " + O.call(ty, ", ") + " }";
        }
      } else {
        return "{ [" + String(e) + "] " + O.call(x.call("[cause]: " + ti(e.cause), ty), ", ") + " }";
      }
    }
    if (typeof e == "object" && B) {
      if (C && typeof e[C] == "function" && moduleUnpackStub) {
        return moduleUnpackStub(e, {
          depth: tn - o
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
      var tb = [];
      if (u) {
        u.call(e, function (t, r) {
          tb.push(ti(r, e, true) + " => " + ti(t, e));
        });
      }
      return Q("Map", i.call(e), tb, to);
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
      var tg = [];
      if (f) {
        f.call(e, function (t) {
          tg.push(ti(t, e));
        });
      }
      return Q("Set", c.call(e), tg, to);
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
      return Z("WeakMap");
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
      return Z("WeakSet");
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
      return Z("WeakRef");
    }
    if (q(y = e) === "[object Number]" && W(y)) {
      return X(ti(Number(e)));
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
      return X(ti(E.call(e)));
    }
    if (q(S = e) === "[object Boolean]" && W(S)) {
      return X(h.call(e));
    }
    if (q(A = e) === "[object String]" && W(A)) {
      return X(ti(String(e)));
    }
    if (typeof window != "undefined" && e === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis != "undefined" && e === globalThis || require.g !== undefined && e === require.g) {
      return "{ [object globalThis] }";
    }
    if ((q(P = e) !== "[object Date]" || !W(P)) && !H(e)) {
      var tv = tt(e, ti);
      var tm = R ? R(e) === Object.prototype : e instanceof Object || e.constructor === Object;
      var tS = e instanceof Object ? "" : "null prototype";
      var tw = !tm && T && Object(e) === e && T in e ? v.call(q(e), 8, -1) : tS ? "Object" : "";
      var tA = (tm || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "") + (tw || tS ? "[" + O.call(x.call([], tw || [], tS || []), ": ") + "] " : "");
      if (tv.length === 0) {
        return tA + "{}";
      } else if (to) {
        return tA + "{" + J(tv, to) + "}";
      } else {
        return tA + "{ " + O.call(tv, ", ") + " }";
      }
    }
    return String(e);
  };
  var $ = Object.prototype.hasOwnProperty || function (t) {
    return t in this;
  };
  function V(t, e) {
    return $.call(t, e);
  }
  function q(t) {
    return y.call(t);
  }
  function K(t, e) {
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
  function Y(t) {
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
  function X(t) {
    return "Object(" + t + ")";
  }
  function Z(t) {
    return t + " { ? }";
  }
  function Q(t, e, r, n) {
    return t + " (" + e + ") {" + (n ? J(r, n) : O.call(r, ", ")) + "}";
  }
  function J(t, e) {
    if (t.length === 0) {
      return "";
    }
    var r = "\n" + e.prev + e.base;
    return r + O.call(t, "," + r) + "\n" + e.prev;
  }
  function tt(t, e) {
    var r;
    var n = U(t);
    var o = [];
    if (n) {
      o.length = t.length;
      for (var i = 0; i < t.length; i++) {
        o[i] = V(t, i) ? e(t[i], t) : "";
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
      if (V(t, s) && (!n || String(Number(s)) !== s || !(s < t.length))) {
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
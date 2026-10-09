// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'arraySliceMethodResolver_2'
// - Resolved require(752782) to 'array-slice-method-resolver_2'
// - Renamed variable 'T' to 'arrayFromPolyfillStubReexport'
// - Resolved require(342514) to 'array-from-polyfill-stub-reexport'
// - Renamed variable 'n' to 'symbolPolyfillSetup_1'
// - Resolved require(651798) to 'symbol-polyfill-setup_1'
// - Renamed variable 'o' to 'webidlIteratorPolyfillReexport_3'
// - Resolved require(92619) to 'webidl-iterator-polyfill-reexport_3'
// - Renamed variable 'i' to 'arrayIsArrayPolyfill_5'
// - Resolved require(219564) to 'array-is-array-polyfill_5'
// - Renamed variable 'a' to 'objectDefinePropertyWrapper_1'
// - Resolved require(753422) to 'object-define-property-wrapper_1'
// - Renamed variable 'u' to 'esModuleInteropHelper'
// - Resolved require(231208) to 'es-module-interop-helper'
// - Resolved require(108502) to 'array-iterator-converter'
// - Resolved require(672425) to 'regexp-flags-helper-util_2'
// - Resolved require(199896) to 'array-sort-method-resolver'
// - Resolved require(752782) to 'array-slice-method-resolver_2'
// - Resolved require(117234) to 'safe-parse-int-polyfill'
// - Resolved require(868014) to 'array-indexof-polyfill-check'
// - Resolved require(699923) to 'get-array-foreach-strategy'
// - Resolved require(540329) to 'object-create-shim-proxy'
// - Resolved require(362642) to 'array-concat-method-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 465737
         */
module.exports = function (module, exports, require) {
  var arraySliceMethodResolver_2 = require("array-slice-method-resolver_2") /*id: 752782*/;
  var arrayFromPolyfillStubReexport = require("array-from-polyfill-stub-reexport") /*id: 342514*/;
  var symbolPolyfillSetup_1 = require("symbol-polyfill-setup_1") /*id: 651798*/;
  var webidlIteratorPolyfillReexport_3 = require("webidl-iterator-polyfill-reexport_3") /*id: 92619*/;
  var arrayIsArrayPolyfill_5 = require("array-is-array-polyfill_5") /*id: 219564*/;
  var objectDefinePropertyWrapper_1 = require("object-define-property-wrapper_1") /*id: 753422*/;
  var esModuleInteropHelper = require("es-module-interop-helper") /*id: 231208*/;
  objectDefinePropertyWrapper_1(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var s = esModuleInteropHelper(require("array-iterator-converter") /*id: 108502*/);
  var l = esModuleInteropHelper(require("regexp-flags-helper-util_2") /*id: 672425*/);
  var c = esModuleInteropHelper(require("array-sort-method-resolver") /*id: 199896*/);
  var p = esModuleInteropHelper(require("array-slice-method-resolver_2") /*id: 752782*/);
  var h = esModuleInteropHelper(require("safe-parse-int-polyfill") /*id: 117234*/);
  var f = esModuleInteropHelper(require("array-indexof-polyfill-check") /*id: 868014*/);
  var d = esModuleInteropHelper(require("get-array-foreach-strategy") /*id: 699923*/);
  var D = esModuleInteropHelper(require("object-create-shim-proxy") /*id: 540329*/);
  var L = esModuleInteropHelper(require("array-concat-method-resolver") /*id: 362642*/);
  function m(t, e) {
    var Q = symbolPolyfillSetup_1 !== undefined && webidlIteratorPolyfillReexport_3(t) || t["@@iterator"];
    if (!Q) {
      if (arrayIsArrayPolyfill_5(t) || (Q = function (t, e) {
        if (t) {
          if (typeof t == "string") {
            return y(t, undefined);
          }
          var Q;
          var n = arraySliceMethodResolver_2(Q = Object.prototype.toString.call(t)).call(Q, 8, -1);
          if (n === "Object" && t.constructor) {
            n = t.constructor.name;
          }
          if (n === "Map" || n === "Set") {
            return arrayFromPolyfillStubReexport(t);
          }
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return y(t, e);
          }
        }
      }(t)) || e && t && typeof t.length == "number") {
        if (Q) {
          t = Q;
        }
        var a = 0;
        function u() {}
        return {
          s: u,
          n: function () {
            if (a >= t.length) {
              return {
                done: true
              };
            } else {
              return {
                done: false,
                value: t[a++]
              };
            }
          },
          e: function (t) {
            throw t;
          },
          f: u
        };
      }
      throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s;
    var l = true;
    var c = false;
    return {
      s: function () {
        Q = Q.call(t);
      },
      n: function () {
        var t = Q.next();
        l = t.done;
        return t;
      },
      e: function (t) {
        c = true;
        s = t;
      },
      f: function () {
        try {
          if (!l && Q.return != null) {
            Q.return();
          }
        } finally {
          if (c) {
            throw s;
          }
        }
      }
    };
  }
  function y(t, e) {
    if (e == null || e > t.length) {
      e = t.length;
    }
    var Q = 0;
    var r = Array(e);
    for (; Q < e; Q++) {
      r[Q] = t[Q];
    }
    return r;
  }
  var H = "xregexp";
  var v = {
    astral: false,
    namespacing: true
  };
  var g = {};
  var b = {};
  var E = {};
  var C = [];
  var V = "default";
  var M = "class";
  var F = {
    default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
    class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
  };
  var x = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g;
  var O = /()??/.exec("")[1] === undefined;
  var A = l.default(/x/) !== undefined;
  function _(t) {
    var e = true;
    try {
      RegExp("", t);
      if (t === "y" && ".a".replace(RegExp("a", "gy"), ".") === "..") {
        e = false;
      }
    } catch (t) {
      e = false;
    }
    return e;
  }
  var S = _("d");
  var w = _("s");
  var B = _("u");
  var P = _("y");
  var k = {
    d: S,
    g: true,
    i: true,
    m: true,
    s: w,
    u: B,
    y: P
  };
  var N = w ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
  function I(t, e, Q, r, T) {
    var n;
    t[H] = {
      captureNames: e
    };
    if (T) {
      return t;
    }
    if (t.__proto__) {
      t.__proto__ = J.prototype;
    } else {
      for (var o in J.prototype) {
        t[o] = J.prototype[o];
      }
    }
    t[H].source = Q;
    t[H].flags = r ? c.default(n = r.split("")).call(n).join("") : r;
    return t;
  }
  function R(t) {
    return t.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
  }
  function j(t, e) {
    if (!J.isRegExp(t)) {
      throw TypeError("Type RegExp expected");
    }
    var Q;
    var r;
    var T;
    var n = t[H] || {};
    r = t;
    var o = A ? l.default(r) : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(r))[1];
    var i = "";
    var a = "";
    var u = null;
    var s = null;
    if ((e = e || {}).removeG) {
      a += "g";
    }
    if (e.removeY) {
      a += "y";
    }
    if (a) {
      o = o.replace(RegExp(`[${a}]+`, "g"), "");
    }
    if (e.addG) {
      i += "g";
    }
    if (e.addY) {
      i += "y";
    }
    if (i) {
      o = R(o + i);
    }
    if (!e.isInternalOnly) {
      if (n.source !== undefined) {
        u = n.source;
      }
      if (l.default(n) != null) {
        s = i ? R(l.default(n) + i) : l.default(n);
      }
    }
    return t = I(new RegExp(e.source || t.source, o), (Q = t)[H] && Q[H].captureNames ? p.default(T = n.captureNames).call(T, 0) : null, u, s, e.isInternalOnly);
  }
  function Z(t) {
    return h.default(t, 16);
  }
  function G(t, e, Q) {
    var r;
    var T;
    var n;
    var o = t.index + t[0].length;
    var i = t.input[t.index - 1];
    var a = t.input[o];
    if (/^[()|]$/.test(i) || /^[()|]$/.test(a) || t.index === 0 || o === t.input.length || /\(\?(?:[:=!]|<[=!])$/.test(t.input.substring(t.index - 4, t.index)) || (r = t.input, T = o, n = Q, (f.default(n).call(n, "x") !== -1 ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/).test(p.default(r).call(r, T)))) {
      return "";
    } else {
      return "(?:)";
    }
  }
  function q(t) {
    return h.default(t, 10).toString(16);
  }
  function W(t, e) {
    return Object.prototype.toString.call(t) === `[object ${e}]`;
  }
  function X(t) {
    if (t == null) {
      throw TypeError("Cannot convert null or undefined to object");
    }
    return t;
  }
  function z(t) {
    while (t.length < 4) {
      t = `0${t}`;
    }
    return t;
  }
  function U(t) {
    var e = {};
    if (W(t, "String")) {
      d.default(J).call(J, t, /[^\s,]+/, function (t) {
        e[t] = true;
      });
      return e;
    } else {
      return t;
    }
  }
  function $(t) {
    if (!/^[\w$]$/.test(t)) {
      throw Error("Flag must be a single character A-Za-z0-9_$");
    }
    k[t] = true;
  }
  function K(t) {
    v.namespacing = t;
  }
  function J(t, e) {
    if (J.isRegExp(t)) {
      if (e !== undefined) {
        throw TypeError("Cannot supply flags when copying a RegExp");
      }
      return j(t);
    }
    t = t === undefined ? "" : String(t);
    e = e === undefined ? "" : String(e);
    if (J.isInstalled("astral") && f.default(e).call(e, "A") === -1) {
      e += "A";
    }
    E[t] ||= {};
    if (!E[t][e]) {
      var Q;
      var r = {
        hasNamedCapture: false,
        captureNames: []
      };
      var T = V;
      var n = "";
      var o = 0;
      var i = function (t, e) {
        if (R(e) !== e) {
          throw SyntaxError(`Invalid duplicate regex flag ${e}`);
        }
        t = t.replace(/^\(\?([\w$]+)\)/, function (t, Q) {
          if (/[dgy]/.test(Q)) {
            throw SyntaxError(`Cannot use flags dgy in mode modifier ${t}`);
          }
          e = R(e + Q);
          return "";
        });
        var Q;
        var r = m(e);
        try {
          for (r.s(); !(Q = r.n()).done;) {
            var T = Q.value;
            if (!k[T]) {
              throw SyntaxError(`Unknown regex flag ${T}`);
            }
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
        return {
          pattern: t,
          flags: e
        };
      }(t, e);
      var a = i.pattern;
      var u = l.default(i);
      while (o < a.length) {
        do {
          if ((Q = function (t, e, Q, r, T) {
            var n;
            var o;
            var i = C.length;
            var a = t[Q];
            var u = null;
            while (i--) {
              if ((!(o = C[i]).leadChar || o.leadChar === a) && (o.scope === r || o.scope === "all") && (!o.flag || f.default(e).call(e, o.flag) !== -1) && (n = J.exec(t, o.regex, Q, "sticky"))) {
                u = {
                  matchLength: n[0].length,
                  output: o.handler.call(T, n, r, e),
                  reparse: o.reparse
                };
                break;
              }
            }
            return u;
          }(a, u, o, T, r)) && Q.reparse) {
            a = p.default(a).call(a, 0, o) + Q.output + p.default(a).call(a, o + Q.matchLength);
          }
        } while (Q && Q.reparse);
        if (Q) {
          n += Q.output;
          o += Q.matchLength || 1;
        } else {
          var c = J.exec(a, F[T], o, "sticky");
          var h = s.default(c, 1)[0];
          n += h;
          o += h.length;
          if (h === "[" && T === V) {
            T = M;
          } else if (h === "]" && T === M) {
            T = V;
          }
        }
      }
      E[t][e] = {
        pattern: n.replace(/(?:\(\?:\))+/g, "(?:)"),
        flags: u.replace(N, ""),
        captures: r.hasNamedCapture ? r.captureNames : null
      };
    }
    var d = E[t][e];
    return I(new RegExp(d.pattern, l.default(d)), d.captures, t, e);
  }
  J.prototype = /(?:)/;
  J.version = "5.1.1";
  J._clipDuplicates = R;
  J._hasNativeFlag = _;
  J._dec = Z;
  J._hex = q;
  J._pad4 = z;
  J.addToken = function (t, e, Q) {
    var r = (Q = Q || {}).optionalFlags;
    if (Q.flag) {
      $(Q.flag);
    }
    if (r) {
      var T;
      var n = m(r = r.split(""));
      try {
        for (n.s(); !(T = n.n()).done;) {
          var o = T.value;
          $(o);
        }
      } catch (t) {
        n.e(t);
      } finally {
        n.f();
      }
    }
    C.push({
      regex: j(t, {
        addG: true,
        addY: P,
        isInternalOnly: true
      }),
      handler: e,
      scope: Q.scope || V,
      flag: Q.flag,
      reparse: Q.reparse,
      leadChar: Q.leadChar
    });
    J.cache.flush("patterns");
  };
  J.cache = function (t, e) {
    b[t] ||= {};
    return b[t][e] ||= J(t, e);
  };
  J.cache.flush = function (t) {
    if (t === "patterns") {
      E = {};
    } else {
      b = {};
    }
  };
  J.escape = function (t) {
    return String(X(t)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, function (t) {
      return `\\u${z(q(t.charCodeAt(0)))}`;
    });
  };
  J.exec = function (t, e, Q, r) {
    var T;
    var n = "g";
    var o = false;
    var i = false;
    if (o = P && (!!r || !!e.sticky && r !== false)) {
      n += "y";
    } else if (r) {
      i = true;
      n += "FakeY";
    }
    e[H] = e[H] || {};
    var a = e[H][n] ||= j(e, {
      addG: true,
      addY: o,
      source: i ? `${e.source}|()` : undefined,
      removeY: r === false,
      isInternalOnly: true
    });
    Q = Q || 0;
    a.lastIndex = Q;
    T = g.exec.call(a, t);
    if (i && T && T.pop() === "") {
      T = null;
    }
    if (e.global) {
      e.lastIndex = T ? a.lastIndex : 0;
    }
    return T;
  };
  J.forEach = function (t, e, Q) {
    var r;
    var T = 0;
    var n = -1;
    while (r = J.exec(t, e, T)) {
      Q(r, ++n, t, e);
      T = r.index + (r[0].length || 1);
    }
  };
  J.globalize = function (t) {
    return j(t, {
      addG: true
    });
  };
  J.install = function (t) {
    t = U(t);
    if (!v.astral && t.astral) {
      v.astral = true;
    }
    if (!v.namespacing && t.namespacing) {
      K(true);
    }
  };
  J.isInstalled = function (t) {
    return !!v[t];
  };
  J.isRegExp = function (t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  };
  J.match = function (t, e, Q) {
    var r = e.global && Q !== "one" || Q === "all";
    var T = (r ? "g" : "") + (e.sticky ? "y" : "") || "noGY";
    e[H] = e[H] || {};
    var n = e[H][T] ||= j(e, {
      addG: !!r,
      removeG: Q === "one",
      isInternalOnly: true
    });
    var o = String(X(t)).match(n);
    if (e.global) {
      e.lastIndex = Q === "one" && o ? o.index + o[0].length : 0;
    }
    if (r) {
      return o || [];
    } else {
      return o && o[0];
    }
  };
  J.matchChain = function (t, e) {
    return function t(Q, r) {
      var T = e[r].regex ? e[r] : {
        regex: e[r]
      };
      var n = [];
      function o(t) {
        if (T.backref) {
          var e = `Backreference to undefined group: ${T.backref}`;
          var Q = isNaN(T.backref);
          if (Q && J.isInstalled("namespacing")) {
            if (!t.groups || !(T.backref in t.groups)) {
              throw ReferenceError(e);
            }
          } else if (!t.hasOwnProperty(T.backref)) {
            throw ReferenceError(e);
          }
          var r = Q && J.isInstalled("namespacing") ? t.groups[T.backref] : t[T.backref];
          n.push(r || "");
        } else {
          n.push(t[0]);
        }
      }
      var i;
      var a = m(Q);
      try {
        for (a.s(); !(i = a.n()).done;) {
          var u = i.value;
          d.default(J).call(J, u, T.regex, o);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
      if (r !== e.length - 1 && n.length) {
        return t(n, r + 1);
      } else {
        return n;
      }
    }([t], 0);
  };
  J.replace = function (t, e, Q, r) {
    var T = J.isRegExp(e);
    var n = e.global && r !== "one" || r === "all";
    var o = (n ? "g" : "") + (e.sticky ? "y" : "") || "noGY";
    var i = e;
    if (T) {
      e[H] = e[H] || {};
      i = e[H][o] ||= j(e, {
        addG: !!n,
        removeG: r === "one",
        isInternalOnly: true
      });
    } else if (n) {
      i = RegExp(J.escape(String(e)), "g");
    }
    var a = g.replace.call(X(t), i, Q);
    if (T && e.global) {
      e.lastIndex = 0;
    }
    return a;
  };
  J.replaceEach = function (t, e) {
    var Q;
    var r = m(e);
    try {
      for (r.s(); !(Q = r.n()).done;) {
        var T = Q.value;
        t = J.replace(t, T[0], T[1], T[2]);
      }
    } catch (t) {
      r.e(t);
    } finally {
      r.f();
    }
    return t;
  };
  J.split = function (t, e, Q) {
    return g.split.call(X(t), e, Q);
  };
  J.test = function (t, e, Q, r) {
    return !!J.exec(t, e, Q, r);
  };
  J.uninstall = function (t) {
    t = U(t);
    if (v.astral && t.astral) {
      v.astral = false;
    }
    if (v.namespacing && t.namespacing) {
      K(false);
    }
  };
  J.union = function (t, e, Q) {
    var r = (Q = Q || {}).conjunction || "or";
    var T = 0;
    function n(t, e, Q) {
      var r = i[T - o];
      if (e) {
        ++T;
        if (r) {
          return `(?<${r}>`;
        }
      } else if (Q) {
        return `\\${+Q + o}`;
      }
      return t;
    }
    if (!W(t, "Array") || !t.length) {
      throw TypeError("Must provide a nonempty array of patterns to merge");
    }
    var o;
    var i;
    var a;
    var u = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var s = [];
    var l = m(t);
    try {
      for (l.s(); !(a = l.n()).done;) {
        var c = a.value;
        if (J.isRegExp(c)) {
          o = T;
          i = c[H] && c[H].captureNames || [];
          s.push(J(c.source).source.replace(u, n));
        } else {
          s.push(J.escape(c));
        }
      }
    } catch (t) {
      l.e(t);
    } finally {
      l.f();
    }
    return J(s.join(r === "none" ? "" : "|"), e);
  };
  g.exec = function (t) {
    var e = this.lastIndex;
    var Q = RegExp.prototype.exec.apply(this, arguments);
    if (Q) {
      if (!O && Q.length > 1 && f.default(Q).call(Q, "") !== -1) {
        var r;
        var T = j(this, {
          removeG: true,
          isInternalOnly: true
        });
        p.default(r = String(t)).call(r, Q.index).replace(T, function () {
          var t = arguments.length;
          var e = 1;
          for (; e < t - 2; ++e) {
            if ((e < 0 || arguments.length <= e ? undefined : arguments[e]) === undefined) {
              Q[e] = undefined;
            }
          }
        });
      }
      if (this[H] && this[H].captureNames) {
        var n = Q;
        if (J.isInstalled("namespacing")) {
          Q.groups = D.default(null);
          n = Q.groups;
        }
        for (var o = 1; o < Q.length; ++o) {
          var i = this[H].captureNames[o - 1];
          if (i) {
            n[i] = Q[o];
          }
        }
      } else if (!Q.groups && J.isInstalled("namespacing")) {
        Q.groups = undefined;
      }
      if (this.global && !Q[0].length && this.lastIndex > Q.index) {
        this.lastIndex = Q.index;
      }
    }
    if (!this.global) {
      this.lastIndex = e;
    }
    return Q;
  };
  g.test = function (t) {
    return !!g.exec.call(this, t);
  };
  g.match = function (t) {
    if (J.isRegExp(t)) {
      if (t.global) {
        var e = String.prototype.match.apply(this, arguments);
        t.lastIndex = 0;
        return e;
      }
    } else {
      t = new RegExp(t);
    }
    return g.exec.call(t, X(this));
  };
  g.replace = function (t, e) {
    var Q;
    var r;
    var T;
    var n = J.isRegExp(t);
    if (n) {
      if (t[H]) {
        r = t[H].captureNames;
      }
      Q = t.lastIndex;
    } else {
      t += "";
    }
    T = W(e, "Function") ? String(this).replace(t, function () {
      var t;
      var Q = arguments.length;
      var T = Array(Q);
      var n = 0;
      for (; n < Q; n++) {
        T[n] = arguments[n];
      }
      if (r) {
        if (J.isInstalled("namespacing")) {
          t = D.default(null);
          T.push(t);
        } else {
          T[0] = new String(T[0]);
          t = T[0];
        }
        for (var o = 0; o < r.length; ++o) {
          if (r[o]) {
            t[r[o]] = T[o + 1];
          }
        }
      }
      return e.apply(undefined, T);
    }) : String(X(this)).replace(t, function () {
      var t = arguments.length;
      var Q = Array(t);
      var T = 0;
      for (; T < t; T++) {
        Q[T] = arguments[T];
      }
      return String(e).replace(x, function (t, e, T, n) {
        e = e || T;
        var o;
        var i;
        var a = W(Q[Q.length - 1], "Object") ? 4 : 3;
        var u = Q.length - a;
        if (e) {
          if (/^\d+$/.test(e)) {
            var s = +e;
            if (s <= u) {
              return Q[s] || "";
            }
          }
          var l = r ? f.default(r).call(r, e) : -1;
          if (l < 0) {
            throw SyntaxError(`Backreference to undefined group ${t}`);
          }
          return Q[l + 1] || "";
        }
        if (n === "" || n === " ") {
          throw SyntaxError(`Invalid token ${t}`);
        }
        if (n === "&" || +n == 0) {
          return Q[0];
        }
        if (n === "$") {
          return "$";
        }
        if (n === "`") {
          return p.default(o = Q[Q.length - 1]).call(o, 0, Q[Q.length - 2]);
        }
        if (n === "'") {
          return p.default(i = Q[Q.length - 1]).call(i, Q[Q.length - 2] + Q[0].length);
        }
        if (!isNaN(n *= 1)) {
          if (n > u) {
            throw SyntaxError(`Backreference to undefined group ${t}`);
          }
          return Q[n] || "";
        }
        throw SyntaxError(`Invalid token ${t}`);
      });
    });
    if (n) {
      if (t.global) {
        t.lastIndex = 0;
      } else {
        t.lastIndex = Q;
      }
    }
    return T;
  };
  g.split = function (t, e) {
    if (!J.isRegExp(t)) {
      return String.prototype.split.apply(this, arguments);
    }
    var Q;
    var r = String(this);
    var T = [];
    var n = t.lastIndex;
    var o = 0;
    e = (e === undefined ? -1 : e) >>> 0;
    d.default(J).call(J, r, t, function (t) {
      if (t.index + t[0].length > o) {
        T.push(p.default(r).call(r, o, t.index));
        if (t.length > 1 && t.index < r.length) {
          Array.prototype.push.apply(T, p.default(t).call(t, 1));
        }
        Q = t[0].length;
        o = t.index + Q;
      }
    });
    if (o === r.length) {
      if (!t.test("") || Q) {
        T.push("");
      }
    } else {
      T.push(p.default(r).call(r, o));
    }
    t.lastIndex = n;
    if (T.length > e) {
      return p.default(T).call(T, 0, e);
    } else {
      return T;
    }
  };
  J.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (t, e) {
    if (t[1] === "B" && e === V) {
      return t[0];
    }
    throw SyntaxError(`Invalid escape ${t[0]}`);
  }, {
    scope: "all",
    leadChar: "\\"
  });
  J.addToken(/\\u{([\dA-Fa-f]+)}/, function (t, e, Q) {
    var r = Z(t[1]);
    if (r > 1114111) {
      throw SyntaxError(`Invalid Unicode code point ${t[0]}`);
    }
    if (r <= 65535) {
      return `\\u${z(q(r))}`;
    }
    if (B && f.default(Q).call(Q, "u") !== -1) {
      return t[0];
    }
    throw SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  }, {
    scope: "all",
    leadChar: "\\"
  });
  J.addToken(/\(\?#[^)]*\)/, G, {
    leadChar: "("
  });
  J.addToken(/\s+|#[^\n]*\n?/, G, {
    flag: "x"
  });
  if (!w) {
    J.addToken(/\./, function () {
      return "[\\s\\S]";
    }, {
      flag: "s",
      leadChar: "."
    });
  }
  J.addToken(/\\k<([^>]+)>/, function (t) {
    var e;
    var Q;
    var r = isNaN(t[1]) ? f.default(e = this.captureNames).call(e, t[1]) + 1 : +t[1];
    var T = t.index + t[0].length;
    if (!r || r > this.captureNames.length) {
      throw SyntaxError(`Backreference to undefined group ${t[0]}`);
    }
    return L.default(Q = `\\${r}`).call(Q, T === t.input.length || isNaN(t.input[T]) ? "" : "(?:)");
  }, {
    leadChar: "\\"
  });
  J.addToken(/\\(\d+)/, function (t, e) {
    if ((e !== V || !/^[1-9]/.test(t[1]) || !(+t[1] <= this.captureNames.length)) && t[1] !== "0") {
      throw SyntaxError(`Cannot use octal escape or backreference to undefined group ${t[0]}`);
    }
    return t[0];
  }, {
    scope: "all",
    leadChar: "\\"
  });
  J.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])*)>/, function (t) {
    var e;
    if (!J.isInstalled("namespacing") && (t[1] === "length" || t[1] === "__proto__")) {
      throw SyntaxError(`Cannot use reserved word as capture name ${t[0]}`);
    }
    if (f.default(e = this.captureNames).call(e, t[1]) !== -1) {
      throw SyntaxError(`Cannot use same name for multiple groups ${t[0]}`);
    }
    this.captureNames.push(t[1]);
    this.hasNamedCapture = true;
    return "(";
  }, {
    leadChar: "("
  });
  J.addToken(/\((?!\?)/, function (t, e, Q) {
    if (f.default(Q).call(Q, "n") !== -1) {
      return "(?:";
    } else {
      this.captureNames.push(null);
      return "(";
    }
  }, {
    optionalFlags: "n",
    leadChar: "("
  });
  exports.default = J;
  module.exports = exports.default;
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'Schema'
// - Renamed export 'z' to 'load'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 671191
         */
module.exports = function (module, exports, require) {
  var i;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  function o(t) {
    return t == null;
  }
  function l(t) {
    return typeof t == "object" && t !== null;
  }
  function n(t, e) {
    var r;
    var i = "";
    for (r = 0; r < e; r += 1) {
      i += t;
    }
    return i;
  }
  function s(t) {
    return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
  }
  loggerLevelUtils.setFunctionName(o, "isNothing");
  loggerLevelUtils.setFunctionName(l, "isObject");
  loggerLevelUtils.setFunctionName(function (t) {
    if (Array.isArray(t)) {
      return t;
    } else if (o(t)) {
      return [];
    } else {
      return [t];
    }
  }, "toArray");
  loggerLevelUtils.setFunctionName(function (t, e) {
    var r;
    var i;
    var a;
    var o;
    if (e) {
      r = 0;
      i = (o = Object.keys(e)).length;
      for (; r < i; r += 1) {
        t[a = o[r]] = e[a];
      }
    }
    return t;
  }, "extend");
  loggerLevelUtils.setFunctionName(n, "repeat");
  loggerLevelUtils.setFunctionName(s, "isNegativeZero");
  var h = {
    isNothing: o,
    isObject: l,
    repeat: n,
    isNegativeZero: s
  };
  function c(t, e) {
    var r = "";
    var i = t.reason || "(unknown reason)";
    if (t.mark) {
      if (t.mark.name) {
        r += "in \"" + t.mark.name + "\" ";
      }
      r += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")";
      if (!e && t.mark.snippet) {
        r += "\n\n" + t.mark.snippet;
      }
      return i + " " + r;
    } else {
      return i;
    }
  }
  function d(t, e) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = t;
    this.mark = e;
    this.message = c(this, false);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = Error().stack || "";
    }
  }
  function u(t, e, r, i, a) {
    var o = "";
    var l = "";
    var n = Math.floor(a / 2) - 1;
    if (i - e > n) {
      e = i - n + (o = " ... ").length;
    }
    if (r - i > n) {
      r = i + n - (l = " ...").length;
    }
    return {
      str: o + t.slice(e, r).replace(/\t/g, "→") + l,
      pos: i - e + o.length
    };
  }
  function p(t, e) {
    return h.repeat(" ", e - t.length) + t;
  }
  function g(t, e) {
    e = Object.create(e || null);
    if (!t.buffer) {
      return null;
    }
    e.maxLength ||= 79;
    if (typeof e.indent != "number") {
      e.indent = 1;
    }
    if (typeof e.linesBefore != "number") {
      e.linesBefore = 3;
    }
    if (typeof e.linesAfter != "number") {
      e.linesAfter = 2;
    }
    var r = /\r?\n|\r|\0/g;
    var i = [0];
    var a = [];
    var o = -1;
    while (l = r.exec(t.buffer)) {
      a.push(l.index);
      i.push(l.index + l[0].length);
      if (t.position <= l.index && o < 0) {
        o = i.length - 2;
      }
    }
    if (o < 0) {
      o = i.length - 1;
    }
    var l;
    var n;
    var s;
    var c = "";
    var d = Math.min(t.line + e.linesAfter, a.length).toString().length;
    var g = e.maxLength - (e.indent + d + 3);
    for (n = 1; n <= e.linesBefore && !(o - n < 0); n++) {
      s = u(t.buffer, i[o - n], a[o - n], t.position - (i[o] - i[o - n]), g);
      c = h.repeat(" ", e.indent) + p((t.line - n + 1).toString(), d) + " | " + s.str + "\n" + c;
    }
    s = u(t.buffer, i[o], a[o], t.position, g);
    c += h.repeat(" ", e.indent) + p((t.line + 1).toString(), d) + " | " + s.str + "\n" + h.repeat("-", e.indent + d + 3 + s.pos) + "^\n";
    n = 1;
    for (; n <= e.linesAfter && !(o + n >= a.length); n++) {
      s = u(t.buffer, i[o + n], a[o + n], t.position - (i[o] - i[o + n]), g);
      c += h.repeat(" ", e.indent) + p((t.line + n + 1).toString(), d) + " | " + s.str + "\n";
    }
    return c.replace(/\n$/, "");
  }
  loggerLevelUtils.setFunctionName(c, "formatError");
  loggerLevelUtils.setFunctionName(d, "YAMLException$1");
  d.prototype = Object.create(Error.prototype);
  d.prototype.constructor = d;
  d.prototype.toString = loggerLevelUtils.setFunctionName(function (t) {
    return this.name + ": " + c(this, t);
  }, "toString");
  loggerLevelUtils.setFunctionName(u, "getLine");
  loggerLevelUtils.setFunctionName(p, "padStart");
  loggerLevelUtils.setFunctionName(g, "makeSnippet");
  var f = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"];
  var m = ["scalar", "sequence", "mapping"];
  function y(t) {
    var e = {};
    if (t !== null) {
      Object.keys(t).forEach(function (r) {
        t[r].forEach(function (t) {
          e[String(t)] = r;
        });
      });
    }
    return e;
  }
  function x(t, e) {
    Object.keys(e = e || {}).forEach(function (e) {
      if (f.indexOf(e) === -1) {
        throw new d("Unknown option \"" + e + "\" is met in definition of \"" + t + "\" YAML type.");
      }
    });
    this.options = e;
    this.tag = t;
    this.kind = e.kind || null;
    this.resolve = e.resolve || function () {
      return true;
    };
    this.construct = e.construct || function (t) {
      return t;
    };
    this.instanceOf = e.instanceOf || null;
    this.predicate = e.predicate || null;
    this.represent = e.represent || null;
    this.representName = e.representName || null;
    this.defaultStyle = e.defaultStyle || null;
    this.multi = e.multi || false;
    this.styleAliases = y(e.styleAliases || null);
    if (m.indexOf(this.kind) === -1) {
      throw new d("Unknown kind \"" + this.kind + "\" is specified for \"" + t + "\" YAML type.");
    }
  }
  function b(t, e) {
    var r = [];
    t[e].forEach(function (t) {
      var e = r.length;
      r.forEach(function (r, i) {
        if (r.tag === t.tag && r.kind === t.kind && r.multi === t.multi) {
          e = i;
        }
      });
      r[e] = t;
    });
    return r;
  }
  function C() {
    var t;
    var e;
    var r = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    };
    function i(t) {
      if (t.multi) {
        r.multi[t.kind].push(t);
        r.multi.fallback.push(t);
      } else {
        r[t.kind][t.tag] = r.fallback[t.tag] = t;
      }
    }
    loggerLevelUtils.setFunctionName(i, "collectType");
    t = 0;
    e = arguments.length;
    for (; t < e; t += 1) {
      arguments[t].forEach(i);
    }
    return r;
  }
  function v(t) {
    return this.extend(t);
  }
  loggerLevelUtils.setFunctionName(y, "compileStyleAliases");
  loggerLevelUtils.setFunctionName(x, "Type$1");
  loggerLevelUtils.setFunctionName(b, "compileList");
  loggerLevelUtils.setFunctionName(C, "compileMap");
  loggerLevelUtils.setFunctionName(v, "Schema$1");
  v.prototype.extend = loggerLevelUtils.setFunctionName(function (t) {
    var e = [];
    var r = [];
    if (t instanceof x) {
      r.push(t);
    } else if (Array.isArray(t)) {
      r = r.concat(t);
    } else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit))) {
      if (t.implicit) {
        e = e.concat(t.implicit);
      }
      if (t.explicit) {
        r = r.concat(t.explicit);
      }
    } else {
      throw new d("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    e.forEach(function (t) {
      if (!(t instanceof x)) {
        throw new d("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      if (t.loadKind && t.loadKind !== "scalar") {
        throw new d("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }
      if (t.multi) {
        throw new d("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
      }
    });
    r.forEach(function (t) {
      if (!(t instanceof x)) {
        throw new d("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
    });
    var i = Object.create(v.prototype);
    i.implicit = (this.implicit || []).concat(e);
    i.explicit = (this.explicit || []).concat(r);
    i.compiledImplicit = b(i, "implicit");
    i.compiledExplicit = b(i, "explicit");
    i.compiledTypeMap = C(i.compiledImplicit, i.compiledExplicit);
    return i;
  }, "extend");
  var k = new v({
    explicit: [new x("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: loggerLevelUtils.setFunctionName(function (t) {
        if (t !== null) {
          return t;
        } else {
          return "";
        }
      }, "construct")
    }), new x("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: loggerLevelUtils.setFunctionName(function (t) {
        if (t !== null) {
          return t;
        } else {
          return [];
        }
      }, "construct")
    }), new x("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: loggerLevelUtils.setFunctionName(function (t) {
        if (t !== null) {
          return t;
        } else {
          return {};
        }
      }, "construct")
    })]
  });
  function w(t) {
    if (t === null) {
      return true;
    }
    var e = t.length;
    return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
  }
  function S() {
    return null;
  }
  function T(t) {
    return t === null;
  }
  loggerLevelUtils.setFunctionName(w, "resolveYamlNull");
  loggerLevelUtils.setFunctionName(S, "constructYamlNull");
  loggerLevelUtils.setFunctionName(T, "isNull");
  var B = new x("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: w,
    construct: S,
    predicate: T,
    represent: {
      canonical: loggerLevelUtils.setFunctionName(function () {
        return "~";
      }, "canonical"),
      lowercase: loggerLevelUtils.setFunctionName(function () {
        return "null";
      }, "lowercase"),
      uppercase: loggerLevelUtils.setFunctionName(function () {
        return "NULL";
      }, "uppercase"),
      camelcase: loggerLevelUtils.setFunctionName(function () {
        return "Null";
      }, "camelcase"),
      empty: loggerLevelUtils.setFunctionName(function () {
        return "";
      }, "empty")
    },
    defaultStyle: "lowercase"
  });
  function M(t) {
    if (t === null) {
      return false;
    }
    var e = t.length;
    return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
  }
  function W(t) {
    return t === "true" || t === "True" || t === "TRUE";
  }
  function L(t) {
    return Object.prototype.toString.call(t) === "[object Boolean]";
  }
  loggerLevelUtils.setFunctionName(M, "resolveYamlBoolean");
  loggerLevelUtils.setFunctionName(W, "constructYamlBoolean");
  loggerLevelUtils.setFunctionName(L, "isBoolean");
  var F = new x("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: M,
    construct: W,
    predicate: L,
    represent: {
      lowercase: loggerLevelUtils.setFunctionName(function (t) {
        if (t) {
          return "true";
        } else {
          return "false";
        }
      }, "lowercase"),
      uppercase: loggerLevelUtils.setFunctionName(function (t) {
        if (t) {
          return "TRUE";
        } else {
          return "FALSE";
        }
      }, "uppercase"),
      camelcase: loggerLevelUtils.setFunctionName(function (t) {
        if (t) {
          return "True";
        } else {
          return "False";
        }
      }, "camelcase")
    },
    defaultStyle: "lowercase"
  });
  function _(t) {
    return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
  }
  function A(t) {
    return t >= 48 && t <= 55;
  }
  function $(t) {
    return t >= 48 && t <= 57;
  }
  function E(t) {
    if (t === null) {
      return false;
    }
    var e;
    var r = t.length;
    var i = 0;
    var a = false;
    if (!r) {
      return false;
    }
    if ((e = t[i]) === "-" || e === "+") {
      e = t[++i];
    }
    if (e === "0") {
      if (i + 1 === r) {
        return true;
      }
      if ((e = t[++i]) === "b") {
        for (i++; i < r; i++) {
          if ((e = t[i]) !== "_") {
            if (e !== "0" && e !== "1") {
              return false;
            }
            a = true;
          }
        }
        return a && e !== "_";
      }
      if (e === "x") {
        for (i++; i < r; i++) {
          if ((e = t[i]) !== "_") {
            if (!_(t.charCodeAt(i))) {
              return false;
            }
            a = true;
          }
        }
        return a && e !== "_";
      }
      if (e === "o") {
        for (i++; i < r; i++) {
          if ((e = t[i]) !== "_") {
            if (!A(t.charCodeAt(i))) {
              return false;
            }
            a = true;
          }
        }
        return a && e !== "_";
      }
    }
    if (e === "_") {
      return false;
    }
    for (; i < r; i++) {
      if ((e = t[i]) !== "_") {
        if (!$(t.charCodeAt(i))) {
          return false;
        }
        a = true;
      }
    }
    return !!a && e !== "_";
  }
  function Z(t) {
    var e;
    var r = t;
    var i = 1;
    if (r.indexOf("_") !== -1) {
      r = r.replace(/_/g, "");
    }
    if ((e = r[0]) === "-" || e === "+") {
      if (e === "-") {
        i = -1;
      }
      e = (r = r.slice(1))[0];
    }
    if (r === "0") {
      return 0;
    }
    if (e === "0") {
      if (r[1] === "b") {
        return i * parseInt(r.slice(2), 2);
      }
      if (r[1] === "x") {
        return i * parseInt(r.slice(2), 16);
      }
      if (r[1] === "o") {
        return i * parseInt(r.slice(2), 8);
      }
    }
    return i * parseInt(r, 10);
  }
  function O(t) {
    return Object.prototype.toString.call(t) === "[object Number]" && t % 1 == 0 && !h.isNegativeZero(t);
  }
  loggerLevelUtils.setFunctionName(_, "isHexCode");
  loggerLevelUtils.setFunctionName(A, "isOctCode");
  loggerLevelUtils.setFunctionName($, "isDecCode");
  loggerLevelUtils.setFunctionName(E, "resolveYamlInteger");
  loggerLevelUtils.setFunctionName(Z, "constructYamlInteger");
  loggerLevelUtils.setFunctionName(O, "isInteger");
  var D = new x("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: E,
    construct: Z,
    predicate: O,
    represent: {
      binary: loggerLevelUtils.setFunctionName(function (t) {
        if (t >= 0) {
          return "0b" + t.toString(2);
        } else {
          return "-0b" + t.toString(2).slice(1);
        }
      }, "binary"),
      octal: loggerLevelUtils.setFunctionName(function (t) {
        if (t >= 0) {
          return "0o" + t.toString(8);
        } else {
          return "-0o" + t.toString(8).slice(1);
        }
      }, "octal"),
      decimal: loggerLevelUtils.setFunctionName(function (t) {
        return t.toString(10);
      }, "decimal"),
      hexadecimal: loggerLevelUtils.setFunctionName(function (t) {
        if (t >= 0) {
          return "0x" + t.toString(16).toUpperCase();
        } else {
          return "-0x" + t.toString(16).toUpperCase().slice(1);
        }
      }, "hexadecimal")
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  });
  var I = RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function q(t) {
    return t !== null && !!I.test(t) && t[t.length - 1] !== "_";
  }
  function R(t) {
    var e;
    var r;
    r = (e = t.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1;
    if ("+-".indexOf(e[0]) >= 0) {
      e = e.slice(1);
    }
    if (e === ".inf") {
      if (r === 1) {
        return Number.POSITIVE_INFINITY;
      } else {
        return Number.NEGATIVE_INFINITY;
      }
    } else if (e === ".nan") {
      return NaN;
    } else {
      return r * parseFloat(e, 10);
    }
  }
  loggerLevelUtils.setFunctionName(q, "resolveYamlFloat");
  loggerLevelUtils.setFunctionName(R, "constructYamlFloat");
  var N = /^[-+]?[0-9]+e/;
  function P(t, e) {
    var r;
    if (isNaN(t)) {
      switch (e) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    } else if (Number.POSITIVE_INFINITY === t) {
      switch (e) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    } else if (Number.NEGATIVE_INFINITY === t) {
      switch (e) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    } else if (h.isNegativeZero(t)) {
      return "-0.0";
    }
    r = t.toString(10);
    if (N.test(r)) {
      return r.replace("e", ".e");
    } else {
      return r;
    }
  }
  function z(t) {
    return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 != 0 || h.isNegativeZero(t));
  }
  loggerLevelUtils.setFunctionName(P, "representYamlFloat");
  loggerLevelUtils.setFunctionName(z, "isFloat");
  var j = new x("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: q,
    construct: R,
    predicate: z,
    represent: P,
    defaultStyle: "lowercase"
  });
  var H = k.extend({
    implicit: [B, F, D, j]
  });
  var U = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
  var Y = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function G(t) {
    return t !== null && (U.exec(t) !== null || Y.exec(t) !== null);
  }
  function V(t) {
    var e;
    var r;
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    var h = 0;
    var c = null;
    if ((e = U.exec(t)) === null) {
      e = Y.exec(t);
    }
    if (e === null) {
      throw Error("Date resolve error");
    }
    r = +e[1];
    i = +e[2] - 1;
    a = +e[3];
    if (!e[4]) {
      return new Date(Date.UTC(r, i, a));
    }
    o = +e[4];
    l = +e[5];
    n = +e[6];
    if (e[7]) {
      for (h = e[7].slice(0, 3); h.length < 3;) {
        h += "0";
      }
      h *= 1;
    }
    if (e[9]) {
      c = (+e[10] * 60 + +(e[11] || 0)) * 60000;
      if (e[9] === "-") {
        c = -c;
      }
    }
    s = new Date(Date.UTC(r, i, a, o, l, n, h));
    if (c) {
      s.setTime(s.getTime() - c);
    }
    return s;
  }
  function X(t) {
    return t.toISOString();
  }
  loggerLevelUtils.setFunctionName(G, "resolveYamlTimestamp");
  loggerLevelUtils.setFunctionName(V, "constructYamlTimestamp");
  loggerLevelUtils.setFunctionName(X, "representYamlTimestamp");
  var Q = new x("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: G,
    construct: V,
    instanceOf: Date,
    represent: X
  });
  function J(t) {
    return t === "<<" || t === null;
  }
  loggerLevelUtils.setFunctionName(J, "resolveYamlMerge");
  var K = new x("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: J
  });
  var tt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function te(t) {
    if (t === null) {
      return false;
    }
    var e;
    var r;
    var i = 0;
    var a = t.length;
    for (r = 0; r < a; r++) {
      if (!((e = tt.indexOf(t.charAt(r))) > 64)) {
        if (e < 0) {
          return false;
        }
        i += 6;
      }
    }
    return i % 8 == 0;
  }
  function tr(t) {
    var e;
    var r;
    var i = t.replace(/[\r\n=]/g, "");
    var a = i.length;
    var o = 0;
    var l = [];
    for (e = 0; e < a; e++) {
      if (e % 4 == 0 && e) {
        l.push(o >> 16 & 255);
        l.push(o >> 8 & 255);
        l.push(o & 255);
      }
      o = o << 6 | tt.indexOf(i.charAt(e));
    }
    if ((r = a % 4 * 6) == 0) {
      l.push(o >> 16 & 255);
      l.push(o >> 8 & 255);
      l.push(o & 255);
    } else if (r === 18) {
      l.push(o >> 10 & 255);
      l.push(o >> 2 & 255);
    } else if (r === 12) {
      l.push(o >> 4 & 255);
    }
    return new Uint8Array(l);
  }
  function ti(t) {
    var e;
    var r;
    var i = "";
    var a = 0;
    var o = t.length;
    for (e = 0; e < o; e++) {
      if (e % 3 == 0 && e) {
        i += tt[a >> 18 & 63];
        i += tt[a >> 12 & 63];
        i += tt[a >> 6 & 63];
        i += tt[a & 63];
      }
      a = (a << 8) + t[e];
    }
    if ((r = o % 3) == 0) {
      i += tt[a >> 18 & 63];
      i += tt[a >> 12 & 63];
      i += tt[a >> 6 & 63];
      i += tt[a & 63];
    } else if (r === 2) {
      i += tt[a >> 10 & 63];
      i += tt[a >> 4 & 63];
      i += tt[a << 2 & 63];
      i += tt[64];
    } else if (r === 1) {
      i += tt[a >> 2 & 63];
      i += tt[a << 4 & 63];
      i += tt[64];
      i += tt[64];
    }
    return i;
  }
  function ta(t) {
    return Object.prototype.toString.call(t) === "[object Uint8Array]";
  }
  loggerLevelUtils.setFunctionName(te, "resolveYamlBinary");
  loggerLevelUtils.setFunctionName(tr, "constructYamlBinary");
  loggerLevelUtils.setFunctionName(ti, "representYamlBinary");
  loggerLevelUtils.setFunctionName(ta, "isBinary");
  var to = new x("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: te,
    construct: tr,
    predicate: ta,
    represent: ti
  });
  var tl = Object.prototype.hasOwnProperty;
  var tn = Object.prototype.toString;
  function ts(t) {
    if (t === null) {
      return true;
    }
    var e;
    var r;
    var i;
    var a;
    var o;
    var l = [];
    e = 0;
    r = t.length;
    for (; e < r; e += 1) {
      i = t[e];
      o = false;
      if (tn.call(i) !== "[object Object]") {
        return false;
      }
      for (a in i) {
        if (tl.call(i, a)) {
          if (o) {
            return false;
          }
          o = true;
        }
      }
      if (!o || l.indexOf(a) !== -1) {
        return false;
      }
      l.push(a);
    }
    return true;
  }
  function th(t) {
    if (t !== null) {
      return t;
    } else {
      return [];
    }
  }
  loggerLevelUtils.setFunctionName(ts, "resolveYamlOmap");
  loggerLevelUtils.setFunctionName(th, "constructYamlOmap");
  var tc = new x("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: ts,
    construct: th
  });
  var td = Object.prototype.toString;
  function tu(t) {
    var e;
    var r;
    var i;
    var a;
    var o;
    if (t === null) {
      return true;
    }
    e = 0;
    o = Array(t.length);
    r = t.length;
    for (; e < r; e += 1) {
      i = t[e];
      if (td.call(i) !== "[object Object]" || (a = Object.keys(i)).length !== 1) {
        return false;
      }
      o[e] = [a[0], i[a[0]]];
    }
    return true;
  }
  function tp(t) {
    var e;
    var r;
    var i;
    var a;
    var o;
    if (t === null) {
      return [];
    }
    e = 0;
    o = Array(t.length);
    r = t.length;
    for (; e < r; e += 1) {
      a = Object.keys(i = t[e]);
      o[e] = [a[0], i[a[0]]];
    }
    return o;
  }
  loggerLevelUtils.setFunctionName(tu, "resolveYamlPairs");
  loggerLevelUtils.setFunctionName(tp, "constructYamlPairs");
  var tg = new x("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: tu,
    construct: tp
  });
  var tf = Object.prototype.hasOwnProperty;
  function tm(t) {
    var e;
    if (t === null) {
      return true;
    }
    for (e in t) {
      if (tf.call(t, e) && t[e] !== null) {
        return false;
      }
    }
    return true;
  }
  function ty(t) {
    if (t !== null) {
      return t;
    } else {
      return {};
    }
  }
  loggerLevelUtils.setFunctionName(tm, "resolveYamlSet");
  loggerLevelUtils.setFunctionName(ty, "constructYamlSet");
  var tx = new x("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: tm,
    construct: ty
  });
  var tb = H.extend({
    implicit: [Q, K],
    explicit: [to, tc, tg, tx]
  });
  var tC = Object.prototype.hasOwnProperty;
  var tv = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var tk = /[\x85\u2028\u2029]/;
  var tw = /[,\[\]\{\}]/;
  var tS = /^(?:!|!!|![a-z\-]+!)$/i;
  var tT = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function tB(t) {
    return Object.prototype.toString.call(t);
  }
  function tM(t) {
    return t === 10 || t === 13;
  }
  function tW(t) {
    return t === 9 || t === 32;
  }
  function tL(t) {
    return t === 9 || t === 32 || t === 10 || t === 13;
  }
  function tF(t) {
    return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
  }
  function t_(t) {
    var e;
    if (t >= 48 && t <= 57) {
      return t - 48;
    } else if ((e = t | 32) >= 97 && e <= 102) {
      return e - 97 + 10;
    } else {
      return -1;
    }
  }
  function tA(t) {
    if (t === 120) {
      return 2;
    } else if (t === 117) {
      return 4;
    } else {
      return (t === 85) * 8;
    }
  }
  function t$(t) {
    if (t >= 48 && t <= 57) {
      return t - 48;
    } else {
      return -1;
    }
  }
  function tE(t) {
    if (t === 48) {
      return "\0";
    } else if (t === 97) {
      return "";
    } else if (t === 98) {
      return "\b";
    } else if (t === 116) {
      return "\t";
    } else if (t === 9) {
      return "\t";
    } else if (t === 110) {
      return "\n";
    } else if (t === 118) {
      return "";
    } else if (t === 102) {
      return "\f";
    } else if (t === 114) {
      return "\r";
    } else if (t === 101) {
      return "";
    } else if (t === 32) {
      return " ";
    } else if (t === 34) {
      return "\"";
    } else if (t === 47) {
      return "/";
    } else if (t === 92) {
      return "\\";
    } else if (t === 78) {
      return "";
    } else if (t === 95) {
      return "\xA0";
    } else if (t === 76) {
      return "\u2028";
    } else if (t === 80) {
      return "\u2029";
    } else {
      return "";
    }
  }
  function tZ(t) {
    if (t <= 65535) {
      return String.fromCharCode(t);
    } else {
      return String.fromCharCode((t - 65536 >> 10) + 55296, (t - 65536 & 1023) + 56320);
    }
  }
  loggerLevelUtils.setFunctionName(tB, "_class");
  loggerLevelUtils.setFunctionName(tM, "is_EOL");
  loggerLevelUtils.setFunctionName(tW, "is_WHITE_SPACE");
  loggerLevelUtils.setFunctionName(tL, "is_WS_OR_EOL");
  loggerLevelUtils.setFunctionName(tF, "is_FLOW_INDICATOR");
  loggerLevelUtils.setFunctionName(t_, "fromHexCode");
  loggerLevelUtils.setFunctionName(tA, "escapedHexLen");
  loggerLevelUtils.setFunctionName(t$, "fromDecimalCode");
  loggerLevelUtils.setFunctionName(tE, "simpleEscapeSequence");
  loggerLevelUtils.setFunctionName(tZ, "charFromCodepoint");
  var tO = Array(256);
  var tD = Array(256);
  for (i = 0; i < 256; i++) {
    tO[i] = +!!tE(i);
    tD[i] = tE(i);
  }
  function tI(t, e) {
    this.input = t;
    this.filename = e.filename || null;
    this.schema = e.schema || tb;
    this.onWarning = e.onWarning || null;
    this.legacy = e.legacy || false;
    this.json = e.json || false;
    this.listener = e.listener || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = t.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
  }
  function tq(t, e) {
    var r = {
      name: t.filename,
      buffer: t.input.slice(0, -1),
      position: t.position,
      line: t.line,
      column: t.position - t.lineStart
    };
    r.snippet = g(r);
    return new d(e, r);
  }
  function tR(t, e) {
    throw tq(t, e);
  }
  function tN(t, e) {
    if (t.onWarning) {
      t.onWarning.call(null, tq(t, e));
    }
  }
  loggerLevelUtils.setFunctionName(tI, "State$1");
  loggerLevelUtils.setFunctionName(tq, "generateError");
  loggerLevelUtils.setFunctionName(tR, "throwError");
  loggerLevelUtils.setFunctionName(tN, "throwWarning");
  var tP = {
    YAML: loggerLevelUtils.setFunctionName(function (t, e, r) {
      var i;
      var a;
      var o;
      if (t.version !== null) {
        tR(t, "duplication of %YAML directive");
      }
      if (r.length !== 1) {
        tR(t, "YAML directive accepts exactly one argument");
      }
      if ((i = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) === null) {
        tR(t, "ill-formed argument of the YAML directive");
      }
      a = parseInt(i[1], 10);
      o = parseInt(i[2], 10);
      if (a !== 1) {
        tR(t, "unacceptable YAML version of the document");
      }
      t.version = r[0];
      t.checkLineBreaks = o < 2;
      if (o !== 1 && o !== 2) {
        tN(t, "unsupported YAML version of the document");
      }
    }, "handleYamlDirective"),
    TAG: loggerLevelUtils.setFunctionName(function (t, e, r) {
      var i;
      var a;
      if (r.length !== 2) {
        tR(t, "TAG directive accepts exactly two arguments");
      }
      i = r[0];
      a = r[1];
      if (!tS.test(i)) {
        tR(t, "ill-formed tag handle (first argument) of the TAG directive");
      }
      if (tC.call(t.tagMap, i)) {
        tR(t, "there is a previously declared suffix for \"" + i + "\" tag handle");
      }
      if (!tT.test(a)) {
        tR(t, "ill-formed tag prefix (second argument) of the TAG directive");
      }
      try {
        a = decodeURIComponent(a);
      } catch (e) {
        tR(t, "tag prefix is malformed: " + a);
      }
      t.tagMap[i] = a;
    }, "handleTagDirective")
  };
  function tz(t, e, r, i) {
    var a;
    var o;
    var l;
    var n;
    if (e < r) {
      n = t.input.slice(e, r);
      if (i) {
        a = 0;
        o = n.length;
        for (; a < o; a += 1) {
          if ((l = n.charCodeAt(a)) !== 9 && (!(l >= 32) || !(l <= 1114111))) {
            tR(t, "expected valid JSON character");
          }
        }
      } else if (tv.test(n)) {
        tR(t, "the stream contains non-printable characters");
      }
      t.result += n;
    }
  }
  function tj(t, e, r, i) {
    var a;
    var o;
    var l;
    var n;
    if (!h.isObject(r)) {
      tR(t, "cannot merge mappings; the provided source object is unacceptable");
    }
    l = 0;
    n = (a = Object.keys(r)).length;
    for (; l < n; l += 1) {
      o = a[l];
      if (!tC.call(e, o)) {
        e[o] = r[o];
        i[o] = true;
      }
    }
  }
  function tH(t, e, r, i, a, o, l, n, s) {
    var h;
    var c;
    if (Array.isArray(a)) {
      h = 0;
      c = (a = Array.prototype.slice.call(a)).length;
      for (; h < c; h += 1) {
        if (Array.isArray(a[h])) {
          tR(t, "nested arrays are not supported inside keys");
        }
        if (typeof a == "object" && tB(a[h]) === "[object Object]") {
          a[h] = "[object Object]";
        }
      }
    }
    if (typeof a == "object" && tB(a) === "[object Object]") {
      a = "[object Object]";
    }
    a = String(a);
    if (e === null) {
      e = {};
    }
    if (i === "tag:yaml.org,2002:merge") {
      if (Array.isArray(o)) {
        h = 0;
        c = o.length;
        for (; h < c; h += 1) {
          tj(t, e, o[h], r);
        }
      } else {
        tj(t, e, o, r);
      }
    } else {
      if (!t.json && !tC.call(r, a) && tC.call(e, a)) {
        t.line = l || t.line;
        t.lineStart = n || t.lineStart;
        t.position = s || t.position;
        tR(t, "duplicated mapping key");
      }
      if (a === "__proto__") {
        Object.defineProperty(e, a, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: o
        });
      } else {
        e[a] = o;
      }
      delete r[a];
    }
    return e;
  }
  function tU(t) {
    var e;
    if ((e = t.input.charCodeAt(t.position)) === 10) {
      t.position++;
    } else if (e === 13) {
      t.position++;
      if (t.input.charCodeAt(t.position) === 10) {
        t.position++;
      }
    } else {
      tR(t, "a line break is expected");
    }
    t.line += 1;
    t.lineStart = t.position;
    t.firstTabInLine = -1;
  }
  function tY(t, e, r) {
    var i = 0;
    var a = t.input.charCodeAt(t.position);
    while (a !== 0) {
      while (tW(a)) {
        if (a === 9 && t.firstTabInLine === -1) {
          t.firstTabInLine = t.position;
        }
        a = t.input.charCodeAt(++t.position);
      }
      if (e && a === 35) {
        do {
          a = t.input.charCodeAt(++t.position);
        } while (a !== 10 && a !== 13 && a !== 0);
      }
      if (tM(a)) {
        tU(t);
        a = t.input.charCodeAt(t.position);
        i++;
        t.lineIndent = 0;
        while (a === 32) {
          t.lineIndent++;
          a = t.input.charCodeAt(++t.position);
        }
      } else {
        break;
      }
    }
    if (r !== -1 && i !== 0 && t.lineIndent < r) {
      tN(t, "deficient indentation");
    }
    return i;
  }
  function tG(t) {
    var e;
    var r = t.position;
    return ((e = t.input.charCodeAt(r)) === 45 || e === 46) && e === t.input.charCodeAt(r + 1) && e === t.input.charCodeAt(r + 2) && !!(r += 3, (e = t.input.charCodeAt(r)) === 0 || tL(e));
  }
  function tV(t, e) {
    if (e === 1) {
      t.result += " ";
    } else if (e > 1) {
      t.result += h.repeat("\n", e - 1);
    }
  }
  function tX(t, e, r) {
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    var h;
    var c;
    var d = t.kind;
    var u = t.result;
    if (tL(c = t.input.charCodeAt(t.position)) || tF(c) || c === 35 || c === 38 || c === 42 || c === 33 || c === 124 || c === 62 || c === 39 || c === 34 || c === 37 || c === 64 || c === 96 || (c === 63 || c === 45) && (tL(i = t.input.charCodeAt(t.position + 1)) || r && tF(i))) {
      return false;
    }
    t.kind = "scalar";
    t.result = "";
    a = o = t.position;
    l = false;
    while (c !== 0) {
      if (c === 58) {
        if (tL(i = t.input.charCodeAt(t.position + 1)) || r && tF(i)) {
          break;
        }
      } else if (c === 35) {
        if (tL(t.input.charCodeAt(t.position - 1))) {
          break;
        }
      } else if (t.position === t.lineStart && tG(t) || r && tF(c)) {
        break;
      } else if (tM(c)) {
        n = t.line;
        s = t.lineStart;
        h = t.lineIndent;
        tY(t, false, -1);
        if (t.lineIndent >= e) {
          l = true;
          c = t.input.charCodeAt(t.position);
          continue;
        }
        t.position = o;
        t.line = n;
        t.lineStart = s;
        t.lineIndent = h;
        break;
      }
      if (l) {
        tz(t, a, o, false);
        tV(t, t.line - n);
        a = o = t.position;
        l = false;
      }
      if (!tW(c)) {
        o = t.position + 1;
      }
      c = t.input.charCodeAt(++t.position);
    }
    tz(t, a, o, false);
    return !!t.result || (t.kind = d, t.result = u, false);
  }
  function tQ(t, e) {
    var r;
    var i;
    var a;
    if ((r = t.input.charCodeAt(t.position)) !== 39) {
      return false;
    }
    t.kind = "scalar";
    t.result = "";
    t.position++;
    i = a = t.position;
    while ((r = t.input.charCodeAt(t.position)) !== 0) {
      if (r === 39) {
        tz(t, i, t.position, true);
        if ((r = t.input.charCodeAt(++t.position)) !== 39) {
          return true;
        }
        i = t.position;
        t.position++;
        a = t.position;
      } else if (tM(r)) {
        tz(t, i, a, true);
        tV(t, tY(t, false, e));
        i = a = t.position;
      } else if (t.position === t.lineStart && tG(t)) {
        tR(t, "unexpected end of the document within a single quoted scalar");
      } else {
        t.position++;
        a = t.position;
      }
    }
    tR(t, "unexpected end of the stream within a single quoted scalar");
  }
  function tJ(t, e) {
    var r;
    var i;
    var a;
    var o;
    var l;
    var n;
    if ((n = t.input.charCodeAt(t.position)) !== 34) {
      return false;
    }
    t.kind = "scalar";
    t.result = "";
    t.position++;
    r = i = t.position;
    while ((n = t.input.charCodeAt(t.position)) !== 0) {
      if (n === 34) {
        tz(t, r, t.position, true);
        t.position++;
        return true;
      }
      if (n === 92) {
        tz(t, r, t.position, true);
        if (tM(n = t.input.charCodeAt(++t.position))) {
          tY(t, false, e);
        } else if (n < 256 && tO[n]) {
          t.result += tD[n];
          t.position++;
        } else if ((l = tA(n)) > 0) {
          a = l;
          o = 0;
          for (; a > 0; a--) {
            if ((l = t_(n = t.input.charCodeAt(++t.position))) >= 0) {
              o = (o << 4) + l;
            } else {
              tR(t, "expected hexadecimal character");
            }
          }
          t.result += tZ(o);
          t.position++;
        } else {
          tR(t, "unknown escape sequence");
        }
        r = i = t.position;
      } else if (tM(n)) {
        tz(t, r, i, true);
        tV(t, tY(t, false, e));
        r = i = t.position;
      } else if (t.position === t.lineStart && tG(t)) {
        tR(t, "unexpected end of the document within a double quoted scalar");
      } else {
        t.position++;
        i = t.position;
      }
    }
    tR(t, "unexpected end of the stream within a double quoted scalar");
  }
  function tK(t, e) {
    var r;
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    var h;
    var c;
    var d;
    var u;
    var p;
    var g = true;
    var f = t.tag;
    var m = t.anchor;
    var y = Object.create(null);
    if ((p = t.input.charCodeAt(t.position)) === 91) {
      l = 93;
      h = false;
      o = [];
    } else {
      if (p !== 123) {
        return false;
      }
      l = 125;
      h = true;
      o = {};
    }
    if (t.anchor !== null) {
      t.anchorMap[t.anchor] = o;
    }
    p = t.input.charCodeAt(++t.position);
    while (p !== 0) {
      tY(t, true, e);
      if ((p = t.input.charCodeAt(t.position)) === l) {
        t.position++;
        t.tag = f;
        t.anchor = m;
        t.kind = h ? "mapping" : "sequence";
        t.result = o;
        return true;
      }
      if (g) {
        if (p === 44) {
          tR(t, "expected the node content, but found ','");
        }
      } else {
        tR(t, "missed comma between flow collection entries");
      }
      d = c = u = null;
      n = s = false;
      if (p === 63 && tL(t.input.charCodeAt(t.position + 1))) {
        n = s = true;
        t.position++;
        tY(t, true, e);
      }
      r = t.line;
      i = t.lineStart;
      a = t.position;
      t4(t, e, 1, false, true);
      d = t.tag;
      c = t.result;
      tY(t, true, e);
      p = t.input.charCodeAt(t.position);
      if ((s || t.line === r) && p === 58) {
        n = true;
        p = t.input.charCodeAt(++t.position);
        tY(t, true, e);
        t4(t, e, 1, false, true);
        u = t.result;
      }
      if (h) {
        tH(t, o, y, d, c, u, r, i, a);
      } else if (n) {
        o.push(tH(t, null, y, d, c, u, r, i, a));
      } else {
        o.push(c);
      }
      tY(t, true, e);
      if ((p = t.input.charCodeAt(t.position)) === 44) {
        g = true;
        p = t.input.charCodeAt(++t.position);
      } else {
        g = false;
      }
    }
    tR(t, "unexpected end of the stream within a flow collection");
  }
  function t0(t, e) {
    var r;
    var i;
    var a;
    var o;
    var l = 1;
    var n = false;
    var s = false;
    var c = e;
    var d = 0;
    var u = false;
    if ((o = t.input.charCodeAt(t.position)) === 124) {
      i = false;
    } else {
      if (o !== 62) {
        return false;
      }
      i = true;
    }
    t.kind = "scalar";
    t.result = "";
    while (o !== 0) {
      if ((o = t.input.charCodeAt(++t.position)) === 43 || o === 45) {
        if (l === 1) {
          l = o === 43 ? 3 : 2;
        } else {
          tR(t, "repeat of a chomping mode identifier");
        }
      } else if ((a = t$(o)) >= 0) {
        if (a === 0) {
          tR(t, "bad explicit indentation width of a block scalar; it cannot be less than one");
        } else if (s) {
          tR(t, "repeat of an indentation width identifier");
        } else {
          c = e + a - 1;
          s = true;
        }
      } else {
        break;
      }
    }
    if (tW(o)) {
      do {
        o = t.input.charCodeAt(++t.position);
      } while (tW(o));
      if (o === 35) {
        do {
          o = t.input.charCodeAt(++t.position);
        } while (!tM(o) && o !== 0);
      }
    }
    while (o !== 0) {
      tU(t);
      t.lineIndent = 0;
      o = t.input.charCodeAt(t.position);
      while ((!s || t.lineIndent < c) && o === 32) {
        t.lineIndent++;
        o = t.input.charCodeAt(++t.position);
      }
      if (!s && t.lineIndent > c) {
        c = t.lineIndent;
      }
      if (tM(o)) {
        d++;
        continue;
      }
      if (t.lineIndent < c) {
        if (l === 3) {
          t.result += h.repeat("\n", n ? 1 + d : d);
        } else if (l === 1 && n) {
          t.result += "\n";
        }
        break;
      }
      if (i) {
        if (tW(o)) {
          u = true;
          t.result += h.repeat("\n", n ? 1 + d : d);
        } else if (u) {
          u = false;
          t.result += h.repeat("\n", d + 1);
        } else if (d === 0) {
          if (n) {
            t.result += " ";
          }
        } else {
          t.result += h.repeat("\n", d);
        }
      } else {
        t.result += h.repeat("\n", n ? 1 + d : d);
      }
      n = true;
      s = true;
      d = 0;
      r = t.position;
      while (!tM(o) && o !== 0) {
        o = t.input.charCodeAt(++t.position);
      }
      tz(t, r, t.position, false);
    }
    return true;
  }
  function t1(t, e) {
    var r;
    var i;
    var a = t.tag;
    var o = t.anchor;
    var l = [];
    var n = false;
    if (t.firstTabInLine !== -1) {
      return false;
    }
    if (t.anchor !== null) {
      t.anchorMap[t.anchor] = l;
    }
    i = t.input.charCodeAt(t.position);
    while (i !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, tR(t, "tab characters must not be used in indentation")), i === 45 && tL(t.input.charCodeAt(t.position + 1)))) {
      n = true;
      t.position++;
      if (tY(t, true, -1) && t.lineIndent <= e) {
        l.push(null);
        i = t.input.charCodeAt(t.position);
        continue;
      }
      r = t.line;
      t4(t, e, 3, false, true);
      l.push(t.result);
      tY(t, true, -1);
      i = t.input.charCodeAt(t.position);
      if ((t.line === r || t.lineIndent > e) && i !== 0) {
        tR(t, "bad indentation of a sequence entry");
      } else if (t.lineIndent < e) {
        break;
      }
    }
    return !!n && (t.tag = a, t.anchor = o, t.kind = "sequence", t.result = l, true);
  }
  function t2(t, e, r) {
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    var h;
    var c = t.tag;
    var d = t.anchor;
    var u = {};
    var p = Object.create(null);
    var g = null;
    var f = null;
    var m = null;
    var y = false;
    var x = false;
    if (t.firstTabInLine !== -1) {
      return false;
    }
    if (t.anchor !== null) {
      t.anchorMap[t.anchor] = u;
    }
    h = t.input.charCodeAt(t.position);
    while (h !== 0) {
      if (!y && t.firstTabInLine !== -1) {
        t.position = t.firstTabInLine;
        tR(t, "tab characters must not be used in indentation");
      }
      i = t.input.charCodeAt(t.position + 1);
      o = t.line;
      if ((h === 63 || h === 58) && tL(i)) {
        if (h === 63) {
          if (y) {
            tH(t, u, p, g, f, null, l, n, s);
            g = f = m = null;
          }
          x = true;
          y = true;
          a = true;
        } else if (y) {
          y = false;
          a = true;
        } else {
          tR(t, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
        }
        t.position += 1;
        h = i;
      } else {
        l = t.line;
        n = t.lineStart;
        s = t.position;
        if (!t4(t, r, 2, false, true)) {
          break;
        }
        if (t.line === o) {
          for (h = t.input.charCodeAt(t.position); tW(h);) {
            h = t.input.charCodeAt(++t.position);
          }
          if (h === 58) {
            if (!tL(h = t.input.charCodeAt(++t.position))) {
              tR(t, "a whitespace character is expected after the key-value separator within a block mapping");
            }
            if (y) {
              tH(t, u, p, g, f, null, l, n, s);
              g = f = m = null;
            }
            x = true;
            y = false;
            a = false;
            g = t.tag;
            f = t.result;
          } else {
            if (!x) {
              t.tag = c;
              t.anchor = d;
              return true;
            }
            tR(t, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!x) {
            t.tag = c;
            t.anchor = d;
            return true;
          }
          tR(t, "can not read a block mapping entry; a multiline key may not be an implicit key");
        }
      }
      if (t.line === o || t.lineIndent > e) {
        if (y) {
          l = t.line;
          n = t.lineStart;
          s = t.position;
        }
        if (t4(t, e, 4, true, a)) {
          if (y) {
            f = t.result;
          } else {
            m = t.result;
          }
        }
        if (!y) {
          tH(t, u, p, g, f, m, l, n, s);
          g = f = m = null;
        }
        tY(t, true, -1);
        h = t.input.charCodeAt(t.position);
      }
      if ((t.line === o || t.lineIndent > e) && h !== 0) {
        tR(t, "bad indentation of a mapping entry");
      } else if (t.lineIndent < e) {
        break;
      }
    }
    if (y) {
      tH(t, u, p, g, f, null, l, n, s);
    }
    if (x) {
      t.tag = c;
      t.anchor = d;
      t.kind = "mapping";
      t.result = u;
    }
    return x;
  }
  function t5(t) {
    var e;
    var r;
    var i;
    var a;
    var o = false;
    var l = false;
    if ((a = t.input.charCodeAt(t.position)) !== 33) {
      return false;
    }
    if (t.tag !== null) {
      tR(t, "duplication of a tag property");
    }
    if ((a = t.input.charCodeAt(++t.position)) === 60) {
      o = true;
      a = t.input.charCodeAt(++t.position);
    } else if (a === 33) {
      l = true;
      r = "!!";
      a = t.input.charCodeAt(++t.position);
    } else {
      r = "!";
    }
    e = t.position;
    if (o) {
      do {
        a = t.input.charCodeAt(++t.position);
      } while (a !== 0 && a !== 62);
      if (t.position < t.length) {
        i = t.input.slice(e, t.position);
        a = t.input.charCodeAt(++t.position);
      } else {
        tR(t, "unexpected end of the stream within a verbatim tag");
      }
    } else {
      while (a !== 0 && !tL(a)) {
        if (a === 33) {
          if (l) {
            tR(t, "tag suffix cannot contain exclamation marks");
          } else {
            r = t.input.slice(e - 1, t.position + 1);
            if (!tS.test(r)) {
              tR(t, "named tag handle cannot contain such characters");
            }
            l = true;
            e = t.position + 1;
          }
        }
        a = t.input.charCodeAt(++t.position);
      }
      i = t.input.slice(e, t.position);
      if (tw.test(i)) {
        tR(t, "tag suffix cannot contain flow indicator characters");
      }
    }
    if (i && !tT.test(i)) {
      tR(t, "tag name cannot contain such characters: " + i);
    }
    try {
      i = decodeURIComponent(i);
    } catch (e) {
      tR(t, "tag name is malformed: " + i);
    }
    if (o) {
      t.tag = i;
    } else if (tC.call(t.tagMap, r)) {
      t.tag = t.tagMap[r] + i;
    } else if (r === "!") {
      t.tag = "!" + i;
    } else if (r === "!!") {
      t.tag = "tag:yaml.org,2002:" + i;
    } else {
      tR(t, "undeclared tag handle \"" + r + "\"");
    }
    return true;
  }
  function t3(t) {
    var e;
    var r;
    if ((r = t.input.charCodeAt(t.position)) !== 38) {
      return false;
    }
    if (t.anchor !== null) {
      tR(t, "duplication of an anchor property");
    }
    r = t.input.charCodeAt(++t.position);
    e = t.position;
    while (r !== 0 && !tL(r) && !tF(r)) {
      r = t.input.charCodeAt(++t.position);
    }
    if (t.position === e) {
      tR(t, "name of an anchor node must contain at least one character");
    }
    t.anchor = t.input.slice(e, t.position);
    return true;
  }
  function t6(t) {
    var e;
    var r;
    var i;
    if ((i = t.input.charCodeAt(t.position)) !== 42) {
      return false;
    }
    i = t.input.charCodeAt(++t.position);
    e = t.position;
    while (i !== 0 && !tL(i) && !tF(i)) {
      i = t.input.charCodeAt(++t.position);
    }
    if (t.position === e) {
      tR(t, "name of an alias node must contain at least one character");
    }
    r = t.input.slice(e, t.position);
    if (!tC.call(t.anchorMap, r)) {
      tR(t, "unidentified alias \"" + r + "\"");
    }
    t.result = t.anchorMap[r];
    tY(t, true, -1);
    return true;
  }
  function t4(t, e, r, i, a) {
    var o;
    var l;
    var n;
    var s;
    var h;
    var c;
    var d;
    var u;
    var p;
    var g = 1;
    var f = false;
    var m = false;
    if (t.listener !== null) {
      t.listener("open", t);
    }
    t.tag = null;
    t.anchor = null;
    t.kind = null;
    t.result = null;
    o = l = n = r === 4 || r === 3;
    if (i && tY(t, true, -1)) {
      f = true;
      if (t.lineIndent > e) {
        g = 1;
      } else if (t.lineIndent === e) {
        g = 0;
      } else if (t.lineIndent < e) {
        g = -1;
      }
    }
    if (g === 1) {
      while (t5(t) || t3(t)) {
        if (tY(t, true, -1)) {
          f = true;
          n = o;
          if (t.lineIndent > e) {
            g = 1;
          } else if (t.lineIndent === e) {
            g = 0;
          } else if (t.lineIndent < e) {
            g = -1;
          }
        } else {
          n = false;
        }
      }
    }
    n &&= f || a;
    if (g === 1 || r === 4) {
      u = r === 1 || r === 2 ? e : e + 1;
      p = t.position - t.lineStart;
      if (g === 1) {
        if (n && (t1(t, p) || t2(t, p, u)) || tK(t, u)) {
          m = true;
        } else {
          if (l && t0(t, u) || tQ(t, u) || tJ(t, u)) {
            m = true;
          } else if (t6(t)) {
            m = true;
            if (t.tag !== null || t.anchor !== null) {
              tR(t, "alias node should not have any properties");
            }
          } else if (tX(t, u, r === 1)) {
            m = true;
            if (t.tag === null) {
              t.tag = "?";
            }
          }
          if (t.anchor !== null) {
            t.anchorMap[t.anchor] = t.result;
          }
        }
      } else if (g === 0) {
        m = n && t1(t, p);
      }
    }
    if (t.tag === null) {
      if (t.anchor !== null) {
        t.anchorMap[t.anchor] = t.result;
      }
    } else if (t.tag === "?") {
      if (t.result !== null && t.kind !== "scalar") {
        tR(t, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + t.kind + "\"");
      }
      s = 0;
      h = t.implicitTypes.length;
      for (; s < h; s += 1) {
        if ((d = t.implicitTypes[s]).resolve(t.result)) {
          t.result = d.construct(t.result);
          t.tag = d.tag;
          if (t.anchor !== null) {
            t.anchorMap[t.anchor] = t.result;
          }
          break;
        }
      }
    } else if (t.tag !== "!") {
      if (tC.call(t.typeMap[t.kind || "fallback"], t.tag)) {
        d = t.typeMap[t.kind || "fallback"][t.tag];
      } else {
        s = 0;
        d = null;
        h = (c = t.typeMap.multi[t.kind || "fallback"]).length;
        for (; s < h; s += 1) {
          if (t.tag.slice(0, c[s].tag.length) === c[s].tag) {
            d = c[s];
            break;
          }
        }
      }
      if (!d) {
        tR(t, "unknown tag !<" + t.tag + ">");
      }
      if (t.result !== null && d.kind !== t.kind) {
        tR(t, "unacceptable node kind for !<" + t.tag + "> tag; it should be \"" + d.kind + "\", not \"" + t.kind + "\"");
      }
      if (d.resolve(t.result, t.tag)) {
        t.result = d.construct(t.result, t.tag);
        if (t.anchor !== null) {
          t.anchorMap[t.anchor] = t.result;
        }
      } else {
        tR(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
      }
    }
    if (t.listener !== null) {
      t.listener("close", t);
    }
    return t.tag !== null || t.anchor !== null || m;
  }
  function t8(t) {
    var e;
    var r;
    var i;
    var a;
    var o = t.position;
    var l = false;
    t.version = null;
    t.checkLineBreaks = t.legacy;
    t.tagMap = Object.create(null);
    t.anchorMap = Object.create(null);
    while ((a = t.input.charCodeAt(t.position)) !== 0 && (tY(t, true, -1), a = t.input.charCodeAt(t.position), !(t.lineIndent > 0) && a === 37)) {
      l = true;
      a = t.input.charCodeAt(++t.position);
      e = t.position;
      while (a !== 0 && !tL(a)) {
        a = t.input.charCodeAt(++t.position);
      }
      r = t.input.slice(e, t.position);
      i = [];
      if (r.length < 1) {
        tR(t, "directive name must not be less than one character in length");
      }
      while (a !== 0) {
        while (tW(a)) {
          a = t.input.charCodeAt(++t.position);
        }
        if (a === 35) {
          do {
            a = t.input.charCodeAt(++t.position);
          } while (a !== 0 && !tM(a));
          break;
        }
        if (tM(a)) {
          break;
        }
        for (e = t.position; a !== 0 && !tL(a);) {
          a = t.input.charCodeAt(++t.position);
        }
        i.push(t.input.slice(e, t.position));
      }
      if (a !== 0) {
        tU(t);
      }
      if (tC.call(tP, r)) {
        tP[r](t, r, i);
      } else {
        tN(t, "unknown document directive \"" + r + "\"");
      }
    }
    tY(t, true, -1);
    if (t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45) {
      t.position += 3;
      tY(t, true, -1);
    } else if (l) {
      tR(t, "directives end mark is expected");
    }
    t4(t, t.lineIndent - 1, 4, false, true);
    tY(t, true, -1);
    if (t.checkLineBreaks && tk.test(t.input.slice(o, t.position))) {
      tN(t, "non-ASCII line breaks are interpreted as content");
    }
    t.documents.push(t.result);
    if (t.position === t.lineStart && tG(t)) {
      if (t.input.charCodeAt(t.position) === 46) {
        t.position += 3;
        tY(t, true, -1);
      }
      return;
    }
    if (t.position < t.length - 1) {
      tR(t, "end of the stream or a document separator is expected");
    }
  }
  function t9(t, e) {
    t = String(t);
    e = e || {};
    if (t.length !== 0) {
      if (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13) {
        t += "\n";
      }
      if (t.charCodeAt(0) === 65279) {
        t = t.slice(1);
      }
    }
    var r = new tI(t, e);
    var i = t.indexOf("\0");
    if (i !== -1) {
      r.position = i;
      tR(r, "null byte is not allowed in input");
    }
    r.input += "\0";
    while (r.input.charCodeAt(r.position) === 32) {
      r.lineIndent += 1;
      r.position += 1;
    }
    while (r.position < r.length - 1) {
      t8(r);
    }
    return r.documents;
  }
  function t7(t, e, r) {
    if (e !== null && typeof e == "object" && r === undefined) {
      r = e;
      e = null;
    }
    var i = t9(t, r);
    if (typeof e != "function") {
      return i;
    }
    var a = 0;
    var o = i.length;
    for (; a < o; a += 1) {
      e(i[a]);
    }
  }
  function et(t, e) {
    var r = t9(t, e);
    if (r.length !== 0) {
      if (r.length === 1) {
        return r[0];
      }
      throw new d("expected a single document in the stream, but found more");
    }
  }
  loggerLevelUtils.setFunctionName(tz, "captureSegment");
  loggerLevelUtils.setFunctionName(tj, "mergeMappings");
  loggerLevelUtils.setFunctionName(tH, "storeMappingPair");
  loggerLevelUtils.setFunctionName(tU, "readLineBreak");
  loggerLevelUtils.setFunctionName(tY, "skipSeparationSpace");
  loggerLevelUtils.setFunctionName(tG, "testDocumentSeparator");
  loggerLevelUtils.setFunctionName(tV, "writeFoldedLines");
  loggerLevelUtils.setFunctionName(tX, "readPlainScalar");
  loggerLevelUtils.setFunctionName(tQ, "readSingleQuotedScalar");
  loggerLevelUtils.setFunctionName(tJ, "readDoubleQuotedScalar");
  loggerLevelUtils.setFunctionName(tK, "readFlowCollection");
  loggerLevelUtils.setFunctionName(t0, "readBlockScalar");
  loggerLevelUtils.setFunctionName(t1, "readBlockSequence");
  loggerLevelUtils.setFunctionName(t2, "readBlockMapping");
  loggerLevelUtils.setFunctionName(t5, "readTagProperty");
  loggerLevelUtils.setFunctionName(t3, "readAnchorProperty");
  loggerLevelUtils.setFunctionName(t6, "readAlias");
  loggerLevelUtils.setFunctionName(t4, "composeNode");
  loggerLevelUtils.setFunctionName(t8, "readDocument");
  loggerLevelUtils.setFunctionName(t9, "loadDocuments");
  loggerLevelUtils.setFunctionName(t7, "loadAll$1");
  loggerLevelUtils.setFunctionName(et, "load$1");
  var ee = Object.prototype.toString;
  var er = Object.prototype.hasOwnProperty;
  var ei = {
    0: "\\0",
    7: "\\a",
    8: "\\b",
    9: "\\t",
    10: "\\n",
    11: "\\v",
    12: "\\f",
    13: "\\r",
    27: "\\e",
    34: "\\\"",
    92: "\\\\",
    133: "\\N",
    160: "\\_",
    8232: "\\L",
    8233: "\\P"
  };
  var ea = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
  var eo = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function el(t, e) {
    var r;
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    if (e === null) {
      return {};
    }
    a = 0;
    r = {};
    o = (i = Object.keys(e)).length;
    for (; a < o; a += 1) {
      n = String(e[l = i[a]]);
      if (l.slice(0, 2) === "!!") {
        l = "tag:yaml.org,2002:" + l.slice(2);
      }
      if ((s = t.compiledTypeMap.fallback[l]) && er.call(s.styleAliases, n)) {
        n = s.styleAliases[n];
      }
      r[l] = n;
    }
    return r;
  }
  function en(t) {
    var e;
    var r;
    var i;
    e = t.toString(16).toUpperCase();
    if (t <= 255) {
      r = "x";
      i = 2;
    } else if (t <= 65535) {
      r = "u";
      i = 4;
    } else if (t <= 4294967295) {
      r = "U";
      i = 8;
    } else {
      throw new d("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + r + h.repeat("0", i - e.length) + e;
  }
  function es(t) {
    this.schema = t.schema || tb;
    this.indent = Math.max(1, t.indent || 2);
    this.noArrayIndent = t.noArrayIndent || false;
    this.skipInvalid = t.skipInvalid || false;
    this.flowLevel = h.isNothing(t.flowLevel) ? -1 : t.flowLevel;
    this.styleMap = el(this.schema, t.styles || null);
    this.sortKeys = t.sortKeys || false;
    this.lineWidth = t.lineWidth || 80;
    this.noRefs = t.noRefs || false;
    this.noCompatMode = t.noCompatMode || false;
    this.condenseFlow = t.condenseFlow || false;
    this.quotingType = t.quotingType === "\"" ? 2 : 1;
    this.forceQuotes = t.forceQuotes || false;
    this.replacer = typeof t.replacer == "function" ? t.replacer : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
  }
  function eh(t, e) {
    var r;
    var i = h.repeat(" ", e);
    var a = 0;
    var o = -1;
    var l = "";
    var n = t.length;
    while (a < n) {
      if ((o = t.indexOf("\n", a)) === -1) {
        r = t.slice(a);
        a = n;
      } else {
        r = t.slice(a, o + 1);
        a = o + 1;
      }
      if (r.length && r !== "\n") {
        l += i;
      }
      l += r;
    }
    return l;
  }
  function ec(t, e) {
    return "\n" + h.repeat(" ", t.indent * e);
  }
  function ed(t, e) {
    var r;
    var i;
    r = 0;
    i = t.implicitTypes.length;
    for (; r < i; r += 1) {
      if (t.implicitTypes[r].resolve(e)) {
        return true;
      }
    }
    return false;
  }
  function eu(t) {
    return t === 32 || t === 9;
  }
  function ep(t) {
    return t >= 32 && t <= 126 || t >= 161 && t <= 55295 && t !== 8232 && t !== 8233 || t >= 57344 && t <= 65533 && t !== 65279 || t >= 65536 && t <= 1114111;
  }
  function eg(t) {
    return ep(t) && t !== 65279 && t !== 13 && t !== 10;
  }
  function ef(t, e, r) {
    var i = eg(t);
    var a = i && !eu(t);
    return (r ? i : i && t !== 44 && t !== 91 && t !== 93 && t !== 123 && t !== 125) && t !== 35 && (e !== 58 || !!a) || eg(e) && !eu(e) && t === 35 || e === 58 && a;
  }
  function em(t) {
    return ep(t) && t !== 65279 && !eu(t) && t !== 45 && t !== 63 && t !== 58 && t !== 44 && t !== 91 && t !== 93 && t !== 123 && t !== 125 && t !== 35 && t !== 38 && t !== 42 && t !== 33 && t !== 124 && t !== 61 && t !== 62 && t !== 39 && t !== 34 && t !== 37 && t !== 64 && t !== 96;
  }
  function ey(t) {
    return !eu(t) && t !== 58;
  }
  function ex(t, e) {
    var r;
    var i = t.charCodeAt(e);
    if (i >= 55296 && i <= 56319 && e + 1 < t.length && (r = t.charCodeAt(e + 1)) >= 56320 && r <= 57343) {
      return (i - 55296) * 1024 + r - 56320 + 65536;
    } else {
      return i;
    }
  }
  function eb(t) {
    return /^\n* /.test(t);
  }
  function eC(t, e, r, i, a, o, l, n) {
    var s;
    var h = 0;
    var c = null;
    var d = false;
    var u = false;
    var p = i !== -1;
    var g = -1;
    var f = em(ex(t, 0)) && ey(ex(t, t.length - 1));
    if (e || l) {
      for (s = 0; s < t.length; h >= 65536 ? s += 2 : s++) {
        if (!ep(h = ex(t, s))) {
          return 5;
        }
        f = f && ef(h, c, n);
        c = h;
      }
    } else {
      for (s = 0; s < t.length; h >= 65536 ? s += 2 : s++) {
        if ((h = ex(t, s)) === 10) {
          d = true;
          if (p) {
            u = u || s - g - 1 > i && t[g + 1] !== " ";
            g = s;
          }
        } else if (!ep(h)) {
          return 5;
        }
        f = f && ef(h, c, n);
        c = h;
      }
      u = u || p && s - g - 1 > i && t[g + 1] !== " ";
    }
    if (d || u) {
      if (r > 9 && eb(t)) {
        return 5;
      } else if (l) {
        if (o === 2) {
          return 5;
        } else {
          return 2;
        }
      } else if (u) {
        return 4;
      } else {
        return 3;
      }
    } else if (!f || l || a(t)) {
      if (o === 2) {
        return 5;
      } else {
        return 2;
      }
    } else {
      return 1;
    }
  }
  function ev(t, e, r, i, o) {
    t.dump = function () {
      if (e.length === 0) {
        if (t.quotingType === 2) {
          return "\"\"";
        } else {
          return "''";
        }
      }
      if (!t.noCompatMode && (ea.indexOf(e) !== -1 || eo.test(e))) {
        if (t.quotingType === 2) {
          return "\"" + e + "\"";
        } else {
          return "'" + e + "'";
        }
      }
      var l = t.indent * Math.max(1, r);
      var n = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - l);
      var s = i || t.flowLevel > -1 && r >= t.flowLevel;
      function h(e) {
        return ed(t, e);
      }
      loggerLevelUtils.setFunctionName(h, "testAmbiguity");
      switch (eC(e, s, t.indent, n, h, t.quotingType, t.forceQuotes && !i, o)) {
        case 1:
          return e;
        case 2:
          return "'" + e.replace(/'/g, "''") + "'";
        case 3:
          return "|" + ek(e, t.indent) + ew(eh(e, l));
        case 4:
          return ">" + ek(e, t.indent) + ew(eh(eS(e, n), l));
        case 5:
          return "\"" + eB(e) + "\"";
        default:
          throw new d("impossible error: invalid scalar style");
      }
    }();
  }
  function ek(t, e) {
    var r = eb(t) ? String(e) : "";
    var i = t[t.length - 1] === "\n";
    return r + (i && (t[t.length - 2] === "\n" || t === "\n") ? "+" : i ? "" : "-") + "\n";
  }
  function ew(t) {
    if (t[t.length - 1] === "\n") {
      return t.slice(0, -1);
    } else {
      return t;
    }
  }
  function eS(t, e) {
    var r;
    var i;
    var a;
    var o = /(\n+)([^\n]*)/g;
    r = (r = t.indexOf("\n")) !== -1 ? r : t.length;
    o.lastIndex = r;
    var l = eT(t.slice(0, r), e);
    var n = t[0] === "\n" || t[0] === " ";
    while (a = o.exec(t)) {
      var s = a[1];
      var h = a[2];
      i = h[0] === " ";
      l += s + (n || i || h === "" ? "" : "\n") + eT(h, e);
      n = i;
    }
    return l;
  }
  function eT(t, e) {
    if (t === "" || t[0] === " ") {
      return t;
    }
    var r;
    var i;
    var a = / [^ ]/g;
    var o = 0;
    var l = 0;
    var n = 0;
    var s = "";
    while (r = a.exec(t)) {
      if ((n = r.index) - o > e) {
        i = l > o ? l : n;
        s += "\n" + t.slice(o, i);
        o = i + 1;
      }
      l = n;
    }
    s += "\n";
    if (t.length - o > e && l > o) {
      s += t.slice(o, l) + "\n" + t.slice(l + 1);
    } else {
      s += t.slice(o);
    }
    return s.slice(1);
  }
  function eB(t) {
    var e;
    var r = "";
    var i = 0;
    var a = 0;
    for (; a < t.length; i >= 65536 ? a += 2 : a++) {
      if (!(e = ei[i = ex(t, a)]) && ep(i)) {
        r += t[a];
        if (i >= 65536) {
          r += t[a + 1];
        }
      } else {
        r += e || en(i);
      }
    }
    return r;
  }
  function eM(t, e, r) {
    var i;
    var a;
    var o;
    var l = "";
    var n = t.tag;
    i = 0;
    a = r.length;
    for (; i < a; i += 1) {
      o = r[i];
      if (t.replacer) {
        o = t.replacer.call(r, String(i), o);
      }
      if (eA(t, e, o, false, false) || o === undefined && eA(t, e, null, false, false)) {
        if (l !== "") {
          l += "," + (t.condenseFlow ? "" : " ");
        }
        l += t.dump;
      }
    }
    t.tag = n;
    t.dump = "[" + l + "]";
  }
  function eW(t, e, r, i) {
    var a;
    var o;
    var l;
    var n = "";
    var s = t.tag;
    a = 0;
    o = r.length;
    for (; a < o; a += 1) {
      l = r[a];
      if (t.replacer) {
        l = t.replacer.call(r, String(a), l);
      }
      if (eA(t, e + 1, l, true, true, false, true) || l === undefined && eA(t, e + 1, null, true, true, false, true)) {
        if (!i || n !== "") {
          n += ec(t, e);
        }
        if (t.dump && t.dump.charCodeAt(0) === 10) {
          n += "-";
        } else {
          n += "- ";
        }
        n += t.dump;
      }
    }
    t.tag = s;
    t.dump = n || "[]";
  }
  function eL(t, e, r) {
    var i;
    var a;
    var o;
    var l;
    var n;
    var s = "";
    var h = t.tag;
    var c = Object.keys(r);
    i = 0;
    a = c.length;
    for (; i < a; i += 1) {
      n = "";
      if (s !== "") {
        n += ", ";
      }
      if (t.condenseFlow) {
        n += "\"";
      }
      l = r[o = c[i]];
      if (t.replacer) {
        l = t.replacer.call(r, o, l);
      }
      if (eA(t, e, o, false, false)) {
        if (t.dump.length > 1024) {
          n += "? ";
        }
        n += t.dump + (t.condenseFlow ? "\"" : "") + ":" + (t.condenseFlow ? "" : " ");
        if (eA(t, e, l, false, false)) {
          n += t.dump;
          s += n;
        }
      }
    }
    t.tag = h;
    t.dump = "{" + s + "}";
  }
  function eF(t, e, r, i) {
    var a;
    var o;
    var l;
    var n;
    var s;
    var h;
    var c = "";
    var u = t.tag;
    var p = Object.keys(r);
    if (t.sortKeys === true) {
      p.sort();
    } else if (typeof t.sortKeys == "function") {
      p.sort(t.sortKeys);
    } else if (t.sortKeys) {
      throw new d("sortKeys must be a boolean or a function");
    }
    a = 0;
    o = p.length;
    for (; a < o; a += 1) {
      h = "";
      if (!i || c !== "") {
        h += ec(t, e);
      }
      n = r[l = p[a]];
      if (t.replacer) {
        n = t.replacer.call(r, l, n);
      }
      if (eA(t, e + 1, l, true, true, true)) {
        if (s = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024) {
          if (t.dump && t.dump.charCodeAt(0) === 10) {
            h += "?";
          } else {
            h += "? ";
          }
        }
        h += t.dump;
        if (s) {
          h += ec(t, e);
        }
        if (eA(t, e + 1, n, true, s)) {
          if (t.dump && t.dump.charCodeAt(0) === 10) {
            h += ":";
          } else {
            h += ": ";
          }
          h += t.dump;
          c += h;
        }
      }
    }
    t.tag = u;
    t.dump = c || "{}";
  }
  function e_(t, e, r) {
    var i;
    var a;
    var o;
    var l;
    var n;
    var s;
    o = 0;
    l = (a = r ? t.explicitTypes : t.implicitTypes).length;
    for (; o < l; o += 1) {
      if (((n = a[o]).instanceOf || n.predicate) && (!n.instanceOf || typeof e == "object" && e instanceof n.instanceOf) && (!n.predicate || n.predicate(e))) {
        if (r) {
          if (n.multi && n.representName) {
            t.tag = n.representName(e);
          } else {
            t.tag = n.tag;
          }
        } else {
          t.tag = "?";
        }
        if (n.represent) {
          s = t.styleMap[n.tag] || n.defaultStyle;
          if (ee.call(n.represent) === "[object Function]") {
            i = n.represent(e, s);
          } else if (er.call(n.represent, s)) {
            i = n.represent[s](e, s);
          } else {
            throw new d("!<" + n.tag + "> tag resolver accepts not \"" + s + "\" style");
          }
          t.dump = i;
        }
        return true;
      }
    }
    return false;
  }
  function eA(t, e, r, i, a, o, l) {
    t.tag = null;
    t.dump = r;
    if (!e_(t, r, false)) {
      e_(t, r, true);
    }
    var n = ee.call(t.dump);
    var s = i;
    i &&= t.flowLevel < 0 || t.flowLevel > e;
    var h;
    var c;
    var u;
    var p = n === "[object Object]" || n === "[object Array]";
    if (p) {
      u = (c = t.duplicates.indexOf(r)) !== -1;
    }
    if (t.tag !== null && t.tag !== "?" || u || t.indent !== 2 && e > 0) {
      a = false;
    }
    if (u && t.usedDuplicates[c]) {
      t.dump = "*ref_" + c;
    } else {
      if (p && u && !t.usedDuplicates[c]) {
        t.usedDuplicates[c] = true;
      }
      if (n === "[object Object]") {
        if (i && Object.keys(t.dump).length !== 0) {
          eF(t, e, t.dump, a);
          if (u) {
            t.dump = "&ref_" + c + t.dump;
          }
        } else {
          eL(t, e, t.dump);
          if (u) {
            t.dump = "&ref_" + c + " " + t.dump;
          }
        }
      } else if (n === "[object Array]") {
        if (i && t.dump.length !== 0) {
          if (t.noArrayIndent && !l && e > 0) {
            eW(t, e - 1, t.dump, a);
          } else {
            eW(t, e, t.dump, a);
          }
          if (u) {
            t.dump = "&ref_" + c + t.dump;
          }
        } else {
          eM(t, e, t.dump);
          if (u) {
            t.dump = "&ref_" + c + " " + t.dump;
          }
        }
      } else if (n === "[object String]") {
        if (t.tag !== "?") {
          ev(t, t.dump, e, o, s);
        }
      } else {
        if (n === "[object Undefined]" || t.skipInvalid) {
          return false;
        }
        throw new d("unacceptable kind of an object to dump " + n);
      }
      if (t.tag !== null && t.tag !== "?") {
        h = encodeURI(t.tag[0] === "!" ? t.tag.slice(1) : t.tag).replace(/!/g, "%21");
        h = t.tag[0] === "!" ? "!" + h : h.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + h.slice(18) : "!<" + h + ">";
        t.dump = h + " " + t.dump;
      }
    }
    return true;
  }
  function e$(t, e) {
    var r;
    var i;
    var a = [];
    var o = [];
    eE(t, a, o);
    r = 0;
    i = o.length;
    for (; r < i; r += 1) {
      e.duplicates.push(a[o[r]]);
    }
    e.usedDuplicates = Array(i);
  }
  function eE(t, e, r) {
    var i;
    var a;
    var o;
    if (t !== null && typeof t == "object") {
      if ((a = e.indexOf(t)) !== -1) {
        if (r.indexOf(a) === -1) {
          r.push(a);
        }
      } else {
        e.push(t);
        if (Array.isArray(t)) {
          a = 0;
          o = t.length;
          for (; a < o; a += 1) {
            eE(t[a], e, r);
          }
        } else {
          a = 0;
          o = (i = Object.keys(t)).length;
          for (; a < o; a += 1) {
            eE(t[i[a]], e, r);
          }
        }
      }
    }
  }
  loggerLevelUtils.setFunctionName(el, "compileStyleMap");
  loggerLevelUtils.setFunctionName(en, "encodeHex");
  loggerLevelUtils.setFunctionName(es, "State");
  loggerLevelUtils.setFunctionName(eh, "indentString");
  loggerLevelUtils.setFunctionName(ec, "generateNextLine");
  loggerLevelUtils.setFunctionName(ed, "testImplicitResolving");
  loggerLevelUtils.setFunctionName(eu, "isWhitespace");
  loggerLevelUtils.setFunctionName(ep, "isPrintable");
  loggerLevelUtils.setFunctionName(eg, "isNsCharOrWhitespace");
  loggerLevelUtils.setFunctionName(ef, "isPlainSafe");
  loggerLevelUtils.setFunctionName(em, "isPlainSafeFirst");
  loggerLevelUtils.setFunctionName(ey, "isPlainSafeLast");
  loggerLevelUtils.setFunctionName(ex, "codePointAt");
  loggerLevelUtils.setFunctionName(eb, "needIndentIndicator");
  function eZ(t, e) {
    return function () {
      throw Error("Function yaml." + t + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
    };
  }
  loggerLevelUtils.setFunctionName(eC, "chooseScalarStyle");
  loggerLevelUtils.setFunctionName(ev, "writeScalar");
  loggerLevelUtils.setFunctionName(ek, "blockHeader");
  loggerLevelUtils.setFunctionName(ew, "dropEndingNewline");
  loggerLevelUtils.setFunctionName(eS, "foldString");
  loggerLevelUtils.setFunctionName(eT, "foldLine");
  loggerLevelUtils.setFunctionName(eB, "escapeString");
  loggerLevelUtils.setFunctionName(eM, "writeFlowSequence");
  loggerLevelUtils.setFunctionName(eW, "writeBlockSequence");
  loggerLevelUtils.setFunctionName(eL, "writeFlowMapping");
  loggerLevelUtils.setFunctionName(eF, "writeBlockMapping");
  loggerLevelUtils.setFunctionName(e_, "detectType");
  loggerLevelUtils.setFunctionName(eA, "writeNode");
  loggerLevelUtils.setFunctionName(e$, "getDuplicateReferences");
  loggerLevelUtils.setFunctionName(eE, "inspectNode");
  loggerLevelUtils.setFunctionName(function (t, e) {
    var r = new es(e = e || {});
    if (!r.noRefs) {
      e$(t, r);
    }
    var i = t;
    if (r.replacer) {
      i = r.replacer.call({
        "": i
      }, "", i);
    }
    if (eA(r, 0, i, true, true)) {
      return r.dump + "\n";
    } else {
      return "";
    }
  }, "dump$1");
  loggerLevelUtils.setFunctionName(eZ, "renamed");
  var eO = H;
  var eD = et;
  eZ("safeLoad", "load");
  eZ("safeLoadAll", "loadAll");
  eZ("safeDump", "dump");
  require.d(exports, {
    Schema: function () {
      return eO;
    },
    load: function () {
      return eD;
    }
  });
}
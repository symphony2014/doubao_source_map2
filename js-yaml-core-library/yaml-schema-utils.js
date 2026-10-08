// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'Schema'
// - Renamed export 'z' to 'load'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23945.e38e16b2.js
         * chunkId: 23945
         * moduleId: 165530
         */
module.exports = function (module, exports, require) {
  var i;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  function o(e) {
    return e == null;
  }
  function a(e) {
    return typeof e == "object" && e !== null;
  }
  function l(e, t) {
    var n;
    var i = "";
    for (n = 0; n < t; n += 1) {
      i += e;
    }
    return i;
  }
  function c(e) {
    return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
  }
  mermaidConfigUtils.setName(o, "isNothing");
  mermaidConfigUtils.setName(a, "isObject");
  mermaidConfigUtils.setName(function (e) {
    if (Array.isArray(e)) {
      return e;
    } else if (o(e)) {
      return [];
    } else {
      return [e];
    }
  }, "toArray");
  mermaidConfigUtils.setName(function (e, t) {
    var n;
    var i;
    var r;
    var o;
    if (t) {
      n = 0;
      i = (o = Object.keys(t)).length;
      for (; n < i; n += 1) {
        e[r = o[n]] = t[r];
      }
    }
    return e;
  }, "extend");
  mermaidConfigUtils.setName(l, "repeat");
  mermaidConfigUtils.setName(c, "isNegativeZero");
  var s = {
    isNothing: o,
    isObject: a,
    repeat: l,
    isNegativeZero: c
  };
  function u(e, t) {
    var n = "";
    var i = e.reason || "(unknown reason)";
    if (e.mark) {
      if (e.mark.name) {
        n += "in \"" + e.mark.name + "\" ";
      }
      n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")";
      if (!t && e.mark.snippet) {
        n += "\n\n" + e.mark.snippet;
      }
      return i + " " + n;
    } else {
      return i;
    }
  }
  function p(e, t) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = e;
    this.mark = t;
    this.message = u(this, false);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = Error().stack || "";
    }
  }
  function f(e, t, n, i, r) {
    var o = "";
    var a = "";
    var l = Math.floor(r / 2) - 1;
    if (i - t > l) {
      t = i - l + (o = " ... ").length;
    }
    if (n - i > l) {
      n = i + l - (a = " ...").length;
    }
    return {
      str: o + e.slice(t, n).replace(/\t/g, "→") + a,
      pos: i - t + o.length
    };
  }
  function d(e, t) {
    return s.repeat(" ", t - e.length) + e;
  }
  function h(e, t) {
    t = Object.create(t || null);
    if (!e.buffer) {
      return null;
    }
    t.maxLength ||= 79;
    if (typeof t.indent != "number") {
      t.indent = 1;
    }
    if (typeof t.linesBefore != "number") {
      t.linesBefore = 3;
    }
    if (typeof t.linesAfter != "number") {
      t.linesAfter = 2;
    }
    var n = /\r?\n|\r|\0/g;
    var i = [0];
    var r = [];
    var o = -1;
    while (a = n.exec(e.buffer)) {
      r.push(a.index);
      i.push(a.index + a[0].length);
      if (e.position <= a.index && o < 0) {
        o = i.length - 2;
      }
    }
    if (o < 0) {
      o = i.length - 1;
    }
    var a;
    var l;
    var c;
    var u = "";
    var p = Math.min(e.line + t.linesAfter, r.length).toString().length;
    var h = t.maxLength - (t.indent + p + 3);
    for (l = 1; l <= t.linesBefore && !(o - l < 0); l++) {
      c = f(e.buffer, i[o - l], r[o - l], e.position - (i[o] - i[o - l]), h);
      u = s.repeat(" ", t.indent) + d((e.line - l + 1).toString(), p) + " | " + c.str + "\n" + u;
    }
    c = f(e.buffer, i[o], r[o], e.position, h);
    u += s.repeat(" ", t.indent) + d((e.line + 1).toString(), p) + " | " + c.str + "\n" + s.repeat("-", t.indent + p + 3 + c.pos) + "^\n";
    l = 1;
    for (; l <= t.linesAfter && !(o + l >= r.length); l++) {
      c = f(e.buffer, i[o + l], r[o + l], e.position - (i[o] - i[o + l]), h);
      u += s.repeat(" ", t.indent) + d((e.line + l + 1).toString(), p) + " | " + c.str + "\n";
    }
    return u.replace(/\n$/, "");
  }
  mermaidConfigUtils.setName(u, "formatError");
  mermaidConfigUtils.setName(p, "YAMLException$1");
  p.prototype = Object.create(Error.prototype);
  p.prototype.constructor = p;
  p.prototype.toString = mermaidConfigUtils.setName(function (e) {
    return this.name + ": " + u(this, e);
  }, "toString");
  mermaidConfigUtils.setName(f, "getLine");
  mermaidConfigUtils.setName(d, "padStart");
  mermaidConfigUtils.setName(h, "makeSnippet");
  var m = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"];
  var g = ["scalar", "sequence", "mapping"];
  function y(e) {
    var t = {};
    if (e !== null) {
      Object.keys(e).forEach(function (n) {
        e[n].forEach(function (e) {
          t[String(e)] = n;
        });
      });
    }
    return t;
  }
  function b(e, t) {
    Object.keys(t = t || {}).forEach(function (t) {
      if (m.indexOf(t) === -1) {
        throw new p("Unknown option \"" + t + "\" is met in definition of \"" + e + "\" YAML type.");
      }
    });
    this.options = t;
    this.tag = e;
    this.kind = t.kind || null;
    this.resolve = t.resolve || function () {
      return true;
    };
    this.construct = t.construct || function (e) {
      return e;
    };
    this.instanceOf = t.instanceOf || null;
    this.predicate = t.predicate || null;
    this.represent = t.represent || null;
    this.representName = t.representName || null;
    this.defaultStyle = t.defaultStyle || null;
    this.multi = t.multi || false;
    this.styleAliases = y(t.styleAliases || null);
    if (g.indexOf(this.kind) === -1) {
      throw new p("Unknown kind \"" + this.kind + "\" is specified for \"" + e + "\" YAML type.");
    }
  }
  function v(e, t) {
    var n = [];
    e[t].forEach(function (e) {
      var t = n.length;
      n.forEach(function (n, i) {
        if (n.tag === e.tag && n.kind === e.kind && n.multi === e.multi) {
          t = i;
        }
      });
      n[t] = e;
    });
    return n;
  }
  function A() {
    var e;
    var t;
    var n = {
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
    function i(e) {
      if (e.multi) {
        n.multi[e.kind].push(e);
        n.multi.fallback.push(e);
      } else {
        n[e.kind][e.tag] = n.fallback[e.tag] = e;
      }
    }
    mermaidConfigUtils.setName(i, "collectType");
    e = 0;
    t = arguments.length;
    for (; e < t; e += 1) {
      arguments[e].forEach(i);
    }
    return n;
  }
  function W(e) {
    return this.extend(e);
  }
  mermaidConfigUtils.setName(y, "compileStyleAliases");
  mermaidConfigUtils.setName(b, "Type$1");
  mermaidConfigUtils.setName(v, "compileList");
  mermaidConfigUtils.setName(A, "compileMap");
  mermaidConfigUtils.setName(W, "Schema$1");
  W.prototype.extend = mermaidConfigUtils.setName(function (e) {
    var t = [];
    var n = [];
    if (e instanceof b) {
      n.push(e);
    } else if (Array.isArray(e)) {
      n = n.concat(e);
    } else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) {
      if (e.implicit) {
        t = t.concat(e.implicit);
      }
      if (e.explicit) {
        n = n.concat(e.explicit);
      }
    } else {
      throw new p("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    t.forEach(function (e) {
      if (!(e instanceof b)) {
        throw new p("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      if (e.loadKind && e.loadKind !== "scalar") {
        throw new p("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }
      if (e.multi) {
        throw new p("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
      }
    });
    n.forEach(function (e) {
      if (!(e instanceof b)) {
        throw new p("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
    });
    var i = Object.create(W.prototype);
    i.implicit = (this.implicit || []).concat(t);
    i.explicit = (this.explicit || []).concat(n);
    i.compiledImplicit = v(i, "implicit");
    i.compiledExplicit = v(i, "explicit");
    i.compiledTypeMap = A(i.compiledImplicit, i.compiledExplicit);
    return i;
  }, "extend");
  var k = new W({
    explicit: [new b("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: mermaidConfigUtils.setName(function (e) {
        if (e !== null) {
          return e;
        } else {
          return "";
        }
      }, "construct")
    }), new b("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: mermaidConfigUtils.setName(function (e) {
        if (e !== null) {
          return e;
        } else {
          return [];
        }
      }, "construct")
    }), new b("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: mermaidConfigUtils.setName(function (e) {
        if (e !== null) {
          return e;
        } else {
          return {};
        }
      }, "construct")
    })]
  });
  function w(e) {
    if (e === null) {
      return true;
    }
    var t = e.length;
    return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
  }
  function C() {
    return null;
  }
  function x(e) {
    return e === null;
  }
  mermaidConfigUtils.setName(w, "resolveYamlNull");
  mermaidConfigUtils.setName(C, "constructYamlNull");
  mermaidConfigUtils.setName(x, "isNull");
  var S = new b("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: w,
    construct: C,
    predicate: x,
    represent: {
      canonical: mermaidConfigUtils.setName(function () {
        return "~";
      }, "canonical"),
      lowercase: mermaidConfigUtils.setName(function () {
        return "null";
      }, "lowercase"),
      uppercase: mermaidConfigUtils.setName(function () {
        return "NULL";
      }, "uppercase"),
      camelcase: mermaidConfigUtils.setName(function () {
        return "Null";
      }, "camelcase"),
      empty: mermaidConfigUtils.setName(function () {
        return "";
      }, "empty")
    },
    defaultStyle: "lowercase"
  });
  function I(e) {
    if (e === null) {
      return false;
    }
    var t = e.length;
    return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
  }
  function O(e) {
    return e === "true" || e === "True" || e === "TRUE";
  }
  function j(e) {
    return Object.prototype.toString.call(e) === "[object Boolean]";
  }
  mermaidConfigUtils.setName(I, "resolveYamlBoolean");
  mermaidConfigUtils.setName(O, "constructYamlBoolean");
  mermaidConfigUtils.setName(j, "isBoolean");
  var T = new b("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: I,
    construct: O,
    predicate: j,
    represent: {
      lowercase: mermaidConfigUtils.setName(function (e) {
        if (e) {
          return "true";
        } else {
          return "false";
        }
      }, "lowercase"),
      uppercase: mermaidConfigUtils.setName(function (e) {
        if (e) {
          return "TRUE";
        } else {
          return "FALSE";
        }
      }, "uppercase"),
      camelcase: mermaidConfigUtils.setName(function (e) {
        if (e) {
          return "True";
        } else {
          return "False";
        }
      }, "camelcase")
    },
    defaultStyle: "lowercase"
  });
  function N(e) {
    return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
  }
  function F(e) {
    return e >= 48 && e <= 55;
  }
  function L(e) {
    return e >= 48 && e <= 57;
  }
  function _(e) {
    if (e === null) {
      return false;
    }
    var t;
    var n = e.length;
    var i = 0;
    var r = false;
    if (!n) {
      return false;
    }
    if ((t = e[i]) === "-" || t === "+") {
      t = e[++i];
    }
    if (t === "0") {
      if (i + 1 === n) {
        return true;
      }
      if ((t = e[++i]) === "b") {
        for (i++; i < n; i++) {
          if ((t = e[i]) !== "_") {
            if (t !== "0" && t !== "1") {
              return false;
            }
            r = true;
          }
        }
        return r && t !== "_";
      }
      if (t === "x") {
        for (i++; i < n; i++) {
          if ((t = e[i]) !== "_") {
            if (!N(e.charCodeAt(i))) {
              return false;
            }
            r = true;
          }
        }
        return r && t !== "_";
      }
      if (t === "o") {
        for (i++; i < n; i++) {
          if ((t = e[i]) !== "_") {
            if (!F(e.charCodeAt(i))) {
              return false;
            }
            r = true;
          }
        }
        return r && t !== "_";
      }
    }
    if (t === "_") {
      return false;
    }
    for (; i < n; i++) {
      if ((t = e[i]) !== "_") {
        if (!L(e.charCodeAt(i))) {
          return false;
        }
        r = true;
      }
    }
    return !!r && t !== "_";
  }
  function E(e) {
    var t;
    var n = e;
    var i = 1;
    if (n.indexOf("_") !== -1) {
      n = n.replace(/_/g, "");
    }
    if ((t = n[0]) === "-" || t === "+") {
      if (t === "-") {
        i = -1;
      }
      t = (n = n.slice(1))[0];
    }
    if (n === "0") {
      return 0;
    }
    if (t === "0") {
      if (n[1] === "b") {
        return i * parseInt(n.slice(2), 2);
      }
      if (n[1] === "x") {
        return i * parseInt(n.slice(2), 16);
      }
      if (n[1] === "o") {
        return i * parseInt(n.slice(2), 8);
      }
    }
    return i * parseInt(n, 10);
  }
  function M(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && e % 1 == 0 && !s.isNegativeZero(e);
  }
  mermaidConfigUtils.setName(N, "isHexCode");
  mermaidConfigUtils.setName(F, "isOctCode");
  mermaidConfigUtils.setName(L, "isDecCode");
  mermaidConfigUtils.setName(_, "resolveYamlInteger");
  mermaidConfigUtils.setName(E, "constructYamlInteger");
  mermaidConfigUtils.setName(M, "isInteger");
  var Y = new b("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: _,
    construct: E,
    predicate: M,
    represent: {
      binary: mermaidConfigUtils.setName(function (e) {
        if (e >= 0) {
          return "0b" + e.toString(2);
        } else {
          return "-0b" + e.toString(2).slice(1);
        }
      }, "binary"),
      octal: mermaidConfigUtils.setName(function (e) {
        if (e >= 0) {
          return "0o" + e.toString(8);
        } else {
          return "-0o" + e.toString(8).slice(1);
        }
      }, "octal"),
      decimal: mermaidConfigUtils.setName(function (e) {
        return e.toString(10);
      }, "decimal"),
      hexadecimal: mermaidConfigUtils.setName(function (e) {
        if (e >= 0) {
          return "0x" + e.toString(16).toUpperCase();
        } else {
          return "-0x" + e.toString(16).toUpperCase().slice(1);
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
  var D = RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function B(e) {
    return e !== null && !!D.test(e) && e[e.length - 1] !== "_";
  }
  function q(e) {
    var t;
    var n;
    n = (t = e.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1;
    if ("+-".indexOf(t[0]) >= 0) {
      t = t.slice(1);
    }
    if (t === ".inf") {
      if (n === 1) {
        return Number.POSITIVE_INFINITY;
      } else {
        return Number.NEGATIVE_INFINITY;
      }
    } else if (t === ".nan") {
      return NaN;
    } else {
      return n * parseFloat(t, 10);
    }
  }
  mermaidConfigUtils.setName(B, "resolveYamlFloat");
  mermaidConfigUtils.setName(q, "constructYamlFloat");
  var U = /^[-+]?[0-9]+e/;
  function P(e, t) {
    var n;
    if (isNaN(e)) {
      switch (t) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    } else if (Number.POSITIVE_INFINITY === e) {
      switch (t) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    } else if (Number.NEGATIVE_INFINITY === e) {
      switch (t) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    } else if (s.isNegativeZero(e)) {
      return "-0.0";
    }
    n = e.toString(10);
    if (U.test(n)) {
      return n.replace("e", ".e");
    } else {
      return n;
    }
  }
  function R(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 != 0 || s.isNegativeZero(e));
  }
  mermaidConfigUtils.setName(P, "representYamlFloat");
  mermaidConfigUtils.setName(R, "isFloat");
  var $ = new b("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: B,
    construct: q,
    predicate: R,
    represent: P,
    defaultStyle: "lowercase"
  });
  var K = k.extend({
    implicit: [S, T, Y, $]
  });
  var H = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
  var G = RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function Z(e) {
    return e !== null && (H.exec(e) !== null || G.exec(e) !== null);
  }
  function Q(e) {
    var t;
    var n;
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    var s = 0;
    var u = null;
    if ((t = H.exec(e)) === null) {
      t = G.exec(e);
    }
    if (t === null) {
      throw Error("Date resolve error");
    }
    n = +t[1];
    i = +t[2] - 1;
    r = +t[3];
    if (!t[4]) {
      return new Date(Date.UTC(n, i, r));
    }
    o = +t[4];
    a = +t[5];
    l = +t[6];
    if (t[7]) {
      for (s = t[7].slice(0, 3); s.length < 3;) {
        s += "0";
      }
      s *= 1;
    }
    if (t[9]) {
      u = (+t[10] * 60 + +(t[11] || 0)) * 60000;
      if (t[9] === "-") {
        u = -u;
      }
    }
    c = new Date(Date.UTC(n, i, r, o, a, l, s));
    if (u) {
      c.setTime(c.getTime() - u);
    }
    return c;
  }
  function V(e) {
    return e.toISOString();
  }
  mermaidConfigUtils.setName(Z, "resolveYamlTimestamp");
  mermaidConfigUtils.setName(Q, "constructYamlTimestamp");
  mermaidConfigUtils.setName(V, "representYamlTimestamp");
  var z = new b("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: Z,
    construct: Q,
    instanceOf: Date,
    represent: V
  });
  function J(e) {
    return e === "<<" || e === null;
  }
  mermaidConfigUtils.setName(J, "resolveYamlMerge");
  var X = new b("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: J
  });
  var ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
  function et(e) {
    if (e === null) {
      return false;
    }
    var t;
    var n;
    var i = 0;
    var r = e.length;
    for (n = 0; n < r; n++) {
      if (!((t = ee.indexOf(e.charAt(n))) > 64)) {
        if (t < 0) {
          return false;
        }
        i += 6;
      }
    }
    return i % 8 == 0;
  }
  function en(e) {
    var t;
    var n;
    var i = e.replace(/[\r\n=]/g, "");
    var r = i.length;
    var o = 0;
    var a = [];
    for (t = 0; t < r; t++) {
      if (t % 4 == 0 && t) {
        a.push(o >> 16 & 255);
        a.push(o >> 8 & 255);
        a.push(o & 255);
      }
      o = o << 6 | ee.indexOf(i.charAt(t));
    }
    if ((n = r % 4 * 6) == 0) {
      a.push(o >> 16 & 255);
      a.push(o >> 8 & 255);
      a.push(o & 255);
    } else if (n === 18) {
      a.push(o >> 10 & 255);
      a.push(o >> 2 & 255);
    } else if (n === 12) {
      a.push(o >> 4 & 255);
    }
    return new Uint8Array(a);
  }
  function ei(e) {
    var t;
    var n;
    var i = "";
    var r = 0;
    var o = e.length;
    for (t = 0; t < o; t++) {
      if (t % 3 == 0 && t) {
        i += ee[r >> 18 & 63];
        i += ee[r >> 12 & 63];
        i += ee[r >> 6 & 63];
        i += ee[r & 63];
      }
      r = (r << 8) + e[t];
    }
    if ((n = o % 3) == 0) {
      i += ee[r >> 18 & 63];
      i += ee[r >> 12 & 63];
      i += ee[r >> 6 & 63];
      i += ee[r & 63];
    } else if (n === 2) {
      i += ee[r >> 10 & 63];
      i += ee[r >> 4 & 63];
      i += ee[r << 2 & 63];
      i += ee[64];
    } else if (n === 1) {
      i += ee[r >> 2 & 63];
      i += ee[r << 4 & 63];
      i += ee[64];
      i += ee[64];
    }
    return i;
  }
  function er(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  mermaidConfigUtils.setName(et, "resolveYamlBinary");
  mermaidConfigUtils.setName(en, "constructYamlBinary");
  mermaidConfigUtils.setName(ei, "representYamlBinary");
  mermaidConfigUtils.setName(er, "isBinary");
  var eo = new b("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: et,
    construct: en,
    predicate: er,
    represent: ei
  });
  var ea = Object.prototype.hasOwnProperty;
  var el = Object.prototype.toString;
  function ec(e) {
    if (e === null) {
      return true;
    }
    var t;
    var n;
    var i;
    var r;
    var o;
    var a = [];
    t = 0;
    n = e.length;
    for (; t < n; t += 1) {
      i = e[t];
      o = false;
      if (el.call(i) !== "[object Object]") {
        return false;
      }
      for (r in i) {
        if (ea.call(i, r)) {
          if (o) {
            return false;
          }
          o = true;
        }
      }
      if (!o || a.indexOf(r) !== -1) {
        return false;
      }
      a.push(r);
    }
    return true;
  }
  function es(e) {
    if (e !== null) {
      return e;
    } else {
      return [];
    }
  }
  mermaidConfigUtils.setName(ec, "resolveYamlOmap");
  mermaidConfigUtils.setName(es, "constructYamlOmap");
  var eu = new b("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: ec,
    construct: es
  });
  var ep = Object.prototype.toString;
  function ef(e) {
    var t;
    var n;
    var i;
    var r;
    var o;
    if (e === null) {
      return true;
    }
    t = 0;
    o = Array(e.length);
    n = e.length;
    for (; t < n; t += 1) {
      i = e[t];
      if (ep.call(i) !== "[object Object]" || (r = Object.keys(i)).length !== 1) {
        return false;
      }
      o[t] = [r[0], i[r[0]]];
    }
    return true;
  }
  function ed(e) {
    var t;
    var n;
    var i;
    var r;
    var o;
    if (e === null) {
      return [];
    }
    t = 0;
    o = Array(e.length);
    n = e.length;
    for (; t < n; t += 1) {
      r = Object.keys(i = e[t]);
      o[t] = [r[0], i[r[0]]];
    }
    return o;
  }
  mermaidConfigUtils.setName(ef, "resolveYamlPairs");
  mermaidConfigUtils.setName(ed, "constructYamlPairs");
  var eh = new b("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: ef,
    construct: ed
  });
  var em = Object.prototype.hasOwnProperty;
  function eg(e) {
    var t;
    if (e === null) {
      return true;
    }
    for (t in e) {
      if (em.call(e, t) && e[t] !== null) {
        return false;
      }
    }
    return true;
  }
  function ey(e) {
    if (e !== null) {
      return e;
    } else {
      return {};
    }
  }
  mermaidConfigUtils.setName(eg, "resolveYamlSet");
  mermaidConfigUtils.setName(ey, "constructYamlSet");
  var eb = new b("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: eg,
    construct: ey
  });
  var ev = K.extend({
    implicit: [z, X],
    explicit: [eo, eu, eh, eb]
  });
  var eA = Object.prototype.hasOwnProperty;
  var eW = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var ek = /[\x85\u2028\u2029]/;
  var ew = /[,\[\]\{\}]/;
  var eC = /^(?:!|!!|![a-z\-]+!)$/i;
  var ex = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function eS(e) {
    return Object.prototype.toString.call(e);
  }
  function eI(e) {
    return e === 10 || e === 13;
  }
  function eO(e) {
    return e === 9 || e === 32;
  }
  function ej(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function eT(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  function eN(e) {
    var t;
    if (e >= 48 && e <= 57) {
      return e - 48;
    } else if ((t = e | 32) >= 97 && t <= 102) {
      return t - 97 + 10;
    } else {
      return -1;
    }
  }
  function eF(e) {
    if (e === 120) {
      return 2;
    } else if (e === 117) {
      return 4;
    } else {
      return (e === 85) * 8;
    }
  }
  function eL(e) {
    if (e >= 48 && e <= 57) {
      return e - 48;
    } else {
      return -1;
    }
  }
  function e_(e) {
    if (e === 48) {
      return "\0";
    } else if (e === 97) {
      return "";
    } else if (e === 98) {
      return "\b";
    } else if (e === 116) {
      return "\t";
    } else if (e === 9) {
      return "\t";
    } else if (e === 110) {
      return "\n";
    } else if (e === 118) {
      return "";
    } else if (e === 102) {
      return "\f";
    } else if (e === 114) {
      return "\r";
    } else if (e === 101) {
      return "";
    } else if (e === 32) {
      return " ";
    } else if (e === 34) {
      return "\"";
    } else if (e === 47) {
      return "/";
    } else if (e === 92) {
      return "\\";
    } else if (e === 78) {
      return "";
    } else if (e === 95) {
      return "\xA0";
    } else if (e === 76) {
      return "\u2028";
    } else if (e === 80) {
      return "\u2029";
    } else {
      return "";
    }
  }
  function eE(e) {
    if (e <= 65535) {
      return String.fromCharCode(e);
    } else {
      return String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
    }
  }
  mermaidConfigUtils.setName(eS, "_class");
  mermaidConfigUtils.setName(eI, "is_EOL");
  mermaidConfigUtils.setName(eO, "is_WHITE_SPACE");
  mermaidConfigUtils.setName(ej, "is_WS_OR_EOL");
  mermaidConfigUtils.setName(eT, "is_FLOW_INDICATOR");
  mermaidConfigUtils.setName(eN, "fromHexCode");
  mermaidConfigUtils.setName(eF, "escapedHexLen");
  mermaidConfigUtils.setName(eL, "fromDecimalCode");
  mermaidConfigUtils.setName(e_, "simpleEscapeSequence");
  mermaidConfigUtils.setName(eE, "charFromCodepoint");
  var eM = Array(256);
  var eY = Array(256);
  for (i = 0; i < 256; i++) {
    eM[i] = +!!e_(i);
    eY[i] = e_(i);
  }
  function eD(e, t) {
    this.input = e;
    this.filename = t.filename || null;
    this.schema = t.schema || ev;
    this.onWarning = t.onWarning || null;
    this.legacy = t.legacy || false;
    this.json = t.json || false;
    this.listener = t.listener || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = e.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
  }
  function eB(e, t) {
    var n = {
      name: e.filename,
      buffer: e.input.slice(0, -1),
      position: e.position,
      line: e.line,
      column: e.position - e.lineStart
    };
    n.snippet = h(n);
    return new p(t, n);
  }
  function eq(e, t) {
    throw eB(e, t);
  }
  function eU(e, t) {
    if (e.onWarning) {
      e.onWarning.call(null, eB(e, t));
    }
  }
  mermaidConfigUtils.setName(eD, "State$1");
  mermaidConfigUtils.setName(eB, "generateError");
  mermaidConfigUtils.setName(eq, "throwError");
  mermaidConfigUtils.setName(eU, "throwWarning");
  var eP = {
    YAML: mermaidConfigUtils.setName(function (e, t, n) {
      var i;
      var r;
      var o;
      if (e.version !== null) {
        eq(e, "duplication of %YAML directive");
      }
      if (n.length !== 1) {
        eq(e, "YAML directive accepts exactly one argument");
      }
      if ((i = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) === null) {
        eq(e, "ill-formed argument of the YAML directive");
      }
      r = parseInt(i[1], 10);
      o = parseInt(i[2], 10);
      if (r !== 1) {
        eq(e, "unacceptable YAML version of the document");
      }
      e.version = n[0];
      e.checkLineBreaks = o < 2;
      if (o !== 1 && o !== 2) {
        eU(e, "unsupported YAML version of the document");
      }
    }, "handleYamlDirective"),
    TAG: mermaidConfigUtils.setName(function (e, t, n) {
      var i;
      var r;
      if (n.length !== 2) {
        eq(e, "TAG directive accepts exactly two arguments");
      }
      i = n[0];
      r = n[1];
      if (!eC.test(i)) {
        eq(e, "ill-formed tag handle (first argument) of the TAG directive");
      }
      if (eA.call(e.tagMap, i)) {
        eq(e, "there is a previously declared suffix for \"" + i + "\" tag handle");
      }
      if (!ex.test(r)) {
        eq(e, "ill-formed tag prefix (second argument) of the TAG directive");
      }
      try {
        r = decodeURIComponent(r);
      } catch (t) {
        eq(e, "tag prefix is malformed: " + r);
      }
      e.tagMap[i] = r;
    }, "handleTagDirective")
  };
  function eR(e, t, n, i) {
    var r;
    var o;
    var a;
    var l;
    if (t < n) {
      l = e.input.slice(t, n);
      if (i) {
        r = 0;
        o = l.length;
        for (; r < o; r += 1) {
          if ((a = l.charCodeAt(r)) !== 9 && (!(a >= 32) || !(a <= 1114111))) {
            eq(e, "expected valid JSON character");
          }
        }
      } else if (eW.test(l)) {
        eq(e, "the stream contains non-printable characters");
      }
      e.result += l;
    }
  }
  function e$(e, t, n, i) {
    var r;
    var o;
    var a;
    var l;
    if (!s.isObject(n)) {
      eq(e, "cannot merge mappings; the provided source object is unacceptable");
    }
    a = 0;
    l = (r = Object.keys(n)).length;
    for (; a < l; a += 1) {
      o = r[a];
      if (!eA.call(t, o)) {
        t[o] = n[o];
        i[o] = true;
      }
    }
  }
  function eK(e, t, n, i, r, o, a, l, c) {
    var s;
    var u;
    if (Array.isArray(r)) {
      s = 0;
      u = (r = Array.prototype.slice.call(r)).length;
      for (; s < u; s += 1) {
        if (Array.isArray(r[s])) {
          eq(e, "nested arrays are not supported inside keys");
        }
        if (typeof r == "object" && eS(r[s]) === "[object Object]") {
          r[s] = "[object Object]";
        }
      }
    }
    if (typeof r == "object" && eS(r) === "[object Object]") {
      r = "[object Object]";
    }
    r = String(r);
    if (t === null) {
      t = {};
    }
    if (i === "tag:yaml.org,2002:merge") {
      if (Array.isArray(o)) {
        s = 0;
        u = o.length;
        for (; s < u; s += 1) {
          e$(e, t, o[s], n);
        }
      } else {
        e$(e, t, o, n);
      }
    } else {
      if (!e.json && !eA.call(n, r) && eA.call(t, r)) {
        e.line = a || e.line;
        e.lineStart = l || e.lineStart;
        e.position = c || e.position;
        eq(e, "duplicated mapping key");
      }
      if (r === "__proto__") {
        Object.defineProperty(t, r, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: o
        });
      } else {
        t[r] = o;
      }
      delete n[r];
    }
    return t;
  }
  function eH(e) {
    var t;
    if ((t = e.input.charCodeAt(e.position)) === 10) {
      e.position++;
    } else if (t === 13) {
      e.position++;
      if (e.input.charCodeAt(e.position) === 10) {
        e.position++;
      }
    } else {
      eq(e, "a line break is expected");
    }
    e.line += 1;
    e.lineStart = e.position;
    e.firstTabInLine = -1;
  }
  function eG(e, t, n) {
    var i = 0;
    var r = e.input.charCodeAt(e.position);
    while (r !== 0) {
      while (eO(r)) {
        if (r === 9 && e.firstTabInLine === -1) {
          e.firstTabInLine = e.position;
        }
        r = e.input.charCodeAt(++e.position);
      }
      if (t && r === 35) {
        do {
          r = e.input.charCodeAt(++e.position);
        } while (r !== 10 && r !== 13 && r !== 0);
      }
      if (eI(r)) {
        eH(e);
        r = e.input.charCodeAt(e.position);
        i++;
        e.lineIndent = 0;
        while (r === 32) {
          e.lineIndent++;
          r = e.input.charCodeAt(++e.position);
        }
      } else {
        break;
      }
    }
    if (n !== -1 && i !== 0 && e.lineIndent < n) {
      eU(e, "deficient indentation");
    }
    return i;
  }
  function eZ(e) {
    var t;
    var n = e.position;
    return ((t = e.input.charCodeAt(n)) === 45 || t === 46) && t === e.input.charCodeAt(n + 1) && t === e.input.charCodeAt(n + 2) && !!(n += 3, (t = e.input.charCodeAt(n)) === 0 || ej(t));
  }
  function eQ(e, t) {
    if (t === 1) {
      e.result += " ";
    } else if (t > 1) {
      e.result += s.repeat("\n", t - 1);
    }
  }
  function eV(e, t, n) {
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    var s;
    var u;
    var p = e.kind;
    var f = e.result;
    if (ej(u = e.input.charCodeAt(e.position)) || eT(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (ej(i = e.input.charCodeAt(e.position + 1)) || n && eT(i))) {
      return false;
    }
    e.kind = "scalar";
    e.result = "";
    r = o = e.position;
    a = false;
    while (u !== 0) {
      if (u === 58) {
        if (ej(i = e.input.charCodeAt(e.position + 1)) || n && eT(i)) {
          break;
        }
      } else if (u === 35) {
        if (ej(e.input.charCodeAt(e.position - 1))) {
          break;
        }
      } else if (e.position === e.lineStart && eZ(e) || n && eT(u)) {
        break;
      } else if (eI(u)) {
        l = e.line;
        c = e.lineStart;
        s = e.lineIndent;
        eG(e, false, -1);
        if (e.lineIndent >= t) {
          a = true;
          u = e.input.charCodeAt(e.position);
          continue;
        }
        e.position = o;
        e.line = l;
        e.lineStart = c;
        e.lineIndent = s;
        break;
      }
      if (a) {
        eR(e, r, o, false);
        eQ(e, e.line - l);
        r = o = e.position;
        a = false;
      }
      if (!eO(u)) {
        o = e.position + 1;
      }
      u = e.input.charCodeAt(++e.position);
    }
    eR(e, r, o, false);
    return !!e.result || (e.kind = p, e.result = f, false);
  }
  function ez(e, t) {
    var n;
    var i;
    var r;
    if ((n = e.input.charCodeAt(e.position)) !== 39) {
      return false;
    }
    e.kind = "scalar";
    e.result = "";
    e.position++;
    i = r = e.position;
    while ((n = e.input.charCodeAt(e.position)) !== 0) {
      if (n === 39) {
        eR(e, i, e.position, true);
        if ((n = e.input.charCodeAt(++e.position)) !== 39) {
          return true;
        }
        i = e.position;
        e.position++;
        r = e.position;
      } else if (eI(n)) {
        eR(e, i, r, true);
        eQ(e, eG(e, false, t));
        i = r = e.position;
      } else if (e.position === e.lineStart && eZ(e)) {
        eq(e, "unexpected end of the document within a single quoted scalar");
      } else {
        e.position++;
        r = e.position;
      }
    }
    eq(e, "unexpected end of the stream within a single quoted scalar");
  }
  function eJ(e, t) {
    var n;
    var i;
    var r;
    var o;
    var a;
    var l;
    if ((l = e.input.charCodeAt(e.position)) !== 34) {
      return false;
    }
    e.kind = "scalar";
    e.result = "";
    e.position++;
    n = i = e.position;
    while ((l = e.input.charCodeAt(e.position)) !== 0) {
      if (l === 34) {
        eR(e, n, e.position, true);
        e.position++;
        return true;
      }
      if (l === 92) {
        eR(e, n, e.position, true);
        if (eI(l = e.input.charCodeAt(++e.position))) {
          eG(e, false, t);
        } else if (l < 256 && eM[l]) {
          e.result += eY[l];
          e.position++;
        } else if ((a = eF(l)) > 0) {
          r = a;
          o = 0;
          for (; r > 0; r--) {
            if ((a = eN(l = e.input.charCodeAt(++e.position))) >= 0) {
              o = (o << 4) + a;
            } else {
              eq(e, "expected hexadecimal character");
            }
          }
          e.result += eE(o);
          e.position++;
        } else {
          eq(e, "unknown escape sequence");
        }
        n = i = e.position;
      } else if (eI(l)) {
        eR(e, n, i, true);
        eQ(e, eG(e, false, t));
        n = i = e.position;
      } else if (e.position === e.lineStart && eZ(e)) {
        eq(e, "unexpected end of the document within a double quoted scalar");
      } else {
        e.position++;
        i = e.position;
      }
    }
    eq(e, "unexpected end of the stream within a double quoted scalar");
  }
  function eX(e, t) {
    var n;
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    var s;
    var u;
    var p;
    var f;
    var d;
    var h = true;
    var m = e.tag;
    var g = e.anchor;
    var y = Object.create(null);
    if ((d = e.input.charCodeAt(e.position)) === 91) {
      a = 93;
      s = false;
      o = [];
    } else {
      if (d !== 123) {
        return false;
      }
      a = 125;
      s = true;
      o = {};
    }
    if (e.anchor !== null) {
      e.anchorMap[e.anchor] = o;
    }
    d = e.input.charCodeAt(++e.position);
    while (d !== 0) {
      eG(e, true, t);
      if ((d = e.input.charCodeAt(e.position)) === a) {
        e.position++;
        e.tag = m;
        e.anchor = g;
        e.kind = s ? "mapping" : "sequence";
        e.result = o;
        return true;
      }
      if (h) {
        if (d === 44) {
          eq(e, "expected the node content, but found ','");
        }
      } else {
        eq(e, "missed comma between flow collection entries");
      }
      p = u = f = null;
      l = c = false;
      if (d === 63 && ej(e.input.charCodeAt(e.position + 1))) {
        l = c = true;
        e.position++;
        eG(e, true, t);
      }
      n = e.line;
      i = e.lineStart;
      r = e.position;
      e9(e, t, 1, false, true);
      p = e.tag;
      u = e.result;
      eG(e, true, t);
      d = e.input.charCodeAt(e.position);
      if ((c || e.line === n) && d === 58) {
        l = true;
        d = e.input.charCodeAt(++e.position);
        eG(e, true, t);
        e9(e, t, 1, false, true);
        f = e.result;
      }
      if (s) {
        eK(e, o, y, p, u, f, n, i, r);
      } else if (l) {
        o.push(eK(e, null, y, p, u, f, n, i, r));
      } else {
        o.push(u);
      }
      eG(e, true, t);
      if ((d = e.input.charCodeAt(e.position)) === 44) {
        h = true;
        d = e.input.charCodeAt(++e.position);
      } else {
        h = false;
      }
    }
    eq(e, "unexpected end of the stream within a flow collection");
  }
  function e0(e, t) {
    var n;
    var i;
    var r;
    var o;
    var a = 1;
    var l = false;
    var c = false;
    var u = t;
    var p = 0;
    var f = false;
    if ((o = e.input.charCodeAt(e.position)) === 124) {
      i = false;
    } else {
      if (o !== 62) {
        return false;
      }
      i = true;
    }
    e.kind = "scalar";
    e.result = "";
    while (o !== 0) {
      if ((o = e.input.charCodeAt(++e.position)) === 43 || o === 45) {
        if (a === 1) {
          a = o === 43 ? 3 : 2;
        } else {
          eq(e, "repeat of a chomping mode identifier");
        }
      } else if ((r = eL(o)) >= 0) {
        if (r === 0) {
          eq(e, "bad explicit indentation width of a block scalar; it cannot be less than one");
        } else if (c) {
          eq(e, "repeat of an indentation width identifier");
        } else {
          u = t + r - 1;
          c = true;
        }
      } else {
        break;
      }
    }
    if (eO(o)) {
      do {
        o = e.input.charCodeAt(++e.position);
      } while (eO(o));
      if (o === 35) {
        do {
          o = e.input.charCodeAt(++e.position);
        } while (!eI(o) && o !== 0);
      }
    }
    while (o !== 0) {
      eH(e);
      e.lineIndent = 0;
      o = e.input.charCodeAt(e.position);
      while ((!c || e.lineIndent < u) && o === 32) {
        e.lineIndent++;
        o = e.input.charCodeAt(++e.position);
      }
      if (!c && e.lineIndent > u) {
        u = e.lineIndent;
      }
      if (eI(o)) {
        p++;
        continue;
      }
      if (e.lineIndent < u) {
        if (a === 3) {
          e.result += s.repeat("\n", l ? 1 + p : p);
        } else if (a === 1 && l) {
          e.result += "\n";
        }
        break;
      }
      if (i) {
        if (eO(o)) {
          f = true;
          e.result += s.repeat("\n", l ? 1 + p : p);
        } else if (f) {
          f = false;
          e.result += s.repeat("\n", p + 1);
        } else if (p === 0) {
          if (l) {
            e.result += " ";
          }
        } else {
          e.result += s.repeat("\n", p);
        }
      } else {
        e.result += s.repeat("\n", l ? 1 + p : p);
      }
      l = true;
      c = true;
      p = 0;
      n = e.position;
      while (!eI(o) && o !== 0) {
        o = e.input.charCodeAt(++e.position);
      }
      eR(e, n, e.position, false);
    }
    return true;
  }
  function e1(e, t) {
    var n;
    var i;
    var r = e.tag;
    var o = e.anchor;
    var a = [];
    var l = false;
    if (e.firstTabInLine !== -1) {
      return false;
    }
    if (e.anchor !== null) {
      e.anchorMap[e.anchor] = a;
    }
    i = e.input.charCodeAt(e.position);
    while (i !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, eq(e, "tab characters must not be used in indentation")), i === 45 && ej(e.input.charCodeAt(e.position + 1)))) {
      l = true;
      e.position++;
      if (eG(e, true, -1) && e.lineIndent <= t) {
        a.push(null);
        i = e.input.charCodeAt(e.position);
        continue;
      }
      n = e.line;
      e9(e, t, 3, false, true);
      a.push(e.result);
      eG(e, true, -1);
      i = e.input.charCodeAt(e.position);
      if ((e.line === n || e.lineIndent > t) && i !== 0) {
        eq(e, "bad indentation of a sequence entry");
      } else if (e.lineIndent < t) {
        break;
      }
    }
    return !!l && (e.tag = r, e.anchor = o, e.kind = "sequence", e.result = a, true);
  }
  function e2(e, t, n) {
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    var s;
    var u = e.tag;
    var p = e.anchor;
    var f = {};
    var d = Object.create(null);
    var h = null;
    var m = null;
    var g = null;
    var y = false;
    var b = false;
    if (e.firstTabInLine !== -1) {
      return false;
    }
    if (e.anchor !== null) {
      e.anchorMap[e.anchor] = f;
    }
    s = e.input.charCodeAt(e.position);
    while (s !== 0) {
      if (!y && e.firstTabInLine !== -1) {
        e.position = e.firstTabInLine;
        eq(e, "tab characters must not be used in indentation");
      }
      i = e.input.charCodeAt(e.position + 1);
      o = e.line;
      if ((s === 63 || s === 58) && ej(i)) {
        if (s === 63) {
          if (y) {
            eK(e, f, d, h, m, null, a, l, c);
            h = m = g = null;
          }
          b = true;
          y = true;
          r = true;
        } else if (y) {
          y = false;
          r = true;
        } else {
          eq(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
        }
        e.position += 1;
        s = i;
      } else {
        a = e.line;
        l = e.lineStart;
        c = e.position;
        if (!e9(e, n, 2, false, true)) {
          break;
        }
        if (e.line === o) {
          for (s = e.input.charCodeAt(e.position); eO(s);) {
            s = e.input.charCodeAt(++e.position);
          }
          if (s === 58) {
            if (!ej(s = e.input.charCodeAt(++e.position))) {
              eq(e, "a whitespace character is expected after the key-value separator within a block mapping");
            }
            if (y) {
              eK(e, f, d, h, m, null, a, l, c);
              h = m = g = null;
            }
            b = true;
            y = false;
            r = false;
            h = e.tag;
            m = e.result;
          } else {
            if (!b) {
              e.tag = u;
              e.anchor = p;
              return true;
            }
            eq(e, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!b) {
            e.tag = u;
            e.anchor = p;
            return true;
          }
          eq(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
        }
      }
      if (e.line === o || e.lineIndent > t) {
        if (y) {
          a = e.line;
          l = e.lineStart;
          c = e.position;
        }
        if (e9(e, t, 4, true, r)) {
          if (y) {
            m = e.result;
          } else {
            g = e.result;
          }
        }
        if (!y) {
          eK(e, f, d, h, m, g, a, l, c);
          h = m = g = null;
        }
        eG(e, true, -1);
        s = e.input.charCodeAt(e.position);
      }
      if ((e.line === o || e.lineIndent > t) && s !== 0) {
        eq(e, "bad indentation of a mapping entry");
      } else if (e.lineIndent < t) {
        break;
      }
    }
    if (y) {
      eK(e, f, d, h, m, null, a, l, c);
    }
    if (b) {
      e.tag = u;
      e.anchor = p;
      e.kind = "mapping";
      e.result = f;
    }
    return b;
  }
  function e3(e) {
    var t;
    var n;
    var i;
    var r;
    var o = false;
    var a = false;
    if ((r = e.input.charCodeAt(e.position)) !== 33) {
      return false;
    }
    if (e.tag !== null) {
      eq(e, "duplication of a tag property");
    }
    if ((r = e.input.charCodeAt(++e.position)) === 60) {
      o = true;
      r = e.input.charCodeAt(++e.position);
    } else if (r === 33) {
      a = true;
      n = "!!";
      r = e.input.charCodeAt(++e.position);
    } else {
      n = "!";
    }
    t = e.position;
    if (o) {
      do {
        r = e.input.charCodeAt(++e.position);
      } while (r !== 0 && r !== 62);
      if (e.position < e.length) {
        i = e.input.slice(t, e.position);
        r = e.input.charCodeAt(++e.position);
      } else {
        eq(e, "unexpected end of the stream within a verbatim tag");
      }
    } else {
      while (r !== 0 && !ej(r)) {
        if (r === 33) {
          if (a) {
            eq(e, "tag suffix cannot contain exclamation marks");
          } else {
            n = e.input.slice(t - 1, e.position + 1);
            if (!eC.test(n)) {
              eq(e, "named tag handle cannot contain such characters");
            }
            a = true;
            t = e.position + 1;
          }
        }
        r = e.input.charCodeAt(++e.position);
      }
      i = e.input.slice(t, e.position);
      if (ew.test(i)) {
        eq(e, "tag suffix cannot contain flow indicator characters");
      }
    }
    if (i && !ex.test(i)) {
      eq(e, "tag name cannot contain such characters: " + i);
    }
    try {
      i = decodeURIComponent(i);
    } catch (t) {
      eq(e, "tag name is malformed: " + i);
    }
    if (o) {
      e.tag = i;
    } else if (eA.call(e.tagMap, n)) {
      e.tag = e.tagMap[n] + i;
    } else if (n === "!") {
      e.tag = "!" + i;
    } else if (n === "!!") {
      e.tag = "tag:yaml.org,2002:" + i;
    } else {
      eq(e, "undeclared tag handle \"" + n + "\"");
    }
    return true;
  }
  function e5(e) {
    var t;
    var n;
    if ((n = e.input.charCodeAt(e.position)) !== 38) {
      return false;
    }
    if (e.anchor !== null) {
      eq(e, "duplication of an anchor property");
    }
    n = e.input.charCodeAt(++e.position);
    t = e.position;
    while (n !== 0 && !ej(n) && !eT(n)) {
      n = e.input.charCodeAt(++e.position);
    }
    if (e.position === t) {
      eq(e, "name of an anchor node must contain at least one character");
    }
    e.anchor = e.input.slice(t, e.position);
    return true;
  }
  function e6(e) {
    var t;
    var n;
    var i;
    if ((i = e.input.charCodeAt(e.position)) !== 42) {
      return false;
    }
    i = e.input.charCodeAt(++e.position);
    t = e.position;
    while (i !== 0 && !ej(i) && !eT(i)) {
      i = e.input.charCodeAt(++e.position);
    }
    if (e.position === t) {
      eq(e, "name of an alias node must contain at least one character");
    }
    n = e.input.slice(t, e.position);
    if (!eA.call(e.anchorMap, n)) {
      eq(e, "unidentified alias \"" + n + "\"");
    }
    e.result = e.anchorMap[n];
    eG(e, true, -1);
    return true;
  }
  function e9(e, t, n, i, r) {
    var o;
    var a;
    var l;
    var c;
    var s;
    var u;
    var p;
    var f;
    var d;
    var h = 1;
    var m = false;
    var g = false;
    if (e.listener !== null) {
      e.listener("open", e);
    }
    e.tag = null;
    e.anchor = null;
    e.kind = null;
    e.result = null;
    o = a = l = n === 4 || n === 3;
    if (i && eG(e, true, -1)) {
      m = true;
      if (e.lineIndent > t) {
        h = 1;
      } else if (e.lineIndent === t) {
        h = 0;
      } else if (e.lineIndent < t) {
        h = -1;
      }
    }
    if (h === 1) {
      while (e3(e) || e5(e)) {
        if (eG(e, true, -1)) {
          m = true;
          l = o;
          if (e.lineIndent > t) {
            h = 1;
          } else if (e.lineIndent === t) {
            h = 0;
          } else if (e.lineIndent < t) {
            h = -1;
          }
        } else {
          l = false;
        }
      }
    }
    l &&= m || r;
    if (h === 1 || n === 4) {
      f = n === 1 || n === 2 ? t : t + 1;
      d = e.position - e.lineStart;
      if (h === 1) {
        if (l && (e1(e, d) || e2(e, d, f)) || eX(e, f)) {
          g = true;
        } else {
          if (a && e0(e, f) || ez(e, f) || eJ(e, f)) {
            g = true;
          } else if (e6(e)) {
            g = true;
            if (e.tag !== null || e.anchor !== null) {
              eq(e, "alias node should not have any properties");
            }
          } else if (eV(e, f, n === 1)) {
            g = true;
            if (e.tag === null) {
              e.tag = "?";
            }
          }
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = e.result;
          }
        }
      } else if (h === 0) {
        g = l && e1(e, d);
      }
    }
    if (e.tag === null) {
      if (e.anchor !== null) {
        e.anchorMap[e.anchor] = e.result;
      }
    } else if (e.tag === "?") {
      if (e.result !== null && e.kind !== "scalar") {
        eq(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\"");
      }
      c = 0;
      s = e.implicitTypes.length;
      for (; c < s; c += 1) {
        if ((p = e.implicitTypes[c]).resolve(e.result)) {
          e.result = p.construct(e.result);
          e.tag = p.tag;
          if (e.anchor !== null) {
            e.anchorMap[e.anchor] = e.result;
          }
          break;
        }
      }
    } else if (e.tag !== "!") {
      if (eA.call(e.typeMap[e.kind || "fallback"], e.tag)) {
        p = e.typeMap[e.kind || "fallback"][e.tag];
      } else {
        c = 0;
        p = null;
        s = (u = e.typeMap.multi[e.kind || "fallback"]).length;
        for (; c < s; c += 1) {
          if (e.tag.slice(0, u[c].tag.length) === u[c].tag) {
            p = u[c];
            break;
          }
        }
      }
      if (!p) {
        eq(e, "unknown tag !<" + e.tag + ">");
      }
      if (e.result !== null && p.kind !== e.kind) {
        eq(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + p.kind + "\", not \"" + e.kind + "\"");
      }
      if (p.resolve(e.result, e.tag)) {
        e.result = p.construct(e.result, e.tag);
        if (e.anchor !== null) {
          e.anchorMap[e.anchor] = e.result;
        }
      } else {
        eq(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
      }
    }
    if (e.listener !== null) {
      e.listener("close", e);
    }
    return e.tag !== null || e.anchor !== null || g;
  }
  function e4(e) {
    var t;
    var n;
    var i;
    var r;
    var o = e.position;
    var a = false;
    e.version = null;
    e.checkLineBreaks = e.legacy;
    e.tagMap = Object.create(null);
    e.anchorMap = Object.create(null);
    while ((r = e.input.charCodeAt(e.position)) !== 0 && (eG(e, true, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0) && r === 37)) {
      a = true;
      r = e.input.charCodeAt(++e.position);
      t = e.position;
      while (r !== 0 && !ej(r)) {
        r = e.input.charCodeAt(++e.position);
      }
      n = e.input.slice(t, e.position);
      i = [];
      if (n.length < 1) {
        eq(e, "directive name must not be less than one character in length");
      }
      while (r !== 0) {
        while (eO(r)) {
          r = e.input.charCodeAt(++e.position);
        }
        if (r === 35) {
          do {
            r = e.input.charCodeAt(++e.position);
          } while (r !== 0 && !eI(r));
          break;
        }
        if (eI(r)) {
          break;
        }
        for (t = e.position; r !== 0 && !ej(r);) {
          r = e.input.charCodeAt(++e.position);
        }
        i.push(e.input.slice(t, e.position));
      }
      if (r !== 0) {
        eH(e);
      }
      if (eA.call(eP, n)) {
        eP[n](e, n, i);
      } else {
        eU(e, "unknown document directive \"" + n + "\"");
      }
    }
    eG(e, true, -1);
    if (e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45) {
      e.position += 3;
      eG(e, true, -1);
    } else if (a) {
      eq(e, "directives end mark is expected");
    }
    e9(e, e.lineIndent - 1, 4, false, true);
    eG(e, true, -1);
    if (e.checkLineBreaks && ek.test(e.input.slice(o, e.position))) {
      eU(e, "non-ASCII line breaks are interpreted as content");
    }
    e.documents.push(e.result);
    if (e.position === e.lineStart && eZ(e)) {
      if (e.input.charCodeAt(e.position) === 46) {
        e.position += 3;
        eG(e, true, -1);
      }
      return;
    }
    if (e.position < e.length - 1) {
      eq(e, "end of the stream or a document separator is expected");
    }
  }
  function e8(e, t) {
    e = String(e);
    t = t || {};
    if (e.length !== 0) {
      if (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13) {
        e += "\n";
      }
      if (e.charCodeAt(0) === 65279) {
        e = e.slice(1);
      }
    }
    var n = new eD(e, t);
    var i = e.indexOf("\0");
    if (i !== -1) {
      n.position = i;
      eq(n, "null byte is not allowed in input");
    }
    n.input += "\0";
    while (n.input.charCodeAt(n.position) === 32) {
      n.lineIndent += 1;
      n.position += 1;
    }
    while (n.position < n.length - 1) {
      e4(n);
    }
    return n.documents;
  }
  function e7(e, t, n) {
    if (t !== null && typeof t == "object" && n === undefined) {
      n = t;
      t = null;
    }
    var i = e8(e, n);
    if (typeof t != "function") {
      return i;
    }
    var r = 0;
    var o = i.length;
    for (; r < o; r += 1) {
      t(i[r]);
    }
  }
  function te(e, t) {
    var n = e8(e, t);
    if (n.length !== 0) {
      if (n.length === 1) {
        return n[0];
      }
      throw new p("expected a single document in the stream, but found more");
    }
  }
  mermaidConfigUtils.setName(eR, "captureSegment");
  mermaidConfigUtils.setName(e$, "mergeMappings");
  mermaidConfigUtils.setName(eK, "storeMappingPair");
  mermaidConfigUtils.setName(eH, "readLineBreak");
  mermaidConfigUtils.setName(eG, "skipSeparationSpace");
  mermaidConfigUtils.setName(eZ, "testDocumentSeparator");
  mermaidConfigUtils.setName(eQ, "writeFoldedLines");
  mermaidConfigUtils.setName(eV, "readPlainScalar");
  mermaidConfigUtils.setName(ez, "readSingleQuotedScalar");
  mermaidConfigUtils.setName(eJ, "readDoubleQuotedScalar");
  mermaidConfigUtils.setName(eX, "readFlowCollection");
  mermaidConfigUtils.setName(e0, "readBlockScalar");
  mermaidConfigUtils.setName(e1, "readBlockSequence");
  mermaidConfigUtils.setName(e2, "readBlockMapping");
  mermaidConfigUtils.setName(e3, "readTagProperty");
  mermaidConfigUtils.setName(e5, "readAnchorProperty");
  mermaidConfigUtils.setName(e6, "readAlias");
  mermaidConfigUtils.setName(e9, "composeNode");
  mermaidConfigUtils.setName(e4, "readDocument");
  mermaidConfigUtils.setName(e8, "loadDocuments");
  mermaidConfigUtils.setName(e7, "loadAll$1");
  mermaidConfigUtils.setName(te, "load$1");
  var tt = Object.prototype.toString;
  var tn = Object.prototype.hasOwnProperty;
  var ti = {
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
  var tr = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
  var to = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function ta(e, t) {
    var n;
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    if (t === null) {
      return {};
    }
    r = 0;
    n = {};
    o = (i = Object.keys(t)).length;
    for (; r < o; r += 1) {
      l = String(t[a = i[r]]);
      if (a.slice(0, 2) === "!!") {
        a = "tag:yaml.org,2002:" + a.slice(2);
      }
      if ((c = e.compiledTypeMap.fallback[a]) && tn.call(c.styleAliases, l)) {
        l = c.styleAliases[l];
      }
      n[a] = l;
    }
    return n;
  }
  function tl(e) {
    var t;
    var n;
    var i;
    t = e.toString(16).toUpperCase();
    if (e <= 255) {
      n = "x";
      i = 2;
    } else if (e <= 65535) {
      n = "u";
      i = 4;
    } else if (e <= 4294967295) {
      n = "U";
      i = 8;
    } else {
      throw new p("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + n + s.repeat("0", i - t.length) + t;
  }
  function tc(e) {
    this.schema = e.schema || ev;
    this.indent = Math.max(1, e.indent || 2);
    this.noArrayIndent = e.noArrayIndent || false;
    this.skipInvalid = e.skipInvalid || false;
    this.flowLevel = s.isNothing(e.flowLevel) ? -1 : e.flowLevel;
    this.styleMap = ta(this.schema, e.styles || null);
    this.sortKeys = e.sortKeys || false;
    this.lineWidth = e.lineWidth || 80;
    this.noRefs = e.noRefs || false;
    this.noCompatMode = e.noCompatMode || false;
    this.condenseFlow = e.condenseFlow || false;
    this.quotingType = e.quotingType === "\"" ? 2 : 1;
    this.forceQuotes = e.forceQuotes || false;
    this.replacer = typeof e.replacer == "function" ? e.replacer : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
  }
  function ts(e, t) {
    var n;
    var i = s.repeat(" ", t);
    var r = 0;
    var o = -1;
    var a = "";
    var l = e.length;
    while (r < l) {
      if ((o = e.indexOf("\n", r)) === -1) {
        n = e.slice(r);
        r = l;
      } else {
        n = e.slice(r, o + 1);
        r = o + 1;
      }
      if (n.length && n !== "\n") {
        a += i;
      }
      a += n;
    }
    return a;
  }
  function tu(e, t) {
    return "\n" + s.repeat(" ", e.indent * t);
  }
  function tp(e, t) {
    var n;
    var i;
    n = 0;
    i = e.implicitTypes.length;
    for (; n < i; n += 1) {
      if (e.implicitTypes[n].resolve(t)) {
        return true;
      }
    }
    return false;
  }
  function tf(e) {
    return e === 32 || e === 9;
  }
  function td(e) {
    return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && e !== 8232 && e !== 8233 || e >= 57344 && e <= 65533 && e !== 65279 || e >= 65536 && e <= 1114111;
  }
  function th(e) {
    return td(e) && e !== 65279 && e !== 13 && e !== 10;
  }
  function tm(e, t, n) {
    var i = th(e);
    var r = i && !tf(e);
    return (n ? i : i && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125) && e !== 35 && (t !== 58 || !!r) || th(t) && !tf(t) && e === 35 || t === 58 && r;
  }
  function tg(e) {
    return td(e) && e !== 65279 && !tf(e) && e !== 45 && e !== 63 && e !== 58 && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125 && e !== 35 && e !== 38 && e !== 42 && e !== 33 && e !== 124 && e !== 61 && e !== 62 && e !== 39 && e !== 34 && e !== 37 && e !== 64 && e !== 96;
  }
  function ty(e) {
    return !tf(e) && e !== 58;
  }
  function tb(e, t) {
    var n;
    var i = e.charCodeAt(t);
    if (i >= 55296 && i <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343) {
      return (i - 55296) * 1024 + n - 56320 + 65536;
    } else {
      return i;
    }
  }
  function tv(e) {
    return /^\n* /.test(e);
  }
  function tA(e, t, n, i, r, o, a, l) {
    var c;
    var s = 0;
    var u = null;
    var p = false;
    var f = false;
    var d = i !== -1;
    var h = -1;
    var m = tg(tb(e, 0)) && ty(tb(e, e.length - 1));
    if (t || a) {
      for (c = 0; c < e.length; s >= 65536 ? c += 2 : c++) {
        if (!td(s = tb(e, c))) {
          return 5;
        }
        m = m && tm(s, u, l);
        u = s;
      }
    } else {
      for (c = 0; c < e.length; s >= 65536 ? c += 2 : c++) {
        if ((s = tb(e, c)) === 10) {
          p = true;
          if (d) {
            f = f || c - h - 1 > i && e[h + 1] !== " ";
            h = c;
          }
        } else if (!td(s)) {
          return 5;
        }
        m = m && tm(s, u, l);
        u = s;
      }
      f = f || d && c - h - 1 > i && e[h + 1] !== " ";
    }
    if (p || f) {
      if (n > 9 && tv(e)) {
        return 5;
      } else if (a) {
        if (o === 2) {
          return 5;
        } else {
          return 2;
        }
      } else if (f) {
        return 4;
      } else {
        return 3;
      }
    } else if (!m || a || r(e)) {
      if (o === 2) {
        return 5;
      } else {
        return 2;
      }
    } else {
      return 1;
    }
  }
  function tW(e, t, n, i, o) {
    e.dump = function () {
      if (t.length === 0) {
        if (e.quotingType === 2) {
          return "\"\"";
        } else {
          return "''";
        }
      }
      if (!e.noCompatMode && (tr.indexOf(t) !== -1 || to.test(t))) {
        if (e.quotingType === 2) {
          return "\"" + t + "\"";
        } else {
          return "'" + t + "'";
        }
      }
      var a = e.indent * Math.max(1, n);
      var l = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a);
      var c = i || e.flowLevel > -1 && n >= e.flowLevel;
      function s(t) {
        return tp(e, t);
      }
      mermaidConfigUtils.setName(s, "testAmbiguity");
      switch (tA(t, c, e.indent, l, s, e.quotingType, e.forceQuotes && !i, o)) {
        case 1:
          return t;
        case 2:
          return "'" + t.replace(/'/g, "''") + "'";
        case 3:
          return "|" + tk(t, e.indent) + tw(ts(t, a));
        case 4:
          return ">" + tk(t, e.indent) + tw(ts(tC(t, l), a));
        case 5:
          return "\"" + tS(t) + "\"";
        default:
          throw new p("impossible error: invalid scalar style");
      }
    }();
  }
  function tk(e, t) {
    var n = tv(e) ? String(t) : "";
    var i = e[e.length - 1] === "\n";
    return n + (i && (e[e.length - 2] === "\n" || e === "\n") ? "+" : i ? "" : "-") + "\n";
  }
  function tw(e) {
    if (e[e.length - 1] === "\n") {
      return e.slice(0, -1);
    } else {
      return e;
    }
  }
  function tC(e, t) {
    var n;
    var i;
    var r;
    var o = /(\n+)([^\n]*)/g;
    n = (n = e.indexOf("\n")) !== -1 ? n : e.length;
    o.lastIndex = n;
    var a = tx(e.slice(0, n), t);
    var l = e[0] === "\n" || e[0] === " ";
    while (r = o.exec(e)) {
      var c = r[1];
      var s = r[2];
      i = s[0] === " ";
      a += c + (l || i || s === "" ? "" : "\n") + tx(s, t);
      l = i;
    }
    return a;
  }
  function tx(e, t) {
    if (e === "" || e[0] === " ") {
      return e;
    }
    var n;
    var i;
    var r = / [^ ]/g;
    var o = 0;
    var a = 0;
    var l = 0;
    var c = "";
    while (n = r.exec(e)) {
      if ((l = n.index) - o > t) {
        i = a > o ? a : l;
        c += "\n" + e.slice(o, i);
        o = i + 1;
      }
      a = l;
    }
    c += "\n";
    if (e.length - o > t && a > o) {
      c += e.slice(o, a) + "\n" + e.slice(a + 1);
    } else {
      c += e.slice(o);
    }
    return c.slice(1);
  }
  function tS(e) {
    var t;
    var n = "";
    var i = 0;
    var r = 0;
    for (; r < e.length; i >= 65536 ? r += 2 : r++) {
      if (!(t = ti[i = tb(e, r)]) && td(i)) {
        n += e[r];
        if (i >= 65536) {
          n += e[r + 1];
        }
      } else {
        n += t || tl(i);
      }
    }
    return n;
  }
  function tI(e, t, n) {
    var i;
    var r;
    var o;
    var a = "";
    var l = e.tag;
    i = 0;
    r = n.length;
    for (; i < r; i += 1) {
      o = n[i];
      if (e.replacer) {
        o = e.replacer.call(n, String(i), o);
      }
      if (tF(e, t, o, false, false) || o === undefined && tF(e, t, null, false, false)) {
        if (a !== "") {
          a += "," + (e.condenseFlow ? "" : " ");
        }
        a += e.dump;
      }
    }
    e.tag = l;
    e.dump = "[" + a + "]";
  }
  function tO(e, t, n, i) {
    var r;
    var o;
    var a;
    var l = "";
    var c = e.tag;
    r = 0;
    o = n.length;
    for (; r < o; r += 1) {
      a = n[r];
      if (e.replacer) {
        a = e.replacer.call(n, String(r), a);
      }
      if (tF(e, t + 1, a, true, true, false, true) || a === undefined && tF(e, t + 1, null, true, true, false, true)) {
        if (!i || l !== "") {
          l += tu(e, t);
        }
        if (e.dump && e.dump.charCodeAt(0) === 10) {
          l += "-";
        } else {
          l += "- ";
        }
        l += e.dump;
      }
    }
    e.tag = c;
    e.dump = l || "[]";
  }
  function tj(e, t, n) {
    var i;
    var r;
    var o;
    var a;
    var l;
    var c = "";
    var s = e.tag;
    var u = Object.keys(n);
    i = 0;
    r = u.length;
    for (; i < r; i += 1) {
      l = "";
      if (c !== "") {
        l += ", ";
      }
      if (e.condenseFlow) {
        l += "\"";
      }
      a = n[o = u[i]];
      if (e.replacer) {
        a = e.replacer.call(n, o, a);
      }
      if (tF(e, t, o, false, false)) {
        if (e.dump.length > 1024) {
          l += "? ";
        }
        l += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " ");
        if (tF(e, t, a, false, false)) {
          l += e.dump;
          c += l;
        }
      }
    }
    e.tag = s;
    e.dump = "{" + c + "}";
  }
  function tT(e, t, n, i) {
    var r;
    var o;
    var a;
    var l;
    var c;
    var s;
    var u = "";
    var f = e.tag;
    var d = Object.keys(n);
    if (e.sortKeys === true) {
      d.sort();
    } else if (typeof e.sortKeys == "function") {
      d.sort(e.sortKeys);
    } else if (e.sortKeys) {
      throw new p("sortKeys must be a boolean or a function");
    }
    r = 0;
    o = d.length;
    for (; r < o; r += 1) {
      s = "";
      if (!i || u !== "") {
        s += tu(e, t);
      }
      l = n[a = d[r]];
      if (e.replacer) {
        l = e.replacer.call(n, a, l);
      }
      if (tF(e, t + 1, a, true, true, true)) {
        if (c = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024) {
          if (e.dump && e.dump.charCodeAt(0) === 10) {
            s += "?";
          } else {
            s += "? ";
          }
        }
        s += e.dump;
        if (c) {
          s += tu(e, t);
        }
        if (tF(e, t + 1, l, true, c)) {
          if (e.dump && e.dump.charCodeAt(0) === 10) {
            s += ":";
          } else {
            s += ": ";
          }
          s += e.dump;
          u += s;
        }
      }
    }
    e.tag = f;
    e.dump = u || "{}";
  }
  function tN(e, t, n) {
    var i;
    var r;
    var o;
    var a;
    var l;
    var c;
    o = 0;
    a = (r = n ? e.explicitTypes : e.implicitTypes).length;
    for (; o < a; o += 1) {
      if (((l = r[o]).instanceOf || l.predicate) && (!l.instanceOf || typeof t == "object" && t instanceof l.instanceOf) && (!l.predicate || l.predicate(t))) {
        if (n) {
          if (l.multi && l.representName) {
            e.tag = l.representName(t);
          } else {
            e.tag = l.tag;
          }
        } else {
          e.tag = "?";
        }
        if (l.represent) {
          c = e.styleMap[l.tag] || l.defaultStyle;
          if (tt.call(l.represent) === "[object Function]") {
            i = l.represent(t, c);
          } else if (tn.call(l.represent, c)) {
            i = l.represent[c](t, c);
          } else {
            throw new p("!<" + l.tag + "> tag resolver accepts not \"" + c + "\" style");
          }
          e.dump = i;
        }
        return true;
      }
    }
    return false;
  }
  function tF(e, t, n, i, r, o, a) {
    e.tag = null;
    e.dump = n;
    if (!tN(e, n, false)) {
      tN(e, n, true);
    }
    var l = tt.call(e.dump);
    var c = i;
    i &&= e.flowLevel < 0 || e.flowLevel > t;
    var s;
    var u;
    var f;
    var d = l === "[object Object]" || l === "[object Array]";
    if (d) {
      f = (u = e.duplicates.indexOf(n)) !== -1;
    }
    if (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) {
      r = false;
    }
    if (f && e.usedDuplicates[u]) {
      e.dump = "*ref_" + u;
    } else {
      if (d && f && !e.usedDuplicates[u]) {
        e.usedDuplicates[u] = true;
      }
      if (l === "[object Object]") {
        if (i && Object.keys(e.dump).length !== 0) {
          tT(e, t, e.dump, r);
          if (f) {
            e.dump = "&ref_" + u + e.dump;
          }
        } else {
          tj(e, t, e.dump);
          if (f) {
            e.dump = "&ref_" + u + " " + e.dump;
          }
        }
      } else if (l === "[object Array]") {
        if (i && e.dump.length !== 0) {
          if (e.noArrayIndent && !a && t > 0) {
            tO(e, t - 1, e.dump, r);
          } else {
            tO(e, t, e.dump, r);
          }
          if (f) {
            e.dump = "&ref_" + u + e.dump;
          }
        } else {
          tI(e, t, e.dump);
          if (f) {
            e.dump = "&ref_" + u + " " + e.dump;
          }
        }
      } else if (l === "[object String]") {
        if (e.tag !== "?") {
          tW(e, e.dump, t, o, c);
        }
      } else {
        if (l === "[object Undefined]" || e.skipInvalid) {
          return false;
        }
        throw new p("unacceptable kind of an object to dump " + l);
      }
      if (e.tag !== null && e.tag !== "?") {
        s = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21");
        s = e.tag[0] === "!" ? "!" + s : s.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + s.slice(18) : "!<" + s + ">";
        e.dump = s + " " + e.dump;
      }
    }
    return true;
  }
  function tL(e, t) {
    var n;
    var i;
    var r = [];
    var o = [];
    t_(e, r, o);
    n = 0;
    i = o.length;
    for (; n < i; n += 1) {
      t.duplicates.push(r[o[n]]);
    }
    t.usedDuplicates = Array(i);
  }
  function t_(e, t, n) {
    var i;
    var r;
    var o;
    if (e !== null && typeof e == "object") {
      if ((r = t.indexOf(e)) !== -1) {
        if (n.indexOf(r) === -1) {
          n.push(r);
        }
      } else {
        t.push(e);
        if (Array.isArray(e)) {
          r = 0;
          o = e.length;
          for (; r < o; r += 1) {
            t_(e[r], t, n);
          }
        } else {
          r = 0;
          o = (i = Object.keys(e)).length;
          for (; r < o; r += 1) {
            t_(e[i[r]], t, n);
          }
        }
      }
    }
  }
  mermaidConfigUtils.setName(ta, "compileStyleMap");
  mermaidConfigUtils.setName(tl, "encodeHex");
  mermaidConfigUtils.setName(tc, "State");
  mermaidConfigUtils.setName(ts, "indentString");
  mermaidConfigUtils.setName(tu, "generateNextLine");
  mermaidConfigUtils.setName(tp, "testImplicitResolving");
  mermaidConfigUtils.setName(tf, "isWhitespace");
  mermaidConfigUtils.setName(td, "isPrintable");
  mermaidConfigUtils.setName(th, "isNsCharOrWhitespace");
  mermaidConfigUtils.setName(tm, "isPlainSafe");
  mermaidConfigUtils.setName(tg, "isPlainSafeFirst");
  mermaidConfigUtils.setName(ty, "isPlainSafeLast");
  mermaidConfigUtils.setName(tb, "codePointAt");
  mermaidConfigUtils.setName(tv, "needIndentIndicator");
  function tE(e, t) {
    return function () {
      throw Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
    };
  }
  mermaidConfigUtils.setName(tA, "chooseScalarStyle");
  mermaidConfigUtils.setName(tW, "writeScalar");
  mermaidConfigUtils.setName(tk, "blockHeader");
  mermaidConfigUtils.setName(tw, "dropEndingNewline");
  mermaidConfigUtils.setName(tC, "foldString");
  mermaidConfigUtils.setName(tx, "foldLine");
  mermaidConfigUtils.setName(tS, "escapeString");
  mermaidConfigUtils.setName(tI, "writeFlowSequence");
  mermaidConfigUtils.setName(tO, "writeBlockSequence");
  mermaidConfigUtils.setName(tj, "writeFlowMapping");
  mermaidConfigUtils.setName(tT, "writeBlockMapping");
  mermaidConfigUtils.setName(tN, "detectType");
  mermaidConfigUtils.setName(tF, "writeNode");
  mermaidConfigUtils.setName(tL, "getDuplicateReferences");
  mermaidConfigUtils.setName(t_, "inspectNode");
  mermaidConfigUtils.setName(function (e, t) {
    var n = new tc(t = t || {});
    if (!n.noRefs) {
      tL(e, n);
    }
    var i = e;
    if (n.replacer) {
      i = n.replacer.call({
        "": i
      }, "", i);
    }
    if (tF(n, 0, i, true, true)) {
      return n.dump + "\n";
    } else {
      return "";
    }
  }, "dump$1");
  mermaidConfigUtils.setName(tE, "renamed");
  var tM = K;
  var tY = te;
  tE("safeLoad", "load");
  tE("safeLoadAll", "loadAll");
  tE("safeDump", "dump");
  require.d(exports, {
    Schema: function () {
      return tM;
    },
    load: function () {
      return tY;
    }
  });
}
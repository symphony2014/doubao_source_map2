// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(559929) to 'tex-base-command-map'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'a' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'l' to 'mathmlNodeFactory'
// - Resolved require(88273) to 'mathml-node-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 60708
         */
module.exports = function (module, exports, require) {
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
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var n = T(require("tex-base-command-map") /*id: 559929*/);
  var o = T(require("mathjax-tex-parser") /*id: 658610*/);
  var i = T(require("message-format-util") /*id: 342117*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var u = T(require("mathjax-utilities") /*id: 142412*/);
  var s = T(require("mathml-abstract-node-util") /*id: 352636*/);
  var mathmlNodeFactory = require("mathml-node-factory") /*id: 88273*/;
  var c = {};
  var p = {
    "(": ")",
    "[": "]",
    "{": "}",
    "|": "|"
  };
  var h = /^(b|B)i(g{1,2})$/;
  c.Quantity = function (t, e, Q = "(", r = ")", T = false, n = "", l = "") {
    var c = !!T && t.GetStar();
    var f = t.GetNext();
    var d = t.i;
    var D = null;
    if (f === "\\") {
      t.i++;
      if (!(D = t.GetCS()).match(h)) {
        var L = t.create("node", "mrow");
        t.Push(u.default.fenced(t.configuration, Q, L, r));
        t.i = d;
        return;
      }
      f = t.GetNext();
    }
    var m = p[f];
    if (T && f !== "{") {
      throw new i.default("MissingArgFor", "Missing argument for %1", t.currentCS);
    }
    if (!m) {
      var L = t.create("node", "mrow");
      t.Push(u.default.fenced(t.configuration, Q, L, r));
      t.i = d;
      return;
    }
    if (n) {
      var y = t.create("token", "mi", {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
      }, n);
      if (l) {
        s.default.setAttribute(y, "mathvariant", l);
      }
      t.Push(t.itemFactory.create("fn", y));
    }
    if (f === "{") {
      var H = t.GetArgument(e);
      f = T ? Q : "\\{";
      m = T ? r : "\\}";
      H = c ? f + " " + H + " " + m : D ? "\\" + D + "l" + f + " " + H + " \\" + D + "r" + m : "\\left" + f + " " + H + " \\right" + m;
      t.Push(new o.default(H, t.stack.env, t.configuration).mml());
      return;
    }
    if (T) {
      f = Q;
      m = r;
    }
    t.i++;
    t.Push(t.itemFactory.create("auto open").setProperties({
      open: f,
      close: m,
      big: D
    }));
  };
  c.Eval = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetNext();
    if (r === "{") {
      var T = t.GetArgument(e);
      var n = "\\left. " + (Q ? "\\smash{" + T + "}" : T) + " \\vphantom{\\int}\\right|";
      t.string = t.string.slice(0, t.i) + n + t.string.slice(t.i);
      return;
    }
    if (r === "(" || r === "[") {
      t.i++;
      t.Push(t.itemFactory.create("auto open").setProperties({
        open: r,
        close: "|",
        smash: Q,
        right: "\\vphantom{\\int}"
      }));
      return;
    }
    throw new i.default("MissingArgFor", "Missing argument for %1", t.currentCS);
  };
  c.Commutator = function (t, e, Q = "[", r = "]") {
    var T = t.GetStar();
    var n = t.GetNext();
    var a = null;
    if (n === "\\") {
      t.i++;
      if (!(a = t.GetCS()).match(h)) {
        throw new i.default("MissingArgFor", "Missing argument for %1", t.currentCS);
      }
      n = t.GetNext();
    }
    if (n !== "{") {
      throw new i.default("MissingArgFor", "Missing argument for %1", t.currentCS);
    }
    var u = t.GetArgument(e) + "," + t.GetArgument(e);
    u = T ? Q + " " + u + " " + r : a ? "\\" + a + "l" + Q + " " + u + " \\" + a + "r" + r : "\\left" + Q + " " + u + " \\right" + r;
    t.Push(new o.default(u, t.stack.env, t.configuration).mml());
  };
  var f = [65, 90];
  var d = [97, 122];
  var D = [913, 937];
  var L = [945, 969];
  var m = [48, 57];
  function y(t, e) {
    return t >= e[0] && t <= e[1];
  }
  function H(t, e, Q, r) {
    var T = t.configuration.parser;
    var n = mathmlNodeFactory.NodeFactory.createToken(t, e, Q, r);
    var o = r.codePointAt(0);
    if (r.length === 1 && !T.stack.env.font && T.stack.env.vectorFont && (y(o, f) || y(o, d) || y(o, D) || y(o, m) || y(o, L) && T.stack.env.vectorStar || s.default.getAttribute(n, "accent"))) {
      s.default.setAttribute(n, "mathvariant", T.stack.env.vectorFont);
    }
    return n;
  }
  c.VectorBold = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    var T = t.configuration.nodeFactory.get("token");
    var n = t.stack.env.font;
    delete t.stack.env.font;
    t.configuration.nodeFactory.set("token", H);
    t.stack.env.vectorFont = Q ? "bold-italic" : "bold";
    t.stack.env.vectorStar = Q;
    var i = new o.default(r, t.stack.env, t.configuration).mml();
    if (n) {
      t.stack.env.font = n;
    }
    delete t.stack.env.vectorFont;
    delete t.stack.env.vectorStar;
    t.configuration.nodeFactory.set("token", T);
    t.Push(i);
  };
  c.StarMacro = function (t, e, Q) {
    var r = [];
    var T = 3;
    for (; T < arguments.length; T++) {
      r[T - 3] = arguments[T];
    }
    var n = t.GetStar();
    var o = [];
    if (Q) {
      for (var i = o.length; i < Q; i++) {
        o.push(t.GetArgument(e));
      }
    }
    var a = r.join(n ? "*" : "");
    a = u.default.substituteArgs(t, o, a);
    t.string = u.default.addArgs(t, a, t.string.slice(t.i));
    t.i = 0;
    u.default.checkMaxMacros(t);
  };
  function v(t, e, Q, r, T) {
    var n = new o.default(r, t.stack.env, t.configuration).mml();
    t.Push(t.itemFactory.create(e, n));
    var i = t.GetNext();
    var a = p[i];
    if (a) {
      var u = "";
      var s = "";
      var l = "";
      var c = T.indexOf(i) !== -1;
      if (i === "{") {
        var h = (c ? "\\left\\{" : "") + " " + (l = t.GetArgument(Q)) + " " + (c ? "\\right\\}" : "");
        t.string = h + t.string.slice(t.i);
        t.i = 0;
        return;
      }
      if (c) {
        t.i++;
        t.Push(t.itemFactory.create("auto open").setProperties({
          open: i,
          close: a
        }));
      }
    }
  }
  function g(t, e, Q) {
    var T = r(t, 3);
    var n = T[0];
    var o = T[1];
    var i = T[2];
    if (e && Q) {
      return `\\left\\langle{${n}}\\middle\\vert{${o}}\\middle\\vert{${i}}\\right\\rangle`;
    } else if (e) {
      return `\\langle{${n}}\\vert{${o}}\\vert{${i}}\\rangle`;
    } else {
      return `\\left\\langle{${n}}\\right\\vert{${o}}\\left\\vert{${i}}\\right\\rangle`;
    }
  }
  c.OperatorApplication = function (t, e, Q) {
    var r = [];
    var T = 3;
    for (; T < arguments.length; T++) {
      r[T - 3] = arguments[T];
    }
    v(t, "fn", e, Q, r);
  };
  c.VectorOperator = function (t, e, Q) {
    var r = [];
    var T = 3;
    for (; T < arguments.length; T++) {
      r[T - 3] = arguments[T];
    }
    v(t, "mml", e, Q, r);
  };
  c.Expression = function (t, e, Q = true, r = "") {
    r = r || e.slice(1);
    var T = Q ? t.GetBrackets(e) : null;
    var n = t.create("token", "mi", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }, r);
    if (T) {
      var i = new o.default(T, t.stack.env, t.configuration).mml();
      n = t.create("node", "msup", [n, i]);
    }
    t.Push(t.itemFactory.create("fn", n));
    if (t.GetNext() === "(") {
      t.i++;
      t.Push(t.itemFactory.create("auto open").setProperties({
        open: "(",
        close: ")"
      }));
    }
  };
  c.Qqtext = function (t, e, Q) {
    var r = t.GetStar();
    var T = Q || t.GetArgument(e);
    t.string = t.string.slice(0, t.i) + ((r ? "" : "\\quad") + "\\text{") + T + "}\\quad " + t.string.slice(t.i);
  };
  c.Differential = function (t, e, Q) {
    var r = t.GetBrackets(e);
    var T = t.GetNext() === "(";
    var n = t.GetNext() === "{";
    var i = Q + (r != null ? "^{" + r + "}" : " ");
    if (!T && !n) {
      i += t.GetArgument(e, true) || "";
      var u = new o.default(i, t.stack.env, t.configuration).mml();
      t.Push(u);
      return;
    }
    if (n) {
      i += t.GetArgument(e);
      var u = new o.default(i, t.stack.env, t.configuration).mml();
      t.Push(t.create("node", "TeXAtom", [u], {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
      }));
      return;
    }
    t.Push(new o.default(i, t.stack.env, t.configuration).mml());
    t.i++;
    t.Push(t.itemFactory.create("auto open").setProperties({
      open: "(",
      close: ")"
    }));
  };
  c.Derivative = function (t, e, Q, r) {
    var T = t.GetStar();
    var n = t.GetBrackets(e);
    var i = 1;
    var a = [];
    for (a.push(t.GetArgument(e)); t.GetNext() === "{" && i < Q;) {
      a.push(t.GetArgument(e));
      i++;
    }
    var u = false;
    var s = " ";
    var l = " ";
    if (Q > 2 && a.length > 2) {
      s = "^{" + (a.length - 1) + "}";
      u = true;
    } else if (n != null) {
      if (Q > 2 && a.length > 1) {
        u = true;
      }
      l = s = "^{" + n + "}";
    }
    var c = a.length > 1 ? a[0] : "";
    var p = a.length > 1 ? a[1] : a[0];
    var h = "";
    var f = 2;
    var d = undefined;
    for (; d = a[f]; f++) {
      h += r + " " + d;
    }
    var D = (T ? "\\flatfrac" : "\\frac") + "{" + r + s + c + "}{" + r + " " + p + l + " " + h + "}";
    t.Push(new o.default(D, t.stack.env, t.configuration).mml());
    if (t.GetNext() === "(") {
      t.i++;
      t.Push(t.itemFactory.create("auto open").setProperties({
        open: "(",
        close: ")",
        ignore: u
      }));
    }
  };
  c.Bra = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    var T = "";
    var n = false;
    var i = false;
    if (t.GetNext() === "\\") {
      var a = t.i;
      t.i++;
      var u = t.GetCS();
      var s = t.lookup("macro", u);
      if (s && s.symbol === "ket") {
        n = true;
        a = t.i;
        i = t.GetStar();
        if (t.GetNext() === "{") {
          T = t.GetArgument(u, true);
        } else {
          t.i = a;
          i = false;
        }
      } else {
        t.i = a;
      }
    }
    var l = "";
    l = n ? Q || i ? `\\langle{${r}}\\vert{${T}}\\rangle` : `\\left\\langle{${r}}\\middle\\vert{${T}}\\right\\rangle` : Q || i ? `\\langle{${r}}\\vert` : `\\left\\langle{${r}}\\right\\vert{${T}}`;
    t.Push(new o.default(l, t.stack.env, t.configuration).mml());
  };
  c.Ket = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    t.Push(new o.default(Q ? `\\vert{${r}}\\rangle` : `\\left\\vert{${r}}\\right\\rangle`, t.stack.env, t.configuration).mml());
  };
  c.BraKet = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    var T = null;
    if (t.GetNext() === "{") {
      T = t.GetArgument(e, true);
    }
    var n = "";
    n = T == null ? Q ? `\\langle{${r}}\\vert{${r}}\\rangle` : `\\left\\langle{${r}}\\middle\\vert{${r}}\\right\\rangle` : Q ? `\\langle{${r}}\\vert{${T}}\\rangle` : `\\left\\langle{${r}}\\middle\\vert{${T}}\\right\\rangle`;
    t.Push(new o.default(n, t.stack.env, t.configuration).mml());
  };
  c.KetBra = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    var T = null;
    if (t.GetNext() === "{") {
      T = t.GetArgument(e, true);
    }
    var n = "";
    n = T == null ? Q ? `\\vert{${r}}\\rangle\\!\\langle{${r}}\\vert` : `\\left\\vert{${r}}\\middle\\rangle\\!\\middle\\langle{${r}}\\right\\vert` : Q ? `\\vert{${r}}\\rangle\\!\\langle{${T}}\\vert` : `\\left\\vert{${r}}\\middle\\rangle\\!\\middle\\langle{${T}}\\right\\vert`;
    t.Push(new o.default(n, t.stack.env, t.configuration).mml());
  };
  c.Expectation = function (t, e) {
    var Q = t.GetStar();
    var r = Q && t.GetStar();
    var T = t.GetArgument(e);
    var n = null;
    if (t.GetNext() === "{") {
      n = t.GetArgument(e, true);
    }
    var i = T && n ? g([n, T, n], Q, r) : Q ? `\\langle {${T}} \\rangle` : `\\left\\langle {${T}} \\right\\rangle`;
    t.Push(new o.default(i, t.stack.env, t.configuration).mml());
  };
  c.MatrixElement = function (t, e) {
    var Q = t.GetStar();
    var r = Q && t.GetStar();
    var T = g([t.GetArgument(e), t.GetArgument(e), t.GetArgument(e)], Q, r);
    t.Push(new o.default(T, t.stack.env, t.configuration).mml());
  };
  c.MatrixQuantity = function (t, e, Q) {
    var r = t.GetStar();
    var T = t.GetNext();
    var n = Q ? "smallmatrix" : "array";
    var i = "";
    var a = "";
    var u = "";
    switch (T) {
      case "{":
        i = t.GetArgument(e);
        break;
      case "(":
        t.i++;
        a = r ? "\\lgroup" : "(";
        u = r ? "\\rgroup" : ")";
        i = t.GetUpTo(e, ")");
        break;
      case "[":
        t.i++;
        a = "[";
        u = "]";
        i = t.GetUpTo(e, "]");
        break;
      case "|":
        t.i++;
        a = "|";
        u = "|";
        i = t.GetUpTo(e, "|");
        break;
      default:
        a = "(";
        u = ")";
    }
    var s = (a ? "\\left" : "") + a + "\\begin{" + n + "}{} " + i + "\\end{" + n + "}" + (a ? "\\right" : "") + u;
    t.Push(new o.default(s, t.stack.env, t.configuration).mml());
  };
  c.IdentityMatrix = function (t, e) {
    var Q = parseInt(t.GetArgument(e), 10);
    if (isNaN(Q)) {
      throw new i.default("InvalidNumber", "Invalid number");
    }
    if (Q <= 1) {
      t.string = "1" + t.string.slice(t.i);
      t.i = 0;
      return;
    }
    var r = Array(Q).fill("0");
    var T = [];
    var n = 0;
    for (; n < Q; n++) {
      var o = r.slice();
      o[n] = "1";
      T.push(o.join(" & "));
    }
    t.string = T.join("\\\\ ") + t.string.slice(t.i);
    t.i = 0;
  };
  c.XMatrix = function (t, e) {
    var Q = t.GetStar();
    var r = t.GetArgument(e);
    var T = t.GetArgument(e);
    var n = t.GetArgument(e);
    var o = parseInt(T, 10);
    var a = parseInt(n, 10);
    if (isNaN(o) || isNaN(a) || a.toString() !== n || o.toString() !== T) {
      throw new i.default("InvalidNumber", "Invalid number");
    }
    o = o < 1 ? 1 : o;
    a = a < 1 ? 1 : a;
    if (!Q) {
      var u = Array(a).fill(r).join(" & ");
      var s = Array(o).fill(u).join("\\\\ ");
      t.string = s + t.string.slice(t.i);
      t.i = 0;
      return;
    }
    var l = "";
    if (o === 1 && a === 1) {
      l = r;
    } else if (o === 1) {
      var u = [];
      var c = 1;
      for (; c <= a; c++) {
        u.push(`${r}_{${c}}`);
      }
      l = u.join(" & ");
    } else if (a === 1) {
      var u = [];
      var c = 1;
      for (; c <= o; c++) {
        u.push(`${r}_{${c}}`);
      }
      l = u.join("\\\\ ");
    } else {
      var p = [];
      var c = 1;
      for (; c <= o; c++) {
        var u = [];
        var h = 1;
        for (; h <= a; h++) {
          u.push(`${r}_{{${c}}{${h}}}`);
        }
        p.push(u.join(" & "));
      }
      l = p.join("\\\\ ");
    }
    t.string = l + t.string.slice(t.i);
    t.i = 0;
  };
  c.PauliMatrix = function (t, e) {
    var Q = t.GetArgument(e);
    var r = Q.slice(1);
    switch (Q[0]) {
      case "0":
        r += " 1 & 0\\\\ 0 & 1";
        break;
      case "1":
      case "x":
        r += " 0 & 1\\\\ 1 & 0";
        break;
      case "2":
      case "y":
        r += " 0 & -i\\\\ i & 0";
        break;
      case "3":
      case "z":
        r += " 1 & 0\\\\ 0 & -1";
    }
    t.string = r + t.string.slice(t.i);
    t.i = 0;
  };
  c.DiagonalMatrix = function (t, e, Q) {
    if (t.GetNext() === "{") {
      var r = t.i;
      t.GetArgument(e);
      var T = t.i;
      t.i = r + 1;
      var n = [];
      var o = "";
      var i = t.i;
      while (i < T) {
        try {
          o = t.GetUpTo(e, ",");
        } catch (e) {
          t.i = T;
          n.push(t.string.slice(i, T - 1));
          break;
        }
        if (t.i >= T) {
          n.push(t.string.slice(i, T));
          break;
        }
        i = t.i;
        n.push(o);
      }
      t.string = function (t, e) {
        var Q = t.length;
        var r = [];
        var T = 0;
        for (; T < Q; T++) {
          r.push(Array(e ? Q - T : T + 1).join("&") + "\\mqty{" + t[T] + "}");
        }
        return r.join("\\\\ ");
      }(n, Q) + t.string.slice(T);
      t.i = 0;
    }
  };
  c.AutoClose = function (t, e, Q) {
    var r = t.create("token", "mo", {
      stretchy: false
    }, e);
    var T = t.itemFactory.create("mml", r).setProperties({
      autoclose: e
    });
    t.Push(T);
  };
  c.Vnabla = function (t, e) {
    var Q = t.options.physics.arrowdel ? "\\vec{\\gradientnabla}" : "{\\gradientnabla}";
    return t.Push(new o.default(Q, t.stack.env, t.configuration).mml());
  };
  c.DiffD = function (t, e) {
    var Q = t.options.physics.italicdiff ? "d" : "{\\rm d}";
    return t.Push(new o.default(Q, t.stack.env, t.configuration).mml());
  };
  c.Macro = n.default.Macro;
  c.NamedFn = n.default.NamedFn;
  c.Array = n.default.Array;
  exports.default = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
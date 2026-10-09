// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'u' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'c' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// - Resolved require(559929) to 'tex-base-command-map'
// - Renamed variable 'h' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 528581
         */
module.exports = function (module, exports, require) {
  var r = this && this.__assign || function () {
    return (r = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  var T = this && this.__read || function (t, e) {
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
  var n = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.NEW_OPS = exports.AmsMethods = undefined;
  var o = n(require("mathjax-utilities") /*id: 142412*/);
  var i = n(require("tex-parser-handlers") /*id: 921652*/);
  var a = n(require("mathml-abstract-node-util") /*id: 352636*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var s = n(require("mathjax-tex-parser") /*id: 658610*/);
  var l = n(require("message-format-util") /*id: 342117*/);
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  var p = n(require("tex-base-command-map") /*id: 559929*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  function f(t) {
    if (!t || t.isInferred && t.childNodes.length === 0) {
      return [null, null];
    }
    if (t.isKind("msubsup") && d(t)) {
      return [t, null];
    }
    var e = a.default.getChildAt(t, 0);
    if (t.isInferred && e && d(e)) {
      t.childNodes.splice(0, 1);
      return [e, t];
    } else {
      return [null, t];
    }
  }
  function d(t) {
    var e = t.childNodes[0];
    return e && e.isKind("mi") && e.getText() === "";
  }
  exports.AmsMethods = {};
  exports.AmsMethods.AmsEqnArray = function (t, e, Q, r, T, n, i) {
    var a = t.GetBrackets("\\begin{" + e.getName() + "}");
    var u = p.default.EqnArray(t, e, Q, r, T, n, i);
    return o.default.setArrayAlign(u, a);
  };
  exports.AmsMethods.AlignAt = function (t, Q, r, T) {
    var n;
    var i;
    var a = Q.getName();
    var u = "";
    var s = [];
    if (!T) {
      i = t.GetBrackets("\\begin{" + a + "}");
    }
    if ((n = t.GetArgument("\\begin{" + a + "}")).match(/[^0-9]/)) {
      throw new l.default("PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + a + "}");
    }
    for (var c = parseInt(n, 10); c > 0;) {
      u += "rl";
      s.push("0em 0em");
      c--;
    }
    var p = s.join(" ");
    if (T) {
      return exports.AmsMethods.EqnArray(t, Q, r, T, u, p);
    }
    var h = exports.AmsMethods.EqnArray(t, Q, r, T, u, p);
    return o.default.setArrayAlign(h, i);
  };
  exports.AmsMethods.Multline = function (t, e, Q) {
    t.Push(e);
    o.default.checkEqnEnv(t);
    var r = t.itemFactory.create("multline", Q, t.stack);
    r.arraydef = {
      displaystyle: true,
      rowspacing: ".5em",
      columnspacing: "100%",
      width: t.options.ams.multlineWidth,
      side: t.options.tagSide,
      minlabelspacing: t.options.tagIndent,
      framespacing: t.options.ams.multlineIndent + " 0",
      frame: "",
      "data-width-includes-label": true
    };
    return r;
  };
  exports.AmsMethods.XalignAt = function (t, Q, r, T) {
    var n = t.GetArgument("\\begin{" + Q.getName() + "}");
    if (n.match(/[^0-9]/)) {
      throw new l.default("PositiveIntegerArg", "Argument to %1 must me a positive integer", "\\begin{" + Q.getName() + "}");
    }
    var o = exports.AmsMethods.FlalignArray(t, Q, r, T, false, T ? "crl" : "rlc", T ? "fit auto auto" : "auto auto fit", true);
    o.setProperty("xalignat", parseInt(n) * 2);
    return o;
  };
  exports.AmsMethods.FlalignArray = function (t, e, Q, r, T, n, i, a = false) {
    t.Push(e);
    o.default.checkEqnEnv(t);
    n = n.split("").join(" ").replace(/r/g, "right").replace(/l/g, "left").replace(/c/g, "center");
    var u = t.itemFactory.create("flalign", e.getName(), Q, r, T, t.stack);
    u.arraydef = {
      width: "100%",
      displaystyle: true,
      columnalign: n,
      columnspacing: "0em",
      columnwidth: i,
      rowspacing: "3pt",
      side: t.options.tagSide,
      minlabelspacing: a ? "0" : t.options.tagIndent,
      "data-width-includes-label": true
    };
    u.setProperty("zeroWidthLabel", a);
    return u;
  };
  exports.NEW_OPS = "ams-declare-ops";
  exports.AmsMethods.HandleDeclareOp = function (t, Q) {
    var r = t.GetStar() ? "*" : "";
    var T = o.default.trimSpaces(t.GetArgument(Q));
    if (T.charAt(0) === "\\") {
      T = T.substr(1);
    }
    var n = t.GetArgument(Q);
    t.configuration.handlers.retrieve(exports.NEW_OPS).add(T, new symbolMacroClasses.Macro(T, exports.AmsMethods.Macro, [`\\operatorname${r}{${n}}`]));
  };
  exports.AmsMethods.HandleOperatorName = function (t, e) {
    var Q = t.GetStar();
    var T = o.default.trimSpaces(t.GetArgument(e));
    var n = new s.default(T, r(r({}, t.stack.env), {
      font: texConstantDefinitions.TexConstant.Variant.NORMAL,
      multiLetterIdentifiers: /^[-*a-z]+/i,
      operatorLetters: true
    }), t.configuration).mml();
    if (!n.isKind("mi")) {
      n = t.create("node", "TeXAtom", [n]);
    }
    a.default.setProperties(n, {
      movesupsub: Q,
      movablelimits: true,
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    });
    if (!Q) {
      var i = t.GetNext();
      var l = t.i;
      if (i === "\\" && ++t.i && t.GetCS() !== "limits") {
        t.i = l;
      }
    }
    t.Push(n);
  };
  exports.AmsMethods.SideSet = function (t, e) {
    var Q = T(f(t.ParseArg(e)), 2);
    var r = Q[0];
    var n = Q[1];
    var i = T(f(t.ParseArg(e)), 2);
    var u = i[0];
    var s = i[1];
    var l = t.ParseArg(e);
    var c = l;
    if (r) {
      if (n) {
        r.replaceChild(t.create("node", "mphantom", [t.create("node", "mpadded", [o.default.copyNode(l, t)], {
          width: 0
        })]), a.default.getChildAt(r, 0));
      } else {
        c = t.create("node", "mmultiscripts", [l]);
        if (u) {
          a.default.appendChildren(c, [a.default.getChildAt(u, 1) || t.create("node", "none"), a.default.getChildAt(u, 2) || t.create("node", "none")]);
        }
        a.default.setProperty(c, "scriptalign", "left");
        a.default.appendChildren(c, [t.create("node", "mprescripts"), a.default.getChildAt(r, 1) || t.create("node", "none"), a.default.getChildAt(r, 2) || t.create("node", "none")]);
      }
    }
    if (u && c === l) {
      u.replaceChild(l, a.default.getChildAt(u, 0));
      c = u;
    }
    var p = t.create("node", "TeXAtom", [], {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
      movesupsub: true,
      movablelimits: true
    });
    if (n) {
      if (r) {
        p.appendChild(r);
      }
      p.appendChild(n);
    }
    p.appendChild(c);
    if (s) {
      p.appendChild(s);
    }
    t.Push(p);
  };
  exports.AmsMethods.operatorLetter = function (t, e) {
    return !!t.stack.env.operatorLetters && i.default.variable(t, e);
  };
  exports.AmsMethods.MultiIntegral = function (t, e, Q) {
    var r = t.GetNext();
    if (r === "\\") {
      var T = t.i;
      r = t.GetArgument(e);
      t.i = T;
      if (r === "\\limits") {
        Q = e === "\\idotsint" ? "\\!\\!\\mathop{\\,\\," + Q + "}" : "\\!\\!\\!\\mathop{\\,\\,\\," + Q + "}";
      }
    }
    t.string = Q + " " + t.string.slice(t.i);
    t.i = 0;
  };
  exports.AmsMethods.xArrow = function (t, e, Q, r, T) {
    var n = {
      width: "+" + o.default.Em((r + T) / 18),
      lspace: o.default.Em(r / 18)
    };
    var i = t.GetBrackets(e);
    var u = t.ParseArg(e);
    var l = t.create("node", "mspace", [], {
      depth: ".25em"
    });
    var c = t.create("token", "mo", {
      stretchy: true,
      texClass: mathmlAbstractNodeClasses.TEXCLASS.REL
    }, String.fromCodePoint(Q));
    c = t.create("node", "mstyle", [c], {
      scriptlevel: 0
    });
    var p = t.create("node", "munderover", [c]);
    var f = t.create("node", "mpadded", [u, l], n);
    a.default.setAttribute(f, "voffset", "-.2em");
    a.default.setAttribute(f, "height", "-.2em");
    a.default.setChild(p, p.over, f);
    if (i) {
      var d = new s.default(i, t.stack.env, t.configuration).mml();
      var D = t.create("node", "mspace", [], {
        height: ".75em"
      });
      f = t.create("node", "mpadded", [d, D], n);
      a.default.setAttribute(f, "voffset", ".15em");
      a.default.setAttribute(f, "depth", "-.15em");
      a.default.setChild(p, p.under, f);
    }
    a.default.setProperty(p, "subsupOK", true);
    t.Push(p);
  };
  exports.AmsMethods.HandleShove = function (t, e, Q) {
    var r = t.stack.Top();
    if (r.kind !== "multline") {
      throw new l.default("CommandOnlyAllowedInEnv", "%1 only allowed in %2 environment", t.currentCS, "multline");
    }
    if (r.Size()) {
      throw new l.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", t.currentCS);
    }
    r.setProperty("shove", Q);
  };
  exports.AmsMethods.CFrac = function (t, e) {
    var Q = o.default.trimSpaces(t.GetBrackets(e, ""));
    var r = t.GetArgument(e);
    var T = t.GetArgument(e);
    var n = {
      l: texConstantDefinitions.TexConstant.Align.LEFT,
      r: texConstantDefinitions.TexConstant.Align.RIGHT,
      "": ""
    };
    var i = new s.default("\\strut\\textstyle{" + r + "}", t.stack.env, t.configuration).mml();
    var c = new s.default("\\strut\\textstyle{" + T + "}", t.stack.env, t.configuration).mml();
    var p = t.create("node", "mfrac", [i, c]);
    if ((Q = n[Q]) == null) {
      throw new l.default("IllegalAlign", "Illegal alignment specified in %1", t.currentCS);
    }
    if (Q) {
      a.default.setProperties(p, {
        numalign: Q,
        denomalign: Q
      });
    }
    t.Push(p);
  };
  exports.AmsMethods.Genfrac = function (t, e, Q, r, T, n) {
    if (Q == null) {
      Q = t.GetDelimiterArg(e);
    }
    if (r == null) {
      r = t.GetDelimiterArg(e);
    }
    if (T == null) {
      T = t.GetArgument(e);
    }
    if (n == null) {
      n = o.default.trimSpaces(t.GetArgument(e));
    }
    var i = t.ParseArg(e);
    var u = t.ParseArg(e);
    var s = t.create("node", "mfrac", [i, u]);
    if (T !== "") {
      a.default.setAttribute(s, "linethickness", T);
    }
    if (Q || r) {
      a.default.setProperty(s, "withDelims", true);
      s = o.default.fixedFence(t.configuration, Q, s, r);
    }
    if (n !== "") {
      var c = parseInt(n, 10);
      var p = ["D", "T", "S", "SS"][c];
      if (p == null) {
        throw new l.default("BadMathStyleFor", "Bad math style for %1", t.currentCS);
      }
      s = t.create("node", "mstyle", [s]);
      if (p === "D") {
        a.default.setProperties(s, {
          displaystyle: true,
          scriptlevel: 0
        });
      } else {
        a.default.setProperties(s, {
          displaystyle: false,
          scriptlevel: c - 1
        });
      }
    }
    t.Push(s);
  };
  exports.AmsMethods.HandleTag = function (t, e) {
    if (!t.tags.currentTag.taggable && t.tags.env) {
      throw new l.default("CommandNotAllowedInEnv", "%1 not allowed in %2 environment", t.currentCS, t.tags.env);
    }
    if (t.tags.currentTag.tag) {
      throw new l.default("MultipleCommand", "Multiple %1", t.currentCS);
    }
    var Q = t.GetStar();
    var r = o.default.trimSpaces(t.GetArgument(e));
    t.tags.tag(r, Q);
  };
  exports.AmsMethods.HandleNoTag = p.default.HandleNoTag;
  exports.AmsMethods.HandleRef = p.default.HandleRef;
  exports.AmsMethods.Macro = p.default.Macro;
  exports.AmsMethods.Accent = p.default.Accent;
  exports.AmsMethods.Tilde = p.default.Tilde;
  exports.AmsMethods.Array = p.default.Array;
  exports.AmsMethods.Spacer = p.default.Spacer;
  exports.AmsMethods.NamedOp = p.default.NamedOp;
  exports.AmsMethods.EqnArray = p.default.EqnArray;
  exports.AmsMethods.Equation = p.default.Equation;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
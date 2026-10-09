// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Renamed variable 'p' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'f' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'd' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// - Renamed variable 'D' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// - Renamed variable 'L' to 'mathjaxEntitiesUtil'
// - Resolved require(22642) to 'mathjax-entities-util'
// - Renamed variable 'm' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Updated imported property 'em' to 'formatEm' (module 839822)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 559929
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
  var T = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var n = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var o = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          T(e, t, Q);
        }
      }
    }
    n(e, t);
    return e;
  };
  var i = this && this.__read || function (t, e) {
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
  var a = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var u = o(require("mathjax-eqnarray-tags") /*id: 962632*/);
  var s = a(require("mathml-abstract-node-util") /*id: 352636*/);
  var l = a(require("message-format-util") /*id: 342117*/);
  var c = a(require("mathjax-tex-parser") /*id: 658610*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var h = a(require("mathjax-utilities") /*id: 142412*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  var mathjaxEntitiesUtil = require("mathjax-entities-util") /*id: 22642*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var y = {};
  var H = 1.2 / 0.85;
  var v = {
    fontfamily: 1,
    fontsize: 1,
    fontweight: 1,
    fontstyle: 1,
    color: 1,
    background: 1,
    id: 1,
    class: 1,
    href: 1,
    style: 1
  };
  function g(t, e) {
    var Q = t.stack.env;
    var r = Q.inRoot;
    Q.inRoot = true;
    var T = new c.default(e, Q, t.configuration);
    var n = T.mml();
    var o = T.stack.global;
    if (o.leftRoot || o.upRoot) {
      var i = {};
      if (o.leftRoot) {
        i.width = o.leftRoot;
      }
      if (o.upRoot) {
        i.voffset = o.upRoot;
        i.height = o.upRoot;
      }
      n = t.create("node", "mpadded", [n], i);
    }
    Q.inRoot = r;
    return n;
  }
  y.Open = function (t, e) {
    t.Push(t.itemFactory.create("open"));
  };
  y.Close = function (t, e) {
    t.Push(t.itemFactory.create("close"));
  };
  y.Tilde = function (t, e) {
    t.Push(t.create("token", "mtext", {}, mathjaxEntitiesUtil.entities.nbsp));
  };
  y.Space = function (t, e) {};
  y.Superscript = function (t, e) {
    if (t.GetNext().match(/\d/)) {
      t.string = t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1);
    }
    var Q;
    var r;
    var T;
    var n = t.stack.Top();
    if (n.isKind("prime")) {
      T = (Q = i(n.Peek(2), 2))[0];
      r = Q[1];
      t.stack.Pop();
    } else if (!(T = t.stack.Prev())) {
      T = t.create("token", "mi", {}, "");
    }
    var o = s.default.getProperty(T, "movesupsub");
    var a = s.default.isType(T, "msubsup") ? T.sup : T.over;
    if (s.default.isType(T, "msubsup") && !s.default.isType(T, "msup") && s.default.getChildAt(T, T.sup) || s.default.isType(T, "munderover") && !s.default.isType(T, "mover") && s.default.getChildAt(T, T.over) && !s.default.getProperty(T, "subsupOK")) {
      throw new l.default("DoubleExponent", "Double exponent: use braces to clarify");
    }
    if (!s.default.isType(T, "msubsup") || s.default.isType(T, "msup")) {
      if (o) {
        if (!s.default.isType(T, "munderover") || s.default.isType(T, "mover") || s.default.getChildAt(T, T.over)) {
          T = t.create("node", "munderover", [T], {
            movesupsub: true
          });
        }
        a = T.over;
      } else {
        a = (T = t.create("node", "msubsup", [T])).sup;
      }
    }
    t.Push(t.itemFactory.create("subsup", T).setProperties({
      position: a,
      primes: r,
      movesupsub: o
    }));
  };
  y.Subscript = function (t, e) {
    if (t.GetNext().match(/\d/)) {
      t.string = t.string.substr(0, t.i + 1) + " " + t.string.substr(t.i + 1);
    }
    var Q;
    var r;
    var T;
    var n = t.stack.Top();
    if (n.isKind("prime")) {
      T = (Q = i(n.Peek(2), 2))[0];
      r = Q[1];
      t.stack.Pop();
    } else if (!(T = t.stack.Prev())) {
      T = t.create("token", "mi", {}, "");
    }
    var o = s.default.getProperty(T, "movesupsub");
    var a = s.default.isType(T, "msubsup") ? T.sub : T.under;
    if (s.default.isType(T, "msubsup") && !s.default.isType(T, "msup") && s.default.getChildAt(T, T.sub) || s.default.isType(T, "munderover") && !s.default.isType(T, "mover") && s.default.getChildAt(T, T.under) && !s.default.getProperty(T, "subsupOK")) {
      throw new l.default("DoubleSubscripts", "Double subscripts: use braces to clarify");
    }
    if (!s.default.isType(T, "msubsup") || s.default.isType(T, "msup")) {
      if (o) {
        if (!s.default.isType(T, "munderover") || s.default.isType(T, "mover") || s.default.getChildAt(T, T.under)) {
          T = t.create("node", "munderover", [T], {
            movesupsub: true
          });
        }
        a = T.under;
      } else {
        a = (T = t.create("node", "msubsup", [T])).sub;
      }
    }
    t.Push(t.itemFactory.create("subsup", T).setProperties({
      position: a,
      primes: r,
      movesupsub: o
    }));
  };
  y.Prime = function (t, e) {
    var Q = t.stack.Prev();
    Q ||= t.create("node", "mi");
    if (s.default.isType(Q, "msubsup") && !s.default.isType(Q, "msup") && s.default.getChildAt(Q, Q.sup)) {
      throw new l.default("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify");
    }
    var r = "";
    t.i--;
    do {
      r += mathjaxEntitiesUtil.entities.prime;
      t.i++;
      e = t.GetNext();
    } while (e === "'" || e === mathjaxEntitiesUtil.entities.rsquo);
    r = ["", "′", "″", "‴", "⁗"][r.length] || r;
    var T = t.create("token", "mo", {
      variantForm: true
    }, r);
    t.Push(t.itemFactory.create("prime", Q, T));
  };
  y.Comment = function (t, e) {
    while (t.i < t.string.length && t.string.charAt(t.i) !== "\n") {
      t.i++;
    }
  };
  y.Hash = function (t, e) {
    throw new l.default("CantUseHash1", "You can't use 'macro parameter character #' in math mode");
  };
  y.MathFont = function (t, e, Q) {
    var T = t.GetArgument(e);
    var n = new c.default(T, r(r({}, t.stack.env), {
      font: Q,
      multiLetterIdentifiers: /^[a-zA-Z]+/,
      noAutoOP: true
    }), t.configuration).mml();
    t.Push(t.create("node", "TeXAtom", [n]));
  };
  y.SetFont = function (t, e, Q) {
    t.stack.env.font = Q;
  };
  y.SetStyle = function (t, e, Q, r, T) {
    t.stack.env.style = Q;
    t.stack.env.level = T;
    t.Push(t.itemFactory.create("style").setProperty("styles", {
      displaystyle: r,
      scriptlevel: T
    }));
  };
  y.SetSize = function (t, e, Q) {
    t.stack.env.size = Q;
    t.Push(t.itemFactory.create("style").setProperty("styles", {
      mathsize: cssUnitFormatters.formatEm(Q)
    }));
  };
  y.Spacer = function (t, e, Q) {
    var r = t.create("node", "mspace", [], {
      width: cssUnitFormatters.formatEm(Q)
    });
    var T = t.create("node", "mstyle", [r], {
      scriptlevel: 0
    });
    t.Push(T);
  };
  y.LeftRight = function (t, e) {
    var Q = e.substr(1);
    t.Push(t.itemFactory.create(Q, t.GetDelimiter(e), t.stack.env.color));
  };
  y.NamedFn = function (t, e, Q) {
    Q ||= e.substr(1);
    var r = t.create("token", "mi", {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }, Q);
    t.Push(t.itemFactory.create("fn", r));
  };
  y.NamedOp = function (t, e, Q) {
    Q ||= e.substr(1);
    Q = Q.replace(/&thinsp;/, "\u2006");
    var r = t.create("token", "mo", {
      movablelimits: true,
      movesupsub: true,
      form: texConstantDefinitions.TexConstant.Form.PREFIX,
      texClass: mathmlAbstractNodeClasses.TEXCLASS.OP
    }, Q);
    t.Push(r);
  };
  y.Limits = function (t, e, Q) {
    var r;
    var T = t.stack.Prev(true);
    if (!T || s.default.getTexClass(s.default.getCoreMO(T)) !== mathmlAbstractNodeClasses.TEXCLASS.OP && s.default.getProperty(T, "movesupsub") == null) {
      throw new l.default("MisplacedLimits", "%1 is allowed only on operators", t.currentCS);
    }
    var n = t.stack.Top();
    if (s.default.isType(T, "munderover") && !Q) {
      r = t.create("node", "msubsup");
      s.default.copyChildren(T, r);
      T = n.Last = r;
    } else if (s.default.isType(T, "msubsup") && Q) {
      r = t.create("node", "munderover");
      s.default.copyChildren(T, r);
      T = n.Last = r;
    }
    s.default.setProperty(T, "movesupsub", !!Q);
    s.default.setProperties(s.default.getCoreMO(T), {
      movablelimits: false
    });
    if (s.default.getAttribute(T, "movablelimits") || s.default.getProperty(T, "movablelimits")) {
      s.default.setProperties(T, {
        movablelimits: false
      });
    }
  };
  y.Over = function (t, e, Q, r) {
    var T = t.itemFactory.create("over").setProperty("name", t.currentCS);
    if (Q || r) {
      T.setProperty("open", Q);
      T.setProperty("close", r);
    } else if (e.match(/withdelims$/)) {
      T.setProperty("open", t.GetDelimiter(e));
      T.setProperty("close", t.GetDelimiter(e));
    }
    if (e.match(/^\\above/)) {
      T.setProperty("thickness", t.GetDimen(e));
    } else if (e.match(/^\\atop/) || Q || r) {
      T.setProperty("thickness", 0);
    }
    t.Push(T);
  };
  y.Frac = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    var T = t.create("node", "mfrac", [Q, r]);
    t.Push(T);
  };
  y.Sqrt = function (t, e) {
    var Q = t.GetBrackets(e);
    var r = t.GetArgument(e);
    if (r === "\\frac") {
      r += "{" + t.GetArgument(r) + "}{" + t.GetArgument(r) + "}";
    }
    var T = new c.default(r, t.stack.env, t.configuration).mml();
    T = Q ? t.create("node", "mroot", [T, g(t, Q)]) : t.create("node", "msqrt", [T]);
    t.Push(T);
  };
  y.Root = function (t, e) {
    var Q = t.GetUpTo(e, "\\of");
    var r = t.ParseArg(e);
    var T = t.create("node", "mroot", [r, g(t, Q)]);
    t.Push(T);
  };
  y.MoveRoot = function (t, e, Q) {
    if (!t.stack.env.inRoot) {
      throw new l.default("MisplacedMoveRoot", "%1 can appear only within a root", t.currentCS);
    }
    if (t.stack.global[Q]) {
      throw new l.default("MultipleMoveRoot", "Multiple use of %1", t.currentCS);
    }
    var r = t.GetArgument(e);
    if (!r.match(/-?[0-9]+/)) {
      throw new l.default("IntegerArg", "The argument to %1 must be an integer", t.currentCS);
    }
    if ((r = parseInt(r, 10) / 15 + "em").substr(0, 1) !== "-") {
      r = "+" + r;
    }
    t.stack.global[Q] = r;
  };
  y.Accent = function (t, e, Q, T) {
    var n = t.ParseArg(e);
    var o = r(r({}, h.default.getFontDef(t)), {
      accent: true,
      mathaccent: true
    });
    var i = s.default.createEntity(Q);
    var a = t.create("token", "mo", o, i);
    s.default.setAttribute(a, "stretchy", !!T);
    var u = s.default.isEmbellished(n) ? s.default.getCoreMO(n) : n;
    if (s.default.isType(u, "mo") || s.default.getProperty(u, "movablelimits")) {
      s.default.setProperties(u, {
        movablelimits: false
      });
    }
    var l = t.create("node", "munderover");
    s.default.setChild(l, 0, n);
    s.default.setChild(l, 1, null);
    s.default.setChild(l, 2, a);
    var c = t.create("node", "TeXAtom", [l]);
    t.Push(c);
  };
  y.UnderOver = function (t, e, Q, r) {
    var T = s.default.createEntity(Q);
    var n = t.create("token", "mo", {
      stretchy: true,
      accent: true
    }, T);
    var o = e.charAt(1) === "o" ? "over" : "under";
    var i = t.ParseArg(e);
    t.Push(h.default.underOver(t, i, n, o, r));
  };
  y.Overset = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    h.default.checkMovableLimits(r);
    if (Q.isKind("mo")) {
      s.default.setAttribute(Q, "accent", false);
    }
    var T = t.create("node", "mover", [r, Q]);
    t.Push(T);
  };
  y.Underset = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    h.default.checkMovableLimits(r);
    if (Q.isKind("mo")) {
      s.default.setAttribute(Q, "accent", false);
    }
    var T = t.create("node", "munder", [r, Q], {
      accentunder: false
    });
    t.Push(T);
  };
  y.Overunderset = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    var T = t.ParseArg(e);
    h.default.checkMovableLimits(T);
    if (Q.isKind("mo")) {
      s.default.setAttribute(Q, "accent", false);
    }
    if (r.isKind("mo")) {
      s.default.setAttribute(r, "accent", false);
    }
    var n = t.create("node", "munderover", [T, r, Q], {
      accent: false,
      accentunder: false
    });
    t.Push(n);
  };
  y.TeXAtom = function (t, e, Q) {
    var r;
    var T;
    var n;
    var o = {
      texClass: Q
    };
    if (Q === mathmlAbstractNodeClasses.TEXCLASS.OP) {
      o.movesupsub = o.movablelimits = true;
      var i = t.GetArgument(e);
      var a = i.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
      if (a) {
        o.mathvariant = texConstantDefinitions.TexConstant.Variant.NORMAL;
        T = t.create("token", "mi", o, a[1]);
      } else {
        n = new c.default(i, t.stack.env, t.configuration).mml();
        T = t.create("node", "TeXAtom", [n], o);
      }
      r = t.itemFactory.create("fn", T);
    } else {
      n = t.ParseArg(e);
      r = t.create("node", "TeXAtom", [n], o);
    }
    t.Push(r);
  };
  y.MmlToken = function (t, e) {
    var Q;
    var r = t.GetArgument(e);
    var T = t.GetBrackets(e, "").replace(/^\s+/, "");
    var n = t.GetArgument(e);
    var o = {};
    var i = [];
    try {
      Q = t.create("node", r);
    } catch (t) {
      Q = null;
    }
    if (!Q || !Q.isToken) {
      throw new l.default("NotMathMLToken", "%1 is not a token element", r);
    }
    while (T !== "") {
      var a = T.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
      if (!a) {
        throw new l.default("InvalidMathMLAttr", "Invalid MathML attribute: %1", T);
      }
      if (!Q.attributes.hasDefault(a[1]) && !v[a[1]]) {
        throw new l.default("UnknownAttrForElement", "%1 is not a recognized attribute for %2", a[1], r);
      }
      var u = h.default.MmlFilterAttribute(t, a[1], a[2].replace(/^(['"])(.*)\1$/, "$2"));
      if (u) {
        if (u.toLowerCase() === "true") {
          u = true;
        } else if (u.toLowerCase() === "false") {
          u = false;
        }
        o[a[1]] = u;
        i.push(a[1]);
      }
      T = T.substr(a[0].length);
    }
    if (i.length) {
      o["mjx-keep-attrs"] = i.join(" ");
    }
    var c = t.create("text", n);
    Q.appendChild(c);
    s.default.setProperties(Q, o);
    t.Push(Q);
  };
  y.Strut = function (t, e) {
    var Q = t.create("node", "mrow");
    var r = t.create("node", "mpadded", [Q], {
      height: "8.6pt",
      depth: "3pt",
      width: 0
    });
    t.Push(r);
  };
  y.Phantom = function (t, e, Q, r) {
    var T = t.create("node", "mphantom", [t.ParseArg(e)]);
    if (Q || r) {
      T = t.create("node", "mpadded", [T]);
      if (r) {
        s.default.setAttribute(T, "height", 0);
        s.default.setAttribute(T, "depth", 0);
      }
      if (Q) {
        s.default.setAttribute(T, "width", 0);
      }
    }
    var n = t.create("node", "TeXAtom", [T]);
    t.Push(n);
  };
  y.Smash = function (t, e) {
    var Q = h.default.trimSpaces(t.GetBrackets(e, ""));
    var r = t.create("node", "mpadded", [t.ParseArg(e)]);
    switch (Q) {
      case "b":
        s.default.setAttribute(r, "depth", 0);
        break;
      case "t":
        s.default.setAttribute(r, "height", 0);
        break;
      default:
        s.default.setAttribute(r, "height", 0);
        s.default.setAttribute(r, "depth", 0);
    }
    var T = t.create("node", "TeXAtom", [r]);
    t.Push(T);
  };
  y.Lap = function (t, e) {
    var Q = t.create("node", "mpadded", [t.ParseArg(e)], {
      width: 0
    });
    if (e === "\\llap") {
      s.default.setAttribute(Q, "lspace", "-1width");
    }
    var r = t.create("node", "TeXAtom", [Q]);
    t.Push(r);
  };
  y.RaiseLower = function (t, e) {
    var Q = t.GetDimen(e);
    var r = t.itemFactory.create("position").setProperties({
      name: t.currentCS,
      move: "vertical"
    });
    if (Q.charAt(0) === "-") {
      Q = Q.slice(1);
      e = e.substr(1) === "raise" ? "\\lower" : "\\raise";
    }
    if (e === "\\lower") {
      r.setProperty("dh", "-" + Q);
      r.setProperty("dd", "+" + Q);
    } else {
      r.setProperty("dh", "+" + Q);
      r.setProperty("dd", "-" + Q);
    }
    t.Push(r);
  };
  y.MoveLeftRight = function (t, e) {
    var Q = t.GetDimen(e);
    var r = Q.charAt(0) === "-" ? Q.slice(1) : "-" + Q;
    if (e === "\\moveleft") {
      var T = Q;
      Q = r;
      r = T;
    }
    t.Push(t.itemFactory.create("position").setProperties({
      name: t.currentCS,
      move: "horizontal",
      left: t.create("node", "mspace", [], {
        width: Q
      }),
      right: t.create("node", "mspace", [], {
        width: r
      })
    }));
  };
  y.Hskip = function (t, e) {
    var Q = t.create("node", "mspace", [], {
      width: t.GetDimen(e)
    });
    t.Push(Q);
  };
  y.Nonscript = function (t, e) {
    t.Push(t.itemFactory.create("nonscript"));
  };
  y.Rule = function (t, e, Q) {
    var r = {
      width: t.GetDimen(e),
      height: t.GetDimen(e),
      depth: t.GetDimen(e)
    };
    if (Q !== "blank") {
      r.mathbackground = t.stack.env.color || "black";
    }
    var T = t.create("node", "mspace", [], r);
    t.Push(T);
  };
  y.rule = function (t, e) {
    var Q = t.GetBrackets(e);
    var r = t.GetDimen(e);
    var T = t.GetDimen(e);
    var n = t.create("node", "mspace", [], {
      width: r,
      height: T,
      mathbackground: t.stack.env.color || "black"
    });
    if (Q) {
      n = t.create("node", "mpadded", [n], {
        voffset: Q
      });
      if (Q.match(/^\-/)) {
        s.default.setAttribute(n, "height", Q);
        s.default.setAttribute(n, "depth", "+" + Q.substr(1));
      } else {
        s.default.setAttribute(n, "height", "+" + Q);
      }
    }
    t.Push(n);
  };
  y.MakeBig = function (t, e, Q, r) {
    var T = String(r *= H).replace(/(\.\d\d\d).+/, "$1") + "em";
    var n = t.GetDelimiter(e, true);
    var o = t.create("token", "mo", {
      minsize: T,
      maxsize: T,
      fence: true,
      stretchy: true,
      symmetric: true
    }, n);
    var i = t.create("node", "TeXAtom", [o], {
      texClass: Q
    });
    t.Push(i);
  };
  y.BuildRel = function (t, e) {
    var Q = t.ParseUpTo(e, "\\over");
    var r = t.ParseArg(e);
    var T = t.create("node", "munderover");
    s.default.setChild(T, 0, r);
    s.default.setChild(T, 1, null);
    s.default.setChild(T, 2, Q);
    var n = t.create("node", "TeXAtom", [T], {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.REL
    });
    t.Push(n);
  };
  y.HBox = function (t, e, Q, r) {
    t.PushAll(h.default.internalMath(t, t.GetArgument(e), Q, r));
  };
  y.FBox = function (t, e) {
    var Q = h.default.internalMath(t, t.GetArgument(e));
    var r = t.create("node", "menclose", Q, {
      notation: "box"
    });
    t.Push(r);
  };
  y.FrameBox = function (t, e) {
    var Q = t.GetBrackets(e);
    var r = t.GetBrackets(e) || "c";
    var T = h.default.internalMath(t, t.GetArgument(e));
    if (Q) {
      T = [t.create("node", "mpadded", T, {
        width: Q,
        "data-align": optionsMergeUtils.lookup(r, {
          l: "left",
          r: "right"
        }, "center")
      })];
    }
    var n = t.create("node", "TeXAtom", [t.create("node", "menclose", T, {
      notation: "box"
    })], {
      texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
    });
    t.Push(n);
  };
  y.Not = function (t, e) {
    t.Push(t.itemFactory.create("not"));
  };
  y.Dots = function (t, e) {
    var Q = s.default.createEntity("2026");
    var r = s.default.createEntity("22EF");
    var T = t.create("token", "mo", {
      stretchy: false
    }, Q);
    var n = t.create("token", "mo", {
      stretchy: false
    }, r);
    t.Push(t.itemFactory.create("dots").setProperties({
      ldots: T,
      cdots: n
    }));
  };
  y.Matrix = function (t, e, Q, r, T, n, o, i, a, u) {
    var s = t.GetNext();
    if (s === "") {
      throw new l.default("MissingArgFor", "Missing argument for %1", t.currentCS);
    }
    if (s === "{") {
      t.i++;
    } else {
      t.string = s + "}" + t.string.slice(t.i + 1);
      t.i = 0;
    }
    var c = t.itemFactory.create("array").setProperty("requireClose", true);
    c.arraydef = {
      rowspacing: o || "4pt",
      columnspacing: n || "1em"
    };
    if (a) {
      c.setProperty("isCases", true);
    }
    if (u) {
      c.setProperty("isNumbered", true);
      c.arraydef.side = u;
    }
    if (Q || r) {
      c.setProperty("open", Q);
      c.setProperty("close", r);
    }
    if (i === "D") {
      c.arraydef.displaystyle = true;
    }
    if (T != null) {
      c.arraydef.columnalign = T;
    }
    t.Push(c);
  };
  y.Entry = function (t, e) {
    t.Push(t.itemFactory.create("cell").setProperties({
      isEntry: true,
      name: e
    }));
    var Q = t.stack.Top();
    var r = Q.getProperty("casesEnv");
    if (Q.getProperty("isCases") || r) {
      var T = t.string;
      var n = 0;
      var o = -1;
      var i = t.i;
      var a = T.length;
      var u = r ? new RegExp(`^\\\\end\\s*\\{${r.replace(/\*/, "\\*")}\\}`) : null;
      while (i < a) {
        var s = T.charAt(i);
        if (s === "{") {
          n++;
          i++;
        } else if (s === "}") {
          if (n === 0) {
            a = 0;
          } else {
            if (--n == 0 && o < 0) {
              o = i - t.i;
            }
            i++;
          }
        } else if (s === "&" && n === 0) {
          throw new l.default("ExtraAlignTab", "Extra alignment tab in \\cases text");
        } else if (s === "\\") {
          var c = T.substr(i);
          if (c.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || u && c.match(u)) {
            a = 0;
          } else {
            i += 2;
          }
        } else {
          i++;
        }
      }
      var p = T.substr(t.i, i - t.i);
      if (!p.match(/^\s*\\text[^a-zA-Z]/) || o !== p.replace(/\s+$/, "").length - 1) {
        var f = h.default.internalMath(t, h.default.trimSpaces(p), 0);
        t.PushAll(f);
        t.i = i;
      }
    }
  };
  y.Cr = function (t, e) {
    t.Push(t.itemFactory.create("cell").setProperties({
      isCR: true,
      name: e
    }));
  };
  y.CrLaTeX = function (t, e, Q = false) {
    if (!Q && (t.string.charAt(t.i) === "*" && t.i++, t.string.charAt(t.i) === "[")) {
      var r;
      var T;
      var n = t.GetBrackets(e, "");
      var o = i(h.default.matchDimen(n), 2);
      var a = o[0];
      var s = o[1];
      if (n && !a) {
        throw new l.default("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", t.currentCS);
      }
      r = a + s;
    }
    t.Push(t.itemFactory.create("cell").setProperties({
      isCR: true,
      name: e,
      linebreak: true
    }));
    var c = t.stack.Top();
    if (c instanceof u.ArrayItem) {
      if (r) {
        c.addRowSpacing(r);
      }
    } else {
      if (r) {
        T = t.create("node", "mspace", [], {
          depth: r
        });
        t.Push(T);
      }
      T = t.create("node", "mspace", [], {
        linebreak: texConstantDefinitions.TexConstant.LineBreak.NEWLINE
      });
      t.Push(T);
    }
  };
  y.HLine = function (t, e, Q) {
    if (Q == null) {
      Q = "solid";
    }
    var r = t.stack.Top();
    if (!(r instanceof u.ArrayItem) || r.Size()) {
      throw new l.default("Misplaced", "Misplaced %1", t.currentCS);
    }
    if (r.table.length) {
      for (var T = r.arraydef.rowlines ? r.arraydef.rowlines.split(/ /) : []; T.length < r.table.length;) {
        T.push("none");
      }
      T[r.table.length - 1] = Q;
      r.arraydef.rowlines = T.join(" ");
    } else {
      r.frame.push("top");
    }
  };
  y.HFill = function (t, e) {
    var Q = t.stack.Top();
    if (Q instanceof u.ArrayItem) {
      Q.hfill.push(Q.Size());
    } else {
      throw new l.default("UnsupportedHFill", "Unsupported use of %1", t.currentCS);
    }
  };
  y.BeginEnd = function (t, e) {
    var Q = t.GetArgument(e);
    if (Q.match(/\\/i)) {
      throw new l.default("InvalidEnv", "Invalid environment name '%1'", Q);
    }
    var r = t.configuration.handlers.get("environment").lookup(Q);
    if (r && e === "\\end") {
      if (!r.args[0]) {
        var T = t.itemFactory.create("end").setProperty("name", Q);
        t.Push(T);
        return;
      }
      t.stack.env.closing = Q;
    }
    h.default.checkMaxMacros(t, false);
    t.parse("environment", [t, Q]);
  };
  y.Array = function (t, e, Q, r, T, n, o, i, a) {
    T ||= t.GetArgument("\\begin{" + e.getName() + "}");
    var u = ("c" + T).replace(/[^clr|:]/g, "").replace(/[^|:]([|:])+/g, "$1");
    T = (T = T.replace(/[^clr]/g, "").split("").join(" ")).replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
    var s = t.itemFactory.create("array");
    s.arraydef = {
      columnalign: T,
      columnspacing: n || "1em",
      rowspacing: o || "4pt"
    };
    if (u.match(/[|:]/)) {
      if (u.charAt(0).match(/[|:]/)) {
        s.frame.push("left");
        s.dashed = u.charAt(0) === ":";
      }
      if (u.charAt(u.length - 1).match(/[|:]/)) {
        s.frame.push("right");
      }
      u = u.substr(1, u.length - 2);
      s.arraydef.columnlines = u.split("").join(" ").replace(/[^|: ]/g, "none").replace(/\|/g, "solid").replace(/:/g, "dashed");
    }
    if (Q) {
      s.setProperty("open", t.convertDelimiter(Q));
    }
    if (r) {
      s.setProperty("close", t.convertDelimiter(r));
    }
    if ((i || "").charAt(1) === "'") {
      s.arraydef["data-cramped"] = true;
      i = i.charAt(0);
    }
    if (i === "D") {
      s.arraydef.displaystyle = true;
    } else if (i) {
      s.arraydef.displaystyle = false;
    }
    if (i === "S") {
      s.arraydef.scriptlevel = 1;
    }
    if (a) {
      s.arraydef.useHeight = false;
    }
    t.Push(e);
    return s;
  };
  y.AlignedArray = function (t, e) {
    var Q = t.GetBrackets("\\begin{" + e.getName() + "}");
    var r = y.Array(t, e);
    return h.default.setArrayAlign(r, Q);
  };
  y.Equation = function (t, e, Q) {
    t.Push(e);
    h.default.checkEqnEnv(t);
    return t.itemFactory.create("equation", Q).setProperty("name", e.getName());
  };
  y.EqnArray = function (t, e, Q, r, T, n) {
    t.Push(e);
    if (r) {
      h.default.checkEqnEnv(t);
    }
    T = (T = T.replace(/[^clr]/g, "").split("").join(" ")).replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center");
    var o = t.itemFactory.create("eqnarray", e.getName(), Q, r, t.stack.global);
    o.arraydef = {
      displaystyle: true,
      columnalign: T,
      columnspacing: n || "1em",
      rowspacing: "3pt",
      side: t.options.tagSide,
      minlabelspacing: t.options.tagIndent
    };
    return o;
  };
  y.HandleNoTag = function (t, e) {
    t.tags.notag();
  };
  y.HandleLabel = function (t, e) {
    var Q = t.GetArgument(e);
    if (Q !== "" && !t.tags.refUpdate) {
      if (t.tags.label) {
        throw new l.default("MultipleCommand", "Multiple %1", t.currentCS);
      }
      t.tags.label = Q;
      if ((t.tags.allLabels[Q] || t.tags.labels[Q]) && !t.options.ignoreDuplicateLabels) {
        throw new l.default("MultipleLabel", "Label '%1' multiply defined", Q);
      }
      t.tags.labels[Q] = new mathjaxEquationTaggingSystem.Label();
    }
  };
  y.HandleRef = function (t, e, Q) {
    var r = t.GetArgument(e);
    var T = t.tags.allLabels[r] || t.tags.labels[r];
    if (!T) {
      if (!t.tags.refUpdate) {
        t.tags.redo = true;
      }
      T = new mathjaxEquationTaggingSystem.Label();
    }
    var n = T.tag;
    if (Q) {
      n = t.tags.formatTag(n);
    }
    var o = t.create("node", "mrow", h.default.internalMath(t, n), {
      href: t.tags.formatUrl(T.id, t.options.baseURL),
      class: "MathJax_ref"
    });
    t.Push(o);
  };
  y.Macro = function (t, e, Q, r, T) {
    if (r) {
      var n = [];
      if (T != null) {
        var o = t.GetBrackets(e);
        n.push(o == null ? T : o);
      }
      for (var i = n.length; i < r; i++) {
        n.push(t.GetArgument(e));
      }
      Q = h.default.substituteArgs(t, n, Q);
    }
    t.string = h.default.addArgs(t, Q, t.string.slice(t.i));
    t.i = 0;
    h.default.checkMaxMacros(t);
  };
  y.MathChoice = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    var T = t.ParseArg(e);
    var n = t.ParseArg(e);
    t.Push(t.create("node", "MathChoice", [Q, r, T, n]));
  };
  exports.default = y;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
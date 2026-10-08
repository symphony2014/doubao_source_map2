// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'a' to 'texAmsMethodsHandler'
// - Resolved require(528581) to 'tex-ams-methods-handler'
// - Resolved require(559929) to 'tex-base-command-map'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'p' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Renamed variable 'h' to 'cssUnitFormatters'
// - Resolved require(839822) to 'css-unit-formatters'
// - Renamed variable 'f' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Resolved require(656307) to 'mathjax-symbol-macro-utils'
// - Resolved require(683268) to 'tex-macro-config'
// - Renamed variable 'L' to 'mathtoolsUtilities'
// - Resolved require(129369) to 'mathtools-utilities'
// - Updated imported property 'em' to 'formatEm' (module 839822)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 588022
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.MathtoolsMethods = undefined;
  var i = o(require("mathjax-utilities") /*id: 142412*/);
  var texAmsMethodsHandler = require("tex-ams-methods-handler") /*id: 528581*/;
  var u = o(require("tex-base-command-map") /*id: 559929*/);
  var s = o(require("mathjax-tex-parser") /*id: 658610*/);
  var l = o(require("message-format-util") /*id: 342117*/);
  var c = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var cssUnitFormatters = require("css-unit-formatters") /*id: 839822*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var d = o(require("mathjax-symbol-macro-utils") /*id: 656307*/);
  var D = o(require("tex-macro-config") /*id: 683268*/);
  var mathtoolsUtilities = require("mathtools-utilities") /*id: 129369*/;
  exports.MathtoolsMethods = {
    MtMatrix: function (t, Q, r, T) {
      var n = t.GetBrackets(`\\begin{${Q.getName()}}`, "c");
      return exports.MathtoolsMethods.Array(t, Q, r, T, n);
    },
    MtSmallMatrix: function (t, Q, r, T, n) {
      n ||= t.GetBrackets(`\\begin{${Q.getName()}}`, t.options.mathtools["smallmatrix-align"]);
      return exports.MathtoolsMethods.Array(t, Q, r, T, n, i.default.Em(1 / 3), ".2em", "S", 1);
    },
    MtMultlined: function (t, e) {
      var Q;
      var r = `\\begin{${e.getName()}}`;
      var n = t.GetBrackets(r, t.options.mathtools["multlined-pos"] || "c");
      var o = n ? t.GetBrackets(r, "") : "";
      if (n && !n.match(/^[cbt]$/)) {
        o = (Q = T([n, o], 2))[0];
        n = Q[1];
      }
      t.Push(e);
      var a = t.itemFactory.create("multlined", t, e);
      a.arraydef = {
        displaystyle: true,
        rowspacing: ".5em",
        width: o || "auto",
        columnwidth: "100%"
      };
      return i.default.setArrayAlign(a, n || "c");
    },
    HandleShove: function (t, e, Q) {
      var r = t.stack.Top();
      if (r.kind !== "multline" && r.kind !== "multlined") {
        throw new l.default("CommandInMultlined", "%1 can only appear within the multline or multlined environments", e);
      }
      if (r.Size()) {
        throw new l.default("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", e);
      }
      r.setProperty("shove", Q);
      var T = t.GetBrackets(e);
      var n = t.ParseArg(e);
      if (T) {
        var o = t.create("node", "mrow", []);
        var i = t.create("node", "mspace", [], {
          width: T
        });
        if (Q === "left") {
          o.appendChild(i);
          o.appendChild(n);
        } else {
          o.appendChild(n);
          o.appendChild(i);
        }
        n = o;
      }
      t.Push(n);
    },
    SpreadLines: function (t, e) {
      var Q;
      var r;
      if (t.stack.env.closing === e.getName()) {
        delete t.stack.env.closing;
        var T = t.stack.Pop();
        var o = T.toMml();
        var i = T.getProperty("spread");
        if (o.isInferred) {
          try {
            var a = n(c.default.getChildren(o));
            var u = a.next();
            for (; !u.done; u = a.next()) {
              var s = u.value;
              mathtoolsUtilities.MathtoolsUtil.spreadLines(s, i);
            }
          } catch (t) {
            Q = {
              error: t
            };
          } finally {
            try {
              if (u && !u.done && (r = a.return)) {
                r.call(a);
              }
            } finally {
              if (Q) {
                throw Q.error;
              }
            }
          }
        } else {
          mathtoolsUtilities.MathtoolsUtil.spreadLines(o, i);
        }
        t.Push(o);
      } else {
        var i = t.GetDimen(`\\begin{${e.getName()}}`);
        e.setProperty("spread", i);
        t.Push(e);
      }
    },
    Cases: function (t, e, Q, r, T) {
      var n = t.itemFactory.create("array").setProperty("casesEnv", e.getName());
      n.arraydef = {
        rowspacing: ".2em",
        columnspacing: "1em",
        columnalign: "left"
      };
      if (T === "D") {
        n.arraydef.displaystyle = true;
      }
      n.setProperties({
        open: Q,
        close: r
      });
      t.Push(e);
      return n;
    },
    MathLap: function (t, e, Q, T) {
      var n = t.GetBrackets(e, "").trim();
      var o = t.create("node", "mstyle", [t.create("node", "mpadded", [t.ParseArg(e)], r({
        width: 0
      }, Q === "r" ? {} : {
        lspace: Q === "l" ? "-1width" : "-.5width"
      }))], {
        "data-cramped": T
      });
      mathtoolsUtilities.MathtoolsUtil.setDisplayLevel(o, n);
      t.Push(t.create("node", "TeXAtom", [o]));
    },
    Cramped: function (t, e) {
      var Q = t.GetBrackets(e, "").trim();
      var r = t.ParseArg(e);
      var T = t.create("node", "mstyle", [r], {
        "data-cramped": true
      });
      mathtoolsUtilities.MathtoolsUtil.setDisplayLevel(T, Q);
      t.Push(T);
    },
    MtLap: function (t, e, Q) {
      var r = i.default.internalMath(t, t.GetArgument(e), 0);
      var T = t.create("node", "mpadded", r, {
        width: 0
      });
      if (Q !== "r") {
        c.default.setAttribute(T, "lspace", Q === "l" ? "-1width" : "-.5width");
      }
      t.Push(T);
    },
    MathMakeBox: function (t, e) {
      var Q = t.GetBrackets(e);
      var r = t.GetBrackets(e, "c");
      var T = t.create("node", "mpadded", [t.ParseArg(e)]);
      if (Q) {
        c.default.setAttribute(T, "width", Q);
      }
      var n = optionsMergeUtils.lookup(r, {
        c: "center",
        r: "right"
      }, "");
      if (n) {
        c.default.setAttribute(T, "data-align", n);
      }
      t.Push(T);
    },
    MathMBox: function (t, e) {
      t.Push(t.create("node", "mrow", [t.ParseArg(e)]));
    },
    UnderOverBracket: function (t, e) {
      var Q = cssUnitFormatters.length2em(t.GetBrackets(e, ".1em"), 0.1);
      var r = t.GetBrackets(e, ".2em");
      var n = t.GetArgument(e);
      var o = T(e.charAt(1) === "o" ? ["over", "accent", "bottom"] : ["under", "accentunder", "top"], 3);
      var a = o[0];
      var u = o[1];
      var l = o[2];
      var p = cssUnitFormatters.formatEm(Q);
      var f = new s.default(n, t.stack.env, t.configuration).mml();
      var d = new s.default(n, t.stack.env, t.configuration).mml();
      var D = t.create("node", "mpadded", [t.create("node", "mphantom", [d])], {
        style: `border: ${p} solid; border-${l}: none`,
        height: r,
        depth: 0
      });
      var L = i.default.underOver(t, f, D, a, true);
      var m = c.default.getChildAt(c.default.getChildAt(L, 0), 0);
      c.default.setAttribute(m, u, true);
      t.Push(L);
    },
    Aboxed: function (t, e) {
      var Q = mathtoolsUtilities.MathtoolsUtil.checkAlignment(t, e);
      if (Q.row.length % 2 == 1) {
        Q.row.push(t.create("node", "mtd", []));
      }
      var r = t.GetArgument(e);
      var T = t.string.substr(t.i);
      t.string = r + "&&\\endAboxed";
      t.i = 0;
      var n = t.GetUpTo(e, "&");
      var o = t.GetUpTo(e, "&");
      t.GetUpTo(e, "\\endAboxed");
      var a = i.default.substituteArgs(t, [n, o], "\\rlap{\\boxed{#1{}#2}}\\kern.267em\\phantom{#1}&\\phantom{{}#2}\\kern.267em");
      t.string = a + T;
      t.i = 0;
    },
    ArrowBetweenLines: function (t, e) {
      var Q = mathtoolsUtilities.MathtoolsUtil.checkAlignment(t, e);
      if (Q.Size() || Q.row.length) {
        throw new l.default("BetweenLines", "%1 must be on a row by itself", e);
      }
      var r = t.GetStar();
      var T = t.GetBrackets(e, "\\Updownarrow");
      if (r) {
        Q.EndEntry();
        Q.EndEntry();
      }
      var n = new s.default(r ? "\\quad" + T : T + "\\quad", t.stack.env, t.configuration).mml();
      t.Push(n);
      Q.EndEntry();
      Q.EndRow();
    },
    VDotsWithin: function (t, e) {
      var Q = t.stack.Top();
      var T = Q.getProperty("flushspaceabove") === Q.table.length;
      var n = "\\mmlToken{mi}{}" + t.GetArgument(e) + "\\mmlToken{mi}{}";
      var o = new s.default(n, t.stack.env, t.configuration).mml();
      var i = t.create("node", "mpadded", [t.create("node", "mpadded", [t.create("node", "mo", [t.create("text", "⋮")])], r({
        width: 0,
        lspace: "-.5width"
      }, T ? {
        height: "-.6em",
        voffset: "-.18em"
      } : {})), t.create("node", "mphantom", [o])], {
        lspace: ".5width"
      });
      t.Push(i);
    },
    ShortVDotsWithin: function (t, Q) {
      var r = t.stack.Top();
      var T = t.GetStar();
      exports.MathtoolsMethods.FlushSpaceAbove(t, "\\MTFlushSpaceAbove");
      if (!T) {
        r.EndEntry();
      }
      exports.MathtoolsMethods.VDotsWithin(t, "\\vdotswithin");
      if (T) {
        r.EndEntry();
      }
      exports.MathtoolsMethods.FlushSpaceBelow(t, "\\MTFlushSpaceBelow");
    },
    FlushSpaceAbove: function (t, e) {
      var Q = mathtoolsUtilities.MathtoolsUtil.checkAlignment(t, e);
      Q.setProperty("flushspaceabove", Q.table.length);
      Q.addRowSpacing("-" + t.options.mathtools.shortvdotsadjustabove);
    },
    FlushSpaceBelow: function (t, e) {
      var Q = mathtoolsUtilities.MathtoolsUtil.checkAlignment(t, e);
      if (Q.Size()) {
        Q.EndEntry();
      }
      Q.EndRow();
      Q.addRowSpacing("-" + t.options.mathtools.shortvdotsadjustbelow);
    },
    PairedDelimiters: function (t, e, Q, r, n = "#1", o = 1, a = "", u = "") {
      var s = t.GetStar();
      var l = s ? "" : t.GetBrackets(e);
      var c = T(s ? ["\\left", "\\right"] : l ? [l + "l", l + "r"] : ["", ""], 2);
      var p = c[0];
      var h = c[1];
      if (o) {
        var f = [];
        var d = f.length;
        for (; d < o; d++) {
          f.push(t.GetArgument(e));
        }
        a = i.default.substituteArgs(t, f, a);
        n = i.default.substituteArgs(t, f, n);
        u = i.default.substituteArgs(t, f, u);
      }
      n = n.replace(/\\delimsize/g, s ? "\\middle" : l || "");
      t.string = [a, p, Q, n, h, r, u, t.string.substr(t.i)].reduce(function (e, Q) {
        return i.default.addArgs(t, e, Q);
      }, "");
      t.i = 0;
      i.default.checkMaxMacros(t);
    },
    DeclarePairedDelimiter: function (t, e) {
      var Q = d.default.GetCsNameArgument(t, e);
      var r = t.GetArgument(e);
      var T = t.GetArgument(e);
      mathtoolsUtilities.MathtoolsUtil.addPairedDelims(t.configuration, Q, [r, T]);
    },
    DeclarePairedDelimiterX: function (t, e) {
      var Q = d.default.GetCsNameArgument(t, e);
      var r = d.default.GetArgCount(t, e);
      var T = t.GetArgument(e);
      var n = t.GetArgument(e);
      var o = t.GetArgument(e);
      mathtoolsUtilities.MathtoolsUtil.addPairedDelims(t.configuration, Q, [T, n, o, r]);
    },
    DeclarePairedDelimiterXPP: function (t, e) {
      var Q = d.default.GetCsNameArgument(t, e);
      var r = d.default.GetArgCount(t, e);
      var T = t.GetArgument(e);
      var n = t.GetArgument(e);
      var o = t.GetArgument(e);
      var i = t.GetArgument(e);
      var a = t.GetArgument(e);
      mathtoolsUtilities.MathtoolsUtil.addPairedDelims(t.configuration, Q, [n, o, a, r, T, i]);
    },
    CenterColon: function (t, e, Q, T = false, n = false) {
      var o = t.options.mathtools;
      var i = t.create("token", "mo", {}, ":");
      if (Q && (o.centercolon || T)) {
        var a = o["centercolon-offset"];
        i = t.create("node", "mpadded", [i], r({
          voffset: a,
          height: `+${a}`,
          depth: `-${a}`
        }, n ? {
          width: o["thincolon-dw"],
          lspace: o["thincolon-dx"]
        } : {}));
      }
      t.Push(i);
    },
    Relation: function (t, e, Q, r) {
      if (t.options.mathtools["use-unicode"] && r) {
        t.Push(t.create("token", "mo", {
          texClass: mathmlAbstractNodeClasses.TEXCLASS.REL
        }, r));
      } else {
        Q = "\\mathrel{" + Q.replace(/:/g, "\\MTThinColon").replace(/-/g, "\\mathrel{-}") + "}";
        t.string = i.default.addArgs(t, Q, t.string.substr(t.i));
        t.i = 0;
      }
    },
    NArrow: function (t, e, Q, r) {
      t.Push(t.create("node", "TeXAtom", [t.create("token", "mtext", {}, Q), t.create("node", "mpadded", [t.create("node", "mpadded", [t.create("node", "menclose", [t.create("node", "mspace", [], {
        height: ".2em",
        depth: 0,
        width: ".4em"
      })], {
        notation: "updiagonalstrike",
        "data-thickness": ".05em",
        "data-padding": 0
      })], {
        width: 0,
        lspace: "-.5width",
        voffset: r
      }), t.create("node", "mphantom", [t.create("token", "mtext", {}, Q)])], {
        width: 0,
        lspace: "-.5width"
      })], {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.REL
      }));
    },
    SplitFrac: function (t, e, Q) {
      var r = t.ParseArg(e);
      var T = t.ParseArg(e);
      t.Push(t.create("node", "mstyle", [t.create("node", "mfrac", [t.create("node", "mstyle", [r, t.create("token", "mi"), t.create("token", "mspace", {
        width: "1em"
      })], {
        scriptlevel: 0
      }), t.create("node", "mstyle", [t.create("token", "mspace", {
        width: "1em"
      }), t.create("token", "mi"), T], {
        scriptlevel: 0
      })], {
        linethickness: 0,
        numalign: "left",
        denomalign: "right"
      })], {
        displaystyle: Q,
        scriptlevel: 0
      }));
    },
    XMathStrut: function (t, e) {
      var Q = t.GetBrackets(e);
      var r = t.GetArgument(e);
      r = mathtoolsUtilities.MathtoolsUtil.plusOrMinus(e, r);
      Q = mathtoolsUtilities.MathtoolsUtil.plusOrMinus(e, Q || r);
      t.Push(t.create("node", "TeXAtom", [t.create("node", "mpadded", [t.create("node", "mphantom", [t.create("token", "mo", {
        stretchy: false
      }, "(")])], {
        width: 0,
        height: r + "height",
        depth: Q + "depth"
      })], {
        texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
      }));
    },
    Prescript: function (t, e) {
      var Q = mathtoolsUtilities.MathtoolsUtil.getScript(t, e, "sup");
      var r = mathtoolsUtilities.MathtoolsUtil.getScript(t, e, "sub");
      var T = mathtoolsUtilities.MathtoolsUtil.getScript(t, e, "arg");
      if (c.default.isType(Q, "none") && c.default.isType(r, "none")) {
        t.Push(T);
        return;
      }
      var n = t.create("node", "mmultiscripts", [T]);
      c.default.getChildren(n).push(null, null);
      c.default.appendChildren(n, [t.create("node", "mprescripts"), r, Q]);
      n.setProperty("fixPrescript", true);
      t.Push(n);
    },
    NewTagForm: function (t, e, Q = false) {
      var r = t.tags;
      if (!("mtFormats" in r)) {
        throw new l.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", e);
      }
      var T = t.GetArgument(e).trim();
      if (!T) {
        throw new l.default("InvalidTagFormID", "Tag form name can't be empty");
      }
      var n = t.GetBrackets(e, "");
      var o = t.GetArgument(e);
      var i = t.GetArgument(e);
      if (!Q && r.mtFormats.has(T)) {
        throw new l.default("DuplicateTagForm", "Duplicate tag form: %1", T);
      }
      r.mtFormats.set(T, [o, i, n]);
    },
    UseTagForm: function (t, e) {
      var Q = t.tags;
      if (!("mtFormats" in Q)) {
        throw new l.default("TagsNotMT", "%1 can only be used with ams or mathtools tags", e);
      }
      var r = t.GetArgument(e).trim();
      if (!r) {
        Q.mtCurrent = null;
        return;
      }
      if (!Q.mtFormats.has(r)) {
        throw new l.default("UndefinedTagForm", "Undefined tag form: %1", r);
      }
      Q.mtCurrent = Q.mtFormats.get(r);
    },
    SetOptions: function (t, e) {
      var Q;
      var r;
      var T = t.options.mathtools;
      if (!T["allow-mathtoolsset"]) {
        throw new l.default("ForbiddenMathtoolsSet", "%1 is disabled", e);
      }
      var o = {};
      Object.keys(T).forEach(function (t) {
        if (t !== "pariedDelimiters" && t !== "tagforms" && t !== "allow-mathtoolsset") {
          o[t] = 1;
        }
      });
      var a = t.GetArgument(e);
      var u = i.default.keyvalOptions(a, o, true);
      try {
        var s = n(Object.keys(u));
        var c = s.next();
        for (; !c.done; c = s.next()) {
          var p = c.value;
          T[p] = u[p];
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (r = s.return)) {
            r.call(s);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
    },
    Array: u.default.Array,
    Macro: u.default.Macro,
    xArrow: texAmsMethodsHandler.AmsMethods.xArrow,
    HandleRef: texAmsMethodsHandler.AmsMethods.HandleRef,
    AmsEqnArray: texAmsMethodsHandler.AmsMethods.AmsEqnArray,
    MacroWithTemplate: D.default.MacroWithTemplate
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
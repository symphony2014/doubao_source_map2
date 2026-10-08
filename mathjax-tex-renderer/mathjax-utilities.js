// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'l' to 'mathjaxEntitiesUtil'
// - Resolved require(22642) to 'mathjax-entities-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 142412
         */
module.exports = function (module, exports, require) {
  var r;
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
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var a = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var u = o(require("mathjax-tex-parser") /*id: 658610*/);
  var s = o(require("message-format-util") /*id: 342117*/);
  var mathjaxEntitiesUtil = require("mathjax-entities-util") /*id: 22642*/;
  (function (t) {
    var e = {
      em: function (t) {
        return t;
      },
      ex: function (t) {
        return t * 0.43;
      },
      pt: function (t) {
        return t / 10;
      },
      pc: function (t) {
        return t * 1.2;
      },
      px: function (t) {
        return t * 7.2 / 72;
      },
      in: function (t) {
        return t * 7.2;
      },
      cm: function (t) {
        return t * 7.2 / 2.54;
      },
      mm: function (t) {
        return t * 7.2 / 25.4;
      },
      mu: function (t) {
        return t / 18;
      }
    };
    var Q = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))";
    var r = "(pt|em|ex|mu|px|mm|cm|in|pc)";
    var o = RegExp("^\\s*" + Q + "\\s*" + r + "\\s*$");
    var c = RegExp("^\\s*" + Q + "\\s*" + r + " ?");
    function p(t, Q = false) {
      var r;
      var n;
      var i;
      var a;
      var u = t.match(Q ? c : o);
      if (u) {
        n = (r = T([u[1].replace(/,/, "."), u[4], u[0].length], 3))[0];
        i = r[1];
        a = r[2];
        if (i !== "mu") {
          return [n, i, a];
        } else {
          return [h(e[i](parseFloat(n || "1"))).slice(0, -2), "em", a];
        }
      } else {
        return [null, null, 0];
      }
    }
    function h(t) {
      if (Math.abs(t) < 0.0006) {
        return "0em";
      } else {
        return t.toFixed(3).replace(/\.?0+$/, "") + "em";
      }
    }
    function f(t, e, Q) {
      if (e === "{" || e === "}") {
        e = "\\" + e;
      }
      var r = "{\\bigg" + Q + " " + e + "}";
      var T = "{\\big" + Q + " " + e + "}";
      return new u.default("\\mathchoice" + r + T + T + T, {}, t).mml();
    }
    function d(t, e, Q) {
      e = e.replace(/^\s+/, mathjaxEntitiesUtil.entities.nbsp).replace(/\s+$/, mathjaxEntitiesUtil.entities.nbsp);
      var r = t.create("text", e);
      return t.create("node", "mtext", [], Q, r);
    }
    function D(t, e, Q) {
      if (Q.match(/^[a-z]/i) && e.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
        e += " ";
      }
      if (e.length + Q.length > t.configuration.options.maxBuffer) {
        throw new s.default("MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?");
      }
      return e + Q;
    }
    function L(t, e) {
      while (e > 0) {
        t = t.trim().slice(1, -1);
        e--;
      }
      return t.trim();
    }
    function m(t, e) {
      var Q = t.length;
      var r = 0;
      var T = "";
      var n = 0;
      var o = 0;
      var i = true;
      var a = false;
      while (n < Q) {
        var u = t[n++];
        switch (u) {
          case " ":
            break;
          case "{":
            if (i) {
              o++;
            } else {
              a = false;
              if (o > r) {
                o = r;
              }
            }
            r++;
            break;
          case "}":
            if (r) {
              r--;
            }
            if (i || a) {
              o--;
              a = true;
            }
            i = false;
            break;
          default:
            if (!r && e.indexOf(u) !== -1) {
              return [a ? "true" : L(T, o), u, t.slice(n)];
            }
            i = false;
            a = false;
        }
        T += u;
      }
      if (r) {
        throw new s.default("ExtraOpenMissingClose", "Extra open brace or missing close brace");
      }
      return [a ? "true" : L(T, o), "", t.slice(n)];
    }
    t.matchDimen = p;
    t.dimen2em = function (t) {
      var Q = T(p(t), 2);
      var r = Q[0];
      var n = Q[1];
      var o = parseFloat(r || "1");
      var i = e[n];
      if (i) {
        return i(o);
      } else {
        return 0;
      }
    };
    t.Em = h;
    t.cols = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      return t.map(function (t) {
        return h(t);
      }).join(" ");
    };
    t.fenced = function (t, e, Q, r, T = "", n = "") {
      var o;
      var s = t.nodeFactory;
      var l = s.create("node", "mrow", [], {
        open: e,
        close: r,
        texClass: mathmlAbstractNodeClasses.TEXCLASS.INNER
      });
      if (T) {
        o = new u.default("\\" + T + "l" + e, t.parser.stack.env, t).mml();
      } else {
        var c = s.create("text", e);
        o = s.create("node", "mo", [], {
          fence: true,
          stretchy: true,
          symmetric: true,
          texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
        }, c);
      }
      a.default.appendChildren(l, [o, Q]);
      if (T) {
        o = new u.default("\\" + T + "r" + r, t.parser.stack.env, t).mml();
      } else {
        var p = s.create("text", r);
        o = s.create("node", "mo", [], {
          fence: true,
          stretchy: true,
          symmetric: true,
          texClass: mathmlAbstractNodeClasses.TEXCLASS.CLOSE
        }, p);
      }
      if (n) {
        o.attributes.set("mathcolor", n);
      }
      a.default.appendChildren(l, [o]);
      return l;
    };
    t.fixedFence = function (t, e, Q, r) {
      var T = t.nodeFactory.create("node", "mrow", [], {
        open: e,
        close: r,
        texClass: mathmlAbstractNodeClasses.TEXCLASS.ORD
      });
      if (e) {
        a.default.appendChildren(T, [f(t, e, "l")]);
      }
      if (a.default.isType(Q, "mrow")) {
        a.default.appendChildren(T, a.default.getChildren(Q));
      } else {
        a.default.appendChildren(T, [Q]);
      }
      if (r) {
        a.default.appendChildren(T, [f(t, r, "r")]);
      }
      return T;
    };
    t.mathPalette = f;
    t.fixInitialMO = function (t, e) {
      var Q = 0;
      var r = e.length;
      for (; Q < r; Q++) {
        var T = e[Q];
        if (T && !a.default.isType(T, "mspace") && (!a.default.isType(T, "TeXAtom") || a.default.getChildren(T)[0] && a.default.getChildren(a.default.getChildren(T)[0]).length)) {
          if (a.default.isEmbellished(T) || a.default.isType(T, "TeXAtom") && a.default.getTexClass(T) === mathmlAbstractNodeClasses.TEXCLASS.REL) {
            var n = t.nodeFactory.create("node", "mi");
            e.unshift(n);
          }
          break;
        }
      }
    };
    t.internalMath = function (t, e, Q, r) {
      if (t.configuration.options.internalMath) {
        return t.configuration.options.internalMath(t, e, Q, r);
      }
      var T;
      var n;
      var o = r || t.stack.env.font;
      var i = o ? {
        mathvariant: o
      } : {};
      var a = [];
      var l = 0;
      var c = 0;
      var p = "";
      var h = 0;
      if (e.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
        while (l < e.length) {
          if ((T = e.charAt(l++)) === "$") {
            if (p === "$" && h === 0) {
              n = t.create("node", "TeXAtom", [new u.default(e.slice(c, l - 1), {}, t.configuration).mml()]);
              a.push(n);
              p = "";
              c = l;
            } else if (p === "") {
              if (c < l - 1) {
                a.push(d(t, e.slice(c, l - 1), i));
              }
              p = "$";
              c = l;
            }
          } else if (T === "{" && p !== "") {
            h++;
          } else if (T === "}") {
            if (p === "}" && h === 0) {
              var f = new u.default(e.slice(c, l), {}, t.configuration).mml();
              n = t.create("node", "TeXAtom", [f], i);
              a.push(n);
              p = "";
              c = l;
            } else if (p !== "" && h) {
              h--;
            }
          } else if (T === "\\") {
            if (p === "" && e.substr(l).match(/^(eq)?ref\s*\{/)) {
              var D = RegExp["$&"].length;
              if (c < l - 1) {
                a.push(d(t, e.slice(c, l - 1), i));
              }
              p = "}";
              c = l - 1;
              l += D;
            } else if ((T = e.charAt(l++)) === "(" && p === "") {
              if (c < l - 2) {
                a.push(d(t, e.slice(c, l - 2), i));
              }
              p = ")";
              c = l;
            } else if (T === ")" && p === ")" && h === 0) {
              n = t.create("node", "TeXAtom", [new u.default(e.slice(c, l - 2), {}, t.configuration).mml()]);
              a.push(n);
              p = "";
              c = l;
            } else if (T.match(/[${}\\]/) && p === "") {
              l--;
              e = e.substr(0, l - 1) + e.substr(l);
            }
          }
        }
        if (p !== "") {
          throw new s.default("MathNotTerminated", "Math not terminated in text box");
        }
      }
      if (c < e.length) {
        a.push(d(t, e.slice(c), i));
      }
      if (Q != null) {
        a = [t.create("node", "mstyle", a, {
          displaystyle: false,
          scriptlevel: Q
        })];
      } else if (a.length > 1) {
        a = [t.create("node", "mrow", a)];
      }
      return a;
    };
    t.internalText = d;
    t.underOver = function (e, Q, r, T, n) {
      t.checkMovableLimits(Q);
      if (a.default.isType(Q, "munderover") && a.default.isEmbellished(Q)) {
        a.default.setProperties(a.default.getCoreMO(Q), {
          lspace: 0,
          rspace: 0
        });
        var o = e.create("node", "mo", [], {
          rspace: 0
        });
        Q = e.create("node", "mrow", [o, Q]);
      }
      var u = e.create("node", "munderover", [Q]);
      a.default.setChild(u, T === "over" ? u.over : u.under, r);
      var s = u;
      if (n) {
        s = e.create("node", "TeXAtom", [u], {
          texClass: mathmlAbstractNodeClasses.TEXCLASS.OP,
          movesupsub: true
        });
      }
      a.default.setProperty(s, "subsupOK", true);
      return s;
    };
    t.checkMovableLimits = function (t) {
      var e = a.default.isType(t, "mo") ? a.default.getForm(t) : null;
      if (a.default.getProperty(t, "movablelimits") || e && e[3] && e[3].movablelimits) {
        a.default.setProperties(t, {
          movablelimits: false
        });
      }
    };
    t.trimSpaces = function (t) {
      if (typeof t != "string") {
        return t;
      }
      var e = t.trim();
      if (e.match(/\\$/) && t.match(/ $/)) {
        e += " ";
      }
      return e;
    };
    t.setArrayAlign = function (e, Q) {
      if ((Q = t.trimSpaces(Q || "")) === "t") {
        e.arraydef.align = "baseline 1";
      } else if (Q === "b") {
        e.arraydef.align = "baseline -1";
      } else if (Q === "c") {
        e.arraydef.align = "axis";
      } else if (Q) {
        e.arraydef.align = Q;
      }
      return e;
    };
    t.substituteArgs = function (t, e, Q) {
      var r = "";
      var T = "";
      var n = 0;
      while (n < Q.length) {
        var o = Q.charAt(n++);
        if (o === "\\") {
          r += o + Q.charAt(n++);
        } else if (o === "#") {
          if ((o = Q.charAt(n++)) === "#") {
            r += o;
          } else {
            if (!o.match(/[1-9]/) || parseInt(o, 10) > e.length) {
              throw new s.default("IllegalMacroParam", "Illegal macro parameter reference");
            }
            T = D(t, D(t, T, r), e[parseInt(o, 10) - 1]);
            r = "";
          }
        } else {
          r += o;
        }
      }
      return D(t, T, r);
    };
    t.addArgs = D;
    t.checkMaxMacros = function (t, e = true) {
      if (!(++t.macroCount <= t.configuration.options.maxMacros)) {
        if (e) {
          throw new s.default("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is here a recursive macro call?");
        }
        throw new s.default("MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?");
      }
    };
    t.checkEqnEnv = function (t) {
      if (t.stack.global.eqnenv) {
        throw new s.default("ErroneousNestingEq", "Erroneous nesting of equation structures");
      }
      t.stack.global.eqnenv = true;
    };
    t.copyNode = function (t, e) {
      var Q = t.copy();
      var r = e.configuration;
      Q.walkTree(function (t) {
        r.addNode(t.kind, t);
        var e;
        var Q;
        var T = (t.getProperty("in-lists") || "").split(/,/);
        try {
          var o = n(T);
          var i = o.next();
          for (; !i.done; i = o.next()) {
            var a = i.value;
            if (a) {
              r.addNode(a, t);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (Q = o.return)) {
              Q.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      });
      return Q;
    };
    t.MmlFilterAttribute = function (t, e, Q) {
      return Q;
    };
    t.getFontDef = function (t) {
      var e = t.stack.env.font;
      if (e) {
        return {
          mathvariant: e
        };
      } else {
        return {};
      }
    };
    t.keyvalOptions = function (t, e = null, Q = false) {
      var r;
      var o;
      var i = function (t) {
        var e;
        var Q;
        var r;
        var n;
        var o;
        var i = {};
        var a = t;
        while (a) {
          n = (e = T(m(a, ["=", ","]), 3))[0];
          r = e[1];
          a = e[2];
          if (r === "=") {
            o = (Q = T(m(a, [","]), 3))[0];
            r = Q[1];
            a = Q[2];
            o = o === "false" || o === "true" ? JSON.parse(o) : o;
            i[n] = o;
          } else if (n) {
            i[n] = true;
          }
        }
        return i;
      }(t);
      if (e) {
        try {
          var a = n(Object.keys(i));
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var l = u.value;
            if (!e.hasOwnProperty(l)) {
              if (Q) {
                throw new s.default("InvalidOption", "Invalid option: %1", l);
              }
              delete i[l];
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (o = a.return)) {
              o.call(a);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
      return i;
    };
  })(r ||= {});
  exports.default = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
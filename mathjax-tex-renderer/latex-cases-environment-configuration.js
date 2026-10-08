// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'a' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(559929) to 'tex-base-command-map'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'c' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Renamed variable 'p' to 'mathjaxAmsConfiguration'
// - Resolved require(89265) to 'mathjax-ams-configuration'
// - Renamed variable 'h' to 'empheqMathLayoutUtil'
// - Resolved require(968741) to 'empheq-math-layout-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 311355
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.CasesConfiguration = exports.CasesMethods = exports.CasesTags = exports.CasesBeginItem = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var u = o(require("mathjax-utilities") /*id: 142412*/);
  var s = o(require("tex-base-command-map") /*id: 559929*/);
  var l = o(require("message-format-util") /*id: 342117*/);
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var mathjaxAmsConfiguration = require("mathjax-ams-configuration") /*id: 89265*/;
  var empheqMathLayoutUtil = require("empheq-math-layout-util") /*id: 968741*/;
  var f = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    n(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "cases-begin";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("end") && e.getName() === this.getName() && this.getProperty("end")) {
        this.setProperty("end", false);
        return [[], true];
      } else {
        return t.prototype.checkItem.call(this, e);
      }
    };
    return e;
  }(mathjaxEqnarrayTags.BeginItem);
  exports.CasesBeginItem = f;
  var d = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.subcounter = 0;
      return e;
    }
    n(e, t);
    e.prototype.start = function (e, Q, r) {
      this.subcounter = 0;
      t.prototype.start.call(this, e, Q, r);
    };
    e.prototype.autoTag = function () {
      if (this.currentTag.tag == null) {
        if (this.currentTag.env === "subnumcases") {
          if (this.subcounter === 0) {
            this.counter++;
          }
          this.subcounter++;
          this.tag(this.formatNumber(this.counter, this.subcounter), false);
        } else {
          if (this.subcounter === 0 || this.currentTag.env !== "numcases-left") {
            this.counter++;
          }
          this.tag(this.formatNumber(this.counter), false);
        }
      }
    };
    e.prototype.formatNumber = function (t, e = null) {
      return t.toString() + (e === null ? "" : String.fromCharCode(96 + e));
    };
    return e;
  }(mathjaxAmsConfiguration.AmsTags);
  exports.CasesTags = d;
  exports.CasesMethods = {
    NumCases: function (t, e) {
      if (t.stack.env.closing === e.getName()) {
        delete t.stack.env.closing;
        t.Push(t.itemFactory.create("end").setProperty("name", e.getName()));
        var Q = t.stack.Top();
        var r = Q.Last;
        var T = u.default.copyNode(r, t);
        var n = Q.getProperty("left");
        empheqMathLayoutUtil.EmpheqUtil.left(r, T, n + "\\empheqlbrace\\,", t, "numcases-left");
        t.Push(t.itemFactory.create("end").setProperty("name", e.getName()));
        return null;
      }
      var n = t.GetArgument("\\begin{" + e.getName() + "}");
      e.setProperty("left", n);
      var o = s.default.EqnArray(t, e, true, true, "ll");
      o.arraydef.displaystyle = false;
      o.arraydef.rowspacing = ".2em";
      o.setProperty("numCases", true);
      t.Push(e);
      return o;
    },
    Entry: function (t, e) {
      if (!t.stack.Top().getProperty("numCases")) {
        return s.default.Entry(t, e);
      }
      t.Push(t.itemFactory.create("cell").setProperties({
        isEntry: true,
        name: e
      }));
      var Q = t.string;
      var r = 0;
      var T = t.i;
      var n = Q.length;
      while (T < n) {
        var o = Q.charAt(T);
        if (o === "{") {
          r++;
          T++;
        } else if (o === "}") {
          if (r === 0) {
            break;
          }
          r--;
          T++;
        } else if (o === "&" && r === 0) {
          throw new l.default("ExtraCasesAlignTab", "Extra alignment tab in text for numcase environment");
        } else if (o === "\\" && r === 0) {
          var i = (Q.slice(T + 1).match(/^[a-z]+|./i) || [])[0];
          if (i === "\\" || i === "cr" || i === "end" || i === "label") {
            break;
          }
          T += i.length;
        } else {
          T++;
        }
      }
      var a = Q.substr(t.i, T - t.i).replace(/^\s*/, "");
      t.PushAll(u.default.internalMath(t, a, 0));
      t.i = T;
    }
  };
  new symbolParseMaps.EnvironmentMap("cases-env", empheqMathLayoutUtil.EmpheqUtil.environment, {
    numcases: ["NumCases", "cases"],
    subnumcases: ["NumCases", "cases"]
  }, exports.CasesMethods);
  new symbolParseMaps.MacroMap("cases-macros", {
    "&": "Entry"
  }, exports.CasesMethods);
  exports.CasesConfiguration = mathjaxParserConfiguration.Configuration.create("cases", {
    handler: {
      environment: ["cases-env"],
      character: ["cases-macros"]
    },
    items: ((T = {})[f.prototype.kind] = f, T),
    tags: {
      cases: d
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
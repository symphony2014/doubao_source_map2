// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'u' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'c' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Renamed variable 'p' to 'empheqMathLayoutUtil'
// - Resolved require(968741) to 'empheq-math-layout-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 414955
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
  var o = this && this.__read || function (t, e) {
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
  var i = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.EmpheqConfiguration = exports.EmpheqMethods = exports.EmpheqBeginItem = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var s = i(require("mathjax-utilities") /*id: 142412*/);
  var l = i(require("message-format-util") /*id: 342117*/);
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var empheqMathLayoutUtil = require("empheq-math-layout-util") /*id: 968741*/;
  var h = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    n(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "empheq-begin";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("end") && e.getName() === this.getName()) {
        this.setProperty("end", false);
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(mathjaxEqnarrayTags.BeginItem);
  exports.EmpheqBeginItem = h;
  exports.EmpheqMethods = {
    Empheq: function (t, e) {
      if (t.stack.env.closing === e.getName()) {
        delete t.stack.env.closing;
        t.Push(t.itemFactory.create("end").setProperty("name", t.stack.global.empheq));
        t.stack.global.empheq = "";
        var Q = t.stack.Top();
        empheqMathLayoutUtil.EmpheqUtil.adjustTable(Q, t);
        t.Push(t.itemFactory.create("end").setProperty("name", "empheq"));
      } else {
        s.default.checkEqnEnv(t);
        delete t.stack.global.eqnenv;
        var r = t.GetBrackets("\\begin{" + e.getName() + "}") || "";
        var T = o((t.GetArgument("\\begin{" + e.getName() + "}") || "").split(/=/), 2);
        var n = T[0];
        var i = T[1];
        if (!empheqMathLayoutUtil.EmpheqUtil.checkEnv(n)) {
          throw new l.default("UnknownEnv", "Unknown environment \"%1\"", n);
        }
        if (r) {
          e.setProperties(empheqMathLayoutUtil.EmpheqUtil.splitOptions(r, {
            left: 1,
            right: 1
          }));
        }
        t.stack.global.empheq = n;
        t.string = "\\begin{" + n + "}" + (i ? "{" + i + "}" : "") + t.string.slice(t.i);
        t.i = 0;
        t.Push(e);
      }
    },
    EmpheqMO: function (t, e, Q) {
      t.Push(t.create("token", "mo", {}, Q));
    },
    EmpheqDelim: function (t, e) {
      var Q = t.GetDelimiter(e);
      t.Push(t.create("token", "mo", {
        stretchy: true,
        symmetric: true
      }, Q));
    }
  };
  new symbolParseMaps.EnvironmentMap("empheq-env", empheqMathLayoutUtil.EmpheqUtil.environment, {
    empheq: ["Empheq", "empheq"]
  }, exports.EmpheqMethods);
  new symbolParseMaps.CommandMap("empheq-macros", {
    empheqlbrace: ["EmpheqMO", "{"],
    empheqrbrace: ["EmpheqMO", "}"],
    empheqlbrack: ["EmpheqMO", "["],
    empheqrbrack: ["EmpheqMO", "]"],
    empheqlangle: ["EmpheqMO", "⟨"],
    empheqrangle: ["EmpheqMO", "⟩"],
    empheqlparen: ["EmpheqMO", "("],
    empheqrparen: ["EmpheqMO", ")"],
    empheqlvert: ["EmpheqMO", "|"],
    empheqrvert: ["EmpheqMO", "|"],
    empheqlVert: ["EmpheqMO", "‖"],
    empheqrVert: ["EmpheqMO", "‖"],
    empheqlfloor: ["EmpheqMO", "⌊"],
    empheqrfloor: ["EmpheqMO", "⌋"],
    empheqlceil: ["EmpheqMO", "⌈"],
    empheqrceil: ["EmpheqMO", "⌉"],
    empheqbiglbrace: ["EmpheqMO", "{"],
    empheqbigrbrace: ["EmpheqMO", "}"],
    empheqbiglbrack: ["EmpheqMO", "["],
    empheqbigrbrack: ["EmpheqMO", "]"],
    empheqbiglangle: ["EmpheqMO", "⟨"],
    empheqbigrangle: ["EmpheqMO", "⟩"],
    empheqbiglparen: ["EmpheqMO", "("],
    empheqbigrparen: ["EmpheqMO", ")"],
    empheqbiglvert: ["EmpheqMO", "|"],
    empheqbigrvert: ["EmpheqMO", "|"],
    empheqbiglVert: ["EmpheqMO", "‖"],
    empheqbigrVert: ["EmpheqMO", "‖"],
    empheqbiglfloor: ["EmpheqMO", "⌊"],
    empheqbigrfloor: ["EmpheqMO", "⌋"],
    empheqbiglceil: ["EmpheqMO", "⌈"],
    empheqbigrceil: ["EmpheqMO", "⌉"],
    empheql: "EmpheqDelim",
    empheqr: "EmpheqDelim",
    empheqbigl: "EmpheqDelim",
    empheqbigr: "EmpheqDelim"
  }, exports.EmpheqMethods);
  exports.EmpheqConfiguration = mathjaxParserConfiguration.Configuration.create("empheq", {
    handler: {
      macro: ["empheq-macros"],
      environment: ["empheq-env"]
    },
    items: ((T = {})[h.prototype.kind] = h, T)
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'i' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'a' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'u' to 'mathmlNodeFactory'
// - Resolved require(88273) to 'mathml-node-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 744288
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
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
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.BoldsymbolConfiguration = exports.rewriteBoldTokens = exports.createBoldToken = exports.BoldsymbolMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var o = T(require("mathml-abstract-node-util") /*id: 352636*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var mathmlNodeFactory = require("mathml-node-factory") /*id: 88273*/;
  var s = {};
  function l(t, e, Q, r) {
    var T = mathmlNodeFactory.NodeFactory.createToken(t, e, Q, r);
    if (e !== "mtext" && t.configuration.parser.stack.env.boldsymbol) {
      o.default.setProperty(T, "fixBold", true);
      t.configuration.addNode("fixBold", T);
    }
    return T;
  }
  function c(t) {
    var e;
    var Q;
    try {
      var T = r(t.data.getList("fixBold"));
      var n = T.next();
      for (; !n.done; n = T.next()) {
        var a = n.value;
        if (o.default.getProperty(a, "fixBold")) {
          var u = o.default.getAttribute(a, "mathvariant");
          if (u == null) {
            o.default.setAttribute(a, "mathvariant", texConstantDefinitions.TexConstant.Variant.BOLD);
          } else {
            o.default.setAttribute(a, "mathvariant", s[u] || u);
          }
          o.default.removeProperties(a, "fixBold");
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (Q = T.return)) {
          Q.call(T);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  s[texConstantDefinitions.TexConstant.Variant.NORMAL] = texConstantDefinitions.TexConstant.Variant.BOLD;
  s[texConstantDefinitions.TexConstant.Variant.ITALIC] = texConstantDefinitions.TexConstant.Variant.BOLDITALIC;
  s[texConstantDefinitions.TexConstant.Variant.FRAKTUR] = texConstantDefinitions.TexConstant.Variant.BOLDFRAKTUR;
  s[texConstantDefinitions.TexConstant.Variant.SCRIPT] = texConstantDefinitions.TexConstant.Variant.BOLDSCRIPT;
  s[texConstantDefinitions.TexConstant.Variant.SANSSERIF] = texConstantDefinitions.TexConstant.Variant.BOLDSANSSERIF;
  s["-tex-calligraphic"] = "-tex-bold-calligraphic";
  s["-tex-oldstyle"] = "-tex-bold-oldstyle";
  s["-tex-mathit"] = texConstantDefinitions.TexConstant.Variant.BOLDITALIC;
  exports.BoldsymbolMethods = {};
  exports.BoldsymbolMethods.Boldsymbol = function (t, e) {
    var Q = t.stack.env.boldsymbol;
    t.stack.env.boldsymbol = true;
    var r = t.ParseArg(e);
    t.stack.env.boldsymbol = Q;
    t.Push(r);
  };
  new symbolParseMaps.CommandMap("boldsymbol", {
    boldsymbol: "Boldsymbol"
  }, exports.BoldsymbolMethods);
  exports.createBoldToken = l;
  exports.rewriteBoldTokens = c;
  exports.BoldsymbolConfiguration = mathjaxParserConfiguration.Configuration.create("boldsymbol", {
    handler: {
      macro: ["boldsymbol"]
    },
    nodes: {
      token: l
    },
    postprocessors: [c]
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'u' to 'mathjaxEntitiesUtil'
// - Resolved require(22642) to 'mathjax-entities-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 417917
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.UnicodeConfiguration = exports.UnicodeMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var n = r(require("message-format-util") /*id: 342117*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var i = r(require("mathjax-utilities") /*id: 142412*/);
  var a = r(require("mathml-abstract-node-util") /*id: 352636*/);
  var mathjaxEntitiesUtil = require("mathjax-entities-util") /*id: 22642*/;
  exports.UnicodeMethods = {};
  var s = {};
  exports.UnicodeMethods.Unicode = function (t, e) {
    var Q = t.GetBrackets(e);
    var r = null;
    var T = null;
    if (Q) {
      if (Q.replace(/ /g, "").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)) {
        r = Q.replace(/ /g, "").split(/,/);
        T = t.GetBrackets(e);
      } else {
        T = Q;
      }
    }
    var o = i.default.trimSpaces(t.GetArgument(e)).replace(/^0x/, "x");
    if (!o.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/)) {
      throw new n.default("BadUnicode", "Argument to \\unicode must be a number");
    }
    var l = parseInt(o.match(/^x/) ? "0" + o : o);
    if (s[l]) {
      T ||= s[l][2];
    } else {
      s[l] = [800, 200, T, l];
    }
    if (r) {
      s[l][0] = Math.floor(parseFloat(r[0]) * 1000);
      s[l][1] = Math.floor(parseFloat(r[1]) * 1000);
    }
    var c = t.stack.env.font;
    var p = {};
    if (T) {
      s[l][2] = p.fontfamily = T.replace(/'/g, "'");
      if (c) {
        if (c.match(/bold/)) {
          p.fontweight = "bold";
        }
        if (c.match(/italic|-mathit/)) {
          p.fontstyle = "italic";
        }
      }
    } else if (c) {
      p.mathvariant = c;
    }
    var h = t.create("token", "mtext", p, mathjaxEntitiesUtil.numeric(o));
    a.default.setProperty(h, "unicode", true);
    t.Push(h);
  };
  new symbolParseMaps.CommandMap("unicode", {
    unicode: "Unicode"
  }, exports.UnicodeMethods);
  exports.UnicodeConfiguration = mathjaxParserConfiguration.Configuration.create("unicode", {
    handler: {
      macro: ["unicode"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
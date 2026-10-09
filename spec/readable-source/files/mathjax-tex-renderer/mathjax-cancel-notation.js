// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'a' to 'mathjaxEncloseConfiguration'
// - Resolved require(747930) to 'mathjax-enclose-configuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 434185
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
  exports.CancelConfiguration = exports.CancelMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var i = r(require("mathjax-utilities") /*id: 142412*/);
  var mathjaxEncloseConfiguration = require("mathjax-enclose-configuration") /*id: 747930*/;
  exports.CancelMethods = {};
  exports.CancelMethods.Cancel = function (t, e, Q) {
    var r = t.GetBrackets(e, "");
    var T = t.ParseArg(e);
    var n = i.default.keyvalOptions(r, mathjaxEncloseConfiguration.ENCLOSE_OPTIONS);
    n.notation = Q;
    t.Push(t.create("node", "menclose", [T], n));
  };
  exports.CancelMethods.CancelTo = function (t, e) {
    var Q = t.GetBrackets(e, "");
    var r = t.ParseArg(e);
    var T = t.ParseArg(e);
    var o = i.default.keyvalOptions(Q, mathjaxEncloseConfiguration.ENCLOSE_OPTIONS);
    o.notation = [texConstantDefinitions.TexConstant.Notation.UPDIAGONALSTRIKE, texConstantDefinitions.TexConstant.Notation.UPDIAGONALARROW, texConstantDefinitions.TexConstant.Notation.NORTHEASTARROW].join(" ");
    r = t.create("node", "mpadded", [r], {
      depth: "-.1em",
      height: "+.1em",
      voffset: ".1em"
    });
    t.Push(t.create("node", "msup", [t.create("node", "menclose", [T], o), r]));
  };
  new symbolParseMaps.CommandMap("cancel", {
    cancel: ["Cancel", texConstantDefinitions.TexConstant.Notation.UPDIAGONALSTRIKE],
    bcancel: ["Cancel", texConstantDefinitions.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    xcancel: ["Cancel", texConstantDefinitions.TexConstant.Notation.UPDIAGONALSTRIKE + " " + texConstantDefinitions.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    cancelto: "CancelTo"
  }, exports.CancelMethods);
  exports.CancelConfiguration = mathjaxParserConfiguration.Configuration.create("cancel", {
    handler: {
      macro: ["cancel"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
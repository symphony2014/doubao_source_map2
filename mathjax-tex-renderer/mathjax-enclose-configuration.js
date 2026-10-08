// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(142412) to 'mathjax-utilities'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 747930
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
  exports.EncloseConfiguration = exports.EncloseMethods = exports.ENCLOSE_OPTIONS = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var o = r(require("mathjax-utilities") /*id: 142412*/);
  exports.ENCLOSE_OPTIONS = {
    "data-arrowhead": 1,
    color: 1,
    mathcolor: 1,
    background: 1,
    mathbackground: 1,
    "data-padding": 1,
    "data-thickness": 1
  };
  exports.EncloseMethods = {};
  exports.EncloseMethods.Enclose = function (t, Q) {
    var r = t.GetArgument(Q).replace(/,/g, " ");
    var T = t.GetBrackets(Q, "");
    var n = t.ParseArg(Q);
    var i = o.default.keyvalOptions(T, exports.ENCLOSE_OPTIONS);
    i.notation = r;
    t.Push(t.create("node", "menclose", [n], i));
  };
  new symbolParseMaps.CommandMap("enclose", {
    enclose: "Enclose"
  }, exports.EncloseMethods);
  exports.EncloseConfiguration = mathjaxParserConfiguration.Configuration.create("enclose", {
    handler: {
      macro: ["enclose"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
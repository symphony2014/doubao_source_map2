// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'o' to 'texAmsMethodsHandler'
// - Resolved require(528581) to 'tex-ams-methods-handler'
// - Resolved require(656307) to 'mathjax-symbol-macro-utils'
// - Renamed variable 'a' to 'newcommandConfigurationModule'
// - Resolved require(632594) to 'newcommand-configuration-module'
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 908475
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
  exports.ExtpfeilConfiguration = exports.ExtpfeilMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var texAmsMethodsHandler = require("tex-ams-methods-handler") /*id: 528581*/;
  var i = r(require("mathjax-symbol-macro-utils") /*id: 656307*/);
  var newcommandConfigurationModule = require("newcommand-configuration-module") /*id: 632594*/;
  var u = r(require("message-format-util") /*id: 342117*/);
  exports.ExtpfeilMethods = {};
  exports.ExtpfeilMethods.xArrow = texAmsMethodsHandler.AmsMethods.xArrow;
  exports.ExtpfeilMethods.NewExtArrow = function (t, Q) {
    var r = t.GetArgument(Q);
    var T = t.GetArgument(Q);
    var n = t.GetArgument(Q);
    if (!r.match(/^\\([a-z]+|.)$/i)) {
      throw new u.default("NewextarrowArg1", "First argument to %1 must be a control sequence name", Q);
    }
    if (!T.match(/^(\d+),(\d+)$/)) {
      throw new u.default("NewextarrowArg2", "Second argument to %1 must be two integers separated by a comma", Q);
    }
    if (!n.match(/^(\d+|0x[0-9A-F]+)$/i)) {
      throw new u.default("NewextarrowArg3", "Third argument to %1 must be a unicode character number", Q);
    }
    r = r.substr(1);
    var o = T.split(",");
    i.default.addMacro(t, r, exports.ExtpfeilMethods.xArrow, [parseInt(n), parseInt(o[0]), parseInt(o[1])]);
  };
  new symbolParseMaps.CommandMap("extpfeil", {
    xtwoheadrightarrow: ["xArrow", 8608, 12, 16],
    xtwoheadleftarrow: ["xArrow", 8606, 17, 13],
    xmapsto: ["xArrow", 8614, 6, 7],
    xlongequal: ["xArrow", 61, 7, 7],
    xtofrom: ["xArrow", 8644, 12, 12],
    Newextarrow: "NewExtArrow"
  }, exports.ExtpfeilMethods);
  exports.ExtpfeilConfiguration = mathjaxParserConfiguration.Configuration.create("extpfeil", {
    handler: {
      macro: ["extpfeil"]
    },
    init: function (t) {
      newcommandConfigurationModule.NewcommandConfiguration.init(t);
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
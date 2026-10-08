// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(559929) to 'tex-base-command-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 964225
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
  exports.ActionConfiguration = exports.ActionMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var n = r(require("mathjax-tex-parser") /*id: 658610*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var i = r(require("tex-base-command-map") /*id: 559929*/);
  exports.ActionMethods = {};
  exports.ActionMethods.Macro = i.default.Macro;
  exports.ActionMethods.Toggle = function (t, e) {
    var Q;
    var r = [];
    while ((Q = t.GetArgument(e)) !== "\\endtoggle") {
      r.push(new n.default(Q, t.stack.env, t.configuration).mml());
    }
    t.Push(t.create("node", "maction", r, {
      actiontype: "toggle"
    }));
  };
  exports.ActionMethods.Mathtip = function (t, e) {
    var Q = t.ParseArg(e);
    var r = t.ParseArg(e);
    t.Push(t.create("node", "maction", [Q, r], {
      actiontype: "tooltip"
    }));
  };
  new symbolParseMaps.CommandMap("action-macros", {
    toggle: "Toggle",
    mathtip: "Mathtip",
    texttip: ["Macro", "\\mathtip{#1}{\\text{#2}}", 2]
  }, exports.ActionMethods);
  exports.ActionConfiguration = mathjaxParserConfiguration.Configuration.create("action", {
    handler: {
      macro: ["action-macros"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
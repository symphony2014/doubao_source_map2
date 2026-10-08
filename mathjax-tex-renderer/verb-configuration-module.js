// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(342117) to 'message-format-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 115371
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
  exports.VerbConfiguration = exports.VerbMethods = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var i = r(require("message-format-util") /*id: 342117*/);
  exports.VerbMethods = {};
  exports.VerbMethods.Verb = function (t, e) {
    var Q = t.GetNext();
    var r = ++t.i;
    if (Q === "") {
      throw new i.default("MissingArgFor", "Missing argument for %1", e);
    }
    while (t.i < t.string.length && t.string.charAt(t.i) !== Q) {
      t.i++;
    }
    if (t.i === t.string.length) {
      throw new i.default("NoClosingDelim", "Can't find closing delimiter for %1", t.currentCS);
    }
    var T = t.string.slice(r, t.i).replace(/ /g, "\xA0");
    t.i++;
    t.Push(t.create("token", "mtext", {
      mathvariant: texConstantDefinitions.TexConstant.Variant.MONOSPACE
    }, T));
  };
  new symbolParseMaps.CommandMap("verb", {
    verb: "Verb"
  }, exports.VerbMethods);
  exports.VerbConfiguration = mathjaxParserConfiguration.Configuration.create("verb", {
    handler: {
      macro: ["verb"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
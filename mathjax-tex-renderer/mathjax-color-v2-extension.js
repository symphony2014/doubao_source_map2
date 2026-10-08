// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 765065
         */
module.exports = function (module, exports, require) {
  exports.ColorConfiguration = exports.ColorV2Methods = undefined;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  exports.ColorV2Methods = {
    Color: function (t, e) {
      var Q = t.GetArgument(e);
      var r = t.stack.env.color;
      t.stack.env.color = Q;
      var T = t.ParseArg(e);
      if (r) {
        t.stack.env.color = r;
      } else {
        delete t.stack.env.color;
      }
      var n = t.create("node", "mstyle", [T], {
        mathcolor: Q
      });
      t.Push(n);
    }
  };
  new symbolParseMaps.CommandMap("colorv2", {
    color: "Color"
  }, exports.ColorV2Methods);
  exports.ColorConfiguration = mathjaxParserConfiguration.Configuration.create("colorv2", {
    handler: {
      macro: ["colorv2"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
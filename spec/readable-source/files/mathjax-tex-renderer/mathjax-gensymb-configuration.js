// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'T' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Resolved require(664746) to 'symbol-parse-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 120667
         */
module.exports = function (module, exports, require) {
  exports.GensymbConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  new (require("symbol-parse-maps") /*id: 664746*/.CharacterMap)("gensymb-symbols", function (t, e) {
    var Q = e.attributes || {};
    Q.mathvariant = texConstantDefinitions.TexConstant.Variant.NORMAL;
    Q.class = "MathML-Unit";
    var r = t.create("token", "mi", Q, e.char);
    t.Push(r);
  }, {
    ohm: "Ω",
    degree: "°",
    celsius: "℃",
    perthousand: "‰",
    micro: "µ"
  });
  exports.GensymbConfiguration = mathjaxParserConfiguration.Configuration.create("gensymb", {
    handler: {
      macro: ["gensymb-symbols"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
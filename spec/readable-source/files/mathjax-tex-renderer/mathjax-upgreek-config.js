// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'T' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'n' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 562734
         */
module.exports = function (module, exports, require) {
  exports.UpgreekConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  new symbolParseMaps.CharacterMap("upgreek", function (t, e) {
    var Q = e.attributes || {};
    Q.mathvariant = texConstantDefinitions.TexConstant.Variant.NORMAL;
    var r = t.create("token", "mi", Q, e.char);
    t.Push(r);
  }, {
    upalpha: "α",
    upbeta: "β",
    upgamma: "γ",
    updelta: "δ",
    upepsilon: "ϵ",
    upzeta: "ζ",
    upeta: "η",
    uptheta: "θ",
    upiota: "ι",
    upkappa: "κ",
    uplambda: "λ",
    upmu: "μ",
    upnu: "ν",
    upxi: "ξ",
    upomicron: "ο",
    uppi: "π",
    uprho: "ρ",
    upsigma: "σ",
    uptau: "τ",
    upupsilon: "υ",
    upphi: "ϕ",
    upchi: "χ",
    uppsi: "ψ",
    upomega: "ω",
    upvarepsilon: "ε",
    upvartheta: "ϑ",
    upvarpi: "ϖ",
    upvarrho: "ϱ",
    upvarsigma: "ς",
    upvarphi: "φ",
    Upgamma: "Γ",
    Updelta: "Δ",
    Uptheta: "Θ",
    Uplambda: "Λ",
    Upxi: "Ξ",
    Uppi: "Π",
    Upsigma: "Σ",
    Upupsilon: "Υ",
    Upphi: "Φ",
    Uppsi: "Ψ",
    Upomega: "Ω"
  });
  exports.UpgreekConfiguration = mathjaxParserConfiguration.Configuration.create("upgreek", {
    handler: {
      macro: ["upgreek"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
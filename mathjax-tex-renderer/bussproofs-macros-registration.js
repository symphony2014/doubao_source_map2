// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(263761) to 'bussproofs-prooftree-handler'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 811466
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
  var T = r(require("bussproofs-prooftree-handler") /*id: 263761*/);
  var n = r(require("tex-parser-handlers") /*id: 921652*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  new symbolParseMaps.CommandMap("Bussproofs-macros", {
    AxiomC: "Axiom",
    UnaryInfC: ["Inference", 1],
    BinaryInfC: ["Inference", 2],
    TrinaryInfC: ["Inference", 3],
    QuaternaryInfC: ["Inference", 4],
    QuinaryInfC: ["Inference", 5],
    RightLabel: ["Label", "right"],
    LeftLabel: ["Label", "left"],
    AXC: "Axiom",
    UIC: ["Inference", 1],
    BIC: ["Inference", 2],
    TIC: ["Inference", 3],
    RL: ["Label", "right"],
    LL: ["Label", "left"],
    noLine: ["SetLine", "none", false],
    singleLine: ["SetLine", "solid", false],
    solidLine: ["SetLine", "solid", false],
    dashedLine: ["SetLine", "dashed", false],
    alwaysNoLine: ["SetLine", "none", true],
    alwaysSingleLine: ["SetLine", "solid", true],
    alwaysSolidLine: ["SetLine", "solid", true],
    alwaysDashedLine: ["SetLine", "dashed", true],
    rootAtTop: ["RootAtTop", true],
    alwaysRootAtTop: ["RootAtTop", true],
    rootAtBottom: ["RootAtTop", false],
    alwaysRootAtBottom: ["RootAtTop", false],
    fCenter: "FCenter",
    Axiom: "AxiomF",
    UnaryInf: ["InferenceF", 1],
    BinaryInf: ["InferenceF", 2],
    TrinaryInf: ["InferenceF", 3],
    QuaternaryInf: ["InferenceF", 4],
    QuinaryInf: ["InferenceF", 5]
  }, T.default);
  new symbolParseMaps.EnvironmentMap("Bussproofs-environments", n.default.environment, {
    prooftree: ["Prooftree", null, false]
  }, T.default);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
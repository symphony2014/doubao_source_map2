// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'mathmlTexStackItem'
// - Resolved require(159878) to 'mathml-tex-stack-item'
// - Resolved require(91210) to 'tex-physics-macro-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 403920
         */
module.exports = function (module, exports, require) {
  exports.PhysicsConfiguration = undefined;
  var r;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var mathmlTexStackItem = require("mathml-tex-stack-item") /*id: 159878*/;
  require("tex-physics-macro-registry") /*id: 91210*/;
  exports.PhysicsConfiguration = mathjaxParserConfiguration.Configuration.create("physics", {
    handler: {
      macro: ["Physics-automatic-bracing-macros", "Physics-vector-macros", "Physics-vector-mo", "Physics-vector-mi", "Physics-derivative-macros", "Physics-expressions-macros", "Physics-quick-quad-macros", "Physics-bra-ket-macros", "Physics-matrix-macros"],
      character: ["Physics-characters"],
      environment: ["Physics-aux-envs"]
    },
    items: ((r = {})[mathmlTexStackItem.AutoOpen.prototype.kind] = mathmlTexStackItem.AutoOpen, r),
    options: {
      physics: {
        italicdiff: false,
        arrowdel: false
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
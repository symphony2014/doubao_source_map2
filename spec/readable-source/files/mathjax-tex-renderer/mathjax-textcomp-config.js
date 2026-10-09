// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(912919) to 'textcomp-macros-command-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 235546
         */
module.exports = function (module, exports, require) {
  exports.TextcompConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  require("textcomp-macros-command-map") /*id: 912919*/;
  exports.TextcompConfiguration = mathjaxParserConfiguration.Configuration.create("textcomp", {
    handler: {
      macro: ["textcomp-macros"]
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
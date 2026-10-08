// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(715065) to 'mathjax-amscd-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 204170
         */
module.exports = function (module, exports, require) {
  exports.AmsCdConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  require("mathjax-amscd-maps") /*id: 715065*/;
  exports.AmsCdConfiguration = mathjaxParserConfiguration.Configuration.create("amscd", {
    handler: {
      character: ["amscd_special"],
      macro: ["amscd_macros"],
      environment: ["amscd_environment"]
    },
    options: {
      amscd: {
        colspace: "5pt",
        rowspace: "5pt",
        harrowsize: "2.75em",
        varrowsize: "1.75em",
        hideHorizontalLabels: false
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 258923
         */
module.exports = function (module, exports, require) {
  exports.NoErrorsConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  exports.NoErrorsConfiguration = mathjaxParserConfiguration.Configuration.create("noerrors", {
    nodes: {
      error: function (t, e, Q, r) {
        var T = t.create("token", "mtext", {}, r.replace(/\n/g, " "));
        return t.create("node", "merror", [T], {
          "data-mjx-error": e,
          title: e
        });
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
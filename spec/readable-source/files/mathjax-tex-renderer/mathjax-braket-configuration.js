// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'mathmlBraketStackItem'
// - Resolved require(915425) to 'mathml-braket-stack-item'
// - Resolved require(352735) to 'tex-braket-macros-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 245701
         */
module.exports = function (module, exports, require) {
  exports.BraketConfiguration = undefined;
  var r;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var mathmlBraketStackItem = require("mathml-braket-stack-item") /*id: 915425*/;
  require("tex-braket-macros-map") /*id: 352735*/;
  exports.BraketConfiguration = mathjaxParserConfiguration.Configuration.create("braket", {
    handler: {
      character: ["Braket-characters"],
      macro: ["Braket-macros"]
    },
    items: ((r = {})[mathmlBraketStackItem.BraketItem.prototype.kind] = mathmlBraketStackItem.BraketItem, r)
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
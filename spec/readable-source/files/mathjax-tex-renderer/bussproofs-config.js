// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'n' to 'proofTreeItemProcessor'
// - Resolved require(969412) to 'proof-tree-item-processor'
// - Renamed variable 'o' to 'bussproofsMathmlLayoutBalancer'
// - Resolved require(526347) to 'bussproofs-mathml-layout-balancer'
// - Resolved require(811466) to 'bussproofs-macros-registration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 572783
         */
module.exports = function (module, exports, require) {
  exports.BussproofsConfiguration = undefined;
  var r;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var proofTreeItemProcessor = require("proof-tree-item-processor") /*id: 969412*/;
  var bussproofsMathmlLayoutBalancer = require("bussproofs-mathml-layout-balancer") /*id: 526347*/;
  require("bussproofs-macros-registration") /*id: 811466*/;
  exports.BussproofsConfiguration = mathjaxParserConfiguration.Configuration.create("bussproofs", {
    handler: {
      macro: ["Bussproofs-macros"],
      environment: ["Bussproofs-environments"]
    },
    items: ((r = {})[proofTreeItemProcessor.ProofTreeItem.prototype.kind] = proofTreeItemProcessor.ProofTreeItem, r),
    preprocessors: [[bussproofsMathmlLayoutBalancer.saveDocument, 1]],
    postprocessors: [[bussproofsMathmlLayoutBalancer.clearDocument, 3], [bussproofsMathmlLayoutBalancer.makeBsprAttributes, 2], [bussproofsMathmlLayoutBalancer.balanceRules, 1]]
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
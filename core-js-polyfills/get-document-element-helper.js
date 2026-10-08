// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 749727
         */
module.exports = function (module, exports, require) {
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  module.exports = globalNamespaceUtil("document", "documentElement");
}
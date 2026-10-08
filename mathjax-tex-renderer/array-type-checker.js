// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'T' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 182968
         */
module.exports = function (module, exports, require) {
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  var n = symbolWellKnownRegistry("iterator");
  var o = Array.prototype;
  module.exports = function (t) {
    return t !== undefined && (emptyModuleExport.Array === t || o[n] === t);
  };
}
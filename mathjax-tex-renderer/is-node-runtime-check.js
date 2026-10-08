// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'runtimeEnvironmentDetector'
// - Resolved require(534570) to 'runtime-environment-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 57561
         */
module.exports = function (module, exports, require) {
  var runtimeEnvironmentDetector = require("runtime-environment-detector") /*id: 534570*/;
  module.exports = runtimeEnvironmentDetector === "NODE";
}
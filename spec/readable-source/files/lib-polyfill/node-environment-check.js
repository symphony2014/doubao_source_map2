// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'runtimeEnvironmentDetector_1'
// - Resolved require(279839) to 'runtime-environment-detector_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 705753
         */
module.exports = function (module, exports, require) {
  var runtimeEnvironmentDetector_1 = require("runtime-environment-detector_1") /*id: 279839*/;
  module.exports = runtimeEnvironmentDetector_1 === "NODE";
}
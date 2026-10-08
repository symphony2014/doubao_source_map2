// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'symbolFeatureDetection'
// - Resolved require(793478) to 'symbol-feature-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 708085
         */
module.exports = function (module, exports, require) {
  var symbolFeatureDetection = require("symbol-feature-detection") /*id: 793478*/;
  module.exports = function () {
    return symbolFeatureDetection() && !!Symbol.toStringTag;
  };
}
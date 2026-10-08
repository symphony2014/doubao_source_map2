// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'symbolFeatureDetection'
// - Resolved require(793478) to 'symbol-feature-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 237121
         */
module.exports = function (module, exports, require) {
  var n = typeof Symbol != "undefined" && Symbol;
  var symbolFeatureDetection = require("symbol-feature-detection") /*id: 793478*/;
  module.exports = function () {
    return typeof n == "function" && typeof Symbol == "function" && typeof n("foo") == "symbol" && typeof Symbol("bar") == "symbol" && symbolFeatureDetection();
  };
}
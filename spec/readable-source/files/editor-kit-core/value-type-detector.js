// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'valueTypeDetectorUtil'
// - Resolved require(292559) to 'value-type-detector-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 872717
         */
module.exports = function (module, exports, require) {
  var valueTypeDetectorUtil = require("value-type-detector-util") /*id: 292559*/;
  module.exports = function (t) {
    if (typeof t == "symbol") {
      return "Symbol";
    } else if (typeof t == "bigint") {
      return "BigInt";
    } else {
      return valueTypeDetectorUtil(t);
    }
  };
}
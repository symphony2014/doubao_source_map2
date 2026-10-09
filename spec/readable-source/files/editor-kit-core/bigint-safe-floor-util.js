// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathFloorUtil'
// - Resolved require(847614) to 'math-floor-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 695814
         */
module.exports = function (module, exports, require) {
  var mathFloorUtil = require("math-floor-util") /*id: 847614*/;
  module.exports = function (t) {
    if (typeof t == "bigint") {
      return t;
    } else {
      return mathFloorUtil(t);
    }
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'bigintSafeFloorUtil'
// - Resolved require(695814) to 'bigint-safe-floor-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 290982
         */
module.exports = function (module, exports, require) {
  var bigintSafeFloorUtil = require("bigint-safe-floor-util") /*id: 695814*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t) {
    if (typeof t != "number" && typeof t != "bigint") {
      throw new typeErrorConstructor("argument must be a Number or a BigInt");
    }
    var e = t < 0 ? -bigintSafeFloorUtil(-t) : bigintSafeFloorUtil(t);
    if (e === 0) {
      return 0;
    } else {
      return e;
    }
  };
}
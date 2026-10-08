// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'numberMaxSafeInteger'
// - Resolved require(100078) to 'number-max-safe-integer'
// - Renamed variable 'o' to 'numberToIntegerSafeUtil'
// - Resolved require(400312) to 'number-to-integer-safe-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 259631
         */
module.exports = function (module, exports, require) {
  var numberMaxSafeInteger = require("number-max-safe-integer") /*id: 100078*/;
  var numberToIntegerSafeUtil = require("number-to-integer-safe-util") /*id: 400312*/;
  module.exports = function (t) {
    var e = numberToIntegerSafeUtil(t);
    if (e <= 0) {
      return 0;
    } else if (e > numberMaxSafeInteger) {
      return numberMaxSafeInteger;
    } else {
      return e;
    }
  };
}
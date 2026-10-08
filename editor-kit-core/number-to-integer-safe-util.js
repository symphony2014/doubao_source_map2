// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toNumberUtil_1_1'
// - Resolved require(165571) to 'to-number-util_1_1'
// - Renamed variable 'o' to 'bigintSafeFloorUtil_1'
// - Resolved require(290982) to 'bigint-safe-floor-util_1'
// - Renamed variable 'i' to 'numberIsNanPolyfill'
// - Resolved require(900430) to 'number-is-nan-polyfill'
// - Renamed variable 'u' to 'isFiniteNumberValidator'
// - Resolved require(394050) to 'is-finite-number-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 400312
         */
module.exports = function (module, exports, require) {
  var toNumberUtil_1_1 = require("to-number-util_1_1") /*id: 165571*/;
  var bigintSafeFloorUtil_1 = require("bigint-safe-floor-util_1") /*id: 290982*/;
  var numberIsNanPolyfill = require("number-is-nan-polyfill") /*id: 900430*/;
  var isFiniteNumberValidator = require("is-finite-number-validator") /*id: 394050*/;
  module.exports = function (t) {
    var e = toNumberUtil_1_1(t);
    if (numberIsNanPolyfill(e) || e === 0) {
      return 0;
    } else if (isFiniteNumberValidator(e)) {
      return bigintSafeFloorUtil_1(e);
    } else {
      return e;
    }
  };
}
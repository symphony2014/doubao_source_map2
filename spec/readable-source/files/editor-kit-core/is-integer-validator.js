// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathAbsoluteValue'
// - Resolved require(846141) to 'math-absolute-value'
// - Renamed variable 'o' to 'mathFloorUtil'
// - Resolved require(847614) to 'math-floor-util'
// - Renamed variable 'i' to 'numberIsNanPolyfill'
// - Resolved require(900430) to 'number-is-nan-polyfill'
// - Renamed variable 'u' to 'isFiniteNumberValidator'
// - Resolved require(394050) to 'is-finite-number-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 426187
         */
module.exports = function (module, exports, require) {
  var mathAbsoluteValue = require("math-absolute-value") /*id: 846141*/;
  var mathFloorUtil = require("math-floor-util") /*id: 847614*/;
  var numberIsNanPolyfill = require("number-is-nan-polyfill") /*id: 900430*/;
  var isFiniteNumberValidator = require("is-finite-number-validator") /*id: 394050*/;
  module.exports = function (t) {
    if (typeof t != "number" || numberIsNanPolyfill(t) || !isFiniteNumberValidator(t)) {
      return false;
    }
    var e = mathAbsoluteValue(t);
    return mathFloorUtil(e) === e;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utf16CodePointUtil'
// - Resolved require(323239) to 'utf16-code-point-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'i' to 'isIntegerValidator'
// - Resolved require(426187) to 'is-integer-validator'
// - Renamed variable 'u' to 'numberMaxSafeInteger'
// - Resolved require(100078) to 'number-max-safe-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 537963
         */
module.exports = function (module, exports, require) {
  var utf16CodePointUtil = require("utf16-code-point-util") /*id: 323239*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var isIntegerValidator = require("is-integer-validator") /*id: 426187*/;
  var numberMaxSafeInteger = require("number-max-safe-integer") /*id: 100078*/;
  module.exports = function (t, e, r) {
    if (typeof t != "string") {
      throw new typeErrorConstructor("Assertion failed: `S` must be a String");
    }
    if (!isIntegerValidator(e) || e < 0 || e > numberMaxSafeInteger) {
      throw new typeErrorConstructor("Assertion failed: `length` must be an integer >= 0 and <= 2**53");
    }
    if (typeof r != "boolean") {
      throw new typeErrorConstructor("Assertion failed: `unicode` must be a Boolean");
    }
    if (!r || e + 1 >= t.length) {
      return e + 1;
    }
    var a = utf16CodePointUtil(t, e);
    return e + a["[[CodeUnitCount]]"];
  };
}
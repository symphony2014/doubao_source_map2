// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'arrayIsArrayPolyfill_1'
// - Resolved require(959884) to 'array-is-array-polyfill_1'
// - Renamed variable 'o' to 'functionConstructorCheck'
// - Resolved require(275428) to 'function-constructor-check'
// - Renamed variable 'i' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 651679
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayPolyfill_1 = require("array-is-array-polyfill_1") /*id: 959884*/;
  var functionConstructorCheck = require("function-constructor-check") /*id: 275428*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var u = require("symbol-well-known-registry") /*id: 21227*/("species");
  var c = Array;
  module.exports = function (t) {
    var r;
    if (arrayIsArrayPolyfill_1(t)) {
      if (functionConstructorCheck(r = t.constructor) && (r === c || arrayIsArrayPolyfill_1(r.prototype))) {
        r = undefined;
      } else if (isObjectOrFunction_1(r) && (r = r[u]) === null) {
        r = undefined;
      }
    }
    if (r === undefined) {
      return c;
    } else {
      return r;
    }
  };
}
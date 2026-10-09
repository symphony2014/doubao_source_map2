// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'arrayFillUtil'
// - Resolved require(222053) to 'array-fill-util'
// - Renamed variable 'i' to 'bigintConversionPolyfill'
// - Resolved require(987764) to 'bigint-conversion-polyfill'
// - Renamed variable 'a' to 'objectTypeDetectorPolyfill'
// - Resolved require(549562) to 'object-type-detector-polyfill'
// - Renamed variable 'd' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'r' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 144186
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var arrayFillUtil = require("array-fill-util") /*id: 222053*/;
  var bigintConversionPolyfill = require("bigint-conversion-polyfill") /*id: 987764*/;
  var objectTypeDetectorPolyfill = require("object-type-detector-polyfill") /*id: 549562*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var B = typedArrayPolyfillUtil.aTypedArray;
  var R = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var c = functionBindFallback("".slice);
  R("fill", function (U) {
    var n = arguments.length;
    B(this);
    return callBindPolyfill(arrayFillUtil, this, c(objectTypeDetectorPolyfill(this), 0, 3) === "Big" ? bigintConversionPolyfill(U) : +U, n > 1 ? arguments[1] : undefined, n > 2 ? arguments[2] : undefined);
  }, tryCatchFunctionWrapper(function () {
    var U = 0;
    new Int8Array(2).fill({
      valueOf: function () {
        return U++;
      }
    });
    return U !== 1;
  }));
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'l' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'i' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'd' to 'safeArrayMethodCheck_1'
// - Resolved require(811572) to 'safe-array-method-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 699257
         */
module.exports = function (module, exports, require) {
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var safeArrayMethodCheck_1 = require("safe-array-method-check_1") /*id: 811572*/;
  var r = Math.min;
  var o = [].lastIndexOf;
  var B = !!o && 1 / [1].lastIndexOf(1, -0) < 0;
  var R = safeArrayMethodCheck_1("lastIndexOf");
  module.exports = B || !R ? function (U) {
    if (B) {
      return reflectApplyPolyfill_1(o, this, arguments) || 0;
    }
    var n = stringToArrayPolyfillWrapper(this);
    var F = getArrayLengthSafe(n);
    if (F === 0) {
      return -1;
    }
    var d = F - 1;
    if (arguments.length > 1) {
      d = r(d, mathTruncPolyfill_2(arguments[1]));
    }
    if (d < 0) {
      d = F + d;
    }
    for (; d >= 0; d--) {
      if (d in n && n[d] === U) {
        return d || 0;
      }
    }
    return -1;
  } : o;
}
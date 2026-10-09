// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'o' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'i' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 454466
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("at", function (t) {
    var r = a(this);
    var e = getArrayLengthSafe(r);
    var n = mathTruncPolyfill_2(t);
    var u = n >= 0 ? n : e + n;
    if (u < 0 || u >= e) {
      return undefined;
    } else {
      return r[u];
    }
  });
}
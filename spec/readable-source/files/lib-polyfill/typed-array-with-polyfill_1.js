// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayWithPolyfill'
// - Resolved require(552432) to 'typed-array-with-polyfill'
// - Renamed variable 'o' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'i' to 'isBigIntArrayCheck'
// - Resolved require(821863) to 'is-big-int-array-check'
// - Renamed variable 'a' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'u' to 'bigintConversionPolyfill'
// - Resolved require(987764) to 'bigint-conversion-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 306329
         */
module.exports = function (module, exports, require) {
  var typedArrayWithPolyfill = require("typed-array-with-polyfill") /*id: 552432*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var isBigIntArrayCheck = require("is-big-int-array-check") /*id: 821863*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var bigintConversionPolyfill = require("bigint-conversion-polyfill") /*id: 987764*/;
  var c = typedArrayPolyfillUtil.aTypedArray;
  var f = typedArrayPolyfillUtil.getTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayMethod("with", {
    with: function (t, r) {
      var e = c(this);
      var o = mathTruncPolyfill_2(t);
      var s = isBigIntArrayCheck(e) ? bigintConversionPolyfill(r) : +r;
      return typedArrayWithPolyfill(e, f(e), o, s);
    }
  }.with, !function () {
    try {
      new Int8Array(1).with(2, {
        valueOf: function () {
          throw 8;
        }
      });
    } catch (t) {
      return t === 8;
    }
  }());
}
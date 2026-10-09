// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 456642
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  var d = typedArrayPolyfillUtil.getTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayMethod("slice", function (U, n) {
    var F = arraySlicePolyfill_2(a(this), U, n);
    var Q = d(this);
    var l = 0;
    var r = F.length;
    var o = new Q(r);
    while (r > l) {
      o[l] = F[l++];
    }
    return o;
  }, tryCatchFunctionWrapper(function () {
    new Int8Array(1).slice();
  }));
}
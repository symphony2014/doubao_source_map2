// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'i' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'd' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 381526
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var r = globalObjectPolyfill.Int8Array;
  var o = typedArrayPolyfillUtil.aTypedArray;
  var B = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var R = [].toLocaleString;
  var c = !!r && tryCatchFunctionWrapper(function () {
    R.call(new r(1));
  });
  B("toLocaleString", function () {
    return reflectApplyPolyfill_1(R, c ? arraySlicePolyfill_2(o(this)) : o(this), arraySlicePolyfill_2(arguments));
  }, tryCatchFunctionWrapper(function () {
    return [1, 2].toLocaleString() !== new r([1, 2]).toLocaleString();
  }) || !tryCatchFunctionWrapper(function () {
    r.prototype.toLocaleString.call([1, 2]);
  }));
}
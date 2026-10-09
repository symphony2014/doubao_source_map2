// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'd' to 'arrayIteratorPolyfill'
// - Resolved require(710239) to 'array-iterator-polyfill'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 670824
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var arrayIteratorPolyfill = require("array-iterator-polyfill") /*id: 710239*/;
  var r = require("core-js-wks-access") /*id: 349338*/("iterator");
  var o = globalObjectPolyfill.Uint8Array;
  var B = functionBindFallback(arrayIteratorPolyfill.values);
  var R = functionBindFallback(arrayIteratorPolyfill.keys);
  var c = functionBindFallback(arrayIteratorPolyfill.entries);
  var s = typedArrayPolyfillUtil.aTypedArray;
  var V = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var Z = o && o.prototype;
  var h = !tryCatchFunctionWrapper(function () {
    Z[r].call([1]);
  });
  var u = !!Z && Z.values && Z[r] === Z.values && Z.values.name === "values";
  function S() {
    return B(s(this));
  }
  V("entries", function () {
    return c(s(this));
  }, h);
  V("keys", function () {
    return R(s(this));
  }, h);
  V("values", S, h || !u, {
    name: "values"
  });
  V(r, S, h || !u, {
    name: "values"
  });
}
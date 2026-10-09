// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'i' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// - Renamed variable 'a' to 'arrayUniqueByPolyfill'
// - Resolved require(904662) to 'array-unique-by-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 274739
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var arrayUniqueByPolyfill = require("array-unique-by-polyfill") /*id: 904662*/;
  var u = typedArrayPolyfillUtil.aTypedArray;
  var c = typedArrayPolyfillUtil.getTypedArrayConstructor;
  var f = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var s = functionBindFallback(arrayUniqueByPolyfill);
  f("uniqueBy", function (t) {
    u(this);
    return safeArrayCreateUtil(c(this), s(this, t));
  }, true);
}
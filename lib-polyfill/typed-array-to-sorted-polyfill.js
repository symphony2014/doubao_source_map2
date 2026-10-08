// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 554043
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var u = typedArrayPolyfillUtil.aTypedArray;
  var c = typedArrayPolyfillUtil.getTypedArrayConstructor;
  var f = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var s = functionBindFallback(typedArrayPolyfillUtil.TypedArrayPrototype.sort);
  f("toSorted", function (t) {
    if (t !== undefined) {
      functionValidator(t);
    }
    var r = u(this);
    return s(safeArrayCreateUtil(c(r), r), t);
  });
}
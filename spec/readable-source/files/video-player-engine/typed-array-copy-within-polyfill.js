// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'l' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Resolved require(380917) to 'array-copy-within-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 330481
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var i = functionBindFallback(require("array-copy-within-polyfill") /*id: 380917*/);
  var a = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("copyWithin", function (U, n) {
    return i(a(this), U, n, arguments.length > 2 ? arguments[2] : undefined);
  });
}
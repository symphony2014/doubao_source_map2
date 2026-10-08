// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 502911
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var i = typedArrayPolyfillUtil.aTypedArray;
  var a = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var d = functionBindFallback([].join);
  a("join", function (U) {
    return d(i(this), U);
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Resolved require(20634) to 'array-reduce-polyfill-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 849578
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var l = require("array-reduce-polyfill-implementation") /*id: 20634*/.right;
  var i = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("reduceRight", function (U) {
    var n = arguments.length;
    return l(i(this), U, n, n > 1 ? arguments[1] : undefined);
  });
}
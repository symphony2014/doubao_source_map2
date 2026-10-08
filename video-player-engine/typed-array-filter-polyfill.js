// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Renamed variable 'i' to 'typedArrayCreateUtil'
// - Resolved require(254587) to 'typed-array-create-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 887479
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var l = require("array-iteration-polyfill") /*id: 343120*/.filter;
  var typedArrayCreateUtil = require("typed-array-create-util") /*id: 254587*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("filter", function (U) {
    var n = l(a(this), U, arguments.length > 1 ? arguments[1] : undefined);
    return typedArrayCreateUtil(this, n);
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'o' to 'arrayGroupByPolyfill'
// - Resolved require(106940) to 'array-group-by-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 227572
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var arrayGroupByPolyfill = require("array-group-by-polyfill") /*id: 106940*/;
  var i = typedArrayPolyfillUtil.aTypedArray;
  var a = typedArrayPolyfillUtil.getTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayMethod("groupBy", function (t, r) {
    return arrayGroupByPolyfill(i(this), t, r, a);
  }, true);
}
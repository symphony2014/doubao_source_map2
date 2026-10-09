// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'i' to 'arrayLastIndexOfPolyfill'
// - Resolved require(699257) to 'array-last-index-of-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 744517
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var arrayLastIndexOfPolyfill = require("array-last-index-of-polyfill") /*id: 699257*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("lastIndexOf", function (U) {
    var n = arguments.length;
    return reflectApplyPolyfill_1(arrayLastIndexOfPolyfill, a(this), n > 1 ? [U, arguments[1]] : [U]);
  });
}
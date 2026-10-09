// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Resolved require(908426) to 'find-last-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 672337
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var o = require("find-last-polyfill-util") /*id: 908426*/.findLastIndex;
  var i = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("findLastIndex", function (t) {
    return o(i(this), t, arguments.length > 1 ? arguments[1] : undefined);
  });
}
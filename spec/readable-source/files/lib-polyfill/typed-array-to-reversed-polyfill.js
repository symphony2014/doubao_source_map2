// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reverseArrayUtil'
// - Resolved require(336328) to 'reverse-array-util'
// - Renamed variable 'o' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 72193
         */
module.exports = function (module, exports, require) {
  var reverseArrayUtil = require("reverse-array-util") /*id: 336328*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var i = typedArrayPolyfillUtil.aTypedArray;
  var a = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var u = typedArrayPolyfillUtil.getTypedArrayConstructor;
  a("toReversed", function () {
    return reverseArrayUtil(i(this), u(this));
  });
}
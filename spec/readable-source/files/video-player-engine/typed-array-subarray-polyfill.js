// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'l' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 'i' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 128610
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  var d = typedArrayPolyfillUtil.getTypedArrayConstructor;
  typedArrayPolyfillUtil.exportTypedArrayMethod("subarray", function (U, n) {
    var F = a(this);
    var Q = F.length;
    var r = mathTruncClamp(U, Q);
    return new (d(F))(F.buffer, F.byteOffset + r * F.BYTES_PER_ELEMENT, clampSafeInteger((n === undefined ? Q : mathTruncClamp(n, Q)) - r));
  });
}
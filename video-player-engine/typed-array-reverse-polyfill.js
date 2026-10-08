// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 181798
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var l = typedArrayPolyfillUtil.aTypedArray;
  var i = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var a = Math.floor;
  i("reverse", function () {
    var U;
    var n = l(this).length;
    var F = a(n / 2);
    var Q = 0;
    while (Q < F) {
      U = this[Q];
      this[Q++] = this[--n];
      this[n] = U;
    }
    return this;
  });
}
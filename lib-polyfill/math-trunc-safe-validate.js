// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'o' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 120156
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var i = RangeError;
  module.exports = function (t) {
    if (t === undefined) {
      return 0;
    }
    var r = mathTruncPolyfill_2(t);
    var e = clampSafeInteger(r);
    if (r !== e) {
      throw new i("Wrong length or index");
    }
    return e;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'o' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'i' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 226207
         */
module.exports = function (module, exports, require) {
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var a = RangeError;
  module.exports = function (t) {
    var r = symbolToStringConverter_1(requireNotNullish(this));
    var e = "";
    var u = mathTruncPolyfill_2(t);
    if (u < 0 || u === Infinity) {
      throw new a("Wrong number of repetitions");
    }
    for (; u > 0; (u >>>= 1) && (r += r)) {
      if (u & 1) {
        e += r;
      }
    }
    return e;
  };
}
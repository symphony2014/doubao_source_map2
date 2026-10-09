// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 'i' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'a' to 'stringRepeatPolyfill'
// - Resolved require(226207) to 'string-repeat-polyfill'
// - Renamed variable 'u' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 382872
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var stringRepeatPolyfill = require("string-repeat-polyfill") /*id: 226207*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var c = functionBindFallback(stringRepeatPolyfill);
  var f = functionBindFallback("".slice);
  var s = Math.ceil;
  function l(t) {
    return function (r, e, n) {
      var a;
      var l;
      var v = symbolToStringConverter_1(requireNotNullish(r));
      var p = clampSafeInteger(e);
      var h = v.length;
      var d = n === undefined ? " " : symbolToStringConverter_1(n);
      if (p <= h || d === "") {
        return v;
      } else {
        if ((l = c(d, s((a = p - h) / d.length))).length > a) {
          l = f(l, 0, a);
        }
        if (t) {
          return v + l;
        } else {
          return l + v;
        }
      }
    };
  }
  module.exports = {
    start: l(false),
    end: l(true)
  };
}
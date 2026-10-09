// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'i' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'a' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 905844
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var u = functionBindFallback("".charAt);
  var c = functionBindFallback("".charCodeAt);
  var f = functionBindFallback("".slice);
  function s(t) {
    return function (r, e) {
      var n;
      var s;
      var l = symbolToStringConverter_1(requireNotNullish(r));
      var v = mathTruncPolyfill_2(e);
      var p = l.length;
      if (v < 0 || v >= p) {
        if (t) {
          return "";
        } else {
          return undefined;
        }
      } else if ((n = c(l, v)) < 55296 || n > 56319 || v + 1 === p || (s = c(l, v + 1)) < 56320 || s > 57343) {
        if (t) {
          return u(l, v);
        } else {
          return n;
        }
      } else if (t) {
        return f(l, v, v + 2);
      } else {
        return (n - 55296 << 10) + (s - 56320) + 65536;
      }
    };
  }
  module.exports = {
    codeAt: s(false),
    charAt: s(true)
  };
}
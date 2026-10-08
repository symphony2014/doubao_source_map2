// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'l' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'i' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'a' to 'unicodeWhitespaceChars'
// - Resolved require(683193) to 'unicode-whitespace-chars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 700296
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var unicodeWhitespaceChars = require("unicode-whitespace-chars") /*id: 683193*/;
  var d = functionBindFallback("".replace);
  var r = RegExp("^[" + unicodeWhitespaceChars + "]+");
  var o = RegExp("(^|[^" + unicodeWhitespaceChars + "])[" + unicodeWhitespaceChars + "]+$");
  function B(U) {
    return function (n) {
      var F = symbolToStringConverter_1(requireNotNullish(n));
      if (U & 1) {
        F = d(F, r, "");
      }
      if (U & 2) {
        F = d(F, o, "$1");
      }
      return F;
    };
  }
  module.exports = {
    start: B(1),
    end: B(2),
    trim: B(3)
  };
}
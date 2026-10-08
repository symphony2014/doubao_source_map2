// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'a' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 623281
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var u = functionBindFallback("".charCodeAt);
  polyfillPropertyDefiner({
    target: "String",
    proto: true
  }, {
    isWellFormed: function () {
      var t = symbolToStringConverter_1(requireNotNullish(this));
      var r = t.length;
      var e = 0;
      for (; e < r; e++) {
        var n = u(t, e);
        if ((n & 63488) == 55296 && (n >= 56320 || ++e >= r || (u(t, e) & 64512) != 56320)) {
          return false;
        }
      }
      return true;
    }
  });
}
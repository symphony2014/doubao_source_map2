// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'c' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 910083
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var f = Array;
  var s = functionBindFallback("".charAt);
  var l = functionBindFallback("".charCodeAt);
  var v = functionBindFallback([].join);
  var p = "".toWellFormed;
  var h = p && tryCatchFunctionWrapper(function () {
    return callBindPolyfill(p, 1) !== "1";
  });
  polyfillPropertyDefiner({
    target: "String",
    proto: true,
    forced: h
  }, {
    toWellFormed: function () {
      var t = symbolToStringConverter_1(requireNotNullish(this));
      if (h) {
        return callBindPolyfill(p, t);
      }
      var r = t.length;
      var e = f(r);
      var n = 0;
      for (; n < r; n++) {
        var i = l(t, n);
        if ((i & 63488) != 55296) {
          e[n] = s(t, n);
        } else if (i >= 56320 || n + 1 >= r || (l(t, n + 1) & 64512) != 56320) {
          e[n] = "�";
        } else {
          e[n] = s(t, n);
          e[++n] = s(t, n);
        }
      }
      return v(e, "");
    }
  });
}
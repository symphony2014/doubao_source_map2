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
// - Renamed variable 'u' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'c' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'f' to 'isRegexpLike'
// - Resolved require(164047) to 'is-regexp-like'
// - Renamed variable 's' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'l' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'v' to 'getRegexpFlags'
// - Resolved require(350472) to 'get-regexp-flags'
// - Renamed variable 'p' to 'stringReplacePolyfill'
// - Resolved require(649434) to 'string-replace-polyfill'
// - Renamed variable 'h' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'd' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 892302
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isRegexpLike = require("is-regexp-like") /*id: 164047*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var getRegexpFlags = require("get-regexp-flags") /*id: 350472*/;
  var stringReplacePolyfill = require("string-replace-polyfill") /*id: 649434*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var y = coreJsWksAccess("replace");
  var g = TypeError;
  var b = functionBindFallback("".indexOf);
  var w = functionBindFallback("".replace);
  var m = functionBindFallback("".slice);
  var x = Math.max;
  polyfillPropertyDefiner({
    target: "String",
    proto: true
  }, {
    replaceAll: function (t, r) {
      var e;
      var n;
      var i;
      var h;
      var A;
      var E;
      var S;
      var O;
      var R;
      var I = requireNotNullish(this);
      var T = 0;
      var k = "";
      if (!isNullishCheck_1(t)) {
        if ((e = isRegexpLike(t)) && !~b(symbolToStringConverter_1(requireNotNullish(getRegexpFlags(t))), "g")) {
          throw new g("`.replaceAll` does not allow non-global regexes");
        }
        if (n = safePropertyValidator(t, y)) {
          return callBindPolyfill(n, t, I, r);
        }
        if (libPolyfillCheck && e) {
          return w(symbolToStringConverter_1(I), t, r);
        }
      }
      i = symbolToStringConverter_1(I);
      h = symbolToStringConverter_1(t);
      if (!(A = isFunctionPolyfill(r))) {
        r = symbolToStringConverter_1(r);
      }
      S = x(1, E = h.length);
      O = b(i, h);
      while (O !== -1) {
        R = A ? symbolToStringConverter_1(r(h, O, i)) : stringReplacePolyfill(h, i, O, [], undefined, r);
        k += m(i, T, O) + R;
        T = O + E;
        O = O + S > i.length ? -1 : b(i, h, O + S);
      }
      if (T < i.length) {
        k += m(i, T);
      }
      return k;
    }
  });
}
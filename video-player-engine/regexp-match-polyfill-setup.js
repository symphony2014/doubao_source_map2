// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'l' to 'regexpSpeciesPolyfill'
// - Resolved require(359702) to 'regexp-species-polyfill'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'd' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 'r' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'o' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'B' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'R' to 'unicodeStringIndexUtil'
// - Resolved require(472347) to 'unicode-string-index-util'
// - Renamed variable 'c' to 'regexpExecPolyfillHandler'
// - Resolved require(747017) to 'regexp-exec-polyfill-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 484487
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var regexpSpeciesPolyfill = require("regexp-species-polyfill") /*id: 359702*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var unicodeStringIndexUtil = require("unicode-string-index-util") /*id: 472347*/;
  var regexpExecPolyfillHandler = require("regexp-exec-polyfill-handler") /*id: 747017*/;
  regexpSpeciesPolyfill("match", function (U, n, F) {
    return [function (n) {
      var F = requireNotNullish(this);
      var l = isNullishCheck_1(n) ? undefined : safePropertyValidator(n, U);
      if (l) {
        return callBindPolyfill(l, n, F);
      } else {
        return new RegExp(n)[U](symbolToStringConverter_1(F));
      }
    }, function (U) {
      var Q;
      var l = requireObjectOrThrowTypeError_1(this);
      var a = symbolToStringConverter_1(U);
      var o = F(n, l, a);
      if (o.done) {
        return o.value;
      }
      if (!l.global) {
        return regexpExecPolyfillHandler(l, a);
      }
      var B = l.unicode;
      l.lastIndex = 0;
      var s = [];
      var V = 0;
      while ((Q = regexpExecPolyfillHandler(l, a)) !== null) {
        var Z = symbolToStringConverter_1(Q[0]);
        s[V] = Z;
        if (Z === "") {
          l.lastIndex = unicodeStringIndexUtil(a, clampSafeInteger(l.lastIndex), B);
        }
        V++;
      }
      if (V === 0) {
        return null;
      } else {
        return s;
      }
    }];
  });
}
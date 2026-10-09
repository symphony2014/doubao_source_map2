// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'regexpSpeciesPolyfill'
// - Resolved require(359702) to 'regexp-species-polyfill'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'd' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'r' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'o' to 'speciesConstructorUtil'
// - Resolved require(206077) to 'species-constructor-util'
// - Renamed variable 'B' to 'unicodeStringIndexUtil'
// - Resolved require(472347) to 'unicode-string-index-util'
// - Renamed variable 'R' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 'c' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 's' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'V' to 'regexpExecPolyfillHandler'
// - Resolved require(747017) to 'regexp-exec-polyfill-handler'
// - Renamed variable 'Z' to 'regexpPolyfillDetect'
// - Resolved require(764642) to 'regexp-polyfill-detect'
// - Renamed variable 'h' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 729618
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var regexpSpeciesPolyfill = require("regexp-species-polyfill") /*id: 359702*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var speciesConstructorUtil = require("species-constructor-util") /*id: 206077*/;
  var unicodeStringIndexUtil = require("unicode-string-index-util") /*id: 472347*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var regexpExecPolyfillHandler = require("regexp-exec-polyfill-handler") /*id: 747017*/;
  var regexpPolyfillDetect = require("regexp-polyfill-detect") /*id: 764642*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var u = regexpPolyfillDetect.UNSUPPORTED_Y;
  var S = Math.min;
  var J = functionBindFallback([].push);
  var m = functionBindFallback("".slice);
  var p = !tryCatchFunctionWrapper(function () {
    var U = /(?:)/;
    var n = U.exec;
    U.exec = function () {
      return n.apply(this, arguments);
    };
    var F = "ab".split(U);
    return F.length !== 2 || F[0] !== "a" || F[1] !== "b";
  });
  var W = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
  regexpSpeciesPolyfill("split", function (U, n, F) {
    var l = "0".split(undefined, 0).length ? function (U, F) {
      if (U === undefined && F === 0) {
        return [];
      } else {
        return callBindPolyfill(n, this, U, F);
      }
    } : n;
    return [function (n, F) {
      var i = requireNotNullish(this);
      var a = isNullishCheck_1(n) ? undefined : safePropertyValidator(n, U);
      if (a) {
        return callBindPolyfill(a, n, i, F);
      } else {
        return callBindPolyfill(l, symbolToStringConverter_1(i), n, F);
      }
    }, function (U, Q) {
      var i = requireObjectOrThrowTypeError_1(this);
      var d = symbolToStringConverter_1(U);
      if (!W) {
        var r = F(l, i, d, Q, l !== n);
        if (r.done) {
          return r.value;
        }
      }
      var s = speciesConstructorUtil(i, RegExp);
      var Z = i.unicode;
      var h = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (u ? "g" : "y");
      var p = new s(u ? "^(?:" + i.source + ")" : i, h);
      var E = Q === undefined ? 4294967295 : Q >>> 0;
      if (E === 0) {
        return [];
      }
      if (d.length === 0) {
        if (regexpExecPolyfillHandler(p, d) === null) {
          return [d];
        } else {
          return [];
        }
      }
      var k = 0;
      var N = 0;
      var y = [];
      while (N < d.length) {
        p.lastIndex = u ? 0 : N;
        var b;
        var f = regexpExecPolyfillHandler(p, u ? m(d, N) : d);
        if (f === null || (b = S(clampSafeInteger(p.lastIndex + (u ? N : 0)), d.length)) === k) {
          N = unicodeStringIndexUtil(d, N, Z);
        } else {
          J(y, m(d, k, N));
          if (y.length === E) {
            return y;
          }
          for (var T = 1; T <= f.length - 1; T++) {
            J(y, f[T]);
            if (y.length === E) {
              return y;
            }
          }
          N = k = b;
        }
      }
      J(y, m(d, k));
      return y;
    }];
  }, W || !p, u);
}
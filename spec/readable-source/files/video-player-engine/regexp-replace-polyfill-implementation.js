// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'l' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'regexpSpeciesPolyfill'
// - Resolved require(359702) to 'regexp-species-polyfill'
// - Renamed variable 'd' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'r' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'B' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'R' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'c' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// - Renamed variable 's' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'V' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'Z' to 'unicodeStringIndexUtil'
// - Resolved require(472347) to 'unicode-string-index-util'
// - Renamed variable 'h' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'u' to 'stringReplacePolyfill'
// - Resolved require(649434) to 'string-replace-polyfill'
// - Renamed variable 'S' to 'regexpExecPolyfillHandler'
// - Resolved require(747017) to 'regexp-exec-polyfill-handler'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 357210
         */
module.exports = function (module, exports, require) {
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var regexpSpeciesPolyfill = require("regexp-species-polyfill") /*id: 359702*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var unicodeStringIndexUtil = require("unicode-string-index-util") /*id: 472347*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var stringReplacePolyfill = require("string-replace-polyfill") /*id: 649434*/;
  var regexpExecPolyfillHandler = require("regexp-exec-polyfill-handler") /*id: 747017*/;
  var J = require("core-js-wks-access") /*id: 349338*/("replace");
  var m = Math.max;
  var p = Math.min;
  var W = functionBindFallback([].concat);
  var E = functionBindFallback([].push);
  var k = functionBindFallback("".indexOf);
  var N = functionBindFallback("".slice);
  var y = "a".replace(/./, "$0") === "$0";
  var b = !!/./[J] && /./[J]("a", "$0") === "";
  regexpSpeciesPolyfill("replace", function (U, n, F) {
    var i = b ? "$" : "$0";
    return [function (U, F) {
      var Q = requireNotNullish(this);
      var i = isNullishCheck_1(U) ? undefined : safePropertyValidator(U, J);
      if (i) {
        return callBindPolyfill(i, U, Q, F);
      } else {
        return callBindPolyfill(n, symbolToStringConverter_1(Q), U, F);
      }
    }, function (U, l) {
      var a = requireObjectOrThrowTypeError_1(this);
      var d = symbolToStringConverter_1(U);
      if (typeof l == "string" && k(l, i) === -1 && k(l, "$<") === -1) {
        var B = F(n, a, d, l);
        if (B.done) {
          return B.value;
        }
      }
      var V = isFunctionPolyfill(l);
      if (!V) {
        l = symbolToStringConverter_1(l);
      }
      var h = a.global;
      if (h) {
        v = a.unicode;
        a.lastIndex = 0;
      }
      for (var J = []; (C = regexpExecPolyfillHandler(a, d)) !== null && (E(J, C), h);) {
        if (symbolToStringConverter_1(C[0]) === "") {
          a.lastIndex = unicodeStringIndexUtil(d, clampSafeInteger(a.lastIndex), v);
        }
      }
      var y = "";
      var b = 0;
      var f = 0;
      for (; f < J.length; f++) {
        var T;
        var v;
        var C;
        var X;
        var L = symbolToStringConverter_1((C = J[f])[0]);
        var G = m(p(mathTruncPolyfill_2(C.index), d.length), 0);
        var g = [];
        var D = 1;
        for (; D < C.length; D++) {
          E(g, (T = C[D]) === undefined ? T : String(T));
        }
        var x = C.groups;
        if (V) {
          var I = W([L], g, G, d);
          if (x !== undefined) {
            E(I, x);
          }
          X = symbolToStringConverter_1(reflectApplyPolyfill_1(l, undefined, I));
        } else {
          X = stringReplacePolyfill(L, d, G, g, x, l);
        }
        if (G >= b) {
          y += N(d, b, G) + X;
          b = G + L.length;
        }
      }
      return y + N(d, b);
    }];
  }, !!tryCatchFunctionWrapper(function () {
    var U = /./;
    U.exec = function () {
      var U = [];
      U.groups = {
        a: "7"
      };
      return U;
    };
    return "".replace(U, "$<a>") !== "7";
  }) || !y || b);
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'a' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'u' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'c' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'f' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 's' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'l' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'v' to 'arrayToValidatorFunction'
// - Resolved require(180627) to 'array-to-validator-function'
// - Renamed variable 'p' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 74781
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var arrayToValidatorFunction = require("array-to-validator-function") /*id: 180627*/;
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  var h = String;
  var d = globalPolyfillAccess("JSON", "stringify");
  var y = functionBindFallback(/./.exec);
  var g = functionBindFallback("".charAt);
  var b = functionBindFallback("".charCodeAt);
  var w = functionBindFallback("".replace);
  var m = functionBindFallback(1 .toString);
  var x = /[\uD800-\uDFFF]/g;
  var A = /^[\uD800-\uDBFF]$/;
  var E = /^[\uDC00-\uDFFF]$/;
  var S = !nativeSymbolSupportDetector || tryCatchFunctionWrapper(function () {
    var t = globalPolyfillAccess("Symbol")("stringify detection");
    return d([t]) !== "[null]" || d({
      a: t
    }) !== "{}" || d(Object(t)) !== "{}";
  });
  var O = tryCatchFunctionWrapper(function () {
    return d("\uDF06\uD834") !== "\"\uDF06\uD834\"" || d("\uDEAD") !== "\"\uDEAD\"";
  });
  function R(t, r) {
    var e = arraySlicePolyfill_2(arguments);
    var n = arrayToValidatorFunction(r);
    if (!!isFunctionPolyfill(n) || t !== undefined && !isSymbolPolyfill(t)) {
      e[1] = function (t, r) {
        if (isFunctionPolyfill(n)) {
          r = callBindPolyfill(n, this, h(t), r);
        }
        if (!isSymbolPolyfill(r)) {
          return r;
        }
      };
      return reflectApplyPolyfill_1(d, null, e);
    }
  }
  function I(t, r, e) {
    var n = g(e, r - 1);
    var o = g(e, r + 1);
    if (y(A, t) && !y(E, o) || y(E, t) && !y(A, n)) {
      return "\\u" + m(b(t, 0), 16);
    } else {
      return t;
    }
  }
  if (d) {
    polyfillPropertyDefiner({
      target: "JSON",
      stat: true,
      arity: 3,
      forced: S || O
    }, {
      stringify: function (t, r, e) {
        var n = arraySlicePolyfill_2(arguments);
        var o = reflectApplyPolyfill_1(S ? R : d, null, n);
        if (O && typeof o == "string") {
          return w(o, x, I);
        } else {
          return o;
        }
      }
    });
  }
}
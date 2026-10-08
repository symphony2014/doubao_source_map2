// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'l' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'd' to 'objectKeysPolyfill_3'
// - Resolved require(18493) to 'object-keys-polyfill_3'
// - Renamed variable 'r' to 'objectGetOwnPropertySymbols_1'
// - Resolved require(991431) to 'object-get-own-property-symbols_1'
// - Renamed variable 'o' to 'propertyEnumerableCheck'
// - Resolved require(575817) to 'property-enumerable-check'
// - Renamed variable 'B' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'R' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Updated imported property 'f' to 'getOwnPropSymbols' (module 991431)
// - Updated imported property 'f' to 'isEnumerable' (module 575817)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 317258
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var objectKeysPolyfill_3 = require("object-keys-polyfill_3") /*id: 18493*/;
  var objectGetOwnPropertySymbols_1 = require("object-get-own-property-symbols_1") /*id: 991431*/;
  var propertyEnumerableCheck = require("property-enumerable-check") /*id: 575817*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var c = Object.assign;
  var s = Object.defineProperty;
  var V = functionBindFallback([].concat);
  module.exports = !c || tryCatchFunctionWrapper(function () {
    if (es5PropertyDescriptorCheck && c({
      b: 1
    }, c(s({}, "a", {
      enumerable: true,
      get: function () {
        s(this, "b", {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) {
      return true;
    }
    var U = {};
    var n = {};
    var F = Symbol("assign detection");
    var l = "abcdefghijklmnopqrst";
    U[F] = 7;
    l.split("").forEach(function (U) {
      n[U] = U;
    });
    return c({}, U)[F] !== 7 || objectKeysPolyfill_3(c({}, n)).join("") !== l;
  }) ? function (U, n) {
    var F = requireObjectNotNullish(U);
    var l = arguments.length;
    var a = 1;
    var c = objectGetOwnPropertySymbols_1.getOwnPropSymbols;
    var s = propertyEnumerableCheck.isEnumerable;
    while (l > a) {
      var Z;
      var h = stringToArrayPolyfill(arguments[a++]);
      var u = c ? V(objectKeysPolyfill_3(h), c(h)) : objectKeysPolyfill_3(h);
      var S = u.length;
      var J = 0;
      while (S > J) {
        Z = u[J++];
        if (!es5PropertyDescriptorCheck || callBindPolyfill(s, h, Z)) {
          F[Z] = h[Z];
        }
      }
    }
    return F;
  } : c;
}
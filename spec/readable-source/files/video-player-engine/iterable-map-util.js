// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'l' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'safeFunctionExecutor_1'
// - Resolved require(936802) to 'safe-function-executor_1'
// - Renamed variable 'd' to 'isArrayIteratorCheck'
// - Resolved require(356736) to 'is-array-iterator-check'
// - Renamed variable 'r' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'o' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'B' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// - Renamed variable 'R' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'c' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 893781
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var safeFunctionExecutor_1 = require("safe-function-executor_1") /*id: 936802*/;
  var isArrayIteratorCheck = require("is-array-iterator-check") /*id: 356736*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var s = Array;
  module.exports = function (U) {
    var n;
    var F;
    var V;
    var Z;
    var h;
    var u;
    var S = requireObjectNotNullish(U);
    var J = nativeConstructorDetector(this);
    var m = arguments.length;
    var p = m > 1 ? arguments[1] : undefined;
    var W = p !== undefined;
    if (W) {
      p = safeFunctionBind(p, m > 2 ? arguments[2] : undefined);
    }
    var E = libPolyfillIterator(S);
    var k = 0;
    if (E && (this !== s || !isArrayIteratorCheck(E))) {
      F = J ? new this() : [];
      h = (Z = getIteratorMethod(S, E)).next;
      for (; !(V = callBindPolyfill(h, Z)).done; k++) {
        u = W ? safeFunctionExecutor_1(Z, p, [V.value, k], true) : V.value;
        es5DefinePropertyPolyfill(F, k, u);
      }
    } else {
      n = getArrayLengthSafe(S);
      F = J ? new this(n) : s(n);
      for (; n > k; k++) {
        u = W ? p(S[k], k) : S[k];
        es5DefinePropertyPolyfill(F, k, u);
      }
    }
    F.length = k;
    return F;
  };
}
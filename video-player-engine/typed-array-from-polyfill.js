// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'l' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'assertNativeConstructor'
// - Resolved require(15730) to 'assert-native-constructor'
// - Renamed variable 'a' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'd' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'r' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'o' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// - Renamed variable 'B' to 'isArrayIteratorCheck'
// - Resolved require(356736) to 'is-array-iterator-check'
// - Renamed variable 'R' to 'isBigIntArrayCheck'
// - Resolved require(821863) to 'is-big-int-array-check'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 's' to 'bigintConversionPolyfill'
// - Resolved require(987764) to 'bigint-conversion-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 436665
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var assertNativeConstructor = require("assert-native-constructor") /*id: 15730*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var isArrayIteratorCheck = require("is-array-iterator-check") /*id: 356736*/;
  var isBigIntArrayCheck = require("is-big-int-array-check") /*id: 821863*/;
  var c = require("typed-array-polyfill-util") /*id: 357134*/.aTypedArrayConstructor;
  var bigintConversionPolyfill = require("bigint-conversion-polyfill") /*id: 987764*/;
  module.exports = function (U) {
    var n;
    var F;
    var V;
    var Z;
    var h;
    var u;
    var S;
    var J;
    var m = assertNativeConstructor(this);
    var p = requireObjectNotNullish(U);
    var W = arguments.length;
    var E = W > 1 ? arguments[1] : undefined;
    var k = E !== undefined;
    var N = libPolyfillIterator(p);
    if (N && !isArrayIteratorCheck(N)) {
      J = (S = getIteratorMethod(p, N)).next;
      p = [];
      while (!(u = callBindPolyfill(J, S)).done) {
        p.push(u.value);
      }
    }
    if (k && W > 2) {
      E = safeFunctionBind(E, arguments[2]);
    }
    F = getArrayLengthSafe(p);
    Z = isBigIntArrayCheck(V = new (c(m))(F));
    n = 0;
    for (; F > n; n++) {
      h = k ? E(p[n], n) : p[n];
      V[n] = Z ? bigintConversionPolyfill(h) : +h;
    }
    return V;
  };
}
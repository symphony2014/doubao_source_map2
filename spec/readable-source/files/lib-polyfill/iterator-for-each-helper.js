// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// - Renamed variable 'u' to 'isArrayIteratorCheck'
// - Resolved require(356736) to 'is-array-iterator-check'
// - Renamed variable 'c' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'f' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 's' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'l' to 'libPolyfillIterator'
// - Resolved require(150387) to 'lib-polyfill-iterator'
// - Renamed variable 'v' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 686807
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var isArrayIteratorCheck = require("is-array-iterator-check") /*id: 356736*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var libPolyfillIterator = require("lib-polyfill-iterator") /*id: 150387*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  var p = TypeError;
  function h(t, r) {
    this.stopped = t;
    this.result = r;
  }
  var d = h.prototype;
  module.exports = function (t, r, e) {
    var y;
    var g;
    var b;
    var w;
    var m;
    var x;
    var A;
    var E = e && e.that;
    var S = !!e && !!e.AS_ENTRIES;
    var O = !!e && !!e.IS_RECORD;
    var R = !!e && !!e.IS_ITERATOR;
    var I = !!e && !!e.INTERRUPTED;
    var T = safeFunctionBind(r, E);
    function k(t) {
      if (y) {
        callBindSafePropertyReturnHandler(y, "normal", t);
      }
      return new h(true, t);
    }
    function M(t) {
      if (S) {
        requireObjectOrThrowTypeError_1(t);
        if (I) {
          return T(t[0], t[1], k);
        } else {
          return T(t[0], t[1]);
        }
      } else if (I) {
        return T(t, k);
      } else {
        return T(t);
      }
    }
    if (O) {
      y = t.iterator;
    } else if (R) {
      y = t;
    } else {
      if (!(g = libPolyfillIterator(t))) {
        throw new p(safeStringConverter(t) + " is not iterable");
      }
      if (isArrayIteratorCheck(g)) {
        b = 0;
        w = getArrayLengthSafe(t);
        for (; w > b; b++) {
          if ((m = M(t[b])) && isPrototypeOfPolyfill(d, m)) {
            return m;
          }
        }
        return new h(false);
      }
      y = getIteratorMethod(t, g);
    }
    for (x = O ? t.next : y.next; !(A = callBindPolyfill(x, y)).done;) {
      try {
        m = M(A.value);
      } catch (t) {
        callBindSafePropertyReturnHandler(y, "throw", t);
      }
      if (typeof m == "object" && m && isPrototypeOfPolyfill(d, m)) {
        return m;
      }
    }
    return new h(false);
  };
}
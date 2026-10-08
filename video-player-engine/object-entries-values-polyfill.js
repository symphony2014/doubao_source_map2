// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'l' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'getPrototypeOfPolyfill_1'
// - Resolved require(427505) to 'get-prototype-of-polyfill_1'
// - Renamed variable 'd' to 'objectKeysPolyfill_3'
// - Resolved require(18493) to 'object-keys-polyfill_3'
// - Renamed variable 'r' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Resolved require(575817) to 'property-enumerable-check'
// - Updated imported property 'f' to 'isEnumerable' (module 575817)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 558015
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var getPrototypeOfPolyfill_1 = require("get-prototype-of-polyfill_1") /*id: 427505*/;
  var objectKeysPolyfill_3 = require("object-keys-polyfill_3") /*id: 18493*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var o = functionBindFallback(require("property-enumerable-check") /*id: 575817*/.isEnumerable);
  var B = functionBindFallback([].push);
  var R = es5PropertyDescriptorCheck && tryCatchFunctionWrapper(function () {
    var U = Object.create(null);
    U[2] = 2;
    return !o(U, 2);
  });
  function c(U) {
    return function (n) {
      var F;
      var l = stringToArrayPolyfillWrapper(n);
      var i = objectKeysPolyfill_3(l);
      var c = R && getPrototypeOfPolyfill_1(l) === null;
      var s = i.length;
      var V = 0;
      var Z = [];
      while (s > V) {
        F = i[V++];
        if (!es5PropertyDescriptorCheck || (c ? F in l : o(l, F))) {
          B(Z, U ? [F, l[F]] : l[F]);
        }
      }
      return Z;
    };
  }
  module.exports = {
    entries: c(true),
    values: c(false)
  };
}
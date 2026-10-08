// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'u' to 'offsetAlignmentValidator'
// - Resolved require(681514) to 'offset-alignment-validator'
// - Renamed variable 'c' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'f' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 879035
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var offsetAlignmentValidator = require("offset-alignment-validator") /*id: 681514*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var s = globalObjectPolyfill.RangeError;
  var l = globalObjectPolyfill.Int8Array;
  var v = l && l.prototype;
  var p = v && v.set;
  var h = typedArrayPolyfillUtil.aTypedArray;
  var d = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var y = !tryCatchFunctionWrapper(function () {
    var t = new Uint8ClampedArray(2);
    callBindPolyfill(p, t, {
      length: 1,
      0: 3
    }, 1);
    return t[1] !== 3;
  });
  var g = y && typedArrayPolyfillUtil.NATIVE_ARRAY_BUFFER_VIEWS && tryCatchFunctionWrapper(function () {
    var t = new l(2);
    t.set(1);
    t.set("2", 1);
    return t[0] !== 0 || t[1] !== 2;
  });
  d("set", function (t) {
    h(this);
    var r = offsetAlignmentValidator(arguments.length > 1 ? arguments[1] : undefined, 1);
    var e = requireObjectNotNullish(t);
    if (y) {
      return callBindPolyfill(p, this, e, r);
    }
    var n = this.length;
    var i = getArrayLengthSafe(e);
    var f = 0;
    if (i + r > n) {
      throw new s("Wrong length");
    }
    while (f < i) {
      this[r + f] = e[f++];
    }
  }, !y || g);
}
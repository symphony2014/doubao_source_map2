// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'o' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'i' to 'isBigIntArrayCheck'
// - Resolved require(821863) to 'is-big-int-array-check'
// - Renamed variable 'a' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'u' to 'bigintConversionPolyfill'
// - Resolved require(987764) to 'bigint-conversion-polyfill'
// - Renamed variable 'c' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 899046
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var isBigIntArrayCheck = require("is-big-int-array-check") /*id: 821863*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var bigintConversionPolyfill = require("bigint-conversion-polyfill") /*id: 987764*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var f = typedArrayPolyfillUtil.aTypedArray;
  var s = typedArrayPolyfillUtil.getTypedArrayConstructor;
  var l = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var v = Math.max;
  var p = Math.min;
  l("toSpliced", function (t, r) {
    var e;
    var n;
    var l;
    var h;
    var d;
    var y;
    var g;
    var b = f(this);
    var w = s(b);
    var m = getArrayLengthSafe(b);
    var x = mathTruncClamp(t, m);
    var A = arguments.length;
    var E = 0;
    if (A === 0) {
      e = n = 0;
    } else if (A === 1) {
      e = 0;
      n = m - x;
    } else {
      n = p(v(mathTruncPolyfill_2(r), 0), m - x);
      if (e = A - 2) {
        l = isBigIntArrayCheck(h = new w(e));
        for (var S = 2; S < A; S++) {
          d = arguments[S];
          h[S - 2] = l ? bigintConversionPolyfill(d) : +d;
        }
      }
    }
    for (g = new w(y = m + e - n); E < x; E++) {
      g[E] = b[E];
    }
    for (; E < x + e; E++) {
      g[E] = h[E - x];
    }
    for (; E < y; E++) {
      g[E] = b[E + n - e];
    }
    return g;
  }, true);
}
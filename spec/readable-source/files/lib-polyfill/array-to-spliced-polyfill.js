// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// - Renamed variable 'i' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'u' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'c' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'f' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 529795
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var s = Array;
  var l = Math.max;
  var v = Math.min;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    toSpliced: function (t, r) {
      var e;
      var n;
      var o;
      var p;
      var h = stringToArrayPolyfillWrapper(this);
      var d = getArrayLengthSafe(h);
      var y = mathTruncClamp(t, d);
      var g = arguments.length;
      var b = 0;
      if (g === 0) {
        e = n = 0;
      } else if (g === 1) {
        e = 0;
        n = d - y;
      } else {
        e = g - 2;
        n = v(l(mathTruncPolyfill_2(r), 0), d - y);
      }
      p = s(o = validateMaxIndex_1(d + e - n));
      for (; b < y; b++) {
        p[b] = h[b];
      }
      for (; b < y + e; b++) {
        p[b] = arguments[b - y + 2];
      }
      for (; b < o; b++) {
        p[b] = h[b + n - e];
      }
      return p;
    }
  });
  arrayUnscopablesDefine("toSpliced");
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'assertDataView'
// - Resolved require(996633) to 'assert-data-view'
// - Renamed variable 'a' to 'mathTruncSafeValidate'
// - Resolved require(120156) to 'math-trunc-safe-validate'
// - Renamed variable 'u' to 'mathLog2Polyfill'
// - Resolved require(289319) to 'math-log2-polyfill'
// - Renamed variable 'c' to 'numberPrecisionPolyfill'
// - Resolved require(370151) to 'number-precision-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 232464
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var assertDataView = require("assert-data-view") /*id: 996633*/;
  var mathTruncSafeValidate = require("math-trunc-safe-validate") /*id: 120156*/;
  var mathLog2Polyfill = require("math-log2-polyfill") /*id: 289319*/;
  var numberPrecisionPolyfill = require("number-precision-polyfill") /*id: 370151*/;
  var f = Math.pow;
  function s(t) {
    if (t != t) {
      return 32256;
    }
    if (t === 0) {
      return (1 / t == -Infinity) << 15;
    }
    var r = t < 0;
    if (r) {
      t = -t;
    }
    if (t >= 65520) {
      return r << 15 | 31744;
    }
    if (t < 0.000061005353927612305) {
      return r << 15 | numberPrecisionPolyfill(t * 16777216);
    }
    var e = mathLog2Polyfill(t) | 0;
    if (e === -15) {
      return r << 15 | 1024;
    }
    var n = numberPrecisionPolyfill((t * f(2, -e) - 1) * 1024);
    if (n === 1024) {
      return r << 15 | e + 16 << 10;
    } else {
      return r << 15 | e + 15 << 10 | n;
    }
  }
  var l = functionBindFallback(DataView.prototype.setUint16);
  polyfillPropertyDefiner({
    target: "DataView",
    proto: true
  }, {
    setFloat16: function (t, r) {
      assertDataView(this);
      return l(this, mathTruncSafeValidate(t), s(+r), arguments.length > 2 && arguments[2]);
    }
  });
}
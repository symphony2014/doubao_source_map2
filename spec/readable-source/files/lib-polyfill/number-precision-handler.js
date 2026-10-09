// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathSignPolyfill'
// - Resolved require(729961) to 'math-sign-polyfill'
// - Renamed variable 'o' to 'numberPrecisionPolyfill'
// - Resolved require(370151) to 'number-precision-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 52657
         */
module.exports = function (module, exports, require) {
  var mathSignPolyfill = require("math-sign-polyfill") /*id: 729961*/;
  var numberPrecisionPolyfill = require("number-precision-polyfill") /*id: 370151*/;
  var i = Math.abs;
  module.exports = function (t, r, e, a) {
    var u = +t;
    var c = i(u);
    var f = mathSignPolyfill(u);
    if (c < a) {
      return f * numberPrecisionPolyfill(c / a / r) * a * r;
    }
    var s = (1 + r / 2.220446049250313e-16) * c;
    var l = s - (s - c);
    if (l > e || l != l) {
      return f * Infinity;
    } else {
      return f * l;
    }
  };
}
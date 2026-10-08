// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'o' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 552432
         */
module.exports = function (module, exports, require) {
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var i = RangeError;
  module.exports = function (t, r, e, a) {
    var u = getArrayLengthSafe(t);
    var c = mathTruncPolyfill_2(e);
    var f = c < 0 ? u + c : c;
    if (f >= u || f < 0) {
      throw new i("Incorrect index");
    }
    var s = new r(u);
    var l = 0;
    for (; l < u; l++) {
      s[l] = l === f ? a : t[l];
    }
    return s;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'o' to 'mathTruncClamp'
// - Resolved require(673993) to 'math-trunc-clamp'
// - Renamed variable 'i' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 569286
         */
module.exports = function (module, exports, require) {
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var mathTruncClamp = require("math-trunc-clamp") /*id: 673993*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  function a(t) {
    return function (r, e, a) {
      var u;
      var c = stringToArrayPolyfillWrapper(r);
      var f = getArrayLengthSafe(c);
      if (f === 0) {
        return !t && -1;
      }
      var s = mathTruncClamp(a, f);
      if (t && e != e) {
        while (f > s) {
          if ((u = c[s++]) != u) {
            return true;
          }
        }
      } else {
        for (; f > s; s++) {
          if ((t || s in c) && c[s] === e) {
            return t || s || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  module.exports = {
    includes: a(true),
    indexOf: a(false)
  };
}
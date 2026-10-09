// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Renamed variable 'o' to 'normalizeIndexRange'
// - Resolved require(703099) to 'normalize-index-range'
// - Renamed variable 'i' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 535196
         */
module.exports = function (module, exports, require) {
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var normalizeIndexRange = require("normalize-index-range") /*id: 703099*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  function u(t) {
    return function (r, n, u) {
      var c;
      var s = stringToArrayFallback(r);
      var f = clampLengthToSafe(s);
      if (f === 0) {
        return !t && -1;
      }
      var a = normalizeIndexRange(u, f);
      if (t && n != n) {
        while (f > a) {
          if ((c = s[a++]) != c) {
            return true;
          }
        }
      } else {
        for (; f > a; a++) {
          if ((t || a in s) && s[a] === n) {
            return t || a || 0;
          }
        }
      }
      return !t && -1;
    };
  }
  module.exports = {
    includes: u(true),
    indexOf: u(false)
  };
}
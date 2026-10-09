// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'truncateNumberToInteger'
// - Resolved require(124148) to 'truncate-number-to-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 703099
         */
module.exports = function (module, exports, require) {
  var truncateNumberToInteger = require("truncate-number-to-integer") /*id: 124148*/;
  var o = Math.max;
  var i = Math.min;
  module.exports = function (t, r) {
    var n = truncateNumberToInteger(t);
    if (n < 0) {
      return o(n + r, 0);
    } else {
      return i(n, r);
    }
  };
}
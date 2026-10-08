// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'truncateNumberToInteger'
// - Resolved require(124148) to 'truncate-number-to-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 255484
         */
module.exports = function (module, exports, require) {
  var truncateNumberToInteger = require("truncate-number-to-integer") /*id: 124148*/;
  var o = Math.min;
  module.exports = function (t) {
    var r = truncateNumberToInteger(t);
    if (r > 0) {
      return o(r, 9007199254740991);
    } else {
      return 0;
    }
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'toPrimitive'
// - Resolved require(11421) to 'to-primitive'
// - Renamed variable 'o' to 'symbolTypeCheck'
// - Resolved require(95579) to 'symbol-type-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 956642
         */
module.exports = function (module, exports, require) {
  var toPrimitive = require("to-primitive") /*id: 11421*/;
  var symbolTypeCheck = require("symbol-type-check") /*id: 95579*/;
  module.exports = function (t) {
    var r = toPrimitive(t, "string");
    if (symbolTypeCheck(r)) {
      return r;
    } else {
      return r + "";
    }
  };
}
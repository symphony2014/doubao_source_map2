// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 446549
         */
module.exports = function (module, exports, require) {
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  module.exports = function (t) {
    if (typeof t == "object") {
      return t !== null;
    } else {
      return isFunctionCheck(t);
    }
  };
}
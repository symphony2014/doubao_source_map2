// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'o' to 'safeStringConvert'
// - Resolved require(355263) to 'safe-string-convert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 750329
         */
module.exports = function (module, exports, require) {
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var safeStringConvert = require("safe-string-convert") /*id: 355263*/;
  var i = TypeError;
  module.exports = function (t) {
    if (isFunctionCheck(t)) {
      return t;
    }
    throw new i(safeStringConvert(t) + " is not a function");
  };
}
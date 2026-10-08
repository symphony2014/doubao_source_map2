// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'clampToSafeInteger'
// - Resolved require(255484) to 'clamp-to-safe-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 420882
         */
module.exports = function (module, exports, require) {
  var clampToSafeInteger = require("clamp-to-safe-integer") /*id: 255484*/;
  module.exports = function (t) {
    return clampToSafeInteger(t.length);
  };
}
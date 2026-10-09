// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'stringToArrayOrObjectFallback'
// - Resolved require(280815) to 'string-to-array-or-object-fallback'
// - Renamed variable 'o' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 476143
         */
module.exports = function (module, exports, require) {
  var stringToArrayOrObjectFallback = require("string-to-array-or-object-fallback") /*id: 280815*/;
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  module.exports = function (t) {
    return stringToArrayOrObjectFallback(requireObjectCoercible(t));
  };
}
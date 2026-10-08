// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'clampSafeInteger'
// - Resolved require(279936) to 'clamp-safe-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 569025
         */
module.exports = function (module, exports, require) {
  var clampSafeInteger = require("clamp-safe-integer") /*id: 279936*/;
  module.exports = function (t) {
    return clampSafeInteger(t.length);
  };
}
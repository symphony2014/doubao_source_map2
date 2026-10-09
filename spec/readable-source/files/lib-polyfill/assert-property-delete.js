// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 240579
         */
module.exports = function (module, exports, require) {
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var o = TypeError;
  module.exports = function (t, r) {
    if (!delete t[r]) {
      throw new o("Cannot delete property " + safeStringConverter(r) + " of " + safeStringConverter(t));
    }
  };
}
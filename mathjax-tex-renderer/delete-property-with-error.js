// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'safeStringConvert'
// - Resolved require(355263) to 'safe-string-convert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 889835
         */
module.exports = function (module, exports, require) {
  var safeStringConvert = require("safe-string-convert") /*id: 355263*/;
  var T = TypeError;
  module.exports = function (t, e) {
    if (!delete t[e]) {
      throw new T("Cannot delete property " + safeStringConvert(e) + " of " + safeStringConvert(t));
    }
  };
}
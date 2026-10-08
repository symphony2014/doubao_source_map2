// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'deepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 251504
         */
module.exports = function (module, exports, require) {
  var deepCloneUtility = require("deep-clone-utility") /*id: 319011*/;
  exports.deepClone = function (e, t) {
    t = typeof t == "function" ? t : undefined;
    return deepCloneUtility.deepClone(e, 5, t);
  };
}
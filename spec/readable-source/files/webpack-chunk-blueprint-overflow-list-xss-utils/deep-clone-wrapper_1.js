// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'deepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 391722
         */
module.exports = function (module, exports, require) {
  var deepCloneUtility = require("deep-clone-utility") /*id: 319011*/;
  exports.deepClone = function (e) {
    return deepCloneUtility.deepClone(e, 5);
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'deepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 702050
         */
module.exports = function (module, exports, require) {
  var deepEqualCore = require("deep-equal-core") /*id: 489806*/;
  exports.deepEqual = function (e, t) {
    return deepEqualCore.isEqual(e, t);
  };
}
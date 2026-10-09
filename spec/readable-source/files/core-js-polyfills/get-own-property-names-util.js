// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getOwnPropertyNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 572559
         */
module.exports = function (module, exports, require) {
  var uniqueKeyMergeUtil = require("unique-key-merge-util") /*id: 856838*/;
  var o = require("object-prototype-properties") /*id: 809322*/.concat("length", "prototype");
  exports.getOwnPropertyNames = Object.getOwnPropertyNames || function (t) {
    return uniqueKeyMergeUtil(t, o);
  };
}
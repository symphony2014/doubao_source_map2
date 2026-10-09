// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 160255
         */
module.exports = function (module, exports, require) {
  var e = require("symbol-well-known-registry") /*id: 21227*/("toStringTag");
  var o = {
    [e]: "z"
  };
  module.exports = String(o) === "[object z]";
}
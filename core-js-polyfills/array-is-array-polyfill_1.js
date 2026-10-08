// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 959884
         */
module.exports = function (module, exports, require) {
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  module.exports = Array.isArray || function (t) {
    return getObjectTypeString(t) === "Array";
  };
}
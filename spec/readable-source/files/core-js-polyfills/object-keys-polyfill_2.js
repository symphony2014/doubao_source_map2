// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'uniqueKeyMergeUtil'
// - Resolved require(856838) to 'unique-key-merge-util'
// - Renamed variable 'o' to 'objectPrototypeProperties'
// - Resolved require(809322) to 'object-prototype-properties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 132591
         */
module.exports = function (module, exports, require) {
  var uniqueKeyMergeUtil = require("unique-key-merge-util") /*id: 856838*/;
  var objectPrototypeProperties = require("object-prototype-properties") /*id: 809322*/;
  module.exports = Object.keys || function (t) {
    return uniqueKeyMergeUtil(t, objectPrototypeProperties);
  };
}
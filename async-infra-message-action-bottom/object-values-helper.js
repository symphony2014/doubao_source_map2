// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getObjectValues'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 506581
         */
module.exports = function (module, exports, require) {
  var arrayToValuesUtil = require("array-to-values-util") /*id: 726066*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  exports.getObjectValues = function (e) {
    if (e == null) {
      return [];
    } else {
      return arrayToValuesUtil.mapArrayValues(e, getOwnKeys.getOwnKeys(e));
    }
  };
}
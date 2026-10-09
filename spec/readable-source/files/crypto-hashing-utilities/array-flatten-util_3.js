// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'flattenArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 737816
         */
module.exports = function (module, exports, require) {
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var o = Infinity;
  exports.flattenArray = function (e) {
    if (e == null ? 0 : e.length) {
      return arrayFlattenUtil_2.flattenArray(e, o);
    } else {
      return [];
    }
  };
}
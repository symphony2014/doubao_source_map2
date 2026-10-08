// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeFlattenArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 79349
         */
module.exports = function (module, exports, require) {
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  exports.safeFlattenArray = function (e) {
    if (e == null ? 0 : e.length) {
      return arrayFlattenUtil_2.flattenArray(e, 1);
    } else {
      return [];
    }
  };
}
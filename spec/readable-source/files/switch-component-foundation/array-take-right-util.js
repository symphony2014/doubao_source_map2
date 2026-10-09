// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'takeRight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78560.192eef6a.js
         * chunkId: 78560
         * moduleId: 783389
         */
module.exports = function (module, exports, require) {
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  exports.takeRight = function (t, e, n) {
    var o = t == null ? 0 : t.length;
    if (o) {
      e = o - (e = n || e === undefined ? 1 : toIntegerUtil_1.toInteger(e));
      return arraySliceHelper.arraySlice(t, e < 0 ? 0 : e, o);
    } else {
      return [];
    }
  };
}
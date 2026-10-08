// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sliceArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 663848
         */
module.exports = function (module, exports, require) {
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  exports.sliceArray = function (e, t, i) {
    var o = e == null ? 0 : e.length;
    if (o) {
      if (i && typeof i != "number" && verifyPropertyMatch.checkPropertyValue(e, t, i)) {
        t = 0;
        i = o;
      } else {
        t = t == null ? 0 : toIntegerUtil_1.toInteger(t);
        i = i === undefined ? o : toIntegerUtil_1.toInteger(i);
      }
      return arraySliceHelper.arraySlice(e, t, i);
    } else {
      return [];
    }
  };
}
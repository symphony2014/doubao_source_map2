// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayChunk'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 554639
         */
module.exports = function (module, exports, require) {
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var o = Math.ceil;
  var s = Math.max;
  exports.arrayChunk = function (e, t, n) {
    t = (n ? verifyPropertyMatch.checkPropertyValue(e, t, n) : t === undefined) ? 1 : s(toIntegerUtil_1.toInteger(t), 0);
    var l = e == null ? 0 : e.length;
    if (!l || t < 1) {
      return [];
    }
    var u = 0;
    var c = 0;
    var d = Array(o(l / t));
    while (u < l) {
      d[c++] = arraySliceHelper.arraySlice(e, u, u += t);
    }
    return d;
  };
}
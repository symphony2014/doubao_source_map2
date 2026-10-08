// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayPredicateSlice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 260095
         */
module.exports = function (module, exports, require) {
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  exports.arrayPredicateSlice = function (e, t, n, r) {
    var o = e.length;
    var a = r ? o : -1;
    while ((r ? a-- : ++a < o) && t(e[a], a, e));
    if (n) {
      return arraySliceHelper.arraySlice(e, r ? 0 : a, r ? a + 1 : o);
    } else {
      return arraySliceHelper.arraySlice(e, r ? a + 1 : 0, r ? o : a);
    }
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sliceArrayOrReturnOriginal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 106051
         */
module.exports = function (module, exports, require) {
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  exports.sliceArrayOrReturnOriginal = function (e, t, n) {
    var r = e.length;
    n = n === undefined ? r : n;
    if (!t && n >= r) {
      return e;
    } else {
      return arraySliceHelper.arraySlice(e, t, n);
    }
  };
}
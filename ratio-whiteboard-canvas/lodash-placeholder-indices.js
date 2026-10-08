// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findPlaceholderIndices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 158322
         */
module.exports = function (module, exports, require) {
  var r = "__lodash_placeholder__";
  exports.findPlaceholderIndices = function (t, e) {
    var n = -1;
    var o = t.length;
    var a = 0;
    var i = [];
    while (++n < o) {
      var c = t[n];
      if (c === e || c === r) {
        t[n] = r;
        i[a++] = n;
      }
    }
    return i;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'compactArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49031.8ba9b083.js
         * chunkId: 49031
         * moduleId: 571426
         */
module.exports = function (module, exports, require) {
  exports.compactArray = function (e) {
    var n = -1;
    var t = e == null ? 0 : e.length;
    var r = 0;
    var o = [];
    while (++n < t) {
      var a = e[n];
      if (a) {
        o[r++] = a;
      }
    }
    return o;
  };
}
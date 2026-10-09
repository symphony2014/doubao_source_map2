// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayToObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 539814
         */
module.exports = function (module, exports, require) {
  exports.arrayToObject = function (e) {
    var t = -1;
    var s = e == null ? 0 : e.length;
    var i = {};
    while (++t < s) {
      var n = e[t];
      i[n[0]] = n[1];
    }
    return i;
  };
}
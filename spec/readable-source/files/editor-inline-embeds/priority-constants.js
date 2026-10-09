// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'priorityConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 219839
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {})[r.BEFORE_DEFAULT = 999] = "BEFORE_DEFAULT";
  r[r.AFTER_DEFAULT = 1001] = "AFTER_DEFAULT";
  r[r.LATEST = 99999] = "LATEST";
  r[r.AUTO_CAPITALIZATION_KEYDOWN_PRIORITY = 2000] = "AUTO_CAPITALIZATION_KEYDOWN_PRIORITY";
  let o = r;
  require.d(exports, {
    priorityConstants: function () {
      return o;
    }
  });
}
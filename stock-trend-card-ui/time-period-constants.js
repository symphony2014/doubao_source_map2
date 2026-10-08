// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'timePeriods'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89268.5726bc94.js
         * chunkId: 89268
         * moduleId: 456979
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).REALTIME = "realtime";
  i.DAY = "day";
  i.WEEK = "week";
  i.MONTH = "month";
  let n = i;
  require.d(exports, {
    timePeriods: function () {
      return n;
    }
  });
}
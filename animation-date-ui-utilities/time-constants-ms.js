// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qk' to 'msPerSecond'
// - Renamed export 'vh' to 'msPerHour'
// - Renamed export 'yJ' to 'msPerMinute'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 52003
         */
module.exports = function (module, exports, require) {
  var a = 60000;
  var r = 3600000;
  var i = 1000;
  require.d(exports, {
    msPerSecond: function () {
      return i;
    },
    msPerHour: function () {
      return r;
    },
    msPerMinute: function () {
      return a;
    }
  });
}
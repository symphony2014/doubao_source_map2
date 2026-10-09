// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UD' to 'oneDayMs'
// - Renamed export 'Y2' to 'oneHourMs'
// - Renamed export 'Ym' to 'oneSecondMs'
// - Renamed export 'iM' to 'sevenDaysMs'
// - Renamed export 'jz' to 'thirtyDaysMs'
// - Renamed export 'qz' to 'oneYearMs'
// - Renamed export 'yB' to 'oneMinuteMs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 545330
         */
module.exports = function (module, exports, require) {
  let i = 1000;
  let r = 60000;
  let o = 3600000;
  let u = 86400000;
  let a = 604800000;
  let s = 2592000000;
  let c = 31536000000;
  require.d(exports, {
    oneDayMs: function () {
      return u;
    },
    oneHourMs: function () {
      return o;
    },
    oneSecondMs: function () {
      return i;
    },
    sevenDaysMs: function () {
      return a;
    },
    thirtyDaysMs: function () {
      return s;
    },
    oneYearMs: function () {
      return c;
    },
    oneMinuteMs: function () {
      return r;
    }
  });
}
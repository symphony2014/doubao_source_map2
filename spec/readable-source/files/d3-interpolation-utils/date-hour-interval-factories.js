// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WQ' to 'localHourInterval'
// - Renamed export 'lM' to 'utcHourInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 803362
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  let o = dateIntervalFactory.dateIntervalFactory(t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * timeDurationConstants.oneSecondMs - t.getMinutes() * timeDurationConstants.oneMinuteMs);
  }, (t, n) => {
    t.setTime(+t + n * timeDurationConstants.oneHourMs);
  }, (t, n) => (n - t) / timeDurationConstants.oneHourMs, t => t.getHours());
  o.range;
  let u = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCMinutes(0, 0, 0);
  }, (t, n) => {
    t.setTime(+t + n * timeDurationConstants.oneHourMs);
  }, (t, n) => (n - t) / timeDurationConstants.oneHourMs, t => t.getUTCHours());
  u.range;
  require.d(exports, {
    localHourInterval: function () {
      return o;
    },
    utcHourInterval: function () {
      return u;
    }
  });
}
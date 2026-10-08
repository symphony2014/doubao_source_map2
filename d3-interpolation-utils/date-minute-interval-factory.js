// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z_' to 'localMinuteInterval'
// - Renamed export 'rz' to 'utcMinuteInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 958451
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  let o = dateIntervalFactory.dateIntervalFactory(t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * timeDurationConstants.oneSecondMs);
  }, (t, n) => {
    t.setTime(+t + n * timeDurationConstants.oneMinuteMs);
  }, (t, n) => (n - t) / timeDurationConstants.oneMinuteMs, t => t.getMinutes());
  o.range;
  let u = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCSeconds(0, 0);
  }, (t, n) => {
    t.setTime(+t + n * timeDurationConstants.oneMinuteMs);
  }, (t, n) => (n - t) / timeDurationConstants.oneMinuteMs, t => t.getUTCMinutes());
  u.range;
  require.d(exports, {
    localMinuteInterval: function () {
      return o;
    },
    utcMinuteInterval: function () {
      return u;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AN' to 'utcDateFactory'
// - Renamed export 'KB' to 'utcTimestampFactory'
// - Renamed export 'rr' to 'localDateFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 202829
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  let o = dateIntervalFactory.dateIntervalFactory(t => t.setHours(0, 0, 0, 0), (t, n) => t.setDate(t.getDate() + n), (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * timeDurationConstants.oneMinuteMs) / timeDurationConstants.oneDayMs, t => t.getDate() - 1);
  o.range;
  let u = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n);
  }, (t, n) => (n - t) / timeDurationConstants.oneDayMs, t => t.getUTCDate() - 1);
  u.range;
  let a = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n);
  }, (t, n) => (n - t) / timeDurationConstants.oneDayMs, t => Math.floor(t / timeDurationConstants.oneDayMs));
  a.range;
  require.d(exports, {
    utcDateFactory: function () {
      return u;
    },
    utcTimestampFactory: function () {
      return a;
    },
    localDateFactory: function () {
      return o;
    }
  });
}
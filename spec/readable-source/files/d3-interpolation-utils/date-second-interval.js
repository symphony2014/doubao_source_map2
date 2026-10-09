// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'secondDateInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 674887
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  let o = dateIntervalFactory.dateIntervalFactory(t => {
    t.setTime(t - t.getMilliseconds());
  }, (t, n) => {
    t.setTime(+t + n * timeDurationConstants.oneSecondMs);
  }, (t, n) => (n - t) / timeDurationConstants.oneSecondMs, t => t.getUTCSeconds());
  o.range;
  require.d(exports, {
    secondDateInterval: function () {
      return o;
    }
  });
}
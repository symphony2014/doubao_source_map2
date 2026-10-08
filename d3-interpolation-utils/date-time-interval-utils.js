// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WG' to 'generateUtcTimeRange'
// - Renamed export '_g' to 'selectUtcInterval'
// - Renamed export 'jK' to 'generateLocalTimeRange'
// - Renamed export 'jo' to 'selectLocalInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 696938
         */
module.exports = function (module, exports, require) {
  var binarySearchUtil = require("binary-search-util") /*id: 839305*/;
  var arrayTicksUtils = require("array-ticks-utils") /*id: 536202*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  var dateIntervalInstance = require("date-interval-instance") /*id: 700987*/;
  var dateSecondInterval = require("date-second-interval") /*id: 674887*/;
  var dateMinuteIntervalFactory = require("date-minute-interval-factory") /*id: 958451*/;
  var dateHourIntervalFactories = require("date-hour-interval-factories") /*id: 803362*/;
  var dateIntervalFactories = require("date-interval-factories") /*id: 202829*/;
  var weeklyDateIntervalFactories = require("weekly-date-interval-factories") /*id: 169485*/;
  var dateMonthIntervals = require("date-month-intervals") /*id: 272706*/;
  var dateYearIntervals = require("date-year-intervals") /*id: 621750*/;
  function p(t, n, e, s, c, h) {
    let f = [[dateSecondInterval.secondDateInterval, 1, timeDurationConstants.oneSecondMs], [dateSecondInterval.secondDateInterval, 5, timeDurationConstants.oneSecondMs * 5], [dateSecondInterval.secondDateInterval, 15, timeDurationConstants.oneSecondMs * 15], [dateSecondInterval.secondDateInterval, 30, timeDurationConstants.oneSecondMs * 30], [h, 1, timeDurationConstants.oneMinuteMs], [h, 5, timeDurationConstants.oneMinuteMs * 5], [h, 15, timeDurationConstants.oneMinuteMs * 15], [h, 30, timeDurationConstants.oneMinuteMs * 30], [c, 1, timeDurationConstants.oneHourMs], [c, 3, timeDurationConstants.oneHourMs * 3], [c, 6, timeDurationConstants.oneHourMs * 6], [c, 12, timeDurationConstants.oneHourMs * 12], [s, 1, timeDurationConstants.oneDayMs], [s, 2, timeDurationConstants.oneDayMs * 2], [e, 1, timeDurationConstants.sevenDaysMs], [n, 1, timeDurationConstants.thirtyDaysMs], [n, 3, timeDurationConstants.thirtyDaysMs * 3], [t, 1, timeDurationConstants.oneYearMs]];
    function l(n, e, a) {
      let s = Math.abs(e - n) / a;
      let c = binarySearchUtil.createBinarySearch(([,, t]) => t).right(f, s);
      if (c === f.length) {
        return t.every(arrayTicksUtils.tickIncrement(n / timeDurationConstants.oneYearMs, e / timeDurationConstants.oneYearMs, a));
      }
      if (c === 0) {
        return dateIntervalInstance.dateInterval.every(Math.max(arrayTicksUtils.tickIncrement(n, e, a), 1));
      }
      let [h, l] = f[s / f[c - 1][2] < f[c][2] / s ? c - 1 : c];
      return h.every(l);
    }
    return [function (t, n, e) {
      let i = n < t;
      if (i) {
        [t, n] = [n, t];
      }
      let r = e && typeof e.range == "function" ? e : l(t, n, e);
      let o = r ? r.range(t, +n + 1) : [];
      if (i) {
        return o.reverse();
      } else {
        return o;
      }
    }, l];
  }
  let [y, d] = p(dateYearIntervals.utcYearInterval, dateMonthIntervals.monthIntervalUtc, weeklyDateIntervalFactories.sundayUtcInterval, dateIntervalFactories.utcTimestampFactory, dateHourIntervalFactories.utcHourInterval, dateMinuteIntervalFactory.utcMinuteInterval);
  let [x, g] = p(dateYearIntervals.yearInterval, dateMonthIntervals.monthInterval, weeklyDateIntervalFactories.sundayInterval, dateIntervalFactories.localDateFactory, dateHourIntervalFactories.localHourInterval, dateMinuteIntervalFactory.localMinuteInterval);
  require.d(exports, {
    generateUtcTimeRange: function () {
      return y;
    },
    selectUtcInterval: function () {
      return g;
    },
    generateLocalTimeRange: function () {
      return x;
    },
    selectLocalInterval: function () {
      return d;
    }
  });
}
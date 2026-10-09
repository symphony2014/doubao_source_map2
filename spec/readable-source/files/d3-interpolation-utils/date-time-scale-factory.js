// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'createTimeScale'
// - Renamed export 'Z' to 'timeScale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 512921
         */
module.exports = function (module, exports, require) {
  var dateTimeIntervalUtils = require("date-time-interval-utils") /*id: 696938*/;
  var dateYearIntervals = require("date-year-intervals") /*id: 621750*/;
  var dateMonthIntervals = require("date-month-intervals") /*id: 272706*/;
  var weeklyDateIntervalFactories = require("weekly-date-interval-factories") /*id: 169485*/;
  var dateIntervalFactories = require("date-interval-factories") /*id: 202829*/;
  var dateHourIntervalFactories = require("date-hour-interval-factories") /*id: 803362*/;
  var dateMinuteIntervalFactory = require("date-minute-interval-factory") /*id: 958451*/;
  var dateSecondInterval = require("date-second-interval") /*id: 674887*/;
  var dateTimeFormatUtils = require("date-time-format-utils") /*id: 958788*/;
  var linearScaleFactory = require("linear-scale-factory") /*id: 481534*/;
  var scaleConfigHelpers = require("scale-config-helpers") /*id: 666730*/;
  var arrayRangeNormalizer = require("array-range-normalizer") /*id: 29708*/;
  function y(t) {
    return new Date(t);
  }
  function d(t) {
    if (t instanceof Date) {
      return +t;
    } else {
      return +new Date(+t);
    }
  }
  function x(t, n, e, i, r, o, u, a, s, c) {
    var h = linearScaleFactory.identityScale();
    var f = h.invert;
    var _ = h.domain;
    var g = c(".%L");
    var v = c(":%S");
    var m = c("%I:%M");
    var b = c("%I %p");
    var M = c("%a %d");
    var w = c("%b %d");
    var Z = c("%B");
    var T = c("%Y");
    function N(t) {
      return (s(t) < t ? g : a(t) < t ? v : u(t) < t ? m : o(t) < t ? b : i(t) < t ? r(t) < t ? M : w : e(t) < t ? Z : T)(t);
    }
    h.invert = function (t) {
      return new Date(f(t));
    };
    h.domain = function (t) {
      if (arguments.length) {
        return _(Array.from(t, d));
      } else {
        return _().map(y);
      }
    };
    h.ticks = function (n) {
      var e = _();
      return t(e[0], e[e.length - 1], n == null ? 10 : n);
    };
    h.tickFormat = function (t, n) {
      if (n == null) {
        return N;
      } else {
        return c(n);
      }
    };
    h.nice = function (t) {
      var e = _();
      if (!t || typeof t.range != "function") {
        t = n(e[0], e[e.length - 1], t == null ? 10 : t);
      }
      if (t) {
        return _(arrayRangeNormalizer.normalizeArrayRange(e, t));
      } else {
        return h;
      }
    };
    h.copy = function () {
      return linearScaleFactory.copyScaleProperties(h, x(t, n, e, i, r, o, u, a, s, c));
    };
    return h;
  }
  function g() {
    return scaleConfigHelpers.setRangeDomain.apply(x(dateTimeIntervalUtils.generateLocalTimeRange, dateTimeIntervalUtils.selectUtcInterval, dateYearIntervals.yearInterval, dateMonthIntervals.monthInterval, weeklyDateIntervalFactories.sundayInterval, dateIntervalFactories.localDateFactory, dateHourIntervalFactories.localHourInterval, dateMinuteIntervalFactory.localMinuteInterval, dateSecondInterval.secondDateInterval, dateTimeFormatUtils.formatDate).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
  }
  require.d(exports, {
    createTimeScale: function () {
      return x;
    },
    timeScale: function () {
      return g;
    }
  });
}
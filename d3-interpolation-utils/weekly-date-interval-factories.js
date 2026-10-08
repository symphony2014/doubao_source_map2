// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EF' to 'wednesdayInterval'
// - Renamed export 'Ig' to 'thursdayInterval'
// - Renamed export 'Lq' to 'saturdayInterval'
// - Renamed export 'Ox' to 'mondayInterval'
// - Renamed export 'YD' to 'tuesdayInterval'
// - Renamed export 'Zy' to 'sundayInterval'
// - Renamed export 'hB' to 'thursdayUtcInterval'
// - Renamed export 'l6' to 'mondayUtcInterval'
// - Renamed export 'pI' to 'sundayUtcInterval'
// - Renamed export 'y2' to 'fridayInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 169485
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  var timeDurationConstants = require("time-duration-constants") /*id: 545330*/;
  function o(t) {
    return dateIntervalFactory.dateIntervalFactory(n => {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7);
      n.setHours(0, 0, 0, 0);
    }, (t, n) => {
      t.setDate(t.getDate() + n * 7);
    }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * timeDurationConstants.oneMinuteMs) / timeDurationConstants.sevenDaysMs);
  }
  let u = o(0);
  let a = o(1);
  let s = o(2);
  let c = o(3);
  let h = o(4);
  let f = o(5);
  let l = o(6);
  function _(t) {
    return dateIntervalFactory.dateIntervalFactory(n => {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7);
      n.setUTCHours(0, 0, 0, 0);
    }, (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    }, (t, n) => (n - t) / timeDurationConstants.sevenDaysMs);
  }
  u.range;
  a.range;
  s.range;
  c.range;
  h.range;
  f.range;
  l.range;
  let p = _(0);
  let y = _(1);
  let d = _(2);
  let x = _(3);
  let g = _(4);
  let v = _(5);
  let m = _(6);
  p.range;
  y.range;
  d.range;
  x.range;
  g.range;
  v.range;
  m.range;
  require.d(exports, {
    wednesdayInterval: function () {
      return c;
    },
    thursdayInterval: function () {
      return h;
    },
    saturdayInterval: function () {
      return l;
    },
    mondayInterval: function () {
      return a;
    },
    tuesdayInterval: function () {
      return s;
    },
    sundayInterval: function () {
      return u;
    },
    thursdayUtcInterval: function () {
      return g;
    },
    mondayUtcInterval: function () {
      return y;
    },
    sundayUtcInterval: function () {
      return p;
    },
    fridayInterval: function () {
      return f;
    }
  });
}
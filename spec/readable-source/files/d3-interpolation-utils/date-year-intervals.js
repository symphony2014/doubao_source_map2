// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jB' to 'yearInterval'
// - Renamed export 'ol' to 'utcYearInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 621750
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  let r = dateIntervalFactory.dateIntervalFactory(t => {
    t.setMonth(0, 1);
    t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setFullYear(t.getFullYear() + n);
  }, (t, n) => n.getFullYear() - t.getFullYear(), t => t.getFullYear());
  r.every = t => isFinite(t = Math.floor(t)) && t > 0 ? dateIntervalFactory.dateIntervalFactory(n => {
    n.setFullYear(Math.floor(n.getFullYear() / t) * t);
    n.setMonth(0, 1);
    n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setFullYear(n.getFullYear() + e * t);
  }) : null;
  r.range;
  let o = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), t => t.getUTCFullYear());
  o.every = t => isFinite(t = Math.floor(t)) && t > 0 ? dateIntervalFactory.dateIntervalFactory(n => {
    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t);
    n.setUTCMonth(0, 1);
    n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCFullYear(n.getUTCFullYear() + e * t);
  }) : null;
  o.range;
  require.d(exports, {
    yearInterval: function () {
      return r;
    },
    utcYearInterval: function () {
      return o;
    }
  });
}
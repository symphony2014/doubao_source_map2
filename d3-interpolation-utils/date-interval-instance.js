// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'dateInterval'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 700987
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  let r = dateIntervalFactory.dateIntervalFactory(() => {}, (t, n) => {
    t.setTime(+t + n);
  }, (t, n) => n - t);
  r.every = t => isFinite(t = Math.floor(t)) && t > 0 ? t > 1 ? dateIntervalFactory.dateIntervalFactory(n => {
    n.setTime(Math.floor(n / t) * t);
  }, (n, e) => {
    n.setTime(+n + e * t);
  }, (n, e) => (e - n) / t) : r : null;
  r.range;
  require.d(exports, {
    dateInterval: function () {
      return r;
    }
  });
}
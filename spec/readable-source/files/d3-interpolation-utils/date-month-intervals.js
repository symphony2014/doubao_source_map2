// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F0' to 'monthInterval'
// - Renamed export 'me' to 'monthIntervalUtc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 272706
         */
module.exports = function (module, exports, require) {
  var dateIntervalFactory = require("date-interval-factory") /*id: 401424*/;
  let r = dateIntervalFactory.dateIntervalFactory(t => {
    t.setDate(1);
    t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setMonth(t.getMonth() + n);
  }, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, t => t.getMonth());
  r.range;
  let o = dateIntervalFactory.dateIntervalFactory(t => {
    t.setUTCDate(1);
    t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, t => t.getUTCMonth());
  o.range;
  require.d(exports, {
    monthInterval: function () {
      return r;
    },
    monthIntervalUtc: function () {
      return o;
    }
  });
}
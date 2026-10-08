// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'WU' to 'formatNumber'
// - Renamed export 'jH' to 'formatPrefix'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 100085
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var u;
  var numberFormatUtil = require("number-format-util") /*id: 97822*/;
  i = {
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  };
  o = (r = numberFormatUtil.numberFormatter(i)).format;
  u = r.formatPrefix;
  require.d(exports, {
    formatNumber: function () {
      return o;
    },
    formatPrefix: function () {
      return u;
    }
  });
}
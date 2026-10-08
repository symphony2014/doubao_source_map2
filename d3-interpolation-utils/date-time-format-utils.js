// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z1' to 'parseDate'
// - Renamed export 'g0' to 'formatUtc'
// - Renamed export 'i$' to 'formatDate'
// - Renamed export 'wp' to 'parseUtc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 958788
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var u;
  var a;
  var s;
  var dateTimeFormatFactory = require("date-time-format-factory") /*id: 873971*/;
  i = {
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  o = (r = dateTimeFormatFactory.dateFormatFactory(i)).format;
  u = r.parse;
  a = r.utcFormat;
  s = r.utcParse;
  require.d(exports, {
    parseDate: function () {
      return u;
    },
    formatUtc: function () {
      return a;
    },
    formatDate: function () {
      return o;
    },
    parseUtc: function () {
      return s;
    }
  });
}
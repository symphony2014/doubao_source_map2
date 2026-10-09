// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWeekYear'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 950593
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var dateStartOfWeekUtil = require("date-start-of-week-util") /*id: 133980*/;
  function o(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    var n = t.getUTCFullYear();
    var o = new Date(0);
    o.setUTCFullYear(n + 1, 0, 4);
    o.setUTCHours(0, 0, 0, 0);
    var s = dateStartOfWeekUtil.getStartOfWeek(o);
    var l = new Date(0);
    l.setUTCFullYear(n, 0, 4);
    l.setUTCHours(0, 0, 0, 0);
    var u = dateStartOfWeekUtil.getStartOfWeek(l);
    if (t.getTime() >= s.getTime()) {
      return n + 1;
    } else if (t.getTime() >= u.getTime()) {
      return n;
    } else {
      return n - 1;
    }
  }
  require.d(exports, {
    getWeekYear: function () {
      return o;
    }
  });
}
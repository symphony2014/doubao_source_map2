// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWeekNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 937742
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var dateStartOfWeekUtil = require("date-start-of-week-util") /*id: 133980*/;
  var dateWeekYearUtil = require("date-week-year-util") /*id: 950593*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function s(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    return Math.round((dateStartOfWeekUtil.getStartOfWeek(t).getTime() - function (e) {
      validateArgumentCount.validateArgCount(1, arguments);
      var t = dateWeekYearUtil.getWeekYear(e);
      var n = new Date(0);
      n.setUTCFullYear(t, 0, 4);
      n.setUTCHours(0, 0, 0, 0);
      return dateStartOfWeekUtil.getStartOfWeek(n);
    }(t).getTime()) / 604800000) + 1;
  }
  require.d(exports, {
    getWeekNumber: function () {
      return s;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWeekNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 181103
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var dateStartOfWeek = require("date-start-of-week") /*id: 511858*/;
  var weekYearCalculator = require("week-year-calculator") /*id: 157430*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var asyncAiCreationGuidance = require("async-ai-creation-guidance") /*id: 960862*/;
  function u(e, t) {
    validateArgumentCount.validateArgCount(1, arguments);
    var n = dateNormalizer.normalizeDate(e);
    return Math.round((dateStartOfWeek.startOfWeek(n, t).getTime() - function (e, t) {
      validateArgumentCount.validateArgCount(1, arguments);
      var c;
      var f;
      var g = asyncAiCreationGuidance.getAiGuidance();
      var m = numberToIntegerConverter.toInteger((t == null ? undefined : t.firstWeekContainsDate) ?? (t == null ? undefined : (c = t.locale) === null || c === undefined ? undefined : c.options?.firstWeekContainsDate) ?? g.firstWeekContainsDate ?? ((f = g.locale) === null || f === undefined ? undefined : f.options?.firstWeekContainsDate) ?? 1);
      var v = weekYearCalculator.getWeekYear(e, t);
      var y = new Date(0);
      y.setUTCFullYear(v, 0, m);
      y.setUTCHours(0, 0, 0, 0);
      return dateStartOfWeek.startOfWeek(y, t);
    }(n, t).getTime()) / 604800000) + 1;
  }
  require.d(exports, {
    getWeekNumber: function () {
      return u;
    }
  });
}
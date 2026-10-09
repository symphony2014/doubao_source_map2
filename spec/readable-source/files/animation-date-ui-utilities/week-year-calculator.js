// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getWeekYear'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 157430
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var dateStartOfWeek = require("date-start-of-week") /*id: 511858*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var asyncAiCreationGuidance = require("async-ai-creation-guidance") /*id: 960862*/;
  function l(e, t) {
    validateArgumentCount.validateArgCount(1, arguments);
    var c;
    var f;
    var g = dateNormalizer.normalizeDate(e);
    var m = g.getUTCFullYear();
    var v = asyncAiCreationGuidance.getAiGuidance();
    var y = numberToIntegerConverter.toInteger((t == null ? undefined : t.firstWeekContainsDate) ?? (t == null ? undefined : (c = t.locale) === null || c === undefined ? undefined : c.options?.firstWeekContainsDate) ?? v.firstWeekContainsDate ?? ((f = v.locale) === null || f === undefined ? undefined : f.options?.firstWeekContainsDate) ?? 1);
    if (!(y >= 1) || !(y <= 7)) {
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var T = new Date(0);
    T.setUTCFullYear(m + 1, 0, y);
    T.setUTCHours(0, 0, 0, 0);
    var b = dateStartOfWeek.startOfWeek(T, t);
    var w = new Date(0);
    w.setUTCFullYear(m, 0, y);
    w.setUTCHours(0, 0, 0, 0);
    var _ = dateStartOfWeek.startOfWeek(w, t);
    if (g.getTime() >= b.getTime()) {
      return m + 1;
    } else if (g.getTime() >= _.getTime()) {
      return m;
    } else {
      return m - 1;
    }
  }
  require.d(exports, {
    getWeekYear: function () {
      return l;
    }
  });
}
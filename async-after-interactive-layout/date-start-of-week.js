// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'startOfWeek'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 511858
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var asyncAiCreationGuidance = require("async-ai-creation-guidance") /*id: 960862*/;
  function l(e, t) {
    validateArgumentCount.validateArgCount(1, arguments);
    var d;
    var h;
    var m = asyncAiCreationGuidance.getAiGuidance();
    var f = numberToIntegerConverter.toInteger((t == null ? undefined : t.weekStartsOn) ?? (t == null ? undefined : (d = t.locale) === null || d === undefined ? undefined : d.options?.weekStartsOn) ?? m.weekStartsOn ?? ((h = m.locale) === null || h === undefined ? undefined : h.options?.weekStartsOn) ?? 0);
    if (!(f >= 0) || !(f <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var g = dateNormalizer.normalizeDate(e);
    var b = g.getUTCDay();
    g.setUTCDate(g.getUTCDate() - ((b < f) * 7 + b - f));
    g.setUTCHours(0, 0, 0, 0);
    return g;
  }
  require.d(exports, {
    startOfWeek: function () {
      return l;
    }
  });
}
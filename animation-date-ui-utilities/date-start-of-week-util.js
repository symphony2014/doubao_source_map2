// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getStartOfWeek'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 133980
         */
module.exports = function (module, exports, require) {
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function i(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = dateNormalizer.normalizeDate(e);
    var n = t.getUTCDay();
    t.setUTCDate(t.getUTCDate() - ((n < 1) * 7 + n - 1));
    t.setUTCHours(0, 0, 0, 0);
    return t;
  }
  require.d(exports, {
    getStartOfWeek: function () {
      return i;
    }
  });
}
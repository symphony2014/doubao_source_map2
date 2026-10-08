// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'subtractDateOffset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 975722
         */
module.exports = function (module, exports, require) {
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function o(e, t) {
    validateArgumentCount.validateArgCount(2, arguments);
    return function (e, t) {
      validateArgumentCount.validateArgCount(2, arguments);
      return new Date(dateNormalizer.normalizeDate(e).getTime() + numberToIntegerConverter.toInteger(t));
    }(e, -numberToIntegerConverter.toInteger(t));
  }
  require.d(exports, {
    subtractDateOffset: function () {
      return o;
    }
  });
}
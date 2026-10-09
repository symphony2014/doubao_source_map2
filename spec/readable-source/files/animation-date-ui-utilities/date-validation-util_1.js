// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isValidDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 152056
         */
module.exports = function (module, exports, require) {
  var dateInstanceValidator = require("date-instance-validator") /*id: 8954*/;
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function o(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    return (!!dateInstanceValidator.isDate(e) || typeof e == "number") && !isNaN(Number(dateNormalizer.normalizeDate(e)));
  }
  require.d(exports, {
    isValidDate: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 8954
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function i(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    return e instanceof Date || typeofHelper.getType(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
  }
  require.d(exports, {
    isDate: function () {
      return i;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sumArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 218454
         */
module.exports = function (module, exports, require) {
  var arraySumByIterator = require("array-sum-by-iterator") /*id: 77851*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  exports.sumArray = function (e) {
    if (e && e.length) {
      return arraySumByIterator.sumBy(e, identityFunctionUtil_1.identity);
    } else {
      return 0;
    }
  };
}
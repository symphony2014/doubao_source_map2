// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolTostringtagTest'
// - Resolved require(160255) to 'symbol-tostringtag-test'
// - Renamed variable 'o' to 'getObjectType'
// - Resolved require(786910) to 'get-object-type'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 853425
         */
module.exports = function (module, exports, require) {
  var symbolTostringtagTest = require("symbol-tostringtag-test") /*id: 160255*/;
  var getObjectType = require("get-object-type") /*id: 786910*/;
  module.exports = symbolTostringtagTest ? {}.toString : function () {
    return "[object " + getObjectType(this) + "]";
  };
}
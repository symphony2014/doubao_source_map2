// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Renamed variable 'o' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 416484
         */
module.exports = function (module, exports, require) {
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  module.exports = function (t) {
    if (getObjectTypeString(t) === "Function") {
      return functionBindPrototypeCheckWrapper(t);
    }
  };
}
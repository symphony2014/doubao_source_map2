// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 784625
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  module.exports = function (t, r, n) {
    try {
      return functionBindPrototypeCheckWrapper(functionTypeGuardAssertion(Object.getOwnPropertyDescriptor(t, r)[n]));
    } catch (t) {}
  };
}
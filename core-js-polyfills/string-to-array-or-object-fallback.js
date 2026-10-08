// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 280815
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var u = Object;
  var c = functionBindPrototypeCheckWrapper("".split);
  module.exports = safeFunctionExecutor(function () {
    return !u("z").propertyIsEnumerable(0);
  }) ? function (t) {
    if (getObjectTypeString(t) === "String") {
      return c(t, "");
    } else {
      return u(t);
    }
  } : u;
}
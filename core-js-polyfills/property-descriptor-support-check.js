// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 248399
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  module.exports = checkPropertyDescriptorSupport && safeFunctionExecutor(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'safeCreateElement'
// - Resolved require(803286) to 'safe-create-element'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 752690
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var safeCreateElement = require("safe-create-element") /*id: 803286*/;
  module.exports = !checkPropertyDescriptorSupport && !safeFunctionExecutor(function () {
    return Object.defineProperty(safeCreateElement("div"), "a", {
      get: function () {
        return 7;
      }
    }).a !== 7;
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 618813
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  module.exports = !safeFunctionExecutor(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] !== 7;
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 347835
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  module.exports = !safeFunctionExecutor(function () {
    function t() {}
    t.prototype.constructor = null;
    return Object.getPrototypeOf(new t()) !== t.prototype;
  });
}
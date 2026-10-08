// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 288693
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  module.exports = safeFunctionExecutor(function () {
    if (typeof ArrayBuffer == "function") {
      var e = new ArrayBuffer(8);
      if (Object.isExtensible(e)) {
        Object.defineProperty(e, "a", {
          value: 8
        });
      }
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 152613
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  module.exports = tryCatchFunctionWrapper(function () {
    if (typeof ArrayBuffer == "function") {
      var t = new ArrayBuffer(8);
      if (Object.isExtensible(t)) {
        Object.defineProperty(t, "a", {
          value: 8
        });
      }
    }
  });
}
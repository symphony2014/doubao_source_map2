// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 866540
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  module.exports = !tryCatchFunctionWrapper(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}
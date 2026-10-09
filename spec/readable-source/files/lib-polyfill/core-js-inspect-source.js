// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'i' to 'coreJsSharedStoreInit'
// - Resolved require(53489) to 'core-js-shared-store-init'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 291102
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var coreJsSharedStoreInit = require("core-js-shared-store-init") /*id: 53489*/;
  var a = functionBindFallback(Function.toString);
  if (!isFunctionPolyfill(coreJsSharedStoreInit.inspectSource)) {
    coreJsSharedStoreInit.inspectSource = function (t) {
      return a(t);
    };
  }
  module.exports = coreJsSharedStoreInit.inspectSource;
}
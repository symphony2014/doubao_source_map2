// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsSharedStoreInit'
// - Resolved require(53489) to 'core-js-shared-store-init'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 16765
         */
module.exports = function (module, exports, require) {
  var coreJsSharedStoreInit = require("core-js-shared-store-init") /*id: 53489*/;
  module.exports = function (t, r) {
    return coreJsSharedStoreInit[t] ||= r || {};
  };
}
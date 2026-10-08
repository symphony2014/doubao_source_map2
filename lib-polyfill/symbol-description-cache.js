// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'o' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 896189
         */
module.exports = function (module, exports, require) {
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var i = coreJsSharedStoreAccess("keys");
  module.exports = function (t) {
    return i[t] ||= symbolDescriptionGenerator(t);
  };
}
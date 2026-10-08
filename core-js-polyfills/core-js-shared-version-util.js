// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsSharedVersion'
// - Resolved require(678932) to 'core-js-shared-version'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 585661
         */
module.exports = function (module, exports, require) {
  var coreJsSharedVersion = require("core-js-shared-version") /*id: 678932*/;
  module.exports = function (t, r) {
    return coreJsSharedVersion[t] ||= r || {};
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsSharedVersionUtil'
// - Resolved require(585661) to 'core-js-shared-version-util'
// - Renamed variable 'o' to 'symbolGeneratorWithRandomSuffix'
// - Resolved require(68100) to 'symbol-generator-with-random-suffix'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 893493
         */
module.exports = function (module, exports, require) {
  var coreJsSharedVersionUtil = require("core-js-shared-version-util") /*id: 585661*/;
  var symbolGeneratorWithRandomSuffix = require("symbol-generator-with-random-suffix") /*id: 68100*/;
  var i = coreJsSharedVersionUtil("keys");
  module.exports = function (t) {
    return i[t] ||= symbolGeneratorWithRandomSuffix(t);
  };
}
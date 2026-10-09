// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'o' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'i' to 'chromeV8VersionDetect'
// - Resolved require(968349) to 'chrome-v8-version-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 248170
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var chromeV8VersionDetect = require("chrome-v8-version-detect") /*id: 968349*/;
  var u = symbolWellKnownRegistry("species");
  module.exports = function (t) {
    return chromeV8VersionDetect >= 51 || !safeFunctionExecutor(function () {
      var r = [];
      (r.constructor = {})[u] = function () {
        return {
          foo: 1
        };
      };
      return r[t](Boolean).foo !== 1;
    });
  };
}
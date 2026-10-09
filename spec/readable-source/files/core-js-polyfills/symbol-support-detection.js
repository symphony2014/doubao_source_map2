// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'chromeV8VersionDetect'
// - Resolved require(968349) to 'chrome-v8-version-detect'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Resolved require(780500) to 'get-global-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 131899
         */
module.exports = function (module, exports, require) {
  var chromeV8VersionDetect = require("chrome-v8-version-detect") /*id: 968349*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var i = require("get-global-object") /*id: 780500*/.String;
  module.exports = !!Object.getOwnPropertySymbols && !safeFunctionExecutor(function () {
    var t = Symbol("symbol detection");
    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && chromeV8VersionDetect && chromeV8VersionDetect < 41;
  });
}
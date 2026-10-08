// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'l' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'i' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 940142
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var a = coreJsWksAccess("species");
  module.exports = function (U) {
    return chromeV8VersionPolyfill >= 51 || !tryCatchFunctionWrapper(function () {
      var n = [];
      (n.constructor = {})[a] = function () {
        return {
          foo: 1
        };
      };
      return n[U](Boolean).foo !== 1;
    });
  };
}
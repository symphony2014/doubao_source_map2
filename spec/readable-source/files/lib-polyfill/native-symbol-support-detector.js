// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 655222
         */
module.exports = function (module, exports, require) {
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var i = require("global-object-polyfill") /*id: 515719*/.String;
  module.exports = !!Object.getOwnPropertySymbols && !tryCatchFunctionWrapper(function () {
    var t = Symbol("symbol detection");
    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && chromeV8VersionPolyfill && chromeV8VersionPolyfill < 41;
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// - Renamed variable 'a' to 'runtimeEnvironmentDetector_1'
// - Resolved require(279839) to 'runtime-environment-detector_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 451243
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var runtimeEnvironmentDetector_1 = require("runtime-environment-detector_1") /*id: 279839*/;
  var u = globalObjectPolyfill.structuredClone;
  module.exports = !!u && !tryCatchFunctionWrapper(function () {
    if (runtimeEnvironmentDetector_1 === "DENO" && chromeV8VersionPolyfill > 92 || runtimeEnvironmentDetector_1 === "NODE" && chromeV8VersionPolyfill > 94 || runtimeEnvironmentDetector_1 === "BROWSER" && chromeV8VersionPolyfill > 97) {
      return false;
    }
    var t = new ArrayBuffer(8);
    var r = u(t, {
      transfer: [t]
    });
    return t.byteLength !== 0 || r.byteLength !== 8;
  });
}
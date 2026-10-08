// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'functionFeatureDetectHelper'
// - Resolved require(948260) to 'function-feature-detect-helper'
// - Renamed variable 'u' to 'coreJsInspectSource'
// - Resolved require(291102) to 'core-js-inspect-source'
// - Renamed variable 'c' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'f' to 'runtimeEnvironmentDetector_1'
// - Resolved require(279839) to 'runtime-environment-detector_1'
// - Renamed variable 's' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'l' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 91037
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var functionFeatureDetectHelper = require("function-feature-detect-helper") /*id: 948260*/;
  var coreJsInspectSource = require("core-js-inspect-source") /*id: 291102*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var runtimeEnvironmentDetector_1 = require("runtime-environment-detector_1") /*id: 279839*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var v = promisePolyfill && promisePolyfill.prototype;
  var p = coreJsWksAccess("species");
  var h = false;
  var d = isFunctionPolyfill(globalObjectPolyfill.PromiseRejectionEvent);
  var y = functionFeatureDetectHelper("Promise", function () {
    var t = coreJsInspectSource(promisePolyfill);
    var r = t !== String(promisePolyfill);
    if (!r && chromeV8VersionPolyfill === 66 || libPolyfillCheck && (!v.catch || !v.finally)) {
      return true;
    }
    if (!chromeV8VersionPolyfill || chromeV8VersionPolyfill < 51 || !/native code/.test(t)) {
      var e = new promisePolyfill(function (t) {
        t(1);
      });
      function n(t) {
        t(function () {}, function () {});
      }
      (e.constructor = {})[p] = n;
      if (!(h = e.then(function () {}) instanceof n)) {
        return true;
      }
    }
    return !r && (runtimeEnvironmentDetector_1 === "BROWSER" || runtimeEnvironmentDetector_1 === "DENO") && !d;
  });
  module.exports = {
    CONSTRUCTOR: y,
    REJECTION_EVENT: d,
    SUBCLASSING: h
  };
}
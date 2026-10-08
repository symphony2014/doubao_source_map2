// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'o' to 'coreJsSharedVersionUtil'
// - Resolved require(585661) to 'core-js-shared-version-util'
// - Renamed variable 'i' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'u' to 'symbolGeneratorWithRandomSuffix'
// - Resolved require(68100) to 'symbol-generator-with-random-suffix'
// - Renamed variable 'c' to 'symbolSupportDetection'
// - Resolved require(131899) to 'symbol-support-detection'
// - Renamed variable 's' to 'symbolIteratorSupportCheck'
// - Resolved require(364051) to 'symbol-iterator-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 21227
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var coreJsSharedVersionUtil = require("core-js-shared-version-util") /*id: 585661*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var symbolGeneratorWithRandomSuffix = require("symbol-generator-with-random-suffix") /*id: 68100*/;
  var symbolSupportDetection = require("symbol-support-detection") /*id: 131899*/;
  var symbolIteratorSupportCheck = require("symbol-iterator-support-check") /*id: 364051*/;
  var f = getGlobalObject.Symbol;
  var a = coreJsSharedVersionUtil("wks");
  var p = symbolIteratorSupportCheck ? f.for || f : f && f.withoutSetter || symbolGeneratorWithRandomSuffix;
  module.exports = function (t) {
    if (!objectHasOwnPolyfill(a, t)) {
      a[t] = symbolSupportDetection && objectHasOwnPolyfill(f, t) ? f[t] : p("Symbol." + t);
    }
    return a[t];
  };
}
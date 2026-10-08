// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'i' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'a' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// - Renamed variable 'u' to 'nativeSymbolSupportDetector'
// - Resolved require(655222) to 'native-symbol-support-detector'
// - Renamed variable 'c' to 'nativeSymbolSupportCheck'
// - Resolved require(418662) to 'native-symbol-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 349338
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var nativeSymbolSupportDetector = require("native-symbol-support-detector") /*id: 655222*/;
  var nativeSymbolSupportCheck = require("native-symbol-support-check") /*id: 418662*/;
  var f = globalObjectPolyfill.Symbol;
  var s = coreJsSharedStoreAccess("wks");
  var l = nativeSymbolSupportCheck ? f.for || f : f && f.withoutSetter || symbolDescriptionGenerator;
  module.exports = function (t) {
    if (!objectHasOwnPolyfill_1(s, t)) {
      s[t] = nativeSymbolSupportDetector && objectHasOwnPolyfill_1(f, t) ? f[t] : l("Symbol." + t);
    }
    return s[t];
  };
}
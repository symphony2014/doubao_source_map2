// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'a' to 'safeStringConverter'
// - Resolved require(871818) to 'safe-string-converter'
// - Renamed variable 'd' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'r' to 'symbolSupportCheck'
// - Resolved require(377849) to 'symbol-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 853361
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var safeStringConverter = require("safe-string-converter") /*id: 871818*/;
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var symbolSupportCheck = require("symbol-support-check") /*id: 377849*/;
  var o = coreJsSharedStoreAccess("symbol-to-string-registry");
  polyfillPropertyDefiner({
    target: "Symbol",
    stat: true,
    forced: !symbolSupportCheck
  }, {
    keyFor: function (U) {
      if (!isSymbolPolyfill(U)) {
        throw TypeError(safeStringConverter(U) + " is not a symbol");
      }
      if (objectHasOwnPolyfill_1(o, U)) {
        return o[U];
      }
    }
  });
}
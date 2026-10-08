// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'a' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'd' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'r' to 'symbolSupportCheck'
// - Resolved require(377849) to 'symbol-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 226280
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var symbolSupportCheck = require("symbol-support-check") /*id: 377849*/;
  var o = coreJsSharedStoreAccess("string-to-symbol-registry");
  var B = coreJsSharedStoreAccess("symbol-to-string-registry");
  polyfillPropertyDefiner({
    target: "Symbol",
    stat: true,
    forced: !symbolSupportCheck
  }, {
    for: function (U) {
      var n = symbolToStringConverter_1(U);
      if (objectHasOwnPolyfill_1(o, n)) {
        return o[n];
      }
      var F = globalPolyfillAccess("Symbol")(n);
      o[n] = F;
      B[F] = n;
      return F;
    }
  });
}
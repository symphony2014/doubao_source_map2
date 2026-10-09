// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'symbolTostringtagTest'
// - Resolved require(160255) to 'symbol-tostringtag-test'
// - Resolved require(976843) to 'object-define-property-safe'
// - Renamed variable 'i' to 'definePropertySafeWrapper'
// - Resolved require(336704) to 'define-property-safe-wrapper'
// - Renamed variable 'u' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'c' to 'objectToStringImpl'
// - Resolved require(853425) to 'object-to-string-impl'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 434792
         */
module.exports = function (module, exports, require) {
  var symbolTostringtagTest = require("symbol-tostringtag-test") /*id: 160255*/;
  var o = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  var definePropertySafeWrapper = require("define-property-safe-wrapper") /*id: 336704*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var objectToStringImpl = require("object-to-string-impl") /*id: 853425*/;
  var s = require("symbol-well-known-registry") /*id: 21227*/("toStringTag");
  module.exports = function (t, r, n, f) {
    var a = n ? t : t && t.prototype;
    if (a) {
      if (!objectHasOwnPolyfill(a, s)) {
        o(a, s, {
          configurable: true,
          value: r
        });
      }
      if (f && !symbolTostringtagTest) {
        definePropertySafeWrapper(a, "toString", objectToStringImpl);
      }
    }
  };
}
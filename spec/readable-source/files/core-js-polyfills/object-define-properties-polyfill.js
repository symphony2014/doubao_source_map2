// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'defineProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 182349
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var propertyDescriptorSupportCheck = require("property-descriptor-support-check") /*id: 248399*/;
  var objectDefinePropertySafe = require("object-define-property-safe") /*id: 976843*/;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var objectKeysPolyfill_2 = require("object-keys-polyfill_2") /*id: 132591*/;
  exports.defineProperties = checkPropertyDescriptorSupport && !propertyDescriptorSupportCheck ? Object.defineProperties : function (t, r) {
    requireObjectOrThrowTypeError(t);
    var n;
    var e = stringToArrayFallback(r);
    var o = objectKeysPolyfill_2(r);
    var f = o.length;
    var a = 0;
    while (f > a) {
      objectDefinePropertySafe.safeDefineProperty(t, n = o[a++], e[n]);
    }
    return t;
  };
}
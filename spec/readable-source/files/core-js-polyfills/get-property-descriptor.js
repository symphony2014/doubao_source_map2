// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getPropertyDescriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 836432
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var propertyIsEnumerablePolyfill = require("property-is-enumerable-polyfill") /*id: 25377*/;
  var createPropertyDescriptor = require("create-property-descriptor") /*id: 757570*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var toStringPrimitiveConverter = require("to-string-primitive-converter") /*id: 956642*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var propertyDescriptorSupportCheck_1 = require("property-descriptor-support-check_1") /*id: 752690*/;
  var p = Object.getOwnPropertyDescriptor;
  exports.getPropertyDescriptor = checkPropertyDescriptorSupport ? p : function (t, r) {
    t = stringToArrayFallback(t);
    r = toStringPrimitiveConverter(r);
    if (propertyDescriptorSupportCheck_1) {
      try {
        return p(t, r);
      } catch (t) {}
    }
    if (objectHasOwnPolyfill(t, r)) {
      return createPropertyDescriptor(!functionCallBindHelper(propertyIsEnumerablePolyfill.isEnumerable, t, r), t[r]);
    }
  };
}
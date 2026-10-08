// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getOwnPropertyDesc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 143761
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var propertyEnumerableCheck = require("property-enumerable-check") /*id: 575817*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var symbolToStringConverter = require("symbol-to-string-converter") /*id: 980181*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var es5DomDefinePropertyCheck = require("es5-dom-define-property-check") /*id: 249084*/;
  var l = Object.getOwnPropertyDescriptor;
  exports.getOwnPropertyDesc = es5PropertyDescriptorCheck ? l : function (t, r) {
    t = stringToArrayPolyfillWrapper(t);
    r = symbolToStringConverter(r);
    if (es5DomDefinePropertyCheck) {
      try {
        return l(t, r);
      } catch (t) {}
    }
    if (objectHasOwnPolyfill_1(t, r)) {
      return polyfillPropertyDescriptor(!callBindPolyfill(propertyEnumerableCheck.isEnumerable, t, r), t[r]);
    }
  };
}
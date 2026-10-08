// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'defineProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 991559
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var es5DefinePropertyCheck = require("es5-define-property-check") /*id: 411419*/;
  var es5DefinePropertyImpl = require("es5-define-property-impl") /*id: 760974*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var objectKeysPolyfill_3 = require("object-keys-polyfill_3") /*id: 18493*/;
  exports.defineProperties = es5PropertyDescriptorCheck && !es5DefinePropertyCheck ? Object.defineProperties : function (t, r) {
    requireObjectOrThrowTypeError_1(t);
    var e;
    var n = stringToArrayPolyfillWrapper(r);
    var o = objectKeysPolyfill_3(r);
    var f = o.length;
    var s = 0;
    while (f > s) {
      es5DefinePropertyImpl.defineProperty(t, e = o[s++], n[e]);
    }
    return t;
  };
}
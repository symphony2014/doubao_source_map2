// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'i' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'a' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'u' to 'objectToPrimitiveConverter_1'
// - Resolved require(158979) to 'object-to-primitive-converter_1'
// - Renamed variable 'c' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 320986
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var objectToPrimitiveConverter_1 = require("object-to-primitive-converter_1") /*id: 158979*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var f = TypeError;
  var s = coreJsWksAccess("toPrimitive");
  module.exports = function (t, r) {
    if (!isObjectOrFunctionCheck(t) || isSymbolPolyfill(t)) {
      return t;
    }
    var e;
    var c = safePropertyValidator(t, s);
    if (c) {
      if (r === undefined) {
        r = "default";
      }
      if (!isObjectOrFunctionCheck(e = callBindPolyfill(c, t, r)) || isSymbolPolyfill(e)) {
        return e;
      }
      throw new f("Can't convert object to primitive value");
    }
    if (r === undefined) {
      r = "number";
    }
    return objectToPrimitiveConverter_1(t, r);
  };
}
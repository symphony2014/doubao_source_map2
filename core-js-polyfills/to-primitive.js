// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'o' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'i' to 'symbolTypeCheck'
// - Resolved require(95579) to 'symbol-type-check'
// - Renamed variable 'u' to 'safeTypeGuardPropertyAccessor'
// - Resolved require(155472) to 'safe-type-guard-property-accessor'
// - Renamed variable 'c' to 'objectToPrimitiveConverter'
// - Resolved require(40589) to 'object-to-primitive-converter'
// - Renamed variable 's' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 11421
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var symbolTypeCheck = require("symbol-type-check") /*id: 95579*/;
  var safeTypeGuardPropertyAccessor = require("safe-type-guard-property-accessor") /*id: 155472*/;
  var objectToPrimitiveConverter = require("object-to-primitive-converter") /*id: 40589*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var f = TypeError;
  var a = symbolWellKnownRegistry("toPrimitive");
  module.exports = function (t, r) {
    if (!isObjectOrFunction_1(t) || symbolTypeCheck(t)) {
      return t;
    }
    var n;
    var s = safeTypeGuardPropertyAccessor(t, a);
    if (s) {
      if (r === undefined) {
        r = "default";
      }
      if (!isObjectOrFunction_1(n = functionCallBindHelper(s, t, r)) || symbolTypeCheck(n)) {
        return n;
      }
      throw new f("Can't convert object to primitive value");
    }
    if (r === undefined) {
      r = "number";
    }
    return objectToPrimitiveConverter(t, r);
  };
}
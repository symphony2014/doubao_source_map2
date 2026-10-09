// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 748658
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  module.exports = function (t, r, e) {
    var a;
    var u;
    requireObjectOrThrowTypeError_1(t);
    try {
      if (!(a = safePropertyValidator(t, "return"))) {
        if (r === "throw") {
          throw e;
        }
        return e;
      }
      a = callBindPolyfill(a, t);
    } catch (t) {
      u = true;
      a = t;
    }
    if (r === "throw") {
      throw e;
    }
    if (u) {
      throw a;
    }
    requireObjectOrThrowTypeError_1(a);
    return e;
  };
}
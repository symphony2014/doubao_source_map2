// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 318737
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var u = TypeError;
  module.exports = function (t, r) {
    var e;
    var c = requireObjectOrThrowTypeError_1(this);
    var f = functionValidator(c.get);
    var s = functionValidator(c.has);
    var l = functionValidator(c.set);
    var v = arguments.length > 2 ? arguments[2] : undefined;
    if (!isFunctionPolyfill(r) && !isFunctionPolyfill(v)) {
      throw new u("At least one callback required");
    }
    if (callBindPolyfill(s, c, t)) {
      e = callBindPolyfill(f, c, t);
      if (isFunctionPolyfill(r)) {
        callBindPolyfill(l, c, t, e = r(e));
      }
    } else if (isFunctionPolyfill(v)) {
      callBindPolyfill(l, c, t, e = v());
    }
    return e;
  };
}
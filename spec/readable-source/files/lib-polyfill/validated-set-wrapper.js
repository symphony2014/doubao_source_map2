// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'a' to 'mathTruncPolyfill_2'
// - Resolved require(114774) to 'math-trunc-polyfill_2'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 768847
         */
module.exports = function (module, exports, require) {
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var mathTruncPolyfill_2 = require("math-trunc-polyfill_2") /*id: 114774*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var c = "Invalid size";
  var f = RangeError;
  var s = TypeError;
  var l = Math.max;
  function v(t, r) {
    this.set = t;
    this.size = l(r, 0);
    this.has = functionValidator(t.has);
    this.keys = functionValidator(t.keys);
  }
  v.prototype = {
    getIterator: function () {
      return iteratorWrapperHelper(requireObjectOrThrowTypeError_1(callBindPolyfill(this.keys, this.set)));
    },
    includes: function (t) {
      return callBindPolyfill(this.has, this.set, t);
    }
  };
  module.exports = function (t) {
    requireObjectOrThrowTypeError_1(t);
    var r = +t.size;
    if (r != r) {
      throw new s(c);
    }
    var e = mathTruncPolyfill_2(r);
    if (e < 0) {
      throw new f(c);
    }
    return new v(t, e);
  };
}
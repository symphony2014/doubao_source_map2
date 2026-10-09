// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'u' to 'iteratorHelperFactory'
// - Resolved require(11754) to 'iterator-helper-factory'
// - Renamed variable 'c' to 'safeFunctionExecutor_1'
// - Resolved require(936802) to 'safe-function-executor_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 338333
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var iteratorHelperFactory = require("iterator-helper-factory") /*id: 11754*/;
  var safeFunctionExecutor_1 = require("safe-function-executor_1") /*id: 936802*/;
  var f = iteratorHelperFactory(function () {
    var t = this.iterator;
    var r = requireObjectOrThrowTypeError_1(callBindPolyfill(this.next, t));
    if (!(this.done = !!r.done)) {
      return safeFunctionExecutor_1(t, this.mapper, [r.value, this.counter++], true);
    }
  });
  module.exports = function (t) {
    requireObjectOrThrowTypeError_1(this);
    functionValidator(t);
    return new f(iteratorWrapperHelper(this), {
      mapper: t
    });
  };
}
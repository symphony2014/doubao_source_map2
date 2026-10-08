// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'c' to 'iteratorHelperFactory'
// - Resolved require(11754) to 'iterator-helper-factory'
// - Renamed variable 'f' to 'safeFunctionExecutor_1'
// - Resolved require(936802) to 'safe-function-executor_1'
// - Renamed variable 's' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 678910
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var iteratorHelperFactory = require("iterator-helper-factory") /*id: 11754*/;
  var safeFunctionExecutor_1 = require("safe-function-executor_1") /*id: 936802*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var l = iteratorHelperFactory(function () {
    var t;
    var r;
    var e = this.iterator;
    var n = this.predicate;
    var i = this.next;
    while (true) {
      t = requireObjectOrThrowTypeError_1(callBindPolyfill(i, e));
      if (this.done = !!t.done) {
        return;
      }
      if (safeFunctionExecutor_1(e, n, [r = t.value, this.counter++], true)) {
        return r;
      }
    }
  });
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true,
    forced: libPolyfillCheck
  }, {
    filter: function (t) {
      requireObjectOrThrowTypeError_1(this);
      functionValidator(t);
      return new l(iteratorWrapperHelper(this), {
        predicate: t
      });
    }
  });
}
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
// - Renamed variable 'c' to 'getIteratorUtil'
// - Resolved require(145391) to 'get-iterator-util'
// - Renamed variable 'f' to 'iteratorHelperFactory'
// - Resolved require(11754) to 'iterator-helper-factory'
// - Renamed variable 's' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// - Renamed variable 'l' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 717042
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var getIteratorUtil = require("get-iterator-util") /*id: 145391*/;
  var iteratorHelperFactory = require("iterator-helper-factory") /*id: 11754*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var v = iteratorHelperFactory(function () {
    var t;
    var r;
    var e = this.iterator;
    var n = this.mapper;
    while (true) {
      if (r = this.inner) {
        try {
          if (!(t = requireObjectOrThrowTypeError_1(callBindPolyfill(r.next, r.iterator))).done) {
            return t.value;
          }
          this.inner = null;
        } catch (t) {
          callBindSafePropertyReturnHandler(e, "throw", t);
        }
      }
      t = requireObjectOrThrowTypeError_1(callBindPolyfill(this.next, e));
      if (this.done = !!t.done) {
        return;
      }
      try {
        this.inner = getIteratorUtil(n(t.value, this.counter++), false);
      } catch (t) {
        callBindSafePropertyReturnHandler(e, "throw", t);
      }
    }
  });
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true,
    forced: libPolyfillCheck
  }, {
    flatMap: function (t) {
      requireObjectOrThrowTypeError_1(this);
      functionValidator(t);
      return new v(iteratorWrapperHelper(this), {
        mapper: t,
        inner: null
      });
    }
  });
}
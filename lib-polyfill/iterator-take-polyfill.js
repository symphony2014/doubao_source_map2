// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'u' to 'assertNotNanUtil'
// - Resolved require(102592) to 'assert-not-nan-util'
// - Renamed variable 'c' to 'nonNegativeTruncUtil'
// - Resolved require(870777) to 'non-negative-trunc-util'
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
         * moduleId: 108594
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var assertNotNanUtil = require("assert-not-nan-util") /*id: 102592*/;
  var nonNegativeTruncUtil = require("non-negative-trunc-util") /*id: 870777*/;
  var iteratorHelperFactory = require("iterator-helper-factory") /*id: 11754*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var v = iteratorHelperFactory(function () {
    var t = this.iterator;
    if (!this.remaining--) {
      this.done = true;
      return callBindSafePropertyReturnHandler(t, "normal", undefined);
    }
    var r = requireObjectOrThrowTypeError_1(callBindPolyfill(this.next, t));
    if (!(this.done = !!r.done)) {
      return r.value;
    }
  });
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true,
    forced: libPolyfillCheck
  }, {
    take: function (t) {
      requireObjectOrThrowTypeError_1(this);
      var r = nonNegativeTruncUtil(assertNotNanUtil(+t));
      return new v(iteratorWrapperHelper(this), {
        remaining: r
      });
    }
  });
}
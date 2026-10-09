// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'a' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'u' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'c' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'f' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 's' to 'asyncIteratorPrototypePolyfill'
// - Resolved require(198718) to 'async-iterator-prototype-polyfill'
// - Renamed variable 'l' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 42869
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var asyncIteratorPrototypePolyfill = require("async-iterator-prototype-polyfill") /*id: 198718*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var v = globalPolyfillAccess("Promise");
  var p = "AsyncFromSyncIterator";
  var h = objectStateManager.set;
  var d = objectStateManager.getterFor(p);
  function y(t, r, e) {
    var n = t.done;
    v.resolve(t.value).then(function (t) {
      r(iteratorResultFactory_1(t, n));
    }, e);
  }
  function g(t) {
    t.type = p;
    h(this, t);
  }
  g.prototype = definePropertiesHelper(objectCreatePolyfill_1(asyncIteratorPrototypePolyfill), {
    next: function () {
      var t = d(this);
      return new v(function (r, e) {
        y(requireObjectOrThrowTypeError_1(callBindPolyfill(t.next, t.iterator)), r, e);
      });
    },
    return: function () {
      var t = d(this).iterator;
      return new v(function (r, e) {
        var i = safePropertyValidator(t, "return");
        if (i === undefined) {
          return r(iteratorResultFactory_1(undefined, true));
        }
        y(requireObjectOrThrowTypeError_1(callBindPolyfill(i, t)), r, e);
      });
    }
  });
  module.exports = g;
}
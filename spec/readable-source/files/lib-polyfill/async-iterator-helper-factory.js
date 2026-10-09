// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'u' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'c' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'f' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 's' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'l' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'v' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'p' to 'asyncIteratorPrototypePolyfill'
// - Resolved require(198718) to 'async-iterator-prototype-polyfill'
// - Renamed variable 'h' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'd' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 776152
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var libPolyfillSafeCall = require("lib-polyfill-safe-call") /*id: 281924*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var asyncIteratorPrototypePolyfill = require("async-iterator-prototype-polyfill") /*id: 198718*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  var y = globalPolyfillAccess("Promise");
  var g = coreJsWksAccess("toStringTag");
  var b = "AsyncIteratorHelper";
  var w = "WrapForValidAsyncIterator";
  var m = objectStateManager.set;
  function x(t) {
    var r = !t;
    var e = objectStateManager.getterFor(t ? w : b);
    function u(t) {
      var n = libPolyfillSafeCall(function () {
        return e(t);
      });
      var i = n.error;
      var a = n.value;
      if (i || r && a.done) {
        return {
          exit: true,
          value: i ? y.reject(a) : y.resolve(iteratorResultFactory_1(undefined, true))
        };
      } else {
        return {
          exit: false,
          value: a
        };
      }
    }
    return definePropertiesHelper(objectCreatePolyfill_1(asyncIteratorPrototypePolyfill), {
      next: function () {
        var t = u(this);
        var r = t.value;
        if (t.exit) {
          return r;
        }
        var e = libPolyfillSafeCall(function () {
          return requireObjectOrThrowTypeError_1(r.nextHandler(y));
        });
        var n = e.error;
        var a = e.value;
        if (n) {
          r.done = true;
        }
        if (n) {
          return y.reject(a);
        } else {
          return y.resolve(a);
        }
      },
      return: function () {
        var r;
        var e;
        var a = u(this);
        var c = a.value;
        if (a.exit) {
          return c;
        }
        c.done = true;
        var f = c.iterator;
        var s = libPolyfillSafeCall(function () {
          if (c.inner) {
            try {
              callBindSafePropertyReturnHandler(c.inner.iterator, "normal");
            } catch (t) {
              return callBindSafePropertyReturnHandler(f, "throw", t);
            }
          }
          return safePropertyValidator(f, "return");
        });
        r = e = s.value;
        if (s.error) {
          return y.reject(e);
        } else if (r === undefined) {
          return y.resolve(iteratorResultFactory_1(undefined, true));
        } else {
          e = (s = libPolyfillSafeCall(function () {
            return callBindPolyfill(r, f);
          })).value;
          if (s.error) {
            return y.reject(e);
          } else if (t) {
            return y.resolve(e);
          } else {
            return y.resolve(e).then(function (t) {
              requireObjectOrThrowTypeError_1(t);
              return iteratorResultFactory_1(undefined, true);
            });
          }
        }
      }
    });
  }
  var A = x(true);
  var E = x(false);
  definePropertyHelper_1(E, g, "Async Iterator Helper");
  module.exports = function (t, r) {
    function e(e, n) {
      if (n) {
        n.iterator = e.iterator;
        n.next = e.next;
      } else {
        n = e;
      }
      n.type = r ? w : b;
      n.nextHandler = t;
      n.counter = 0;
      n.done = false;
      m(this, n);
    }
    e.prototype = r ? A : E;
    return e;
  };
}
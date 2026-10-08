// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'i' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'a' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'u' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'c' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'f' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Resolved require(136661) to 'iterator-prototype-setup'
// - Renamed variable 'l' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'v' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 11754
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var s = require("iterator-prototype-setup") /*id: 136661*/.IteratorPrototype;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  var p = coreJsWksAccess("toStringTag");
  var h = "IteratorHelper";
  var d = "WrapForValidIterator";
  var y = objectStateManager.set;
  function g(t) {
    var r = objectStateManager.getterFor(t ? d : h);
    return definePropertiesHelper(objectCreatePolyfill_1(s), {
      next: function () {
        var e = r(this);
        if (t) {
          return e.nextHandler();
        }
        if (e.done) {
          return iteratorResultFactory_1(undefined, true);
        }
        try {
          var n = e.nextHandler();
          if (e.returnHandlerResult) {
            return n;
          } else {
            return iteratorResultFactory_1(n, e.done);
          }
        } catch (t) {
          e.done = true;
          throw t;
        }
      },
      return: function () {
        var e = r(this);
        var o = e.iterator;
        e.done = true;
        if (t) {
          var i = safePropertyValidator(o, "return");
          if (i) {
            return callBindPolyfill(i, o);
          } else {
            return iteratorResultFactory_1(undefined, true);
          }
        }
        if (e.inner) {
          try {
            callBindSafePropertyReturnHandler(e.inner.iterator, "normal");
          } catch (t) {
            return callBindSafePropertyReturnHandler(o, "throw", t);
          }
        }
        if (o) {
          callBindSafePropertyReturnHandler(o, "normal");
        }
        return iteratorResultFactory_1(undefined, true);
      }
    });
  }
  var b = g(true);
  var w = g(false);
  definePropertyHelper_1(w, p, "Iterator Helper");
  module.exports = function (t, r, e) {
    function n(n, o) {
      if (o) {
        o.iterator = n.iterator;
        o.next = n.next;
      } else {
        o = n;
      }
      o.type = r ? d : h;
      o.returnHandlerResult = !!e;
      o.nextHandler = t;
      o.counter = 0;
      o.done = false;
      y(this, o);
    }
    n.prototype = r ? b : w;
    return n;
  };
}
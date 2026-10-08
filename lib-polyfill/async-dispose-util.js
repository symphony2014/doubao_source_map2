// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'u' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'c' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'f' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 's' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'l' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 387831
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var v = coreJsWksAccess("asyncDispose");
  var p = coreJsWksAccess("dispose");
  var h = functionBindFallback([].push);
  function d(t, r) {
    if (r === "async-dispose") {
      var e = safePropertyValidator(t, v);
      if (e !== undefined || (e = safePropertyValidator(t, p)) === undefined) {
        return e;
      } else {
        return function () {
          var t = this;
          return new (globalPolyfillAccess("Promise"))(function (r) {
            callBindPolyfill(e, t);
            r(undefined);
          });
        };
      }
    }
    return safePropertyValidator(t, p);
  }
  function y(t, r, e) {
    if (arguments.length < 3 && !isNullishCheck_1(t)) {
      e = functionValidator(d(requireObjectOrThrowTypeError_1(t), r));
    }
    if (e === undefined) {
      return function () {};
    } else {
      return safeFunctionBind(e, t);
    }
  }
  module.exports = function (t, r, e, n) {
    var o;
    if (arguments.length < 4) {
      if (isNullishCheck_1(r) && e === "sync-dispose") {
        return;
      }
      o = y(r, e);
    } else {
      o = y(undefined, e, n);
    }
    h(t.stack, o);
  };
}
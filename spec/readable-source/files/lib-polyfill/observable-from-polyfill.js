// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'a' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'u' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// - Renamed variable 'c' to 'getIteratorMethod'
// - Resolved require(134822) to 'get-iterator-method'
// - Renamed variable 'f' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 's' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 303954
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var getIteratorMethod = require("get-iterator-method") /*id: 134822*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var l = require("core-js-wks-access") /*id: 349338*/("observable");
  polyfillPropertyDefiner({
    target: "Observable",
    stat: true,
    forced: true
  }, {
    from: function (t) {
      var r = nativeConstructorDetector(this) ? this : globalPolyfillAccess("Observable");
      var e = safePropertyValidator(requireObjectOrThrowTypeError_1(t), l);
      if (e) {
        var n = requireObjectOrThrowTypeError_1(callBindPolyfill(e, t));
        if (n.constructor === r) {
          return n;
        } else {
          return new r(function (t) {
            return n.subscribe(t);
          });
        }
      }
      var v = getIteratorMethod(t);
      return new r(function (t) {
        iteratorForEachHelper(v, function (r, e) {
          t.next(r);
          if (t.closed) {
            return e();
          }
        }, {
          IS_ITERATOR: true,
          INTERRUPTED: true
        });
        t.complete();
      });
    }
  });
}
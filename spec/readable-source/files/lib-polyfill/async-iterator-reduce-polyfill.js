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
// - Renamed variable 'u' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'c' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'f' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 's' to 'polyfillFunctionReturnUtil'
// - Resolved require(255087) to 'polyfill-function-return-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 851328
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var polyfillFunctionReturnUtil = require("polyfill-function-return-util") /*id: 255087*/;
  var l = globalPolyfillAccess("Promise");
  var v = TypeError;
  polyfillPropertyDefiner({
    target: "AsyncIterator",
    proto: true,
    real: true
  }, {
    reduce: function (t) {
      requireObjectOrThrowTypeError_1(this);
      functionValidator(t);
      var r = iteratorWrapperHelper(this);
      var e = r.iterator;
      var n = r.next;
      var c = arguments.length < 2;
      var p = c ? undefined : arguments[1];
      var h = 0;
      return new l(function (r, i) {
        function f(t) {
          polyfillFunctionReturnUtil(e, i, t, i);
        }
        function d() {
          try {
            l.resolve(requireObjectOrThrowTypeError_1(callBindPolyfill(n, e))).then(function (e) {
              try {
                if (requireObjectOrThrowTypeError_1(e).done) {
                  if (c) {
                    i(new v("Reduce of empty iterator with no initial value"));
                  } else {
                    r(p);
                  }
                } else {
                  var n = e.value;
                  if (c) {
                    c = false;
                    p = n;
                    d();
                  } else {
                    try {
                      var o = t(p, n, h);
                      function s(t) {
                        p = t;
                        d();
                      }
                      if (isObjectOrFunctionCheck(o)) {
                        l.resolve(o).then(s, f);
                      } else {
                        s(o);
                      }
                    } catch (t) {
                      f(t);
                    }
                  }
                }
                h++;
              } catch (t) {
                i(t);
              }
            }, i);
          } catch (t) {
            i(t);
          }
        }
        d();
      });
    }
  });
}
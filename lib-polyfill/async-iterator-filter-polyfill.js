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
// - Renamed variable 'c' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'f' to 'asyncIteratorHelperFactory'
// - Resolved require(776152) to 'async-iterator-helper-factory'
// - Renamed variable 's' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'l' to 'polyfillFunctionReturnUtil'
// - Resolved require(255087) to 'polyfill-function-return-util'
// - Renamed variable 'v' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 36292
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var asyncIteratorHelperFactory = require("async-iterator-helper-factory") /*id: 776152*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var polyfillFunctionReturnUtil = require("polyfill-function-return-util") /*id: 255087*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var p = asyncIteratorHelperFactory(function (t) {
    var r = this;
    var e = r.iterator;
    var n = r.predicate;
    return new t(function (i, c) {
      function f(t) {
        r.done = true;
        c(t);
      }
      function v(t) {
        polyfillFunctionReturnUtil(e, f, t, f);
      }
      function p() {
        try {
          t.resolve(requireObjectOrThrowTypeError_1(callBindPolyfill(r.next, e))).then(function (e) {
            try {
              if (requireObjectOrThrowTypeError_1(e).done) {
                r.done = true;
                i(iteratorResultFactory_1(undefined, true));
              } else {
                var o = e.value;
                try {
                  var c = n(o, r.counter++);
                  function l(t) {
                    if (t) {
                      i(iteratorResultFactory_1(o, false));
                    } else {
                      p();
                    }
                  }
                  if (isObjectOrFunctionCheck(c)) {
                    t.resolve(c).then(l, v);
                  } else {
                    l(c);
                  }
                } catch (t) {
                  v(t);
                }
              }
            } catch (t) {
              f(t);
            }
          }, f);
        } catch (t) {
          f(t);
        }
      }
      p();
    });
  });
  polyfillPropertyDefiner({
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced: libPolyfillCheck
  }, {
    filter: function (t) {
      requireObjectOrThrowTypeError_1(this);
      functionValidator(t);
      return new p(iteratorWrapperHelper(this), {
        predicate: t
      });
    }
  });
}
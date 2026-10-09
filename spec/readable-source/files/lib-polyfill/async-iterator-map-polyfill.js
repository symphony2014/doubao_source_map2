// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'u' to 'iteratorWrapperHelper'
// - Resolved require(610771) to 'iterator-wrapper-helper'
// - Renamed variable 'c' to 'asyncIteratorHelperFactory'
// - Resolved require(776152) to 'async-iterator-helper-factory'
// - Renamed variable 'f' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 's' to 'polyfillFunctionReturnUtil'
// - Resolved require(255087) to 'polyfill-function-return-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 537507
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var asyncIteratorHelperFactory = require("async-iterator-helper-factory") /*id: 776152*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var polyfillFunctionReturnUtil = require("polyfill-function-return-util") /*id: 255087*/;
  var l = asyncIteratorHelperFactory(function (t) {
    var r = this;
    var e = r.iterator;
    var o = r.mapper;
    return new t(function (u, c) {
      function l(t) {
        r.done = true;
        c(t);
      }
      function v(t) {
        polyfillFunctionReturnUtil(e, l, t, l);
      }
      t.resolve(requireObjectOrThrowTypeError_1(callBindPolyfill(r.next, e))).then(function (e) {
        try {
          if (requireObjectOrThrowTypeError_1(e).done) {
            r.done = true;
            u(iteratorResultFactory_1(undefined, true));
          } else {
            var n = e.value;
            try {
              var c = o(n, r.counter++);
              function s(t) {
                u(iteratorResultFactory_1(t, false));
              }
              if (isObjectOrFunctionCheck(c)) {
                t.resolve(c).then(s, v);
              } else {
                s(c);
              }
            } catch (t) {
              v(t);
            }
          }
        } catch (t) {
          l(t);
        }
      }, l);
    });
  });
  module.exports = function (t) {
    requireObjectOrThrowTypeError_1(this);
    functionValidator(t);
    return new l(iteratorWrapperHelper(this), {
      mapper: t
    });
  };
}
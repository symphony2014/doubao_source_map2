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
// - Renamed variable 'f' to 'asyncIteratorHelperFactory'
// - Resolved require(776152) to 'async-iterator-helper-factory'
// - Renamed variable 's' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'l' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 679108
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var iteratorWrapperHelper = require("iterator-wrapper-helper") /*id: 610771*/;
  var assertNotNanUtil = require("assert-not-nan-util") /*id: 102592*/;
  var nonNegativeTruncUtil = require("non-negative-trunc-util") /*id: 870777*/;
  var asyncIteratorHelperFactory = require("async-iterator-helper-factory") /*id: 776152*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var v = asyncIteratorHelperFactory(function (t) {
    var r = this;
    return new t(function (e, n) {
      function a(t) {
        r.done = true;
        n(t);
      }
      function u() {
        try {
          t.resolve(requireObjectOrThrowTypeError_1(callBindPolyfill(r.next, r.iterator))).then(function (t) {
            try {
              if (requireObjectOrThrowTypeError_1(t).done) {
                r.done = true;
                e(iteratorResultFactory_1(undefined, true));
              } else if (r.remaining) {
                r.remaining--;
                u();
              } else {
                e(iteratorResultFactory_1(t.value, false));
              }
            } catch (t) {
              a(t);
            }
          }, a);
        } catch (t) {
          a(t);
        }
      }
      u();
    });
  });
  polyfillPropertyDefiner({
    target: "AsyncIterator",
    proto: true,
    real: true,
    forced: libPolyfillCheck
  }, {
    drop: function (t) {
      requireObjectOrThrowTypeError_1(this);
      var r = nonNegativeTruncUtil(assertNotNanUtil(+t));
      return new v(iteratorWrapperHelper(this), {
        remaining: r
      });
    }
  });
}
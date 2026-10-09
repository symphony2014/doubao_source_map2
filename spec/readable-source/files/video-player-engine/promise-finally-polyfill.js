// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'i' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'd' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'r' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'o' to 'speciesConstructorUtil'
// - Resolved require(206077) to 'species-constructor-util'
// - Renamed variable 'B' to 'promiseResolveHelper'
// - Resolved require(501080) to 'promise-resolve-helper'
// - Renamed variable 'R' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 720225
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var speciesConstructorUtil = require("species-constructor-util") /*id: 206077*/;
  var promiseResolveHelper = require("promise-resolve-helper") /*id: 501080*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var c = promisePolyfill && promisePolyfill.prototype;
  polyfillPropertyDefiner({
    target: "Promise",
    proto: true,
    real: true,
    forced: !!promisePolyfill && tryCatchFunctionWrapper(function () {
      c.finally.call({
        then: function () {}
      }, function () {});
    })
  }, {
    finally: function (U) {
      var n = speciesConstructorUtil(this, globalPolyfillAccess("Promise"));
      var F = isFunctionPolyfill(U);
      return this.then(F ? function (F) {
        return promiseResolveHelper(n, U()).then(function () {
          return F;
        });
      } : U, F ? function (F) {
        return promiseResolveHelper(n, U()).then(function () {
          throw F;
        });
      } : U);
    }
  });
  if (!libPolyfillCheck && isFunctionPolyfill(promisePolyfill)) {
    var s = globalPolyfillAccess("Promise").prototype.finally;
    if (c.finally !== s) {
      definePropertyHelper_1_1(c, "finally", s, {
        unsafe: true
      });
    }
  }
}
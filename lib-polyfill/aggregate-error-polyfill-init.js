// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'a' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'u' to 'errorPolyfillWrapper'
// - Resolved require(498357) to 'error-polyfill-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 238644
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var errorPolyfillWrapper = require("error-polyfill-wrapper") /*id: 498357*/;
  var c = "AggregateError";
  var f = globalPolyfillAccess(c);
  var s = !tryCatchFunctionWrapper(function () {
    return f([1]).errors[0] !== 1;
  }) && tryCatchFunctionWrapper(function () {
    return f([1], c, {
      cause: 7
    }).cause !== 7;
  });
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    arity: 2,
    forced: s
  }, {
    AggregateError: errorPolyfillWrapper(c, function (t) {
      return function (r, e) {
        return reflectApplyPolyfill_1(t, this, arguments);
      };
    }, s, true)
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'i' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Resolved require(535196) to 'array-includes-indexof-util'
// - Renamed variable 'c' to 'emptyModule_2'
// - Resolved require(422324) to 'empty-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 856838
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var u = require("array-includes-indexof-util") /*id: 535196*/.indexOf;
  var emptyModule_2 = require("empty-module_2") /*id: 422324*/;
  var s = functionBindPrototypeCheckWrapper([].push);
  module.exports = function (t, r) {
    var n;
    var e = stringToArrayFallback(t);
    var f = 0;
    var a = [];
    for (n in e) {
      if (!objectHasOwnPolyfill(emptyModule_2, n) && objectHasOwnPolyfill(e, n)) {
        s(a, n);
      }
    }
    while (r.length > f) {
      if (objectHasOwnPolyfill(e, n = r[f++])) {
        if (!~u(a, n)) {
          s(a, n);
        }
      }
    }
    return a;
  };
}
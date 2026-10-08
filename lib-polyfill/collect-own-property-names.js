// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Resolved require(569286) to 'array-includes-indexof-polyfill'
// - Renamed variable 'u' to 'libPolyfill_1'
// - Resolved require(910663) to 'lib-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 392181
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var a = require("array-includes-indexof-polyfill") /*id: 569286*/.indexOf;
  var libPolyfill_1 = require("lib-polyfill_1") /*id: 910663*/;
  var c = functionBindFallback([].push);
  module.exports = function (t, r) {
    var e;
    var n = stringToArrayPolyfillWrapper(t);
    var f = 0;
    var s = [];
    for (e in n) {
      if (!objectHasOwnPolyfill_1(libPolyfill_1, e) && objectHasOwnPolyfill_1(n, e)) {
        c(s, e);
      }
    }
    while (r.length > f) {
      if (objectHasOwnPolyfill_1(n, e = r[f++])) {
        if (!~a(s, e)) {
          c(s, e);
        }
      }
    }
    return s;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'isSymbolPolyfill'
// - Resolved require(362010) to 'is-symbol-polyfill'
// - Renamed variable 'u' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 639114
         */
module.exports = function (module, exports, require) {
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var isSymbolPolyfill = require("is-symbol-polyfill") /*id: 362010*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var c = globalPolyfillAccess("Symbol");
  var f = c.isWellKnownSymbol;
  var s = globalPolyfillAccess("Object", "getOwnPropertyNames");
  var l = functionBindFallback(c.prototype.valueOf);
  var v = coreJsSharedStoreAccess("wks");
  var p = 0;
  var h = s(c);
  var d = h.length;
  for (; p < d; p++) {
    try {
      var y = h[p];
      if (isSymbolPolyfill(c[y])) {
        coreJsWksAccess(y);
      }
    } catch (t) {}
  }
  module.exports = function (t) {
    if (f && f(t)) {
      return true;
    }
    try {
      var r = l(t);
      var e = 0;
      var n = s(v);
      var o = n.length;
      for (; e < o; e++) {
        if (v[n[e]] == r) {
          return true;
        }
      }
    } catch (t) {}
    return false;
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsSharedVersionUtil'
// - Resolved require(585661) to 'core-js-shared-version-util'
// - Renamed variable 'o' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'i' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'u' to 'symbolTypeCheck'
// - Resolved require(95579) to 'symbol-type-check'
// - Renamed variable 'c' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 802763
         */
module.exports = function (module, exports, require) {
  var coreJsSharedVersionUtil = require("core-js-shared-version-util") /*id: 585661*/;
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var symbolTypeCheck = require("symbol-type-check") /*id: 95579*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var s = globalNamespaceUtil("Symbol");
  var f = s.isWellKnownSymbol;
  var a = globalNamespaceUtil("Object", "getOwnPropertyNames");
  var p = functionBindPrototypeCheckWrapper(s.prototype.valueOf);
  var l = coreJsSharedVersionUtil("wks");
  var v = 0;
  var y = a(s);
  var h = y.length;
  for (; v < h; v++) {
    try {
      var b = y[v];
      if (symbolTypeCheck(s[b])) {
        symbolWellKnownRegistry(b);
      }
    } catch (t) {}
  }
  module.exports = function (t) {
    if (f && f(t)) {
      return true;
    }
    try {
      var r = p(t);
      var n = 0;
      var e = a(l);
      var o = e.length;
      for (; n < o; n++) {
        if (l[e[n]] == r) {
          return true;
        }
      }
    } catch (t) {}
    return false;
  };
}
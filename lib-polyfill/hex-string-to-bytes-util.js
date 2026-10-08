// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 615450
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var i = globalObjectPolyfill.Uint8Array;
  var a = globalObjectPolyfill.SyntaxError;
  var u = globalObjectPolyfill.parseInt;
  var c = Math.min;
  var f = /[^\da-f]/i;
  var s = functionBindFallback(f.exec);
  var l = functionBindFallback("".slice);
  module.exports = function (t, r) {
    var e = t.length;
    if (e % 2 != 0) {
      throw new a("String should be an even number of characters");
    }
    var n = r ? c(r.length, e / 2) : e / 2;
    var o = r || new i(n);
    var v = 0;
    var p = 0;
    while (p < n) {
      var h = l(t, v, v += 2);
      if (s(f, h)) {
        throw new a("String should only contain hex characters");
      }
      o[p++] = u(h, 16);
    }
    return {
      bytes: o,
      read: v
    };
  };
}
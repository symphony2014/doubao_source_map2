// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 903868
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var o = Error;
  var i = functionBindFallback("".replace);
  var a = String(new o("zxcasd").stack);
  var u = /\n\s*at [^:]*:[^\n]*/;
  var c = u.test(a);
  module.exports = function (t, r) {
    if (c && typeof t == "string" && !o.prepareStackTrace) {
      while (r--) {
        t = i(t, u, "");
      }
    }
    return t;
  };
}
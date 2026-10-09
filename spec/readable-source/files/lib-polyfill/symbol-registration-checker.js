// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 79151
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var i = globalPolyfillAccess("Symbol");
  var a = i.keyFor;
  var u = functionBindFallback(i.prototype.valueOf);
  module.exports = i.isRegisteredSymbol || function (t) {
    try {
      return a(u(t)) !== undefined;
    } catch (t) {
      return false;
    }
  };
}
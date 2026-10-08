// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'o' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 559661
         */
module.exports = function (module, exports, require) {
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var i = globalNamespaceUtil("Symbol");
  var u = i.keyFor;
  var c = functionBindPrototypeCheckWrapper(i.prototype.valueOf);
  module.exports = i.isRegisteredSymbol || function (t) {
    try {
      return u(c(t)) !== undefined;
    } catch (t) {
      return false;
    }
  };
}
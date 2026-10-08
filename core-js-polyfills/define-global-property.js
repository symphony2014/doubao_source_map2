// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 477052
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var o = Object.defineProperty;
  module.exports = function (t, r) {
    try {
      o(getGlobalObject, t, {
        value: r,
        configurable: true,
        writable: true
      });
    } catch (n) {
      getGlobalObject[t] = r;
    }
    return r;
  };
}
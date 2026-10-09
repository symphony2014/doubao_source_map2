// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 433178
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var o = Object.defineProperty;
  module.exports = function (t, r) {
    try {
      o(globalObjectPolyfill, t, {
        value: r,
        configurable: true,
        writable: true
      });
    } catch (e) {
      globalObjectPolyfill[t] = r;
    }
    return r;
  };
}
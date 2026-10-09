// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 533515
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  module.exports = function (t, r) {
    var e;
    if (arguments.length < 2) {
      if (isFunctionPolyfill(e = globalObjectPolyfill[t])) {
        return e;
      } else {
        return undefined;
      }
    } else {
      return globalObjectPolyfill[t] && globalObjectPolyfill[t][r];
    }
  };
}
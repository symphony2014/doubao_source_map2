// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 527865
         */
module.exports = function (module, exports, require) {
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  module.exports = function (t) {
    if (typeof t == "object") {
      return t !== null;
    } else {
      return isFunctionPolyfill(t);
    }
  };
}
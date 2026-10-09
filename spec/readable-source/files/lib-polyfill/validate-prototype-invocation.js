// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 376282
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var o = TypeError;
  module.exports = function (t, r) {
    if (isPrototypeOfPolyfill(r, t)) {
      return t;
    }
    throw new o("Incorrect invocation");
  };
}
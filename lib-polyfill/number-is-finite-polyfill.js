// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(515719) to 'global-object-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 830294
         */
module.exports = function (module, exports, require) {
  var n = require("global-object-polyfill") /*id: 515719*/.isFinite;
  module.exports = Number.isFinite || function (t) {
    return typeof t == "number" && n(t);
  };
}
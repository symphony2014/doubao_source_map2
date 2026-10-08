// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(76713) to 'weakmap-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 852001
         */
module.exports = function (module, exports, require) {
  var n = require("weakmap-utils") /*id: 76713*/.has;
  module.exports = function (t) {
    n(t);
    return t;
  };
}
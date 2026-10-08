// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'propName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 707812
         */
module.exports = function (module, exports, require) {
  function r(t) {
    for (var n in t) {
      if (!exports.hasOwnProperty(n)) {
        exports[propName] = t[n];
      }
    }
  }
  exports.__esModule = true;
  r(require("redux-store-utils-aggregator") /*id: 624669*/);
  r(require("redux-store-utils-aggregator-loader") /*id: 251557*/);
}
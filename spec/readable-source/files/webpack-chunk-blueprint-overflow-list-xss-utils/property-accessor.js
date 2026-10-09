// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 119718
         */
module.exports = function (module, exports, require) {
  exports.getProperty = function (e) {
    return function (t) {
      if (t == null) {
        return undefined;
      } else {
        return t[e];
      }
    };
  };
}
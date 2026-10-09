// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isObjectOrFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 433743
         */
module.exports = function (module, exports, require) {
  exports.isObjectOrFunction = function (e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
}
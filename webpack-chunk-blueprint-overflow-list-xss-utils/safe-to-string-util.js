// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeToString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 679355
         */
module.exports = function (module, exports, require) {
  var n = Function.prototype.toString;
  exports.safeToString = function (e) {
    if (e != null) {
      try {
        return n.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  };
}
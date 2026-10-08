// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'joinArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32845.1b4bf491.js
         * chunkId: 32845
         * moduleId: 183877
         */
module.exports = function (module, exports, require) {
  var r = Array.prototype.join;
  exports.joinArray = function (e, t) {
    if (e == null) {
      return "";
    } else {
      return r.call(e, t);
    }
  };
}
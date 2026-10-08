// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'randomInt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 717626
         */
module.exports = function (module, exports, require) {
  var n = Math.floor;
  var i = Math.random;
  exports.randomInt = function (t, e) {
    return t + n(i() * (e - t + 1));
  };
}
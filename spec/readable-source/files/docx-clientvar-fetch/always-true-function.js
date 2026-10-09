// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'alwaysTrue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72566.6916328b.js
         * chunkId: 72566
         * moduleId: 835008
         */
module.exports = function (module, exports, require) {
  function r() {
    return true;
  }
  require.d(exports, {
    alwaysTrue: function () {
      return r;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'alwaysTrue'
// - Renamed export 'D' to 'alwaysTrue_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 520760
         */
module.exports = function (module, exports, require) {
  function r() {
    return true;
  }
  function o() {
    return true;
  }
  require.d(exports, {
    alwaysTrue: function () {
      return o;
    },
    alwaysTrue_1: function () {
      return r;
    }
  });
}
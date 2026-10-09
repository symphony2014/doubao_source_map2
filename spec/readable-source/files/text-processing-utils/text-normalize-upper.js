// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'normalizeTextUpper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 523800
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  require.d(exports, {
    normalizeTextUpper: function () {
      return n;
    }
  });
}
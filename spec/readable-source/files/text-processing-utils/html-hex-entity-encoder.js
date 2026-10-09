// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'toHtmlHexEntity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 328506
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return "&#x" + e.toString(16).toUpperCase() + ";";
  }
  require.d(exports, {
    toHtmlHexEntity: function () {
      return n;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'toTitleCase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 444710
         */
module.exports = function (module, exports, require) {
  let o = e => e.toLowerCase().split(/\s+/).map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join(" ");
  require.d(exports, {
    toTitleCase: function () {
      return o;
    }
  });
}
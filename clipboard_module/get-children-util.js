// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'getChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 78534
         */
module.exports = function (module, exports, require) {
  let r = e => e.children || [];
  require.d(exports, {
    getChildren: function () {
      return r;
    }
  });
}
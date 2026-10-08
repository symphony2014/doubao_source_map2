// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'updateDocxSnapshot'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 595708
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    n.snapshot.originWhiteboardToken = n.snapshot.token;
    n.snapshot.originWhiteboardVersion = n.snapshot.version || 0;
    delete n.snapshot.token;
    e[n.id] = n;
  }
  require.d(exports, {
    updateDocxSnapshot: function () {
      return o;
    }
  });
}
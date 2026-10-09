// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'parseDocxId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 476973
         */
module.exports = function (module, exports, require) {
  function o(e) {
    let n = null;
    if (typeof e == "string") {
      [, n = null] = e.split(/_/, 2);
    }
    return n;
  }
  require.d(exports, {
    parseDocxId: function () {
      return o;
    }
  });
}
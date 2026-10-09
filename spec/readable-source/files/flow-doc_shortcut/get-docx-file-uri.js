// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getDocxFileUri'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 520427
         */
module.exports = function (module, exports, require) {
  function r(e, i) {
    var r;
    return (e == null ? undefined : (r = e.docx) === null || r === undefined ? undefined : r.fileUri?.[i]) || "";
  }
  require.d(exports, {
    getDocxFileUri: function () {
      return r;
    }
  });
}
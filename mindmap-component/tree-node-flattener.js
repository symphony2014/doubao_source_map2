// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'flattenTreeNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 881316
         */
module.exports = function (module, exports, require) {
  let i = e => e.flatMap(e => e.children ? i(e.children) : e);
  require.d(exports, {
    flattenTreeNodes: function () {
      return i;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'tableRenderHookName'
// - Renamed export 's' to 'ssrWrapperName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 130734
         */
module.exports = function (module, exports, require) {
  let n = "ccm.docx.table_ssr_replace_after_table_all_rendered";
  let o = "ssr-wrapper";
  require.d(exports, {
    tableRenderHookName: function () {
      return n;
    },
    ssrWrapperName: function () {
      return o;
    }
  });
}
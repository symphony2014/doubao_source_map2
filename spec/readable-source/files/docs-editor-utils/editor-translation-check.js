// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isTranslationActive'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 518289
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    return !!n.editorAPI.config.get("translated") && (!!n.editorAPI.config.get("translatedOnlyTranslation") || e.some(e => {
      var r;
      return !!((r = n.getBlockModelByBlockIdNotCheck(e.id)) == null ? undefined : r.recordId.endsWith("-translated"));
    }));
  }
  require.d(exports, {
    isTranslationActive: function () {
      return o;
    }
  });
}
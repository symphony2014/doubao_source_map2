// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'cleanTranslateProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 839906
         */
module.exports = function (module, exports, require) {
  function n(e) {
    if (e.translate) {
      delete e.translate;
    }
    if (e.translate_infos) {
      delete e.translate_infos;
    }
  }
  require.d(exports, {
    cleanTranslateProps: function () {
      return n;
    }
  });
}
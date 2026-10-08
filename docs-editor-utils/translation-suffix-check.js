// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'isTranslationMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 175813
         */
module.exports = function (module, exports, require) {
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  function i(e, n) {
    return translationSuffixUtils.isTranslated(n) && translationSuffixUtils.removeTranslation(n) === e.rootRecordId;
  }
  require.d(exports, {
    isTranslationMatch: function () {
      return i;
    }
  });
}
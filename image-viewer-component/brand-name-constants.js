// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cb' to 'brandNameKey'
// - Renamed export 'fz' to 'getBrandName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-events.8e129d94.js
         * chunkId: 25182
         * moduleId: 63170
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let i = () => i18nTranslationUtils.i18nextTranslate("brandName_doubao");
  let o = "brandName_doubao";
  require.d(exports, {
    brandNameKey: function () {
      return o;
    },
    getBrandName: function () {
      return i;
    }
  });
}
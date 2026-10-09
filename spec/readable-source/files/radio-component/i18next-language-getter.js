// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getCurrentLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15529.1da94c80.js
         * chunkId: 15529
         * moduleId: 124507
         */
module.exports = function (module, exports, require) {
  var businessI18nManager = require("business-i18n-manager") /*id: 728471*/;
  let r = businessI18nManager.i18nGuardWrapper(() => businessI18nManager.i18nextInstance.language, "i18next");
  require.d(exports, {
    getCurrentLanguage: function () {
      return r;
    }
  });
}
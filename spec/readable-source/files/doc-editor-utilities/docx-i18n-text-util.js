// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getDocxI18nText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 979462
         */
module.exports = function (module, exports, require) {
  var i18nStringHelper = require("i18n-string-helper") /*id: 739898*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let l = function (e, n = "", r = "") {
    if ((docxFeatureFlags.isCoreEnabled() || docxShortcutFeatureDetection.isUserNameI18nFg()) && e) {
      return i18nStringHelper.getTranslatedText(e, n);
    } else {
      return r;
    }
  };
  require.d(exports, {
    getDocxI18nText: function () {
      return l;
    }
  });
}
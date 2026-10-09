// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'localeStringUtils'
// - Resolved require(936885) to 'locale-string-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 789018
         */
module.exports = function (module, exports, require) {
  var localeStringUtils = require("locale-string-utils") /*id: 936885*/;
  module.exports = {
    isRtlLang: localeStringUtils.isRtlLang,
    getLangDir: localeStringUtils.getLangDir
  };
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nu' to 'resolveLanguageEnum'
// - Renamed export 'yB' to 'getPreferredLanguageInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 922449
         */
module.exports = function (module, exports, require) {
  var browserLanguageConstants = require("browser-language-constants") /*id: 259969*/;
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  let i = e => e === browserLanguageConstants.languageConstants.BrowserLanguage ? navigator.language in languageCodeEnumUtils.languageToEnumMap ? languageCodeEnumUtils.languageToEnumMap[navigator.language] : languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED : e;
  let l = e => {
    if (e === languageCodeEnumUtils.LanguageCodeEnum.UNSPECIFIED) {
      var a;
      let e = Object.keys(languageCodeEnumUtils.languageToEnumMap);
      let i = e.find(e => e === navigator.language);
      if (i) {
        return i;
      }
      let l = ((a = navigator.language) === null || a === undefined ? undefined : a.split("-")?.[0]) ?? "";
      let o = e.find(e => e === l);
      return o || null;
    }
    if (e in languageCodeEnumUtils.languageCodeMap) {
      return languageCodeEnumUtils.languageCodeMap[e];
    } else {
      return null;
    }
  };
  let o = e => {
    let t = l(e);
    return languageCodeEnumUtils.getPreferredLanguages().find(e => e.code === t);
  };
  require.d(exports, {
    resolveLanguageEnum: function () {
      return i;
    },
    getPreferredLanguageInfo: function () {
      return o;
    }
  });
}
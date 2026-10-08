// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CE' to 'getLanguageLoc'
// - Renamed export 'M9' to 'getLanguageValue'
// - Renamed export 'q5' to 'resolveLanguageCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 226897
         */
module.exports = function (module, exports, require) {
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  let r = (e, t) => {
    let i = e.find(e => e.language_code === t);
    return (i == null ? undefined : i.language_loc) || "";
  };
  let l = (e, t) => {
    let i = e.find(e => e.language_code === t);
    return (i == null ? undefined : i.value) || "";
  };
  let a = (e, t) => {
    let i = languageCodeNormalizer.normalizeLanguageCode(t || navigator.language);
    let r = e.find(e => e.language_code === i);
    if (r) {
      return r.language_code;
    } else if (e.length) {
      return e[0].language_code;
    } else {
      return undefined;
    }
  };
  require.d(exports, {
    getLanguageLoc: function () {
      return r;
    },
    getLanguageValue: function () {
      return l;
    },
    resolveLanguageCode: function () {
      return a;
    }
  });
}
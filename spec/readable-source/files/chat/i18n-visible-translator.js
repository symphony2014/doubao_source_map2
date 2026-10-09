// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'r' to 'languageCodeNormalizer'
// - Resolved require(12412) to 'language-code-normalizer'
// - Renamed variable 'o' to 'i18nLanguageStorageUtils'
// - Resolved require(92438) to 'i18n-language-storage-utils'
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'd' to 'normalizeLanguageCode' (module 12412)
// - Updated imported property 'US' to 'getUserLanguage' (module 92438)
// - Updated imported property 'CB' to 'getI18nextLanguage' (module 92438)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 77869
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  let a = (e, t) => {
    try {
      return i18nTranslationUtils.i18nextTranslate(e, undefined, {
        postProcess: t == null ? undefined : t.postProcess,
        sprintf: t == null ? undefined : t.sprintf
      });
    } catch {}
    let a = languageCodeNormalizer.normalizeLanguageCode(i18nLanguageStorageUtils.getUserLanguage() || i18nLanguageStorageUtils.getI18nextLanguage() || "zh");
    let l = window.__i18n__?.queue;
    let s = (l == null ? undefined : l[a]) || (l == null ? undefined : l.zh);
    if (s == null ? undefined : s[e]) {
      let n = s[e];
      if (t == null ? undefined : t.sprintf) {
        let e = 0;
        n = n.replace(/%s/g, () => t.sprintf[e] !== undefined ? t.sprintf[e++] : "%s");
      }
      return n;
    }
    return e;
  };
  require.r(exports);
  require.d(exports, {
    visibleT: function () {
      return a;
    }
  });
}
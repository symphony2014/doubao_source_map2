// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G3' to 'getCurrentLocale'
// - Renamed export 'Kd' to 'getDefaultLocale'
// - Renamed export 'LL' to 'initTranslation'
// - Renamed export 'Sy' to 'normalizeLangCode'
// - Renamed export 'Zj' to 'resolveLocaleCode'
// - Renamed export 'um' to 'getLanguageFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 379142
         */
module.exports = function (module, exports, require) {
  var i18nTranslateHelper_1 = require("i18n-translate-helper_1") /*id: 216030*/;
  var o = i18nTranslateHelper_1;
  var teaAnalyticsSdk = require("tea-analytics-sdk") /*id: 95393*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var doubaoWebsiteUrl = require("doubao-website-url") /*id: 221443*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let E = {
    "zh-CN": "zh",
    "zh-TW": "zh-TW",
    "zh-HK": "zh-HK",
    "en-US": "en",
    "ja-JP": "ja",
    "fr-FR": "fr",
    "hi-IN": "hi",
    "id-ID": "id",
    "it-IT": "it",
    "ko-KR": "ko",
    "pt-BR": "pt",
    "ru-RU": "ru",
    "th-TH": "th",
    "vi-VN": "vi",
    "de-DE": "de",
    "es-ES": "es",
    "ms-MY": "ms"
  };
  function d() {
    return p("zh");
  }
  let T = function () {
    let e = E[d()];
    return {
      zh: e === "zh",
      en: e === "en",
      ja: e === "ja",
      fr: e === "fr",
      hi: e === "hi",
      id: e === "id",
      it: e === "it",
      ko: e === "ko",
      pt: e === "pt",
      th: e === "th",
      ru: e === "ru",
      vi: e === "vi",
      de: e === "de",
      es: e === "es",
      zh_tw: e === "zh-TW",
      zh_hk: e === "zh-HK",
      zh_hant: ["zh-HK", "zh-TW"].includes(e),
      ms: e === "ms"
    };
  }();
  function p(e) {
    let n = {
      zh: "zh-CN",
      en: "en-US",
      ja: "ja-JP",
      fr: "fr-FR",
      hi: "hi-IN",
      id: "id-ID",
      it: "it-IT",
      ko: "ko-KR",
      pt: "pt-BR",
      ru: "ru-RU",
      th: "th-TH",
      vi: "vi-VN",
      de: "de-DE",
      es: "es-ES",
      "zh-TW": "zh-TW",
      "zh-HK": "zh-HK",
      ms: "ms-MY"
    };
    let [r] = e.split("-");
    return n[e] || n[r] || "en-US";
  }
  function S(e) {
    return e.toLowerCase().replace("-", "_");
  }
  let f = {
    apiKey: "00d51bf0012811ee97fd5fdb0b0365a9",
    namespace: ["web_doc"],
    zoneHost: doubaoWebsiteUrl.doubaoBaseUrl
  };
  async function A(e, n) {
    let r = f.namespace;
    let i = {};
    await Promise.all(r.map(async r => {
      let o = new teaAnalyticsSdk.TeaAnalytics({
        ...f,
        namespace: [r],
        locale: e,
        fallbackLang: n,
        cache: true
      });
      let u = await asyncRetryUtils.retryPromise(() => o.load(), 3, 500).catch(e => ({}));
      i[r] = u;
    }));
    return i;
  }
  function m() {
    let e = i18nextLanguageGetter.getCurrentLanguage() || navigator.language;
    let n = languageCodeNormalizer.normalizeLanguageCode(e);
    if (["fil", "ar", "uz"].includes(n)) {
      return "en";
    } else {
      return n;
    }
  }
  async function I(e) {
    let n = await A(e, ["zh", "en"]);
    let i = null;
    (typeof window == "undefined" ? require.g : window).TTI18N = (n == null ? undefined : n.web_doc) || {};
  }
  let O = "";
  let R = [];
  async function h() {
    let e = m();
    if (R.includes(e)) {
      return;
    }
    await I(e);
    let n = o.t;
    n.locales = e;
    window.t = function (e, r, i) {
      var o;
      var a = arguments.length;
      var u = Array(a > 3 ? a - 3 : 0);
      var c = 3;
      for (; c < a; c++) {
        u[c - 3] = arguments[c];
      }
      o = n.call(null, e, r || {}, ...u);
      O ||= i18nTranslationUtils.i18nextTranslate("brandName_doubao");
      return o.replace(/\{\{APP_DISPLAY_NAME\}\}/g, O);
    };
    R.push(e);
  }
  require.d(exports, {
    getCurrentLocale: function () {
      return m;
    },
    getDefaultLocale: function () {
      return d;
    },
    initTranslation: function () {
      return h;
    },
    normalizeLangCode: function () {
      return S;
    },
    resolveLocaleCode: function () {
      return p;
    },
    getLanguageFlags: function () {
      return T;
    }
  });
}
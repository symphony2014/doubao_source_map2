// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Aj' to 'normalizeLocaleCode'
// - Renamed export 'G3' to 'getShortLocale'
// - Renamed export 'Hx' to 'getBaseLocaleCode'
// - Renamed export 'Kd' to 'getCurrentLocale'
// - Renamed export 'Mq' to 'mapLocaleBase'
// - Renamed export 'NJ' to 'isEnglish'
// - Renamed export 'Sy' to 'localeToSnake'
// - Renamed export 'VH' to 'localeMap'
// - Renamed export 'Zj' to 'resolveLocaleCode'
// - Renamed export 'aq' to 'getLocaleFlags'
// - Renamed export 'cj' to 'setBodyLocaleId'
// - Renamed export 'm0' to 'setLanguageCookie'
// - Renamed export 'nU' to 'getSnakeLocale'
// - Renamed export 'rY' to 'getUntitledDocName'
// - Renamed export 'tn' to 'isChinese'
// - Renamed export 'um' to 'localeFlags'
// - Renamed export 'vo' to 'getAltLocaleCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 3969
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var globalConfigHelper = require("global-config-helper") /*id: 96848*/;
  var cookieUtilsHelper = require("cookie-utils-helper") /*id: 586277*/;
  var docLocaleUtils = require("doc-locale-utils") /*id: 781197*/;
  var urlQueryParserUtils = require("url-query-parser-utils") /*id: 329833*/;
  var browserEnvConfig = require("browser-env-config") /*id: 59234*/;
  var shortcutLocationCheck = require("shortcut-location-check") /*id: 143162*/;
  var i18nTranslateUtil = require("i18n-translate-util") /*id: 38843*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  let g = {
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
  function b() {
    return g[x()];
  }
  function h() {
    return g[O()];
  }
  function p() {
    return b() === "en";
  }
  function w() {
    return b() === "zh";
  }
  let _ = () => {
    let t = b();
    return {
      zh: t === "zh",
      en: t === "en",
      ja: t === "ja",
      fr: t === "fr",
      hi: t === "hi",
      id: t === "id",
      it: t === "it",
      ko: t === "ko",
      pt: t === "pt",
      th: t === "th",
      ru: t === "ru",
      vi: t === "vi",
      de: t === "de",
      es: t === "es",
      zh_tw: t === "zh-TW",
      zh_hk: t === "zh-HK",
      zh_hant: ["zh-HK", "zh-TW"].includes(t),
      ms: t === "ms"
    };
  };
  let E = _();
  function m() {
    document.body.id = x();
  }
  function T(t) {
    let e = {
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
    let r = t.slice(0, 2).toLowerCase();
    return e[t] || e[r] || "en-US";
  }
  function k() {
    let t;
    let e = urlQueryParserUtils.getQueryParam("lang");
    let r = cookieUtilsHelper.getCookie("lang");
    if (e && shortcutLocationCheck.isShortcutMode()) {
      t = e;
    } else if (window.User && window.User.language) {
      t = window.User.language;
    } else if (e && docLocaleUtils.isDocSsr()) {
      t = e;
    } else if (browserEnvConfig.getShellEnv("locale")) {
      t = browserEnvConfig.getShellEnv("locale");
    } else if (r) {
      t = r;
    } else if (window.navigator.language) {
      t = window.navigator.language;
    }
    return t;
  }
  function x() {
    let t = k();
    if (t) {
      return T(t);
    } else {
      return "en-US";
    }
  }
  function I(t) {
    let [e] = t.split("-");
    return {
      zh: "zh-CN",
      en: "en-US",
      ja: "ja-JP"
    }[e] || "en-US";
  }
  function O() {
    let t = k();
    if (t) {
      return I(t);
    } else {
      return "en-US";
    }
  }
  function A(t) {
    return t.toLowerCase().replace("-", "_");
  }
  function R() {
    switch (x()) {
      case "zh-CN":
        return "zh_tw";
      case "en-US":
      default:
        return "en_us";
      case "ja-JP":
        return "ja_jp";
      case "fr-FR":
        return "fr_fr";
      case "hi-IN":
        return "hi_in";
      case "id-ID":
        return "id_id";
      case "it-IT":
        return "it_it";
      case "ko-KR":
        return "ko_kr";
      case "pt-BR":
        return "pt_br";
      case "ru-RU":
        return "ru_ru";
      case "th-TH":
        return "th_th";
      case "vi-VN":
        return "vi_vn";
      case "de-DE":
        return "de_de";
      case "es-ES":
        return "es_es";
      case "ms-MY":
        return "ms_my";
    }
  }
  function S(t) {
    t ||= 0;
    if (docLocaleUtils.isDocSsr()) {
      return docLocaleUtils.getUntitledText(t, x());
    }
    switch (t) {
      case driveFileTypeConstants_1.FileType.FILE:
        return i18nTranslateUtil.t("common.unnamed_document");
      case driveFileTypeConstants_1.FileType.SHEET:
        return i18nTranslateUtil.t("common.unnamed_sheet");
      case driveFileTypeConstants_1.FileType.BITABLE:
        return i18nTranslateUtil.t("common.unnamed_bitable");
      case driveFileTypeConstants_1.FileType.MINDNOTE:
        return i18nTranslateUtil.t("common.unnamed_mindnote");
      case driveFileTypeConstants_1.FileType.DOCX:
        return i18nTranslateUtil.t("common.unnamed_document");
      case driveFileTypeConstants_1.FileType.SLIDES:
        return i18nTranslateUtil.t("LarkCCM_Slides_Untitled");
      case driveFileTypeConstants_1.FileType.WIKI:
        return i18nTranslateUtil.t("common.unnamed_wiki");
      case driveFileTypeConstants_1.FileType.WHITEBOARD:
        return i18nTranslateUtil.t("LarkCCM_Docx_Board");
      default:
        return i18nTranslateUtil.t("common.unnamed_document");
    }
  }
  let {
    hostname: N
  } = hashLocationProxy.default;
  let y = `.${N}`;
  let B = function (t) {
    let e = globalConfigHelper.getMainDomain();
    if (e) {
      return `.${e}`;
    }
    let r = t.split(".");
    let n = r.length;
    let o = n >= 2 ? `${r[n - 2]}.${r[n - 1]}` : t;
    return `.${o}`;
  }(N);
  function D(t, e = false) {
    (function (t, e, r) {
      var n;
      if (browserEnvDetectionUtil.browserDetector.isOpendoc) {
        return;
      }
      cookieUtilsHelper.deleteCookie("lang", y);
      cookieUtilsHelper.deleteCookie("lang", t ? "" : B);
      let o = r || window.User.language;
      if ((o = globalConfigHelper.isLarkProduct() || !globalConfigHelper.isLarkProduct() && e ? r || window.User.language : ["zh", "zh-TW", "zh-HK", "ja", "en"].includes(n = o) ? n : "en") && o !== cookieUtilsHelper.getCookie("lang")) {
        cookieUtilsHelper.setCookie("lang", o, 36500, t ? B : "");
      }
    })(!globalConfigHelper.isLocalhost(), e, t);
  }
  function L(t) {
    return T(t);
  }
  require.d(exports, {
    normalizeLocaleCode: function () {
      return L;
    },
    getShortLocale: function () {
      return b;
    },
    getBaseLocaleCode: function () {
      return O;
    },
    getCurrentLocale: function () {
      return x;
    },
    mapLocaleBase: function () {
      return I;
    },
    isEnglish: function () {
      return p;
    },
    localeToSnake: function () {
      return A;
    },
    localeMap: function () {
      return g;
    },
    resolveLocaleCode: function () {
      return T;
    },
    getLocaleFlags: function () {
      return _;
    },
    setBodyLocaleId: function () {
      return m;
    },
    setLanguageCookie: function () {
      return D;
    },
    getSnakeLocale: function () {
      return R;
    },
    getUntitledDocName: function () {
      return S;
    },
    isChinese: function () {
      return w;
    },
    localeFlags: function () {
      return E;
    },
    getAltLocaleCode: function () {
      return h;
    }
  });
}
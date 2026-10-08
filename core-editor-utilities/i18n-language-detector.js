// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aq' to 'getLanguageFlags'
// - Renamed export 'Kd' to 'getCurrentLocale'
// - Renamed export 'NJ' to 'isEnglishLocale'
// - Renamed export 'rY' to 'getUntitledDocumentName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 1451
         */
module.exports = function (module, exports, require) {
  var hashLocationProxy = require("hash-location-proxy") /*id: 753923*/;
  var driveNodeTypeMapper = require("drive-node-type-mapper") /*id: 522665*/;
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  var cookieValueGetter = require("cookie-value-getter") /*id: 985120*/;
  function c() {
    return /docSSR=true/.test(hashLocationProxy.default.search);
  }
  var urlParseUtils_1 = require("url-parse-utils_1") /*id: 152840*/;
  require("memoize-function") /*id: 565197*/.memoize(function (e = location.href) {
    return urlParseUtils_1.getUrlQuery(e).from || "";
  });
  var larkEnvironmentUtil = require("lark-environment-util") /*id: 222336*/;
  function u() {
    return /shortcut=true/.test(hashLocationProxy.default.search);
  }
  u();
  var i18nTranslateHelper = require("i18n-translate-helper") /*id: 366664*/;
  let f = {
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
  function g() {
    return f[p()] === "en";
  }
  let b = () => {
    let e = f[p()];
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
  };
  function p() {
    let e = function () {
      let e;
      let t = function (e) {
        let {
          search: t
        } = urlParseUtils_1.parseUrlComponents(hashLocationProxy.default.href);
        if (!t) {
          return "";
        }
        let r = "";
        t.slice(1).split("&").find(t => {
          let [n, o] = t.split("=");
          return n === e && (r = o, true);
        });
        return r;
      }("lang");
      let r = cookieValueGetter.getCookieValue("lang");
      if (t && u()) {
        e = t;
      } else if (window.User && window.User.language) {
        e = window.User.language;
      } else if (t && c()) {
        e = t;
      } else if (larkEnvironmentUtil.getAppEnvironment("locale")) {
        e = larkEnvironmentUtil.getAppEnvironment("locale");
      } else if (r) {
        e = r;
      } else if (window.navigator.language) {
        e = window.navigator.language;
      }
      return e;
    }();
    if (e) {
      return function (e) {
        let t = {
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
        let r = e.slice(0, 2).toLowerCase();
        return t[e] || t[r] || "en-US";
      }(e);
    } else {
      return "en-US";
    }
  }
  function h(e) {
    e ||= 0;
    if (c()) {
      var t;
      if ((t = p()).indexOf("zh") > -1) {
        return "未命名文档";
      } else if (t.indexOf("ja") > -1) {
        return "名称未設定ドキュメント";
      } else {
        return "Untitled Docs";
      }
    }
    switch (e) {
      case driveNodeTypeMapper.nodeTypeConstants.FILE:
        return i18nTranslateHelper.translate("common.unnamed_document");
      case driveNodeTypeMapper.nodeTypeConstants.SHEET:
        return i18nTranslateHelper.translate("common.unnamed_sheet");
      case driveNodeTypeMapper.nodeTypeConstants.BITABLE:
        return i18nTranslateHelper.translate("common.unnamed_bitable");
      case driveNodeTypeMapper.nodeTypeConstants.MINDNOTE:
        return i18nTranslateHelper.translate("common.unnamed_mindnote");
      case driveNodeTypeMapper.nodeTypeConstants.DOCX:
        return i18nTranslateHelper.translate("common.unnamed_document");
      case driveNodeTypeMapper.nodeTypeConstants.SLIDES:
        return i18nTranslateHelper.translate("LarkCCM_Slides_Untitled");
      case driveNodeTypeMapper.nodeTypeConstants.WIKI:
        return i18nTranslateHelper.translate("common.unnamed_wiki");
      case driveNodeTypeMapper.nodeTypeConstants.WHITEBOARD:
        return i18nTranslateHelper.translate("LarkCCM_Docx_Board");
      default:
        return i18nTranslateHelper.translate("common.unnamed_document");
    }
  }
  b();
  let {
    hostname: m
  } = hashLocationProxy.default;
  (function (e) {
    if (globalConfigUtils.getMainDomain()) {
      return;
    }
    let t = e.split(".");
    let r = t.length;
    if (r >= 2) {
      t[r - 2];
      t[r - 1];
    }
  })(m);
  require.d(exports, {
    getLanguageFlags: function () {
      return b;
    },
    getCurrentLocale: function () {
      return p;
    },
    isEnglishLocale: function () {
      return g;
    },
    getUntitledDocumentName: function () {
      return h;
    }
  });
}
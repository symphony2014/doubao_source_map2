// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68685.ba4452d3.js
         * chunkId: 68685
         * moduleId: 239790
         */
module.exports = function (module, exports, require) {
  (n = o = exports.SuiteLanguages ||= {}).ID = "id-ID";
  n.DE = "de-DE";
  n.EN = "en-US";
  n.ES = "es-ES";
  n.FR = "fr-FR";
  n.IT = "it-IT";
  n.PT = "pt-BR";
  n.VI = "vi-VN";
  n.RU = "ru-RU";
  n.HI = "hi-IN";
  n.TH = "th-TH";
  n.KO = "ko-KR";
  n.ZH = "zh-CN";
  n.JA = "ja-JP";
  (i = {})[o.ID] = "Bahasa Indonesia";
  i[o.DE] = "Deutsch";
  i[o.EN] = "English";
  i[o.ES] = "Español";
  i[o.FR] = "Français";
  i[o.IT] = "Italiano";
  i[o.PT] = "Português (Brasil)";
  i[o.VI] = "Tiếng Việt";
  i[o.RU] = "Русский";
  i[o.HI] = "हिन्दी";
  i[o.TH] = "ภาษาไทย";
  i[o.KO] = "한국어";
  i[o.ZH] = "简体中文";
  i[o.JA] = "日本語";
  exports.SuiteLangNames = i;
  exports.suiteLangList = [o.ID, o.DE, o.EN, o.ES, o.FR, o.IT, o.PT, o.VI, o.RU, o.HI, o.TH, o.KO, o.ZH, o.JA];
  var r;
  var n;
  var i;
  var o;
  var s = !/^https?:.*\.(com|cn)$/.test(location.origin);
  function a() {
    var e = window.location.hostname;
    if (s) {
      return e;
    }
    var t = e.split(".");
    var r = "";
    return "." + (t.length === 2 ? e : t.slice(-2).join("."));
  }
  exports.SuiteLanguageKey = "locale";
  exports.getCookie = function (e) {
    try {
      return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || "";
    } catch (e) {
      return "";
    }
  };
  exports.getSuiteLang = function (e) {
    var r = exports.getCookie(exports.SuiteLanguageKey);
    r = exports.toStandardLang(r);
    if (e && !e.includes(r)) {
      return "";
    } else {
      return r;
    }
  };
  exports.setSuiteLang = function (e, r) {
    e = exports.toStandardLang(e);
    if ((!r || r.includes(e)) && exports.getSuiteLang() !== e) {
      document.cookie = "locale=" + e + "; path=/; domain=" + a();
    }
  };
  r = {};
  Object.values(o).map(function (e) {
    r[e.toLowerCase().slice(0, 2)] = e;
  });
  exports.toStandardLang = function (e) {
    return r[e = e.toLowerCase().slice(0, 2)] || "";
  };
  function u(e) {
    var r = this;
    this.locales = null;
    this.current = "";
    this.init = function (e) {
      if (e.locales) {
        r.locales = e.locales.map(exports.toStandardLang);
      }
    };
    this.get = function () {
      r.current ||= exports.getSuiteLang(r.locales);
      return r.current;
    };
    this.set = function (e) {
      r.current = e;
      exports.setSuiteLang(e, r.locales);
    };
    this.is = function (e) {
      return (r.current || exports.getSuiteLang(r.locales)) === exports.toStandardLang(e);
    };
    if (e && e.locales) {
      this.init(e);
    }
  }
  exports.suiteLang = new u();
  exports.default = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
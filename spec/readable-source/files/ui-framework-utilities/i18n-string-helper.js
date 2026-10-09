// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fv' to 'getTranslatedText'
// - Renamed export 'yw' to 'getTranslatedValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 739898
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var immutableCore = require("immutable-core") /*id: 81885*/;
  (r = o ||= {}).ZH = "zh_cn";
  r.EN = "en_us";
  r.JA = "ja_jp";
  immutableCore.Record({
    display_name: {},
    cn_name: "",
    en_name: "",
    name: ""
  });
  var i18nLanguageDetector = require("i18n-language-detector") /*id: 1451*/;
  function u(e = i18nLanguageDetector.getLanguageFlags()) {
    if (e.zh) {
      return o.ZH;
    } else if (e.ja) {
      return o.JA;
    } else if (e.en) {
      return o.EN;
    } else {
      return undefined;
    }
  }
  let c = (e, n = "", t = u()) => e && t && e[t] || n;
  function l(e, n = "", t = u()) {
    let {
      i18n_value: r = {},
      value: o = ""
    } = e || {};
    return c(r, o || n, t);
  }
  require.d(exports, {
    getTranslatedText: function () {
      return c;
    },
    getTranslatedValue: function () {
      return l;
    }
  });
}
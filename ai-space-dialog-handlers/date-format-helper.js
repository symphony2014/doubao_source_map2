// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'formatRelativeDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 701397
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var relativeTimePlugin = require("relative-time-plugin") /*id: 994176*/;
  var r = relativeTimePlugin;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var s = dayjsDateLibrary;
  require("dayjs-locale-zh-cn") /*id: 149015*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let d = false;
  let _ = "YYYY-MM-DD";
  function u(e, t = new Date().getTime(), a = false) {
    let n = i18nextLanguageGetter.getCurrentLanguage() === "zh-Hant" ? {
      TODAY: _,
      YESTERDAY: _,
      SAME_YEAR: _,
      BEFORE_YEAR: _
    } : {
      TODAY: "HH:mm",
      YESTERDAY: i18nTranslationUtils.i18nextTranslate("aispace.date_format.yesterday") || _,
      SAME_YEAR: i18nTranslationUtils.i18nextTranslate("aispace.date_format.same_year") || _,
      BEFORE_YEAR: i18nTranslationUtils.i18nextTranslate("aispace.date_format.before_year") || _
    };
    if (!d) {
      s.extend(r);
      d = true;
    }
    if (!isNumberUtil.isNumber(e) || !e) {
      return "";
    }
    e = e < 1000000000000 ? e * 1000 : e;
    if (a && e > t) {
      t = e;
    }
    let o = s(e);
    let u = s(t);
    if (!e || o.isSame(u, "day")) {
      return o.format(n.TODAY);
    }
    let p = u.clone().subtract(1, "day");
    if (o.isSame(p, "day")) {
      return o.format(n.YESTERDAY);
    } else if (o.isSame(u, "year")) {
      return o.format(n.SAME_YEAR);
    } else {
      return o.format(n.BEFORE_YEAR);
    }
  }
  require.d(exports, {
    formatRelativeDate: function () {
      return u;
    }
  });
}
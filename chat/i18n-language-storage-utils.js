// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CB' to 'getI18nextLanguage'
// - Renamed export 'D0' to 'changeLanguageStarling'
// - Renamed export 'US' to 'getUserLanguage'
// - Renamed export 'Wg' to 'setI18nextLanguage'
// - Renamed export 'Xy' to 'isChineseLanguage'
// - Renamed export 'fg' to 'setI18nextLanguageCookie'
// - Renamed export 'vM' to 'setUserLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 92438
         */
module.exports = function (module, exports, require) {
  var cookieUtils = require("cookie-utils") /*id: 535970*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var i18nLanguageConstants = require("i18n-language-constants") /*id: 437736*/;
  var businessI18nManager = require("business-i18n-manager") /*id: 728471*/;
  let l = e => e.startsWith("zh");
  let s = () => cookieUtils.getCookie(i18nLanguageConstants.userLangCodeKey) || storageWrapperWithFallback.LocalStorageWrapper.getItem(i18nLanguageConstants.userLangCodeKey) || "zh";
  let u = e => {
    cookieUtils.setCookie(i18nLanguageConstants.userLangCodeKey, e, {
      daysToLive: 365
    });
    return storageWrapperWithFallback.LocalStorageWrapper.setItem(i18nLanguageConstants.userLangCodeKey, e);
  };
  let c = () => cookieUtils.getCookie(i18nLanguageConstants.i18nextKey) || storageWrapperWithFallback.LocalStorageWrapper.getItem(i18nLanguageConstants.i18nextLngKey);
  let d = e => {
    cookieUtils.setCookie(i18nLanguageConstants.i18nextKey, e, {
      daysToLive: 365
    });
    return storageWrapperWithFallback.LocalStorageWrapper.setItem(i18nLanguageConstants.i18nextLngKey, e);
  };
  let h = businessI18nManager.i18nGuardWrapper(e => businessI18nManager.changeLanguage({
    locale: e
  }), "starling");
  let m = businessI18nManager.i18nGuardWrapper(e => {
    var t;
    if ((t = businessI18nManager.i18nextInstance.setLang) !== null && t !== undefined) {
      t.call(businessI18nManager.i18nextInstance, e);
    }
  }, "i18next");
  require.d(exports, {
    getI18nextLanguage: function () {
      return c;
    },
    changeLanguageStarling: function () {
      return h;
    },
    getUserLanguage: function () {
      return s;
    },
    setI18nextLanguage: function () {
      return m;
    },
    isChineseLanguage: function () {
      return l;
    },
    setI18nextLanguageCookie: function () {
      return d;
    },
    setUserLanguage: function () {
      return u;
    }
  });
}
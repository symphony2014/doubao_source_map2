// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'checkLanguageChanged'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 385211
         */
module.exports = function (module, exports, require) {
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var i18nLanguageConstants = require("i18n-language-constants") /*id: 437736*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var appInitAsyncUtils = require("app-init-async-utils") /*id: 266268*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let h = (e, t) => e == null ? undefined : e.map(e => e.language_code).includes(t);
  let m = () => {
    let e = storageWrapperWithFallback.LocalStorageWrapper.getItem("setting_language_list");
    if (!e) {
      return null;
    }
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  };
  let f = async () => {
    try {
      let e = await chatFgStoreHooks.fetchSourceKey("language_list", {
        source: chatStorageKeys.chatStorageKeys.setting
      });
      if (!e) {
        return null;
      }
      storageWrapperWithFallback.LocalStorageWrapper.setItem("setting_language_list", JSON.stringify(e));
      return e;
    } catch (e) {
      return null;
    }
  };
  let g = function (e = false) {
    let t = m();
    if (t) {
      if (e) {
        appInitAsyncUtils.runAfterAppInit(() => {
          f();
        });
      }
      return Promise.resolve(t);
    } else {
      return f();
    }
  };
  let y = () => "zh";
  let b = function e(t, n = {}) {
    let {
      maxAge: i = Infinity
    } = n;
    let r = memoizeFunction.memoize(function () {
      var e = arguments.length;
      var n = Array(e);
      var i = 0;
      for (; i < e; i++) {
        n[i] = arguments[i];
      }
      return {
        value: t(...n),
        timestamp: Date.now()
      };
    });
    return function () {
      var o = arguments.length;
      var s = Array(o);
      var l = 0;
      for (; l < o; l++) {
        s[l] = arguments[l];
      }
      let a = r(...s);
      if (Date.now() - a.timestamp > i) {
        r.cache.delete(s);
        return e(t, n)(...s);
      } else {
        return a.value;
      }
    };
  }(() => apiServicesCollection.SamanthaApiService.GetUserPreference(), {
    maxAge: 3000
  });
  let S = async () => {
    return (await b()).data?.lang;
  };
  let k = async () => {
    if (typeof window != "undefined") {
      let e = eventReportingService.createEventReporter({
        eventName: "check_language_changed"
      });
      let t = i18nextLanguageGetter.getCurrentLanguage();
      e.updateMeta({
        i18nLanguage: t
      });
      let [n, c] = await Promise.all([g(false), S()]);
      let u = c;
      if (!u || u === i18nLanguageConstants.browserLanguageKey) {
        u = "zh";
      }
      let d = languageCodeNormalizer.normalizeLanguageCode(u);
      let p = d;
      if (!h(n, d)) {
        p = y();
      }
      e.updateMeta({
        userLanguageCode: c,
        realCode: u,
        coverted: d,
        finalLanguage: p
      });
      if (p !== t) {
        i18nLanguageStorageUtils.setUserLanguage(p);
        i18nLanguageStorageUtils.setI18nextLanguage(p);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "loginLanguageReload",
          meta: {
            userLanguageCode: c,
            navigatorLanguage: navigator.language,
            i18nLanguage: t
          }
        });
        await i18nLanguageStorageUtils.changeLanguageStarling(p);
        e.success({
          meta: {
            changed: 1
          }
        });
        window.location.reload();
        return;
      }
      e.success({
        meta: {
          changed: 0
        }
      });
    }
  };
  require.d(exports, {
    checkLanguageChanged: function () {
      return k;
    }
  });
}
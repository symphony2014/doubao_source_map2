// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FJ' to 'getTranslationFallback'
// - Renamed export 'X9' to 'i18nextTranslate'
// - Renamed export 'g1' to 'useTranslationWithFallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 852399
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var businessI18nManager = require("business-i18n-manager") /*id: 728471*/;
  var i18nLanguageStorageUtils = require("i18n-language-storage-utils") /*id: 92438*/;
  var languageCodeNormalizer = require("language-code-normalizer") /*id: 12412*/;
  let c = {};
  let d = e => {
    let {
      key: t
    } = e;
    let n = arrayIsArrayUtil.isArray(t) ? t[0] : t;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "l1_i18n_t_fetch_fail",
      meta: {
        key: n,
        isKeyLen: arrayIsArrayUtil.isArray(t) ? t.length : 1
      }
    });
  };
  let h = businessI18nManager.i18nGuardWrapper(function (e = {}) {
    let {
      memo: t = true
    } = e;
    let {
      t: n
    } = businessI18nManager.useTranslation();
    let a = reactFunctionMemoHook.useMemoizedCallback((e, t, i) => {
      let r = n(e, t, i);
      if (r === e) {
        r = g(e, t, i);
      }
      return r;
    });
    if (typeof window == "undefined") {
      return a;
    }
    let s = reactFunctionMemoHook.useMemoizedCallback((e, n, r) => {
      if (r || n || arrayIsArrayUtil.isArray(e) || !t) {
        return a(e, n, r);
      }
      if (c[e] && c[e] !== e) {
        return c[e];
      }
      let o = a(e);
      if (o && o !== e) {
        c[e] = o;
      }
      if (o === e) {
        d({
          key: e
        });
      }
      return o;
    });
    let u = reactFunctionMemoHook.useMemoizedCallback((e, t, n) => `${s(e, t, n)}(${e})`);
    let h = JSON.parse(storageWrapperWithFallback.LocalStorageWrapper.getItem("FLOW_WEB_DEBUG_FG") || "{}");
    if (h == null ? undefined : h.showI18NKey) {
      return u;
    } else {
      return s;
    }
  }, "i18next");
  let m = () => (e, t) => {
    try {
      return g(e, undefined, {
        postProcess: t == null ? undefined : t.postProcess,
        sprintf: t == null ? undefined : t.sprintf
      });
    } catch {}
    let i = languageCodeNormalizer.normalizeLanguageCode(i18nLanguageStorageUtils.getUserLanguage() || i18nLanguageStorageUtils.getI18nextLanguage() || "zh");
    let r = window.__i18n__?.queue;
    let o = (r == null ? undefined : r[i]) || (r == null ? undefined : r.zh);
    if (o == null ? undefined : o[e]) {
      let n = o[e];
      if (t == null ? undefined : t.sprintf) {
        let e = 0;
        n = n.replace(/%s/g, () => t.sprintf[e] !== undefined ? t.sprintf[e++] : "%s");
      }
      return n;
    }
    return e;
  };
  let g = businessI18nManager.i18nGuardWrapper(function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return businessI18nManager.i18nextInstance.t.bind(businessI18nManager.i18nextInstance)(...t);
  }, "i18next");
  require.d(exports, {
    getTranslationFallback: function () {
      return m;
    },
    i18nextTranslate: function () {
      return g;
    },
    useTranslationWithFallback: function () {
      return h;
    }
  });
}
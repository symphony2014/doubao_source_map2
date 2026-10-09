// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'teaAnalyticsSdk'
// - Resolved require(95393) to 'tea-analytics-sdk'
// - Renamed variable 'o' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'u' to 'reactI18nextCoreInitializer'
// - Resolved require(971318) to 'react-i18next-core-initializer'
// - Updated imported property 'nI' to 'getI18nInstance' (module 971318)
// - Updated imported property 'Z' to 'TeaAnalytics' (module 95393)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-visible.9f5dcb54.js
         * chunkId: 80792
         * moduleId: 35343
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  var teaAnalyticsSdk = require("tea-analytics-sdk") /*id: 95393*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactI18nextCoreInitializer = require("react-i18next-core-initializer") /*id: 971318*/;
  let c = e => Array.isArray(e.namespace) ? e.namespace[0] : e.namespace;
  let l = e => {
    if (typeof window == "undefined") {
      return;
    }
    let t = reactI18nextCoreInitializer.getI18nInstance();
    r = e;
    let n = t.language || e.locale || "zh";
    i = new teaAnalyticsSdk.TeaAnalytics({
      ...e,
      locale: n
    });
    return d(n);
  };
  let d = e => new Promise(t => {
    let n = c(r);
    let s = () => new Promise((r, s) => {
      i.load(i => {
        reactI18nextCoreInitializer.getI18nInstance().addResourceBundle(e, n, i, false, true);
        t(true);
      }, s);
    });
    asyncRetryUtils.retryPromise(() => s(), 3, 500).catch(e => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "l1_i18n_load_resource_fail",
        error: e instanceof Error ? e : Error(String(e))
      });
      t({});
    });
  });
  let f = () => {
    if (!i) {
      throw Error("Starling client is not initialized");
    }
    return i;
  };
  let h = async e => {
    f().setConfig(e);
    await d(e.locale || "zh");
    await reactI18nextCoreInitializer.getI18nInstance().changeLanguage(e.locale);
  };
  require.d(exports, {
    changeLanguage: function () {
      return h;
    },
    initStarlingClient: function () {
      return l;
    }
  });
}
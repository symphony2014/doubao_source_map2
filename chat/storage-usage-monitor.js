// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Es' to 'logStorageUsage'
// - Renamed export 'cS' to 'logStorageEstimate'
// - Renamed export 'jH' to 'getStorageEstimate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 291897
         */
module.exports = function (module, exports, require) {
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = () => {
    try {
      if (typeof window == "undefined") {
        return Promise.resolve({
          usage: 0,
          quota: 0
        });
      }
      return require.g.navigator.storage.estimate().then(e => e || {
        usage: 0,
        quota: 0
      }).catch(() => ({
        usage: 0,
        quota: 0
      }));
    } catch (e) {
      return Promise.resolve({
        usage: 0,
        quota: 0
      });
    }
  };
  let a = onceFunctionFactory.createOnce(e => {
    if (typeof window != "undefined") {
      setTimeout(() => {
        o().then(t => {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "l1_storage_usage",
            meta: {
              ...t,
              from: e
            }
          });
        });
      }, 5000);
    }
  });
  let l = e => {
    let t = 0;
    try {
      for (let n in e) {
        let i = e.getItem(n) || "";
        if (e.hasOwnProperty(n)) {
          t += n.length + i.length;
        }
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "l1_storage_getStorageUsage_error",
        error: e
      });
      return -1;
    }
    return t;
  };
  let s = onceFunctionFactory.createOnce(() => {
    if (typeof window != "undefined") {
      setTimeout(() => {
        let e = l(require.g.localStorage);
        let t = l(require.g.sessionStorage);
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "l1_storage_storage_usage",
          meta: {
            localStorage: e,
            sessionStorage: t,
            total: e + t
          }
        });
      }, 5000);
    }
  });
  require.d(exports, {
    logStorageUsage: function () {
      return s;
    },
    logStorageEstimate: function () {
      return a;
    },
    getStorageEstimate: function () {
      return o;
    }
  });
}
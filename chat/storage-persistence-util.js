// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C1' to 'createPersistOptions'
// - Renamed export 'hn' to 'createStorageAdapter'
// - Renamed export 'o6' to 'setupPersistStorage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 143136
         */
module.exports = function (module, exports, require) {
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var localforageStorageLib = require("localforage-storage-lib") /*id: 870496*/;
  var a = localforageStorageLib;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var storageUsageMonitor = require("storage-usage-monitor") /*id: 291897*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  let c = 0;
  let d = debounceUtilWrapper.createDebounce(() => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "l1_storage_persist_count",
      meta: {
        count: c
      }
    });
  }, 10000, {
    leading: false,
    trailing: true
  });
  let h = () => {
    c++;
    d();
  };
  let m = 0;
  let g = debounceUtilWrapper.createDebounce(() => {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "l1_storage_instance_reuse_count",
      meta: {
        count: m
      }
    });
  }, 10000, {
    leading: false,
    trailing: true
  });
  let f = () => {
    m++;
    g();
  };
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  let v = e => {
    let {
      storeName: t,
      action: n,
      fn: i
    } = e;
    return async function () {
      var r;
      var o = arguments.length;
      var u = Array(o);
      var c = 0;
      for (; c < o; c++) {
        u[c] = arguments[c];
      }
      try {
        return await i.apply(null, u);
      } catch (u) {
        let i = u instanceof Error ? u : Error(String(u));
        let o = {};
        if (typeof navigator != "undefined" && typeof ((r = navigator) === null || r === undefined ? undefined : r.storage?.estimate) == "function") {
          let [{
            usage: e,
            quota: r
          }, l, u] = await Promise.all([storageUsageMonitor.getStorageEstimate(), navigator.storage.persist().catch(() => false), navigator.storage.persisted().catch(() => false)]);
          Object.assign(o, {
            usageSpace: `${e ?? 0} MB`,
            quotaSpace: `${r ?? 0} MB`,
            persist: l,
            persisted: u,
            driver: a.driver(),
            driverSupported: a.supports(a.driver()),
            errorAction: n,
            storeName: t,
            errType: i.message.includes("timeout") ? "timeout" : i.message
          });
        }
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "l1_storage_storePersistErrorBoundary",
          message: `[${t}] persist storage action error: ${n} failed`,
          error: i,
          meta: o
        });
      }
    };
  };
  let b = e => {
    let {
      persistStorage: t,
      storeName: n
    } = e;
    let {
      getItem: i,
      setItem: r,
      removeItem: o
    } = t;
    t.setItem = debounceUtilWrapper.createDebounce(v({
      storeName: n,
      action: "setItem",
      fn: r
    }), 1000);
    t.getItem = v({
      storeName: n,
      action: "getItem",
      fn: i
    });
    t.removeItem = v({
      storeName: n,
      action: "removeItem",
      fn: o
    });
    return t;
  };
  let S = e => e !== undefined && typeof window != "undefined";
  let P = async function (e, t = "samantha-web", n = ["undefined-chat-voice-store"]) {
    if (!S(e)) {
      return;
    }
    let i = "undefined";
    try {
      for (let r of await e.keys()) {
        if (r.includes(i)) {
          if (n.includes(r)) {
            let n = await e.getItem(r);
            await e.setItem(r.replace(i, t), n);
          }
          e.removeItem(r);
        }
      }
    } catch (e) {}
  };
  let C = null;
  let y = () => {
    if (C) {
      f();
    } else {
      C = a.createInstance({
        name: "samantha-web",
        storeName: "store"
      });
    }
    return C;
  };
  function E(e) {
    let t = typeof window == "undefined" ? {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(null),
      removeItem: () => Promise.resolve(null)
    } : y();
    P(t);
    return {
      getItem: async e => new Promise((n, i) => {
        var r;
        let o = (() => {
          let t = setTimeout(() => {
            i(Error(`getItem ${e} timeout, timeout after 10000ms`));
          }, 10000);
          return () => clearTimeout(t);
        })();
        if ((r = t.getItem(e)) !== null && r !== undefined) {
          r.then(n, i).finally(() => {
            o();
          });
        }
      }),
      setItem: async (n, i) => {
        let o = (e == null ? undefined : e(i)) ?? i;
        await t.setItem(n, o);
      },
      removeItem: async e => {
        await t.removeItem(e);
      }
    };
  }
  let x = e => {
    let {
      filterFn: t,
      storageFn: n,
      storeName: i
    } = e;
    storageUsageMonitor.logStorageEstimate(i ?? "createStorage");
    return b({
      storeName: i || "samantha-web",
      persistStorage: (n == null ? undefined : n()) || E(t)
    });
  };
  let T = e => {
    h();
    let {
      version: t,
      name: n,
      prefix: o,
      storage: a,
      merge: s,
      onRehydrateStorage: u,
      filterFn: c,
      ...d
    } = e;
    let m = loggerServiceCore.defaultLogger.createLoggerWith({
      ctx: {
        namespace: "persist",
        meta: {
          version: t ?? "unknown",
          name: n ?? "unknown",
          prefix: o ?? "unknown"
        }
      }
    });
    m.persist.info({
      eventName: "l1_storage_createPersistOptions",
      message: `[${n}] persist storage createPersistOptions`
    });
    return {
      name: `${o}-${e.name.replace("undefined", "deprecated")}`,
      storage: x({
        storeName: n,
        filterFn: c,
        storageFn: () => a
      }),
      version: t ?? 1,
      merge: s ?? function (e = "samantha-web-store") {
        return (t, n) => {
          try {
            let e = isNullishCheck.isNil(t) ? {} : t;
            return {
              ...deepCloneWrapper_1.deepClone(n),
              ...e
            };
          } catch (t) {
            if (t instanceof Error) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "l1_storage_getDefaultMerge_eror",
                message: `[${e}], persist merge error`,
                error: t
              });
            }
          }
          return n;
        };
      }(n || "samantha-web-store"),
      onRehydrateStorage: u ? e => {
        m.persist.info({
          eventName: "l1_storage_custom_onRehydrateStorage",
          message: `[${n}] persist storage hydration enter`
        });
        return u(e);
      } : e => {
        let t = `[${n}] persist storage hydration`;
        m.console.info({
          message: `${t} started`,
          meta: {
            state: e
          }
        });
        return (e, n) => {
          if (n) {
            m.persist.error({
              eventName: "l1_storage_onRehydrateStorage_error",
              message: `${t} error`,
              error: n instanceof Error ? n : Error(String(n))
            });
          } else {
            m.console.info({
              eventName: "l1_storage_onRehydrateStorage_finish",
              message: `${t} finished`,
              meta: {
                state: e
              }
            });
          }
        };
      },
      ...objectExcludeFilterUtil.filterObjectExclude(d, isUndefinedCheck.isUndefined)
    };
  };
  require.d(exports, {
    createPersistOptions: function () {
      return T;
    },
    createStorageAdapter: function () {
      return E;
    },
    setupPersistStorage: function () {
      return x;
    }
  });
}
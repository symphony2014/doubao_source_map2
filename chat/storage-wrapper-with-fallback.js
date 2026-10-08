// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ie' to 'SessionStorageWrapper'
// - Renamed export 'yQ' to 'LocalStorageWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 319763
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var storageUsageMonitor = require("storage-usage-monitor") /*id: 291897*/;
  function o(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let a = e => e.name === "QuotaExceededError";
  let l = () => typeof window == "undefined";
  function s(e) {
    try {
      if (l() || !e) {
        return false;
      }
      let t = "__test_storage_key";
      e.setItem(t, t);
      e.removeItem(t);
      storageUsageMonitor.logStorageUsage();
      return true;
    } catch (e) {
      return false;
    }
  }
  class u {
    getItem(e) {
      let {
        storage: r,
        storageMap: o
      } = this;
      if (s(r)) {
        return r.getItem(e) ?? o.get(e) ?? null;
      } else {
        return o.get(e) ?? null;
      }
    }
    setItem(e, t) {
      let {
        storage: n,
        storageMap: r
      } = this;
      try {
        if (s(n)) {
          n.setItem(e, t);
          return;
        }
        r.set(e, t);
      } catch (n) {
        if (a(n)) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "l1_storage_isQuotaExceededError",
            error: n,
            message: "Storage quota exceeded"
          });
          r.set(e, t);
        } else {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "l1_storage_setItemError",
            error: n
          });
        }
      }
    }
    removeItem(e) {
      let {
        storage: t,
        storageMap: n
      } = this;
      if (s(t)) {
        t.removeItem(e);
      }
      n.delete(e);
    }
    clear() {
      let {
        storage: e,
        storageMap: t
      } = this;
      if (s(e)) {
        e.clear();
      }
      t.clear();
    }
    constructor(e = false) {
      o(this, "storage", null);
      o(this, "storageMap", new Map());
      o(this, "isSessionStorage", false);
      this.isSessionStorage = e;
      this.storage = l() ? null : e ? sessionStorage : localStorage;
    }
  }
  let c = new u();
  let d = new u(true);
  require.d(exports, {
    SessionStorageWrapper: function () {
      return d;
    },
    LocalStorageWrapper: function () {
      return c;
    }
  });
}
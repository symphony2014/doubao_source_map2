// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'localforageAsyncStorage'
// - Resolved require(383061) to 'localforage-async-storage'
// - Renamed variable 's' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'n' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'h' to 'libStorageUtils'
// - Resolved require(421151) to 'lib-storage-utils'
// - Renamed variable 'l' to 'analyticsEventLogger'
// - Resolved require(618475) to 'analytics-event-logger'
// - Renamed variable 'u' to 'binaryDataSerializer'
// - Resolved require(677248) to 'binary-data-serializer'
// - Renamed variable 'g' to 'storageConstants'
// - Resolved require(340491) to 'storage-constants'
// - Resolved require.e(67957) to 'report-retry-number-utility'
// - Resolved require.bind(558845) to 'retry-reporter'
// - Renamed variable 'p' to 'storageConfigConstants'
// - Resolved require(837502) to 'storage-config-constants'
// - Updated imported property 'hu' to 'storageStatus' (module 340491)
// - Updated imported property 'aH' to 'logError' (module 618475)
// - Updated imported property 'Oi' to 'logInfo' (module 618475)
// - Updated imported property 'Z' to 'binarySerializer' (module 677248)
// - Updated imported property 'z' to 'isQuotaExceeded' (module 421151)
// - Updated imported property 'JB' to 'checkDeleteCache' (module 421151)
// - Updated imported property 'm6' to 'hasIndexedDbSupport' (module 421151)
// - Updated imported property 'jg' to 'isValidStorageKey' (module 421151)
// - Updated imported property 'Cq' to 'setLibStorage' (module 421151)
// - Updated imported property 'Lr' to 'checkRewriteStorage' (module 421151)
// - Updated imported property 'Oe' to 'deleteExpireInfo' (module 421151)
// - Updated imported property 'nG' to 'setExpireInfo' (module 421151)
// - Updated imported property 'zy' to 'storageIndexedDbKey' (module 837502)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-storage-expire.4560df7a.js
         * chunkId: 89760
         * moduleId: 702417
         */
module.exports = function (module, exports, require) {
  var localforageAsyncStorage = require("localforage-async-storage") /*id: 383061*/;
  var r = localforageAsyncStorage;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let c = {
    setItem: localStorage.constructor.prototype.setItem.bind(localStorage),
    getItem: localStorage.constructor.prototype.getItem.bind(localStorage)
  };
  let o = {
    setItem: sessionStorage.constructor.prototype.setItem.bind(sessionStorage),
    getItem: sessionStorage.constructor.prototype.getItem.bind(sessionStorage)
  };
  var libStorageUtils = require("lib-storage-utils") /*id: 421151*/;
  var analyticsEventLogger = require("analytics-event-logger") /*id: 618475*/;
  var binaryDataSerializer = require("binary-data-serializer") /*id: 677248*/;
  var storageConstants = require("storage-constants") /*id: 340491*/;
  class m {
    constructor(e, t, i) {
      this.retryWhenQuotaExceededSync = () => {
        try {
          I.clearWhenSet(this._cacheKey, this._cacheValue, true);
          this._businessRetryFn();
          return storageConstants.storageStatus.SUCCESS;
        } catch (e) {
          analyticsEventLogger.logError("Retry retryWhenQuotaExceededSync")(e);
          return storageConstants.storageStatus.FAIL;
        }
      };
      this.retryWhenQuotaExceededASync = async () => {
        try {
          await I.clearWhenSet(this._cacheKey, this._cacheValue);
          this._businessRetryFn();
          return storageConstants.storageStatus.SUCCESS;
        } catch (e) {
          analyticsEventLogger.logError("Retry retryWhenQuotaExceededASync")(e);
          return storageConstants.storageStatus.FAIL;
        }
      };
      this._error = e;
      this._businessRetryFn = t;
      this._cacheKey = i.key;
      this._cacheValue = this.getValueString(i.value);
    }
    getValueString(e) {
      let t = "";
      try {
        binaryDataSerializer.binarySerializer.serialize(e, (e, i) => {
          if (i) {
            throw i;
          }
          t = e;
        });
      } catch (e) {
        analyticsEventLogger.logError("Retry getValueString")(e);
      }
      return t;
    }
    retryWhenQuotaExceeded(e) {
      if (e) {
        return this.retryWhenQuotaExceededSync();
      } else {
        return this.retryWhenQuotaExceededASync();
      }
    }
    async reportStatus(e, t, i = false) {
      let a = Number(Date.now());
      let r = await e;
      if (!i) {
        a = Number(Date.now());
      }
      let s = r === storageConstants.storageStatus.SUCCESS ? "success" : "fail";
      let n = {
        time: a - t,
        string_param_1: this._cacheKey,
        string_param_2: i.toString(),
        number_param_1: this._cacheValue.length
      };
      analyticsEventLogger.logInfo("QuotaExceededError retry")(s, n);
    }
    async reportRetryNumber() {
      let {
        reportRetryNumber: e
      } = await require.e("report-retry-number-utility") /*id: 67957*/.then(require.bind(require, "retry-reporter") /*id: 558845*/);
      e.run();
    }
    run(e) {
      if (!libStorageUtils.isQuotaExceeded(this._error) || !libStorageUtils.checkDeleteCache() || !libStorageUtils.hasIndexedDbSupport() || !libStorageUtils.isValidStorageKey(this._cacheKey)) {
        return storageConstants.storageStatus.FAIL;
      }
      let t = Date.now();
      if (e) {
        let i = this.retryWhenQuotaExceeded(true);
        this.reportStatus(i, t, e);
        this.reportRetryNumber();
        return i;
      }
      {
        let i = this.retryWhenQuotaExceeded();
        this.reportStatus(i, t, e);
        this.reportRetryNumber();
        return i;
      }
    }
  }
  var storageConfigConstants = require("storage-config-constants") /*id: 837502*/;
  let d = r.createInstance({
    name: storageConfigConstants.storageIndexedDbKey
  });
  let S = "notice-cache-expire-info-update";
  let y = {
    expire: 604800000,
    whitelist: [S],
    blacklist: [],
    maxVisits: 100,
    lruNumber: 2,
    autoClearEnable: true
  };
  let f = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_cache_config.debounceTimeout") || {
    emitLocalStorageUpdate: {
      minWait: 10000,
      maxWait: 30000
    },
    handleLocalStorageUpdate: {
      minWait: 10000,
      maxWait: 30000
    },
    updateIndexDB: {
      minWait: 10000,
      maxWait: 30000
    }
  };
  let I = new class {
    constructor() {
      this.preRunClearUnuseCacheTime = 0;
      this.waittingUpdateMap = new Map();
      this.preClearUnuseCacheTime = 0;
      this.emitLocalStorage = debounceUtil_1_1.debounce(() => c.setItem(S, Number(new Date())), f.emitLocalStorageUpdate.minWait, {
        maxWait: f.emitLocalStorageUpdate.maxWait
      });
      this.hanldeStorageChange = debounceUtil_1_1.debounce(e => {
        if (e.key === S) {
          this.getAllExpireInfo();
        }
      }, f.handleLocalStorageUpdate.minWait, {
        maxWait: f.handleLocalStorageUpdate.maxWait
      });
      this.checkIsWhite = e => this.checkInList(e, this._config.whitelist);
      this.checkIsBlack = e => this.checkInList(e, this._config.blacklist);
      this.clearUnuseCacheSync = () => {
        let e = 0;
        if (this._expireInfo) {
          Object.entries(localStorage).forEach(([t, i]) => {
            let a = this.checkIsBlack(t);
            a ||= this.checkIsExpire(t);
            if (a) {
              let a = (t + i).length;
              e += a;
              this.remove(t);
            }
          });
        }
        return e;
      };
      this.clearUnuseCacheAsync = async () => {
        await this._getInfoTask;
        return this.clearUnuseCacheSync();
      };
      this.clearUnuseCacheWhenVisible = async () => {
        try {
          if (!this._config.autoClearEnable || Date.now() - this.preClearUnuseCacheTime < 600000) {
            return;
          }
          this.preClearUnuseCacheTime = Number(Date.now());
          await this._getInfoTask;
          await this.clearUnuseCache();
          Object.keys(this._expireInfo).forEach(e => {
            if (this.checkIsWhite(e)) {
              return;
            }
            let t = this.checkIsBlack(e);
            t ||= this.checkIsExpire(e);
            if (t) {
              this.remove(e);
            }
          });
        } catch (e) {}
      };
      this.clearWhenSetSync = (e, t) => {
        if (!this._expireInfo) {
          return;
        }
        let i = (e + t).length;
        if ((i -= this.clearUnuseCache(true)) > 0) {
          this.clearCacheByLRU2(i);
        }
      };
      this.clearWhenSetAsync = async (e, t) => {
        await this._getInfoTask;
        this.clearWhenSetSync(e, t);
      };
      try {
        let t = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_platform_cache_config");
        this._config = t || y;
        if (!window.libStorage?.getInfoTask) {
          libStorageUtils.setLibStorage("getInfoTask", this.getAllExpireInfo());
        }
        this.listenLocalStorage();
        (function (e) {
          var t;
          if (libStorageUtils.checkRewriteStorage() && ((t = window.libStorage) === null || t === undefined || !t.beenRewriteLocalStorage) && libStorageUtils.hasIndexedDbSupport()) {
            libStorageUtils.setLibStorage("beenRewriteLocalStorage", true);
            localStorage.constructor.prototype.setItem = function (t, i) {
              if (this === sessionStorage) {
                return o.setItem(t, i);
              }
              try {
                if (!libStorageUtils.isValidStorageKey(t)) {
                  return;
                }
                e(t);
                return c.setItem(t, i);
              } catch (e) {
                if (new m(e, () => c.setItem(t, i), {
                  key: t,
                  value: i
                }).run(true) === storageConstants.storageStatus.SUCCESS) {
                  return;
                }
                throw e;
              }
            };
            localStorage.constructor.prototype.getItem = function (t) {
              if (this === sessionStorage) {
                return o.getItem(t);
              } else {
                if (libStorageUtils.isValidStorageKey(t)) {
                  e(t, true);
                }
                return c.getItem(t);
              }
            };
          }
        })(this.update.bind(this));
      } catch (e) {
        analyticsEventLogger.logError("ExpireStorage constructor")(e);
      }
    }
    get _getInfoTask() {
      return window.libStorage?.getInfoTask;
    }
    get _expireInfo() {
      return window.libStorage?.expireInfo ?? {};
    }
    async getAllExpireInfo() {
      let e = {};
      await d.iterate((t, i) => {
        if (t) {
          e[i] = t;
        }
      });
      libStorageUtils.setLibStorage("expireInfo", e);
    }
    listenPageVisibleChange() {
      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.clearUnuseCacheWhenVisible();
        }
      });
    }
    listenLocalStorage() {
      window.addEventListener("storage", this.hanldeStorageChange);
    }
    checkInList(e, t) {
      try {
        return t.some(t => new RegExp(t).test(e));
      } catch (e) {
        analyticsEventLogger.logError("ExpireStorage checkInList")(e);
        return false;
      }
    }
    checkIsExpire(e) {
      let {
        lastTime: t
      } = this._expireInfo[e] || {};
      return typeof t == "number" && Number(new Date()) - this._config.expire > t;
    }
    clearCacheByLRU2(e) {
      let {
        sizeMap: t,
        LRUList1: i,
        LRUList2: a,
        notGetInfoList: r
      } = function (e, t) {
        let {
          checkIsWhite: i,
          cacheExpireInfo: a
        } = t;
        let r = {};
        let s = [];
        let n = [];
        let o = [];
        Object.keys(localStorage).forEach(t => {
          r[t] = (t + c.getItem(t))?.length;
          if (i(t)) {
            return;
          }
          let l = a[t];
          if (!l) {
            s.push(t);
            return;
          }
          if (l.visits < e) {
            n.push(t);
          } else {
            o.push(t);
          }
        });
        n.sort((e, t) => a[e].lastTime - a[t].lastTime);
        o.sort((e, t) => a[e].lastTime - a[t].lastTime);
        return {
          sizeMap: r,
          LRUList1: n,
          LRUList2: o,
          notGetInfoList: s
        };
      }(this._config.lruNumber, {
        checkIsWhite: this.checkIsWhite,
        cacheExpireInfo: this._expireInfo
      });
      [...i, ...r, ...a].every(i => {
        e -= t[i];
        this.remove(i);
        return e > 0;
      });
    }
    async remove(e) {
      analyticsEventLogger.logInfo("remove storage")(e);
      localStorage.removeItem(e);
      libStorageUtils.deleteExpireInfo(e);
      await d.removeItem(e);
      this.emitLocalStorage();
    }
    clearUnuseCache(e) {
      if (!libStorageUtils.checkDeleteCache() || Date.now() - this.preRunClearUnuseCacheTime < 600000) {
        return 0;
      } else {
        this.preRunClearUnuseCacheTime = Number(Date.now());
        if (e) {
          return this.clearUnuseCacheSync();
        } else {
          return this.clearUnuseCacheAsync();
        }
      }
    }
    async update(e, t = false) {
      try {
        if (this.checkIsWhite(e)) {
          return;
        }
        await this._getInfoTask;
        let a = this._expireInfo[e];
        let r = {
          lastTime: Number(new Date()),
          visits: (a == null ? undefined : a.visits) ?? 1
        };
        if (a && t && a.visits + 1 <= this._config.maxVisits) {
          r.visits = a.visits + 1;
        }
        libStorageUtils.setExpireInfo(e, r);
        this.runUpdateDBTask(e, r);
      } catch (e) {
        analyticsEventLogger.logError("ExpireStorage update")(e);
      }
    }
    async runUpdateDBTask(e, t) {
      let i = this.waittingUpdateMap.get(e);
      if (typeof i == "function") {
        return i(t);
      }
      let a = debounceUtil_1_1.debounce(async t => {
        this.waittingUpdateMap.delete(e);
        await d.setItem(e, t);
        this.emitLocalStorage();
      }, f.updateIndexDB.minWait, {
        maxWait: f.updateIndexDB.maxWait
      });
      a(t);
      this.waittingUpdateMap.set(e, a);
    }
    clearWhenSet(e, t, i) {
      if (libStorageUtils.checkDeleteCache()) {
        if (i) {
          this.clearWhenSetSync(e, t);
        } else {
          this.clearWhenSetAsync(e, t);
        }
      }
    }
  }();
  require.d(exports, {
    Retry: function () {
      return m;
    },
    expireStorage: function () {
      return I;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'LocalStorageCacheManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 128737
         */
module.exports = function (module, exports, require) {
  var localStorageOperations = require("local-storage-operations") /*id: 634020*/;
  function r(e, t, n) {
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
  class o {
    get replaceValues() {
      return false;
    }
    async onLoadKey(e, t) {}
    set(e) {
      let {
        key: t,
        value: n,
        datas: i
      } = e;
      if (typeof this.options.set == "function") {
        this.options.set({
          key: t,
          value: n,
          datas: i
        });
      }
    }
    async getCacheValues() {
      if (!this.options.storageCache) {
        return null;
      }
      try {
        let e = await localStorageOperations.storageGetItem(this.getCacheKey());
        if (!e) {
          return null;
        }
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    async updateCacheValues(e) {
      if (this.options.storageCache) {
        try {
          let t = await localStorageOperations.storageGetItem(this.getCacheKey());
          let n = JSON.stringify(e);
          if (n !== t) {
            await localStorageOperations.storageSetItem(this.getCacheKey(), n);
          }
        } catch (e) {}
      }
    }
    async updateCacheValue(e, t) {
      if (!this.options.storageCache) {
        return;
      }
      let n = (await this.getCacheValues()) || {};
      n[e] = t;
      try {
        await localStorageOperations.storageSetItem(this.getCacheKey(), JSON.stringify(n));
      } catch (e) {}
    }
    getCacheKey() {
      return `lib_fg__${this.name}`;
    }
    getLoadTimeout() {
      if (typeof this.options?.loadTimeout == "number") {
        return this.options.loadTimeout;
      } else {
        return 0;
      }
    }
    getOptions() {
      return this.options;
    }
    constructor(e, t) {
      r(this, "name", null);
      r(this, "options", undefined);
      this.name = e;
      this.options = {
        ...t
      };
    }
  }
  require.d(exports, {
    LocalStorageCacheManager: function () {
      return o;
    }
  });
}
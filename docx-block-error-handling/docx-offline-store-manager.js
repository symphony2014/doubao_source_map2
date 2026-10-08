// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'DocxOfflineManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 218533
         */
module.exports = function (module, exports, require) {
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  function a(e, n, o) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = o;
    }
    return e;
  }
  class u {
    noticeNativeSetData() {
      if (this.offlineStore) {
        this.offlineStore.setItem(this.key, this.resourceMap);
      }
    }
    setStoreData(e) {
      this.resourceMap = e;
    }
    addStoreData(e, n) {
      n.addTimestamp = Date.now();
      this.resourceMap[e] = n;
      this.tempCacheData[e] = n;
      this.noticeNativeSetData();
    }
    deleteStoreDataKey(e) {
      delete this.resourceMap[e];
      if (this.cacheData) {
        delete this.cacheData[e];
      }
      delete this.tempCacheData[e];
      this.noticeNativeSetData();
    }
    async getData() {
      if (!this.offlineStore) {
        return null;
      }
      let e = await this.offlineStore.getItem(this.key);
      if (e && Object.keys(e).length > 0) {
        this.setStoreData(e);
        return e;
      } else {
        return null;
      }
    }
    async getCacheData() {
      if (this.cacheData) {
        return this.cacheData;
      }
      this.pendingCache ||= this.getData();
      let e = (await this.pendingCache) || {};
      this.cacheData = deepCloneWrapper_1.deepClone(e);
      return this.cacheData;
    }
    constructor(e) {
      this.key = e;
      a(this, "resourceMap", {});
      a(this, "cacheData", null);
      a(this, "tempCacheData", {});
      a(this, "pendingCache", undefined);
      a(this, "offlineStore", undefined);
      let n = window.User.id;
      if (e.includes("IMAGE")) {
        this.offlineStore = docxOfflineService.offlineService.getDocxImageOfflineStore(n);
      } else if (e.includes("FILE")) {
        this.offlineStore = docxOfflineService.offlineService.getDocxFileOfflineStore(n);
      }
    }
  }
  class s {
    static getUniqueId(e, n) {
      let o = syncedReferenceBlockUtils.getSyncedReferenceBlockSrcId(n.editorAPI) || docTokenHelperUtils.resolveDocToken() || n.editorAPI.config.get("token");
      return `${e}_${o}`;
    }
    static getInstance(e, n) {
      let o = s.getUniqueId(e, n);
      s.resourceMap[o] ||= new u(o);
      return s.resourceMap[o];
    }
    static destroy(e, n) {
      let o = s.getUniqueId(e, n);
      if (s.resourceMap[o]) {
        delete s.resourceMap[o];
      }
    }
    getResourceMap() {}
  }
  a(s, "resourceMap", {});
  require.d(exports, {
    DocxOfflineManager: function () {
      return s;
    }
  });
}
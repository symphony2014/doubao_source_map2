// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cq' to 'setLibStorage'
// - Renamed export 'JB' to 'checkDeleteCache'
// - Renamed export 'Lr' to 'checkRewriteStorage'
// - Renamed export 'Oe' to 'deleteExpireInfo'
// - Renamed export 'jg' to 'isValidStorageKey'
// - Renamed export 'm6' to 'hasIndexedDbSupport'
// - Renamed export 'nG' to 'setExpireInfo'
// - Renamed export 'z' to 'isQuotaExceeded'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 421151
         */
module.exports = function (module, exports, require) {
  var localforageAsyncStorage = require("localforage-async-storage") /*id: 383061*/;
  var o = localforageAsyncStorage;
  var clientFeatureCheck = require("client-feature-check") /*id: 319225*/;
  var storageConfigConstants = require("storage-config-constants") /*id: 837502*/;
  let u = e => () => {
    return clientFeatureCheck.getClientFeature(e, (window == null ? undefined : window.User)?.nativeFeatures || (window == null ? undefined : window.User)?.fgConfig || null);
  };
  let c = u("ccm.platform.lib_storage_rewrite_local_storage_new");
  let f = u("ccm.platform.lib_storage_delete_cache");
  function s(e) {
    return !!e && e.name === "QuotaExceededError";
  }
  function l(e, t) {
    window.libStorage ||= {};
    window.libStorage[e] = t;
  }
  function d(e, t) {
    if (!window.libStorage?.expireInfo) {
      l("expireInfo", {});
    }
    if (window.libStorage?.expireInfo) {
      window.libStorage.expireInfo[e] = t;
    }
  }
  function h(e) {
    if ((window == null ? undefined : window.libStorage)?.expireInfo) {
      delete window.libStorage.expireInfo[e];
    }
  }
  function v() {
    return o.supports(o.INDEXEDDB);
  }
  function y(e) {
    return !e.includes(`${storageConfigConstants.storageIndexedDbKey}/`);
  }
  require.d(exports, {
    setLibStorage: function () {
      return l;
    },
    checkDeleteCache: function () {
      return f;
    },
    checkRewriteStorage: function () {
      return c;
    },
    deleteExpireInfo: function () {
      return h;
    },
    isValidStorageKey: function () {
      return y;
    },
    hasIndexedDbSupport: function () {
      return v;
    },
    setExpireInfo: function () {
      return d;
    },
    isQuotaExceeded: function () {
      return s;
    }
  });
}
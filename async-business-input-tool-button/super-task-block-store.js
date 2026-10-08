// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'loadBlockStoreState'
// - Renamed export 'u' to 'getBlockStoreConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 674993
         */
module.exports = function (module, exports, require) {
  let i;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = e => {
    try {
      return {
        blockDataMap: e.blockDataMap || {},
        blockDataMapMetaInfo: e.blockDataMapMetaInfo || {}
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@super-task-block-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let a = async () => {
    let {
      storage: e,
      name: t
    } = s();
    let n = await (e == null ? undefined : e.getItem(t));
    if (n == null) {
      return undefined;
    } else {
      return n.state;
    }
  };
  let s = () => {
    if (!i) {
      let e = storagePersistenceUtil.createStorageAdapter();
      i = storagePersistenceUtil.createPersistOptions({
        name: "super-task-block-store",
        prefix: "samantha-web",
        partialize: o,
        version: 1.5,
        storage: e
      });
    }
    return i;
  };
  require.d(exports, {
    loadBlockStoreState: function () {
      return a;
    },
    getBlockStoreConfig: function () {
      return s;
    }
  });
}
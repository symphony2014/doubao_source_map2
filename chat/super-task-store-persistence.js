// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'getPersistedState'
// - Renamed export 'u' to 'createPersistOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 971412
         */
module.exports = function (module, exports, require) {
  let i;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = e => {
    try {
      return {
        switchValueConvMap: e.switchValueConvMap || {},
        guidanceViewShown: e.guidanceViewShown || false
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@super-task-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let l = async () => {
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
      let t = e.setItem;
      e.setItem = async (e, n) => {
        let i = await l();
        Object.entries((i == null ? undefined : i.switchValueConvMap) || {}).forEach(e => {
          let [t, i] = e;
          n.state.switchValueConvMap = n.state.switchValueConvMap || {};
          let r = n.state.switchValueConvMap[t];
          if (r === undefined || typeof r == "object" && typeof i == "object" && r.lastUpdate && i.lastUpdate && r.lastUpdate < i.lastUpdate) {
            n.state.switchValueConvMap[t] = i;
          }
        });
        Object.entries(n.state.switchValueConvMap || {}).forEach(e => {
          let [t, i] = e;
          if (typeof i == "object" && i.markDelete) {
            var r;
            if ((r = n.state.switchValueConvMap) !== null && r !== undefined) {
              delete r[t];
            }
          }
        });
        t(e, n);
      };
      i = storagePersistenceUtil.createPersistOptions({
        name: "super-task-store",
        prefix: "samantha-web",
        partialize: a,
        version: 1.5,
        storage: e
      });
    }
    return i;
  };
  require.d(exports, {
    getPersistedState: function () {
      return l;
    },
    createPersistOptions: function () {
      return s;
    }
  });
}
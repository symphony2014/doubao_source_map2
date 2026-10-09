// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a8' to 'featureGateKeys'
// - Renamed export 'fC' to 'StorageFGParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 696334
         */
module.exports = function (module, exports, require) {
  var i;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var localStorageCacheManager = require("local-storage-cache-manager") /*id: 128737*/;
  var localStorageOperations = require("local-storage-operations") /*id: 634020*/;
  class l extends localStorageCacheManager.LocalStorageCacheManager {
    async load() {
      if (!this.options?.key) {
        throw Error("[StorageFGParser]: key is required");
      }
      let t = await localStorageOperations.storageGetItem(this.options.key);
      if (t) {
        return safeJsonUtils.safeParse(t, {});
      } else {
        return {};
      }
    }
    set(e) {
      let {
        key: t,
        value: n,
        datas: i
      } = e;
      if (typeof this.options.set == "function") {
        super.set({
          key: t,
          value: n,
          datas: i
        });
      } else {
        let e = {
          ...i,
          ...(t !== undefined ? {
            [t]: n
          } : {})
        };
        try {
          localStorageOperations.storageSetItem(this.options.key, safeJsonUtils.safeStringify(e));
        } catch (e) {}
      }
    }
    constructor(e, t) {
      super(e, {
        ...t
      });
    }
  }
  (i = {}).enableDebug = "enableDebug";
  i.forceRTL = "forceRTL";
  i.consoleFullMessagePacket = "consoleFullMessagePacket";
  i.consoleIncrementMessagePacket = "consoleIncrementMessagePacket";
  i.chunkWithJSON = "chunkWithJSON";
  i.consoleSocketPacket = "consoleSocketPacket";
  i.isLargeDevPanelSize = "isLargeDevPanelSize";
  i.reduxDevToolsSnapshot = "reduxDevToolsSnapshot";
  i.showI18NKey = "showI18NKey";
  i.newGuidanceType = "newGuidanceType";
  i.newGuestGuidanceType = "newGuestGuidanceType";
  i.newChatInput = "newChatInput";
  i.enableSamanthaProtocolStage = "enableSamanthaProtocolStage";
  i.forceDarkMode = "forceDarkMode";
  let s = i;
  require.d(exports, {
    featureGateKeys: function () {
      return s;
    },
    StorageFGParser: function () {
      return l;
    }
  });
}
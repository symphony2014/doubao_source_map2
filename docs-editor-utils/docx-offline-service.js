// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'offlineService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 170752
         */
module.exports = function (module, exports, require) {
  let o = {
    getAllKeys: () => Promise.resolve([]),
    getItem: () => Promise.resolve({}),
    getItems: () => Promise.resolve([]),
    setItem: () => Promise.resolve(),
    deleteItem: () => Promise.resolve(),
    clear: () => Promise.resolve()
  };
  let i = function () {
    return o;
  };
  let l = {
    getLogger: () => ({
      info: function () {
        var e = arguments.length;
        var n = Array(e);
        var r = 0;
        for (; r < e; r++) {
          n[r] = arguments[r];
        }
        return {};
      },
      warn: function () {
        var e = arguments.length;
        var n = Array(e);
        var r = 0;
        for (; r < e; r++) {
          n[r] = arguments[r];
        }
        return {};
      },
      error: function () {
        var e = arguments.length;
        var n = Array(e);
        var r = 0;
        for (; r < e; r++) {
          n[r] = arguments[r];
        }
        return {};
      },
      log: function () {
        var e = arguments.length;
        var n = Array(e);
        var r = 0;
        for (; r < e; r++) {
          n[r] = arguments[r];
        }
        return {};
      }
    }),
    getOfflineTeaStore: i,
    getCreateStatusStore: i,
    getDocxClientVarsOfflineStore: i,
    getDocxClientVarsOpOfflineStore: i,
    getDocXCreateBasicStore: i,
    getDocxOperationOfflineStore: i,
    getNeedSyncOfflineStore: i,
    getOfflineActiveListStore: i,
    getPermissionOfflineStore: i,
    getWorkspaceListOfflineStore: i,
    isOfflineEnabled: false,
    getDocxImageOfflineStore: i,
    getDocxFileOfflineStore: i,
    getFileDownloadStatus: i,
    getFileBlockCacheDataStore: i
  };
  require.d(exports, {
    offlineService: function () {
      return l;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'getSuperTaskStore'
// - Renamed export 'I' to 'superTaskStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 790964
         */
module.exports = function (module, exports, require) {
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  let l = () => ({
    blockDataMap: {},
    blockDataMapMetaInfo: {}
  });
  var superTaskBlockStore = require("super-task-block-store") /*id: 674993*/;
  let o = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("super-task-block-store"),
    createSlice: () => ({
      ...l()
    }),
    getPersistStorageOptions: superTaskBlockStore.getBlockStoreConfig
  });
  let a = function () {
    return o;
  };
  require.d(exports, {
    getSuperTaskStore: function () {
      return a;
    },
    superTaskStore: function () {
      return o;
    }
  });
}
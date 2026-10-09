// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l8' to 'blockMapStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 334702
         */
module.exports = function (module, exports, require) {
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  let a = {
    blockMap: {}
  };
  let o = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("crowd-test-store"),
    createSlice: e => ({
      ...a,
      updateBlockState: (t, n) => e(immerProduceCore.produce(e => {
        e.blockMap[t] = {
          ...e.blockMap[t],
          ...n
        };
      }))
    })
  });
  require.d(exports, {
    blockMapStore: function () {
      return o;
    }
  });
}
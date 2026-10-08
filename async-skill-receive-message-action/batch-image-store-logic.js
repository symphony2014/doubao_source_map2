// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'dT' to 'defaultState'
// - Renamed export 'S0' to 'imageStore'
// - Renamed export 'F5' to 'createImageLogic'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 73795
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let l = {
    batchDownloadSelected: false,
    isAllSelectChecked: false,
    selectedImageUrlWithMessageList: []
  };
  let r = (e, t) => ({
    ...l,
    onUpdateBatchDownloadSelected: t => {
      e(immerCoreImplementation.produce(e => {
        e.batchDownloadSelected = t;
      }));
    },
    onUpdateAllSelectChecked: t => {
      e(immerCoreImplementation.produce(e => {
        e.isAllSelectChecked = t;
      }));
    },
    toggleImageUrl: (n, i) => {
      let o = t().selectedImageUrlWithMessageList;
      e({
        selectedImageUrlWithMessageList: o.map(e => e.url).includes(n) ? o.filter(e => e.url !== n) : [...o, {
          url: n,
          message: i
        }]
      });
    },
    clearSelectedImageUrl: () => {
      e(immerCoreImplementation.produce(e => {
        e.selectedImageUrlWithMessageList = [];
      }));
    },
    checkAllImage: t => {
      e(immerCoreImplementation.produce(e => {
        e.selectedImageUrlWithMessageList = t;
      }));
    }
  });
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(r));
  require.d(exports, {
    defaultState: function () {
      return l;
    },
    imageStore: function () {
      return s;
    },
    createImageLogic: function () {
      return r;
    }
  });
}
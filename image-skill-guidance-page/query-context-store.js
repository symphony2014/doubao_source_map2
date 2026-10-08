// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qX' to 'queryContextStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 988837
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let l = {
    queryContext: null,
    regeneratingCount: 0
  };
  let r = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...l,
    onUpdateQueryContext: t => {
      e(immerCoreImplementation.produce(e => {
        e.queryContext = t;
      }));
    },
    onResetQueryContext: () => {
      e(immerCoreImplementation.produce(e => {
        e.queryContext = null;
      }));
    },
    onUpdateRegeneratingCount: t => {
      e(immerCoreImplementation.produce(e => {
        e.regeneratingCount = t;
      }));
    }
  })));
  require.d(exports, {
    queryContextStore: function () {
      return r;
    }
  });
}
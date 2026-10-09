// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'aispaceInputStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 718092
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var aispaceMockConstants = require("aispace-mock-constants") /*id: 5652*/;
  var nodeTreeStateManager = require("node-tree-state-manager") /*id: 654652*/;
  let s = {
    ...nodeTreeStateManager.defaultNodeState,
    rootId: aispaceMockConstants.mockInputRootId
  };
  let l = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t, n) => ({
    ...nodeTreeStateManager.createStateUpdater(e, t, n),
    ...s
  })));
  require.d(exports, {
    aispaceInputStore: function () {
      return l;
    }
  });
}
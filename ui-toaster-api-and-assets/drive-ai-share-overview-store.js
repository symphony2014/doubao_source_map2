// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'shareOverviewStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 262375
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var nodeTreeStateManager = require("node-tree-state-manager") /*id: 654652*/;
  var driveAiSpaceConstants = require("drive-ai-space-constants") /*id: 34124*/;
  let l = {
    ...nodeTreeStateManager.defaultNodeState,
    rootId: driveAiSpaceConstants.mockAiSpaceShareRootId,
    shareId: null,
    overviewInitializeStatus: "loading",
    shareBrief: {}
  };
  let c = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, i, t) => ({
    ...nodeTreeStateManager.createStateUpdater(e, i, t),
    ...l,
    updateShareId: i => {
      e(() => ({
        shareId: i
      }));
    },
    setOverviewInitializeStatus: i => {
      e(immerCoreImplementation.produce(e => {
        e.overviewInitializeStatus = i;
      }));
    },
    setShareBrief: i => {
      e(immerCoreImplementation.produce(e => {
        e.shareBrief = i;
      }));
    }
  })));
  require.d(exports, {
    shareOverviewStore: function () {
      return c;
    }
  });
}
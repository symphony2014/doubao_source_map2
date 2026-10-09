// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'workspaceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 760931
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let a = {
    initWorkspaceStatus: "uninit",
    workspaceList: undefined,
    workspaceInvitationList: undefined,
    currentWorkspace: undefined,
    hiddenInvitations: undefined,
    visibleInvitations: undefined,
    hasInitInvitationNotice: false
  };
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...a,
    setInitWorkspaceStatus: t => {
      e(immerCoreImplementation.produce(e => {
        e.initWorkspaceStatus = t;
      }));
    },
    setWorkspaceList: t => {
      e(immerCoreImplementation.produce(e => {
        e.workspaceList = t;
      }));
    },
    setWorkspaceInvitationList: t => {
      e(immerCoreImplementation.produce(e => {
        e.workspaceInvitationList = t;
      }));
    },
    setCurrentWorkspace: t => {
      e(immerCoreImplementation.produce(e => {
        e.currentWorkspace = t;
      }));
    },
    setInvitations: t => {
      let {
        hiddenInvitations: n,
        visibleInvitations: r
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.hiddenInvitations = n;
        e.visibleInvitations = r;
      }));
    },
    setHasInitInvitationNotice: t => {
      e(immerCoreImplementation.produce(e => {
        e.hasInitInvitationNotice = t;
      }));
    }
  })));
  require.d(exports, {
    workspaceStore: function () {
      return s;
    }
  });
}
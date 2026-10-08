// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GI' to 'FlowCollab'
// - Renamed export 'GM' to 'FlowCollabLogger'
// - Renamed export 'kq' to 'ChangeSource'
// - Renamed export 'u' to 'SyncState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 14778
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  require.d(exports, {
    FlowCollab: function () {
      return collaborativeEditingFlowSyncModule.CollabMode;
    },
    FlowCollabLogger: function () {
      return collaborativeEditingFlowSyncModule.GM;
    },
    ChangeSource: function () {
      return collaborativeEditingFlowSyncModule.kq;
    },
    SyncState: function () {
      return collaborativeEditingFlowSyncModule.SyncStatus;
    }
  });
}
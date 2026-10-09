// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'selectConnected'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 788516
         */
module.exports = function (module, exports, require) {
  let o = require("create-selector") /*id: 228436*/.createSelector(e => e.appState.networkState, e => e.connected);
  require.d(exports, {
    selectConnected: function () {
      return o;
    }
  });
}
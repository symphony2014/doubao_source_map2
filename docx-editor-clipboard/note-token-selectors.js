// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Wz' to 'selectNoteType'
// - Renamed export 'qO' to 'selectObjToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 151174
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  let l = e => e.appState.currentNoteToken;
  let o = createSelector.createSelector(l, e => e ? e.get("obj_token") : "");
  let s = createSelector.createSelector(l, e => e ? e.get("type") : null);
  require.d(exports, {
    selectNoteType: function () {
      return s;
    },
    selectObjToken: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CF' to 'foldSetState'
// - Renamed export 'CT' to 'foldStatusPostView'
// - Renamed export 'qr' to 'foldStatusChangeView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 275668
         */
module.exports = function (module, exports, require) {
  let o = "fold_set_state";
  let l = "fold_status_change_view_display";
  let r = "post_fold_status_change_view_display";
  require.d(exports, {
    foldSetState: function () {
      return o;
    },
    foldStatusPostView: function () {
      return r;
    },
    foldStatusChangeView: function () {
      return l;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'docCoverSelector'
// - Renamed export 'z' to 'coverActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 870484
         */
module.exports = function (module, exports, require) {
  let o = {
    SET_COVER_DATA: "set_cover_data",
    UPDATE_COVER_POSITION: "update_cover_position",
    REMOVE_ALL_SELECTION: "remove_all_selection",
    OPENDOC_COVER_RESIZE: "opendoc_cover_resize"
  };
  let i = ".doc-cover-wrapper";
  require.d(exports, {
    docCoverSelector: function () {
      return i;
    },
    coverActionTypes: function () {
      return o;
    }
  });
}
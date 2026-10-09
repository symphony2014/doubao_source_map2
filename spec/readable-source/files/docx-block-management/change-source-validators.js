// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S9' to 'isPasteSource'
// - Renamed export 'W3' to 'isUndoRedoSource'
// - Renamed export 'WM' to 'isOfflineSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 568290
         */
module.exports = function (module, exports, require) {
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  function l(e) {
    return !!e && e.source === changeSourceConstants.changeSourceConstants.UNDO_REDO;
  }
  function r(e) {
    return !!e && e.source === changeSourceConstants.changeSourceConstants.PASTE;
  }
  function a(e) {
    return !!e && e.source === changeSourceConstants.changeSourceConstants.OFFLINE;
  }
  require.d(exports, {
    isPasteSource: function () {
      return r;
    },
    isUndoRedoSource: function () {
      return l;
    },
    isOfflineSource: function () {
      return a;
    }
  });
}
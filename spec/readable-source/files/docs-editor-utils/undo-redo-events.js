// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ur' to 'undoRedoEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 266127
         */
module.exports = function (module, exports, require) {
  var undoRedoConstants = require("undo-redo-constants") /*id: 181487*/;
  require.d(exports, {
    undoRedoEvents: function () {
      return undoRedoConstants.UndoRedoEvents;
    }
  });
}
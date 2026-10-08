// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M1' to 'UndoRedoActions'
// - Renamed export 'ur' to 'UndoRedoEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 181487
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).undo = "UNDO";
  o.redo = "REDO";
  let l = o;
  (i = {}).BEFORE_UNDO_REDO = "BEFORE_UNDO_REDO";
  i.AFTER_UNDO_REDO = "AFTER_UNDO_REDO";
  i.UNDO = "undo";
  i.REDO = "redo";
  let c = i;
  require.d(exports, {
    UndoRedoActions: function () {
      return l;
    },
    UndoRedoEvents: function () {
      return c;
    }
  });
}
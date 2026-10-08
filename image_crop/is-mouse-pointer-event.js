// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'isMousePointerEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: resizable-draggable-btn.afecdf2f.js
         * chunkId: 43606
         * moduleId: 985083
         */
module.exports = function (module, exports, require) {
  function o(e) {
    return e.type.startsWith("mouse") || e.type.startsWith("pointer");
  }
  require.d(exports, {
    isMousePointerEvent: function () {
      return o;
    }
  });
}
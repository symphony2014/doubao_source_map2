// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BP' to 'whiteboardPortal'
// - Renamed export 'MZ' to 'whiteboardContainer'
// - Renamed export 'Mt' to 'whiteboardBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 657196
         */
module.exports = function (module, exports, require) {
  let o = ".whiteboard-container";
  let i = ".whiteboard-block_container";
  let l = ".whiteboard-protal-container";
  require.d(exports, {
    whiteboardPortal: function () {
      return l;
    },
    whiteboardContainer: function () {
      return o;
    },
    whiteboardBlock: function () {
      return i;
    }
  });
}
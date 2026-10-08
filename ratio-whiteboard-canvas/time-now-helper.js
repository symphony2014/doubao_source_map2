// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'timeNow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 758529
         */
module.exports = function (module, exports, require) {
  var n = {
    now: function () {
      return (n.delegate || Date).now();
    },
    delegate: undefined
  };
  require.d(exports, {
    timeNow: function () {
      return n;
    }
  });
}
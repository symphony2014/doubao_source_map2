// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'PlayStateMap'
// - Renamed export 'p' to 'playStateNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 820236
         */
module.exports = function (module, exports, require) {
  var r = {
    INITIAL: 1,
    READY: 2,
    ATTACHING: 3,
    ATTACHED: 4,
    NOTALLOW: 5,
    RUNNING: 6,
    ENDED: 7,
    DESTROYED: 8
  };
  var o = ["ERROR", "INITIAL", "READY", "ATTACHING", "ATTACHED", "NOTALLOW", "RUNNING", "ENDED", "DESTROYED"];
  require.d(exports, {
    PlayStateMap: function () {
      return r;
    },
    playStateNames: function () {
      return o;
    }
  });
}
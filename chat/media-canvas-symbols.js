// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'mediaAudioCanvas'
// - Renamed export 'a' to 'mediaVideoCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 659793
         */
module.exports = function (module, exports, require) {
  let i = Symbol("media-video-canvas");
  let r = Symbol("media-audio-canvas");
  require.d(exports, {
    mediaAudioCanvas: function () {
      return r;
    },
    mediaVideoCanvas: function () {
      return i;
    }
  });
}
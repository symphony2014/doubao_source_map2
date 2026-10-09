// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bc' to 'avMetrics'
// - Renamed export 'Vc' to 'trackTypes'
// - Renamed export '_e' to 'videoCodecs'
// - Renamed export 'yQ' to 'audioCodecs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 87395
         */
module.exports = function (module, exports, require) {
  var r = {
    VIDEO: "video",
    AUDIO: "audio",
    METADATA: "metadata"
  };
  var i = {
    AVC: "avc",
    HEVC: "hevc"
  };
  var o = {
    AAC: "aac",
    G711PCMA: "g7110a",
    G711PCMU: "g7110m"
  };
  var a = {
    LARGE_AV_SHIFT: "LARGE_AV_SHIFT",
    LARGE_VIDEO_GAP: "LARGE_VIDEO_GAP",
    LARGE_VIDEO_GAP_BETWEEN_CHUNK: "LARGE_VIDEO_GAP_BETWEEN_CHUNK",
    LARGE_AUDIO_GAP: "LARGE_AUDIO_GAP",
    AUDIO_FILLED: "AUDIO_FILLED",
    AUDIO_DROPPED: "AUDIO_DROPPED"
  };
  require.d(exports, {
    avMetrics: function () {
      return a;
    },
    trackTypes: function () {
      return r;
    },
    videoCodecs: function () {
      return i;
    },
    audioCodecs: function () {
      return o;
    }
  });
}
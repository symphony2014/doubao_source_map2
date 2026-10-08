// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lo' to 'streamingStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: html-renderer.e7a0387b.js
         * chunkId: 19906
         * moduleId: 377455
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.NoStreaming = 0] = "NoStreaming";
  n[n.Streaming = 1] = "Streaming";
  n[n.StreamingEnd = 2] = "StreamingEnd";
  let i = n;
  require.d(exports, {
    streamingStates: function () {
      return i;
    }
  });
}
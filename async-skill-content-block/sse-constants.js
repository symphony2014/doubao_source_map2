// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'lastEventId'
// - Renamed export 'a' to 'eventStreamMimeType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 259486
         */
module.exports = function (module, exports, require) {
  let i = "last-event-id";
  let o = "text/event-stream";
  require.d(exports, {
    lastEventId: function () {
      return i;
    },
    eventStreamMimeType: function () {
      return o;
    }
  });
}
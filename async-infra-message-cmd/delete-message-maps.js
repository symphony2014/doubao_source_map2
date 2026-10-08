// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'deleteMessageMaps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47840.01121ae4.js
         * chunkId: 47840
         * moduleId: 574149
         */
module.exports = function (module, exports, require) {
  function i(e, t) {
    if (e.messageMap[t]) {
      delete e.messageMap[t];
    }
    if (e.localMessageMap[t]) {
      delete e.localMessageMap[t];
    }
    if (e.messageLinkMap[t]) {
      delete e.messageLinkMap[t];
    }
    if (e.messageListStatusMap[t]) {
      delete e.messageListStatusMap[t];
    }
  }
  require.d(exports, {
    deleteMessageMaps: function () {
      return i;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChatStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 680777
         */
module.exports = function (module, exports, require) {
  var i = {
    INIT: "init",
    LOADING: "loading",
    RECORDING: "recording",
    PAUSED: "paused",
    DESTROYED: "destroyed"
  };
  require.d(exports, {
    ChatStatus: function () {
      return i;
    }
  });
}
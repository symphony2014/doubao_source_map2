// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'chatInputWriteSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 336112
         */
module.exports = function (module, exports, require) {
  let i = Symbol("send-write-input-content");
  require.d(exports, {
    chatInputWriteSymbol: function () {
      return i;
    }
  });
}
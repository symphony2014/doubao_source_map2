// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'threadReceiveSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 247534
         */
module.exports = function (module, exports, require) {
  let i = Symbol("receive-message-action:thread-collection");
  require.d(exports, {
    threadReceiveSymbol: function () {
      return i;
    }
  });
}
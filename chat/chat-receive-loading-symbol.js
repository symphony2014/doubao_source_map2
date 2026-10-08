// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'receiveLoadingSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 345208
         */
module.exports = function (module, exports, require) {
  let i = Symbol("receive-loading-block-content");
  require.d(exports, {
    receiveLoadingSymbol: function () {
      return i;
    }
  });
}
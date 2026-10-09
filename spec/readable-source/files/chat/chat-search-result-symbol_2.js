// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'searchResultSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 15246
         */
module.exports = function (module, exports, require) {
  let i = Symbol("receive-search-result-content");
  require.d(exports, {
    searchResultSymbol: function () {
      return i;
    }
  });
}